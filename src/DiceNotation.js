'use strict';

export class DiceNotation {
  #set = [];
  #setkeys = new Map();
  #setid = 0;
  #groups = [];
  #totalDice = 0;
  #op = '';
  #constant = null;
  #result = [];
  #error = false;
  #boost = 1;
  #notation = '';
  #vectors = [];

  constructor(notation) {
    if (typeof notation === 'object') {
      notation = notation.notation;
    }

    if (!notation || notation === '0') {
      this.#error = true;
      return;
    }

    this.parseNotation(notation);
  }

  get error() {
    return this.#error;
  }

  get notation() {
    return this.#notation;
  }

  get result() {
    return this.#result;
  }

  get boost() {
    return this.#boost;
  }

  get set() {
    return this.#set;
  }

  get constant() {
    return this.#constant;
  }

  get op() {
    return this.#op;
  }

  get vectors() {
    return this.#vectors;
  }

  parseNotation(notation) {
    if (!notation) return;

    const rageCount = (notation.match(/!/g) || []).length;
    if (rageCount > 0) {
      this.#boost = Math.min(Math.max(rageCount, 0), 3) * 4;
      notation = notation.replace(/!/g, '');
    }

    notation = notation.replace(/\s+/g, '');

    const groupStarts = (notation.match(/\(/g) || []).length;
    const groupEnds = (notation.match(/\)/g) || []).length;

    if (groupStarts !== groupEnds) {
      this.#error = true;
      return;
    }

    const initialOp = this.#notation.length > 0 ? '+' : '';
    this.#notation = this.#notation + initialOp + notation;

    let [notationString, forcedResults] = notation.split('@');

    const rollRegex =
      /(\+|\-|\*|\/|\%|\^|){0,1}()(\d*)([a-z]+\d+|[a-z]+|)(?:\{([a-z]+)(.*?|)\}|)()/i;
    const resultsRegex = /(\b)*(\-\d+|\d+)(\b)*/gi;

    let runs = 0;
    const BREAK_LIMIT = 30;
    let groupLevel = 0;
    let groupID = 0;

    while (!this.#error && notationString.length > 0 && runs < BREAK_LIMIT) {
      const match = rollRegex.exec(notationString);
      if (!match) break;

      runs++;

      let [
        fullMatch,
        operator,
        groupStart,
        amount,
        type,
        funcname = '',
        funcargs = '',
        groupEnd,
      ] = match;
      notationString = notationString.substring(fullMatch.length);

      const hasGroupStart = groupStart && groupStart.length > 0;
      const hasGroupEnd = groupEnd && groupEnd.length > 0;
      let addSet = true;

      if (hasGroupStart) {
        groupLevel += groupStart.length;
      }

      const parsedFuncArgs = funcargs.split(',').slice(1);

      // Handle single operator and constant case
      if (
        runs === 1 &&
        notationString.length === 0 &&
        !type &&
        operator &&
        amount
      ) {
        this.#op = operator;
        this.#constant = parseInt(amount, 10);
        this.addSet(
          1,
          'd20',
          groupID,
          groupLevel,
          funcname,
          parsedFuncArgs,
          operator
        );
      }
      // Handle ending operator + constant case
      else if (runs > 1 && notationString.length === 0 && !type) {
        this.#op = operator;
        this.#constant = parseInt(amount, 10);
        addSet = false;
      }
      // Normal case
      else if (addSet) {
        this.addSet(
          amount,
          type,
          groupID,
          groupLevel,
          funcname,
          parsedFuncArgs,
          operator
        );
      }

      if (hasGroupEnd) {
        groupLevel -= groupEnd.length;
        groupID += groupEnd.length;
      }
    }

    // Handle forced results
    if (!this.#error && forcedResults) {
      const results = forcedResults.match(resultsRegex);
      if (results) {
        this.#result = [...results];
      }
    }
  }

  stringify(full = true) {
    if (this.#set.length === 0) return '';

    const output = this.#set.reduce((acc, set, index) => {
      const operator = index > 0 && set.op ? set.op : '';
      const funcString = set.func
        ? `{${set.func}${
          set.args
            ? ',' + (Array.isArray(set.args) ? set.args.join(',') : set.args)
            : ''
        }}`
        : '';
      return `${acc}${operator}${set.num}${set.type}${funcString}`;
    }, '');

    const constantString = this.#constant
      ? `${this.#op}${Math.abs(this.#constant)}`
      : '';
    const resultString =
      full && this.#result.length > 0 ? `@${this.#result.join(',')}` : '';
    const boostString = this.#boost > 1 ? '!'.repeat(this.#boost / 4) : '';

    return `${output}${constantString}${resultString}${boostString}`;
  }

  addSet(
    amount,
    type,
    groupID = 0,
    groupLevel = 0,
    funcname = '',
    funcargs = '',
    operator = '+'
  ) {
    amount = Math.abs(parseInt(amount || 1, 10));
    if (amount === 0) return;

    const setKey = `${operator}${type}${groupID}${groupLevel}${funcname}${funcargs}`;
    const existingSetIndex = this.#setkeys.get(setKey);

    if (existingSetIndex !== undefined) {
      const existingSet = this.#set[existingSetIndex];
      existingSet.num += amount;
    } else {
      const newSet = {
        num: amount,
        type,
        sid: this.#setid,
        gid: groupID,
        glvl: groupLevel,
        ...(funcname && { func: funcname }),
        ...(funcargs && { args: funcargs }),
        ...(operator && { op: operator }),
      };

      this.#setkeys.set(setKey, this.#set.length);
      this.#set.push(newSet);
      this.#setid++;
    }
  }

  static mergeNotation(prevNotation, newNotation) {
    return {
      ...prevNotation,
      constant: (prevNotation.constant ?? 0) + (newNotation.constant ?? 0),
      notation: `${prevNotation.notation}+${newNotation.notation}`,
      set: [...prevNotation.set, ...newNotation.set],
      vectors: [
        ...(prevNotation.vectors || []),
        ...(newNotation.vectors || []),
      ],
    };
  }
}

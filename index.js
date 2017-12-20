const parser = /^([\d]+)\.([\d]+)\.([\d]+)(.*)$/;

/**
 * Represents a comparator for comparisons between concrete semantic versions
 * (i.e. compare `1.2.3` and `3.4.5`, but NOT `^1.2.3` NOR `~3.4.5`).
 */
class ConVer {
  /**
   * Returns an array representing the [major, min, patch, build] for the given `ver`
   * @param   {String} ver Concrete version number
   * @returns {Array}  All components of the parsed version if they exist.
   */
  parse(ver) {
    // We cannot parse non-string values.
    if (typeof ver !== 'string') { return null; }

    // The string does not conform to semver (i.e. X.Y.Z).
    const parts = parser.exec(ver);
    if (!parts) { return null; }

    let [, major, minor, patch, build] = parts;
    if (build) {
      build = build.slice(1);
    }

    return [major, minor, patch]
      .map(num => parseInt(num, 10))
      .concat(build || '');
  }

  /**
   * Returns true if `v1 == v2` in semver. Since they are both
   * concrete semver strings their equality will be lexographic.
   * @param   {String} v1 Concrete version number.
   * @param   {String} v2 Concrete version number.
   * @returns {Boolean} Value indicating equality result.
   */
  eq(v1, v2) {
    return v1 === v2;
  }

  /**
   * Return 0 if `v1 == v2`, or 1 if `v1` is greater, or -1 if `v2` is greater.
   * @param   {String} v1 Concrete version number.
   * @param   {String} v2 Concrete version number.
   * @returns {Number} 0, -1, or -1 for equal, gt, and lt respectively.
   */
  compare(v1, v2) {
    // Attempt to parse both sides of the comparison.
    const lval = this.parse(v1);
    const rval = this.parse(v2);

    // Then throw if either of the inputs are illegal.
    if (lval === null || rval === null) {
      throw new Error(`Inputs contains illegal semver`);
    }

    if (this.eq(v1, v2)) { return 0; }

    for (let i = 0; i < 4; i++) {
      const lnum = lval.shift();
      const rnum = rval.shift();
      if (lnum > rnum) { return 1; }
      if (lnum < rnum) { return -1; }
    }
  }

  /**
   * Returns true if `v1` is LESS than `v2` in semver.
   * @param   {String} v1 Concrete version number.
   * @param   {String} v2 Concrete version number.
   * @returns {Boolean} Value indicating less than comparison result.
   */
  lt(v1, v2) {
    return this.compare(v1, v2) === -1;
  }

  /**
   * Returns true if `v1` is GREATER than `v2` in semver.
   * @param   {String} v1 Concrete version number.
   * @param   {String} v2 Concrete version number.
   * @returns {Boolean} Value indicating greater than comparison result.
   */
  gt(v1, v2) {
    return this.compare(v1, v2) === 1;
  }
}

//
// Export a single instance of our class for
// fast V8 inlining.
//
const conver = module.exports = new ConVer();
conver.ConVer = ConVer;

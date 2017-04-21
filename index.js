const parser = /^([\d]+)\.([\d]+)\.([\d]+)(.*)$/;

class ConVer {
  parse(ver) {
    let [, major, minor, patch, build] = parser.exec(ver);
    if (build) {
      build = build.slice(1);
    }

    return [major, minor, patch, build].filter(Boolean);
  }

  /**
   * Returns true if `lver` is EQUAL to `rver` in semver. Since they are both
   * concrete semver strings their equality will be lexographic.
   * @param   {String}  lver Concrete version number
   * @param   {String}  rver Concrete version number
   * @returns {Boolean} Value indicating equality result.
   */
  eq(lver, rver) {
    return lver === rver;
  }

  /**
   * Returns true if `lver` is LESS than `rver` in semver.
   * @param   {String}  lver Concrete version number
   * @param   {String}  rver Concrete version number
   * @returns {Boolean} Value indicating less than comparison result.
   */
  lt(lver, rver) {
    if (this.eq(lver, rver)) { return false; }

    const lval = this.parse(lver);
    const rval = this.parse(rver);
    for (let i = 0; i < 3; i++) {
      const lnum = lval.shift();
      const rnum = rval.shift();
      if (lnum > rnum) { return false; }
    }

    if (lval.length && !rval.length) {
      return false;
    } else if (lval.length && rval.length) {
      const lbuild = lval.shift();
      const rbuild = rval.shift();
      return lbuild < rbuild;
    }

    return true;
  }

  /**
   * Returns true if `lver` is GREATER than `rver` in semver.
   * @param   {String}  lver Concrete version number
   * @param   {String}  rver Concrete version number
   * @returns {Boolean} Value indicating greater than comparison result.
   */
  gt(lver, rver) {
    if (this.eq(lver, rver)) { return false; }

    const lval = this.parse(lver);
    const rval = this.parse(rver);
    for (let i = 0; i < 3; i++) {
      const lnum = lval.shift();
      const rnum = rval.shift();
      if (lnum < rnum) { return false; }
    }

    if (!lval.length && rval.length) {
      return false;
    } else if (lval.length && rval.length) {
      const lbuild = lval.shift();
      const rbuild = rval.shift();
      return lbuild > rbuild;
    }

    return true;
  }
}

//
// Export a single instance of our class for
// fast V8 inlining.
//
const conver = module.exports = new ConVer();
conver.ConVer = ConVer;

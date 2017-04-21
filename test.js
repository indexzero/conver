const assume = require('assume');
const conver = require('./');

describe('Concrete Versions', function () {
  describe('eq', function () {
    it(`eq('1.2.3', '9.8.0') => false`, function () {
      assume(conver.eq('1.2.3', '9.8.0')).false();
    });

    it(`eq('1.2.3', '1.2.3') => true`, function () {
      assume(conver.eq('1.2.3', '1.2.3')).true();
    });
  });

  describe('gt', function () {
    it(`gt('1.2.3', '9.8.0') => false`, function () {
      assume(conver.gt('1.2.3', '9.8.0')).false();
    });

    it(`gt('3.4.5', '1.2.3') => true`, function () {
      assume(conver.gt('3.4.5', '1.2.3')).true();
    });

    it(`gt('1.2.3-1', '1.2.3') => true`, function () {
      assume(conver.gt('1.2.3-1', '1.2.3')).true();
    });

    it(`gt('1.2.3', '1.2.3-5') => false`, function () {
      assume(conver.gt('1.2.3', '1.2.3-5')).false();
    });

    it(`gt('1.2.3-5', '1.2.3-1') => true`, function () {
      assume(conver.gt('1.2.3-5', '1.2.3-1')).true();
    });

    it(`gt('1.2.3', '1.2.3') => false`, function () {
      assume(conver.gt('1.2.3', '1.2.3')).false();
    });
  });

  describe('lt', function () {
    it(`lt('9.8.0', '1.2.3') => false`, function () {
      assume(conver.lt('9.8.0', '1.2.3')).false();
    });

    it(`lt('1.2.3', '3.4.5') => true`, function () {
      assume(conver.lt('1.2.3', '3.4.5')).true();
    });

    it(`lt('1.2.3', '1.2.3-1') => true`, function () {
      assume(conver.lt('1.2.3', '1.2.3-1')).true();
    });

    it(`lt('1.2.3-5', '1.2.3') => false`, function () {
      assume(conver.lt('1.2.3-5', '1.2.3')).false();
    });

    it(`lt('1.2.3-1', '1.2.3-5') => true`, function () {
      assume(conver.lt('1.2.3-1', '1.2.3-5')).true();
    });

    it(`lt('1.2.3', '1.2.3') => false`, function () {
      assume(conver.lt('1.2.3', '1.2.3')).false();
    });
  });
});

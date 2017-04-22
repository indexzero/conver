const assume = require('assume');
const conver = require('./');

describe('Concrete Versions', function () {
  describe('parse', function () {
    it(`'1.2.3' => [1, 2, 3, '']`, function () {
      assume(conver.parse('1.2.3')).deep.equals([1, 2, 3, '']);
    });

    it(`'1.2.3-4' => [1, 2, 3, '4']`, function () {
      assume(conver.parse('1.2.3-4')).deep.equals([1, 2, 3, '4']);
    });

    it(`'1.2.3-alpha' => [1, 2, 3, 'alpha']`, function () {
      assume(conver.parse('1.2.3-alpha')).deep.equals([1, 2, 3, 'alpha']);
    });

    it(`'20.9.500' => [20, 9, 500, '']`, function () {
      assume(conver.parse('20.9.500')).deep.equals([20, 9, 500, '']);
    });
  })

  describe('eq', function () {
    it(`eq('1.2.3', '9.8.0') => false`, function () {
      assume(conver.eq('1.2.3', '9.8.0')).false();
    });

    it(`eq('1.2.3', '1.2.3') => true`, function () {
      assume(conver.eq('1.2.3', '1.2.3')).true();
    });
  });

  describe('gt', function () {
    it(`gt('1.10.3', '1.2.0') => true`, function () {
      assume(conver.gt('1.10.3', '1.2.0')).true();
    });

    it(`gt('1.2.0', '1.10.3') => false`, function () {
      assume(conver.gt('1.2.0', '1.10.3')).false();
    });

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
    it(`lt('1.10.3', '1.2.0') => false`, function () {
      assume(conver.lt('1.10.3', '1.2.0')).false();
    });

    it(`lt('1.2.0', '1.10.3') => true`, function () {
      assume(conver.lt('1.2.0', '1.10.3')).true();
    });

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

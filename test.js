'use strict';

require('should');

var Version = require('./version-master');

describe('Version(x).equals(x)', function () {
    it('1 is equal to 1', function (done) {
        Version("1").equals("1").should.be.true();
        done();
    });

    it('2.2 is equal to 2.2', function (done) {
        Version("2.2").equals("2.2").should.be.true();
        done();
    });

    it('3.3.3 is equal to 3.3.3', function (done) {
        Version("3.3.3").equals("3.3.3").should.be.true();
        done();
    });

    it('4.4.4.4 is equal to 4.4.4.4', function (done) {
        Version("4.4.4.4").equals("4.4.4.4").should.be.true();
        done();
    });

    it('5.5.5.5 RC5 is equal to 5.5.5.5 RC5', function (done) {
        Version("5.5.5.5 RC5").equals("5.5.5.5 RC5").should.be.true();
        done();
    });
});

describe('Version(y).equals(x)', function () {
    it('1 isn\'t equal to 0', function (done) {
        Version("1").equals("0").should.be.false();
        done();
    });

    it('2.2 isn\'t equal to 1.1', function (done) {
        Version("2.2").equals("1.1").should.be.false();
        done();
    });

    it('3.3.3 isn\'t equal to 2.2.2', function (done) {
        Version("3.3.3").equals("2.2.2").should.be.false();
        done();
    });

    it('4.4.4.4 isn\'t equal to 3.3.3.3', function (done) {
        Version("4.4.4.4").equals("3.3.3.3").should.be.false();
        done();
    });

    it('5.5.5.5 RC5 isn\'t equal to 4.4.4.4 RC4', function (done) {
        Version("5.5.5.5 RC5").equals("4.4.4.4 RC4").should.be.false();
        done();
    });
});

describe('Version(y).equals(z)', function () {
    it('1 isn\'t equal to 0', function (done) {
        Version("1").equals("2").should.be.false();
        done();
    });

    it('2.2 isn\'t equal to 3.3', function (done) {
        Version("2.2").equals("3.3").should.be.false();
        done();
    });

    it('3.3.3 isn\'t equal to 4.4.4', function (done) {
        Version("3.3.3").equals("4.4.4").should.be.false();
        done();
    });

    it('4.4.4.4 isn\'t equal to 5.5.5.5', function (done) {
        Version("4.4.4.4").equals("5.5.5.5").should.be.false();
        done();
    });

    it('5.5.5.5 RC5 isn\'t equal to 6.6.6.6 RC6', function (done) {
        Version("5.5.5.5 RC5").equals("6.6.6.6 RC6").should.be.false();
        done();
    });
});

describe('Version(x).isGreaterThan(x)', function () {
    it('2 isn\'t greater than 2', function (done) {
        Version("2").isGreaterThan("2").should.be.false();
        done();
    });

    it('2.2 isn\'t greater than 2.2', function (done) {
        Version("2.2").isGreaterThan("2.2").should.be.false();
        done();
    });

    it('2.2.2 isn\'t greater than 2.2.2', function (done) {
        Version("2.2.2").isGreaterThan("2.2.2").should.be.false();
        done();
    });

    it('2.2.2.2 isn\'t greater than 2.2.2.2', function (done) {
        Version("2.2.2.2").isGreaterThan("2.2.2.2").should.be.false();
        done();
    });

    it('2.2.2.2 RC2 isn\'t greater than 2.2.2.2 RC2', function (done) {
        Version("2.2.2.2 RC2").isGreaterThan("2.2.2.2 RC2").should.be.false();
        done();
    });
});

describe('Version(y).isGreaterThan(x)', function () {
    it('2 is greater than 1', function (done) {
        Version("2").isGreaterThan("1").should.be.true();
        done();
    });

    it('2.2 is greater than 1.1', function (done) {
        Version("2.2").isGreaterThan("1.1").should.be.true();
        done();
    });

    it('2.2.2 is greater than 1.1.1', function (done) {
        Version("2.2.2").isGreaterThan("1.1.1").should.be.true();
        done();
    });

    it('2.2.2.2 is greater than 1.1.1.1', function (done) {
        Version("2.2.2.2").isGreaterThan("1.1.1.1").should.be.true();
        done();
    });

    it('2.2.2.2 RC2 is greater than 1.1.1.1 RC1', function (done) {
        Version("2.2.2.2 RC2").isGreaterThan("1.1.1.1 RC1").should.be.true();
        done();
    });
});

describe('Version(x).isGreaterThan(y)', function () {
    it('2 is greater than 3', function (done) {
        Version("2").isGreaterThan("3").should.be.false();
        done();
    });

    it('2.2 is greater than 3.3', function (done) {
        Version("2.2").isGreaterThan("3.3").should.be.false();
        done();
    });

    it('2.2.2 is greater than 3.3.3', function (done) {
        Version("2.2.2").isGreaterThan("3.3.3").should.be.false();
        done();
    });

    it('2.2.2.2 is greater than 3.3.3.3', function (done) {
        Version("2.2.2.2").isGreaterThan("3.3.3.3").should.be.false();
        done();
    });

    it('2.2.2.2 RC2 is greater than 3.3.3.3 RC3', function (done) {
        Version("2.2.2.2 RC2").isGreaterThan("3.3.3.3 RC3").should.be.false();
        done();
    });
});

describe('Version(x).isSmallerThan(x)', function () {
    it('1 is smaller than 1', function (done) {
        Version("1").isSmallerThan("1").should.be.false();
        done();
    });

    it('2.2 is smaller than 2.2', function (done) {
        Version("2.2").isSmallerThan("2.2").should.be.false();
        done();
    });

    it('3.3.3 is smaller than 3.3.3', function (done) {
        Version("3.3.3").isSmallerThan("3.3.3").should.be.false();
        done();
    });

    it('4.4.4.4 is smaller than 4.4.4.4', function (done) {
        Version("4.4.4.4").isSmallerThan("4.4.4.4").should.be.false();
        done();
    });

    it('5.5.5.5 RC5 is smaller than 5.5.5.5 RC5', function (done) {
        Version("5.5.5.5 RC5").isSmallerThan("5.5.5.5 RC5").should.be.false();
        done();
    });
});

describe('Version(x).isSmallerThan(y)', function () {
    it('1 is smaller than 2', function (done) {
        Version("1").isSmallerThan("2").should.be.true();
        done();
    });

    it('2.2 is smaller than 3.3', function (done) {
        Version("2.2").isSmallerThan("3.3").should.be.true();
        done();
    });

    it('3.3.3 is smaller than 4.4.4', function (done) {
        Version("3.3.3").isSmallerThan("4.4.4").should.be.true();
        done();
    });

    it('4.4.4.4 is smaller than 5.5.5.5', function (done) {
        Version("4.4.4.4").isSmallerThan("5.5.5.5").should.be.true();
        done();
    });

    it('5.5.5.5 RC5 is smaller than 6.6.6.6 RC6', function (done) {
        Version("5.5.5.5 RC5").isSmallerThan("6.6.6.6 RC6").should.be.true();
        done();
    });
});

describe('Version(y).isSmallerThan(x)', function () {
    it('3 is smaller than 2', function (done) {
        Version("3").isSmallerThan("2").should.be.false();
        done();
    });

    it('4.4 is smaller than 3.3', function (done) {
        Version("4.4").isSmallerThan("3.3").should.be.false();
        done();
    });

    it('5.5.5 is smaller than 4.4.4', function (done) {
        Version("5.5.5").isSmallerThan("4.4.4").should.be.false();
        done();
    });

    it('6.6.6.6 is smaller than 5.5.5.5', function (done) {
        Version("6.6.6.6").isSmallerThan("5.5.5.5").should.be.false();
        done();
    });

    it('7.7.7.7 RC7 is smaller than 6.6.6.6 RC6', function (done) {
        Version("7.7.7.7 RC7").isSmallerThan("6.6.6.6 RC6").should.be.false();
        done();
    });
});

describe('Version(x).toJSON()', function () {
    it('1 should be parsed to JSON', function (done) {
        var version = Version("1").toJSON();

        version.major.should.be.exactly(1).and.be.a.Number();

        done();
    });

    it('1.2 should be parsed to JSON', function (done) {
        var version = Version("1.2").toJSON();

        version.major.should.be.exactly(1).and.be.a.Number();
        version.minor.should.be.exactly(2).and.be.a.Number();

        done();
    });

    it('1.2.3 should be parsed to JSON', function (done) {
        var version = Version("1.2.3").toJSON();

        version.major.should.be.exactly(1).and.be.a.Number();
        version.minor.should.be.exactly(2).and.be.a.Number();
        version.build.should.be.exactly(3).and.be.a.Number();

        done();
    });

    it('1.2.3.4 should be parsed to JSON', function (done) {
        var version = Version("1.2.3.4").toJSON();

        version.major.should.be.exactly(1).and.be.a.Number();
        version.minor.should.be.exactly(2).and.be.a.Number();
        version.maintenance.should.be.exactly(3).and.be.a.Number();
        version.build.should.be.exactly(4).and.be.a.Number();

        done();
    });

    it('1.2.3.4 RC5 should be parsed to JSON', function (done) {
        var version = Version("1.2.3.4 RC5").toJSON();

        version.major.should.be.exactly(1).and.be.a.Number();
        version.minor.should.be.exactly(2).and.be.a.Number();
        version.maintenance.should.be.exactly(3).and.be.a.Number();
        version.build.should.be.exactly(4).and.be.a.Number();
        version.tag.should.be.exactly("RC5").and.be.a.String();

        done();
    });
});

describe('Version(x).comparedTo(y)', function () {
    it('1 compared to 2 should be smaller', function (done) {
        var comp = Version("1").comparedTo("2");
        (comp).should.be.exactly(Version.IS_SMALLER);
        done();
    });

    it('1.0 compared to 2.0 should be smaller', function (done) {
        var comp = Version("1.0").comparedTo("2.0");
        (comp).should.be.exactly(Version.IS_SMALLER);
        done();
    });

    it('1.0.0 compared to 2.0.0 should be smaller', function (done) {
        var comp = Version("1.0.0").comparedTo("2.0.0");
        (comp).should.be.exactly(Version.IS_SMALLER);
        done();
    });

    it('1.0.0.0 compared to 2.0.0.0 should be smaller', function (done) {
        var comp = Version("1.0.0.0").comparedTo("2.0.0.0");
        (comp).should.be.exactly(Version.IS_SMALLER);
        done();
    });

    it('1.0.0.0 RC1 compared to 2.0.0.0 RC1 should be smaller', function (done) {
        var comp = Version("1.0.0.0 RC1").comparedTo("2.0.0.0 RC1");
        (comp).should.be.exactly(Version.IS_SMALLER);
        done();
    });
});

describe('Version(y).comparedTo(x)', function () {
    it('3 compared to 2 should be greater', function (done) {
        var comp = Version("3").comparedTo("2");
        (comp).should.be.exactly(Version.IS_GREATER);
        done();
    });

    it('3.0 compared to 2.0 should be greater', function (done) {
        var comp = Version("3.0").comparedTo("2.0");
        (comp).should.be.exactly(Version.IS_GREATER);
        done();
    });

    it('3.0.0 compared to 2.0.0 should be greater', function (done) {
        var comp = Version("3.0.0").comparedTo("2.0.0");
        (comp).should.be.exactly(Version.IS_GREATER);
        done();
    });

    it('3.0.0.0 compared to 2.0.0.0 should be greater', function (done) {
        var comp = Version("3.0.0.0").comparedTo("2.0.0.0");
        (comp).should.be.exactly(Version.IS_GREATER);
        done();
    });

    it('3.0.0.0 RC1 compared to 2.0.0.0 RC1 should be greater', function (done) {
        var comp = Version("3.0.0.0 RC1").comparedTo("2.0.0.0 RC1");
        (comp).should.be.exactly(Version.IS_GREATER);
        done();
    });
});

describe('Version(x).comparedTo(x)', function () {
    it('2 compared to 2 should be equal', function (done) {
        var comp = Version("2").comparedTo("2");
        (comp).should.be.exactly(Version.IS_EQUAL);
        done();
    });

    it('2.0 compared to 2.0 should be equal', function (done) {
        var comp = Version("2.0").comparedTo("2.0");
        (comp).should.be.exactly(Version.IS_EQUAL);
        done();
    });

    it('2.0.0 compared to 2.0.0 should be equal', function (done) {
        var comp = Version("2.0.0").comparedTo("2.0.0");
        (comp).should.be.exactly(Version.IS_EQUAL);
        done();
    });

    it('2.0.0.0 compared to 2.0.0.0 should be equal', function (done) {
        var comp = Version("2.0.0.0").comparedTo("2.0.0.0");
        (comp).should.be.exactly(Version.IS_EQUAL);
        done();
    });

    it('2.0.0.0 RC1 compared to 2.0.0.0 RC1 should be equal', function (done) {
        var comp = Version("2.0.0.0 RC1").comparedTo("2.0.0.0 RC1");
        (comp).should.be.exactly(Version.IS_EQUAL);
        done();
    });
});
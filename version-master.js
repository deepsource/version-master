/**
 * Copyright (C) 2015 Sebastian Ullrich under the terms of the MIT
 * license found at http://github.com/deepsource/version-master/raw/master/LICENSE
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var _ = require('lodash');

var isGreater = -1;
var isSmaller = 1;
var isEqual = 0;

var Version = function (version) {

    var defaultJSON = {
        major: 0,
        minor: 0,
        maintenance: 0,
        build: 0,
        tag: ""
    };

    var toJSON = function (version) {
        var matches = version.match(/[0-9]{1,}|[a-zA-Z\-\:]{1,}\s?[0-9]*/g);

        var vJSON = {};

        if (matches) {
            var mLen = matches.length;
            var tag;

            if (isNaN(matches[mLen-1])) {
                tag = matches.pop();
                mLen--;
            }

            switch (mLen) {
                case 4:
                    vJSON.major = parseInt(matches[0]);
                    vJSON.minor = parseInt(matches[1]);
                    vJSON.maintenance = parseInt(matches[2]);
                    vJSON.build = parseInt(matches[3]);
                    break;
                case 3:
                    vJSON.major = parseInt(matches[0]);
                    vJSON.minor = parseInt(matches[1]);
                    vJSON.build = parseInt(matches[2]);
                    break;
                case 2:
                    vJSON.major = parseInt(matches[0]);
                    vJSON.minor = parseInt(matches[1]);
                    break;
                case 1:
                    vJSON.major = parseInt(matches[0]);
                    break;
            }

            if (tag) {
                vJSON.tag = tag;
            }
        }

        return vJSON;
    };

    var equals = function (version1, version2) {
        version1 = _.defaults(toJSON(version1), defaultJSON);
        version2 = _.defaults(toJSON(version2), defaultJSON);

        var major = version1.major == version2.major;
        var minor = version1.minor == version2.minor;
        var maintenance = version1.maintenance == version2.maintenance;
        var build = version1.build == version2.build;
        var tag = version1.tag == version2.tag;

        return major && minor && maintenance && build && tag;
    };

    var isGreaterThan = function (version1, version2) {
        if (equals(version1, version2)) {
            return false;
        }

        version1 = _.defaults(toJSON(version1), defaultJSON);
        version2 = _.defaults(toJSON(version2), defaultJSON);

        if (version1.major < version2.major) {
            return false;
        } else if (version1.minor < version2.minor) {
            return false;
        } else if (version1.maintenance < version2.maintenance) {
            return false;
        } else if (version1.build < version2.build) {
            return false;
        } else if (version1.tag !== version2.tag) {
            return true;
        } else {
            return true;
        }
    };

    var isSmallerThan = function (version1, version2) {
        if (equals(version1, version2)) {
            return false;
        }

        version1 = _.defaults(toJSON(version1), defaultJSON);
        version2 = _.defaults(toJSON(version2), defaultJSON);

        if (version1.major < version2.major) {
            return true;
        } else if (version1.minor < version2.minor) {
            return true;
        } else if (version1.maintenance < version2.maintenance) {
            return true;
        } else if (version1.build < version2.build) {
            return true;
        } else if (version1.tag !== version2.tag) {
            return false;
        } else {
            return false;
        }
    };

    var comparedTo = function (version1, version2) {
        if (equals(version1, version2)) {
            return isEqual;
        } else if (isSmallerThan(version1, version2)) {
            return isSmaller;
        } else if (isGreaterThan(version1, version2)) {
            return isGreater;
        }
    };

    return {
        comparedTo: _.bind(comparedTo, this, version),
        isGreaterThan: _.bind(isGreaterThan, this, version),
        isSmallerThan: _.bind(isSmallerThan, this, version),
        equals: _.bind(equals, this, version),
        toJSON: _.bind(toJSON, this, version)
    }
};

Version.IS_GREATER = isGreater;
Version.IS_SMALLER = isSmaller;
Version.IS_EQUAL = isEqual;

module.exports = Version;
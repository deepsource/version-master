# version-master


[![deepsource crafted](http://cdn.deepsource.de/svg/deepsource-crafted.svg)](http://deepsource.de)
[![Build Status](https://travis-ci.org/deepsource/version-master.svg?branch=master)](https://travis-ci.org/deepsource/version-master)

version-master lets you analyze and compare versions.

## Analyzing versions
```javascript
var Version = require('version-master');

var version1 = Version("1.0.0");

console.log(version1.major); // will be 1
console.log(version1.minor); // will be 0
console.log(version1.build); // will be 0

var version2 = Version("1.2.3.4");

console.log(version2.major); // will be 1
console.log(version2.minor); // will be 2
console.log(version2.maintenance); // will be 3
console.log(version2.build); // will be 4

var version3 = Version("1.2.3.4 RC5");

console.log(version3.major); // will be 1
console.log(version3.minor); // will be 2
console.log(version3.maintenance); // will be 3
console.log(version3.build); // will be 4
console.log(version3.tag); // will be "RC5"
```

## Compare versions
```javascript
var Version = require('version-master');

console.log(Version("1.0.0").isGreaterThan("1.0.0")); // will be 'false'
console.log(Version("1.1.1").isGreaterThan("1.0.0")); // will be 'true'

console.log(Version("1.0.0").isSmallerThan("1.0.0")); // will be 'false'
console.log(Version("1.0.0").isSmallerThan("3.3.3")); // will be 'true'

console.log(Version("1.0.0").equals("1.0.0")); // will be 'true'
console.log(Version("1.0.0").equals("3.3.3")); // will be 'false'

console.log(Version("1.0.0").equals("1.0.0")); // will be 'true'
console.log(Version("1.0.0").equals("3.3.3")); // will be 'false'

console.log(Version("1.0.0").comparedTo("1.0.0")); // will be 'Version.IS_EQUAL'
console.log(Version("1.0.0").comparedTo("1.1.1")); // will be 'Version.IS_SMALLER'
console.log(Version("1.1.1").comparedTo("1.0.0")); // will be 'Version.IS_GREATER'
```

## License

Copyright (C) 2015 Sebastian Ullrich under the terms of the MIT
license found at http://github.com/deepsource/version-master/raw/master/LICENSE

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
# version-master

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

MIT &copy; 2015 Sebastian Ullrich
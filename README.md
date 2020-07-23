<!-- omit in toc -->
# sub-arrays-js

Generates sub arrays from array

<!-- omit in toc -->
# Table of Contents
- [Status](#status)
- [Installation](#installation)
- [Usage](#usage)
- [Options](#options)
  - [License](#license)

# Status

[![npm](https://img.shields.io/npm/v/sub-arrays-js)](https://www.npmjs.com/package/sub-arrays-js)
[![npm](https://img.shields.io/npm/l/sub-arrays-js)](#license)

# Installation

- Add with [yarn](https://yarnpkg.com/): `yarn add sub-arrays-js`
- Add with [npm](https://www.npmjs.com/): `npm install sub-arrays-js`

# Usage

```js
import { subArrays } from "sub-arrays-js";

function run() {
  const src = [1,2,3,4];
  const sub = subArrays(src, true, 1, src.length);
  console.log(sub);
}
```

```
[[1], [2], [3], [4], [1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4], [1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4], [1, 2, 3, 4]]
```

# Options
```
subArrays(source, <ordered>, <minLength>, <maxLength>): any[][]
```

- `source(any[])` - Source Array
- `ordered(boolean)` - Order sub arrays by length (default: false)
- `minLength(number)` - Minimum sub array length (default: 1)
- `maxLength(number)` - Maximum sub array length (default: source.length)


## License

![NPM](https://img.shields.io/npm/l/sub-arrays-js)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
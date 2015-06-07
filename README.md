# node-promise-es6
[![Build Status](https://travis-ci.org/vinsonchuong/node-promise-es6.svg?branch=master)](https://travis-ci.org/vinsonchuong/node-promise-es6)

ES6 promise adapters for the [Node.js API](https://nodejs.org/api/) for use
with [ES7 async/await](https://github.com/lukehoban/ecmascript-asyncawait).

## Installing
`node-promise-es6` is available as an
[npm package](https://www.npmjs.com/package/node-promise-es6).

## Bundled Libraries

### fs
```js
import fs from 'node-promise-es6/fs';

async function run() {
  return await fs.readdir('.');
}
```

Provides [fs-promise](https://www.npmjs.com/package/fs-promise) with
[fs-extra](https://www.npmjs.com/package/fs-extra).

## Development
### Getting Started
The application requires the following external dependencies:
* Node.js

The rest of the dependencies are handled through:
```bash
npm install
```

Run tests with:
```bash
npm test
```

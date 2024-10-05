# cfm.js
An CFM parser implementation with TypeScript.
[Try it out!](https://runkit.com/npm/cfm.js)

[![Test](https://github.com/kokonect-link/cfm.js/actions/workflows/test.yml/badge.svg)](https://github.com/kokonect-link/cfm.js/actions/workflows/test.yml)
[![codecov](https://codecov.io/gh/kokonect-link/cfm.js/branch/develop/graph/badge.svg?token=irAWFiHK8T)](https://codecov.io/gh/kokonect-link/cfm.js)

[![NPM](https://nodei.co/npm/cfm.js.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/cfm.js)

## Installation
```
npm i cfm-js
```

## Usage
Please see [docs](./docs/index.md) for the detail.

TypeScript:
```ts
import * as cfm from 'cfm-js';

const inputText =
`<center>
Hello $[tada everynyan! 🎉]

I'm @ai, A bot of misskey!

https://github.com/syuilo/ai
</center>`;

// Generate a CFM tree from the full CFM text.
const mfmTree = mfm.parse(inputText);

// Generate a CFM tree from the simple CFM text.
const simpleMfmTree = mfm.parseSimple('I like the hot soup :soup:​');

// Reverse to a CFM text from the CFM tree.
const text = mfm.toString(mfmTree);

```

## Develop
### 1. Clone
```
git clone https://github.com/kokonect-link/cfm.js.git
```

### 2. Install packages
```
cd cfm.js
npm i
```

### 3. Build
```
npm run build
```

### Use the interactive CLI parser
full parser:
```
npm run parse
```

simple parser:
```
npm run parse-simple
```

## License
This software is released under the [MIT License](LICENSE).

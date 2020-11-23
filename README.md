# next-regex-index-of
> JavaScript's String.indexOf() that allows for regular expressions.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-regex-index-of
```

## usage
```js
import '@jswork/next-regex-index-of';

const str = `What's this? 这是什么？`;
const res = nx.regexIndexOf(str, /[\u4e00-\u9fa5]/);    // 13
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-regex-index-of/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-regex-index-of
[version-url]: https://npmjs.org/package/@jswork/next-regex-index-of

[license-image]: https://img.shields.io/npm/l/@jswork/next-regex-index-of
[license-url]: https://github.com/afeiship/next-regex-index-of/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-regex-index-of
[size-url]: https://github.com/afeiship/next-regex-index-of/blob/master/dist/next-regex-index-of.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-regex-index-of
[download-url]: https://www.npmjs.com/package/@jswork/next-regex-index-of

# build-output-script-grs

> Builds a P2PKH Groestlcoin transaction output script

Builds a P2PKH Groestlcoin transaction output script from an array of P2PKH addresses and amounts. Will also work with any Groestlcoin derived cryptocurrencies with a single byte pubkey hash address prefix.

The output script is returned as a hex string and can be passed directly in to ledgerjs.

## Install

```shell
npm install build-output-script-grs
```

## Usage

Send 1 GRS to `FWN1qdiRrymSR6jbpbanLYqZpjkEaZouHN`

```js
const buildOutputScript = require('build-output-script-grs');

const bos = buildOutputScript([{address: 'FWN1qdiRrymSR6jbpbanLYqZpjkEaZouHN', value: 100000000}]);

console.log(bos)
// '0100e1f505000000001976a9140d1b3823fd9e54aefec638c91cce4175c515dc2e88ac'
```

Send 1 GRS to `FWN1qdiRrymSR6jbpbanLYqZpjkEaZouHN` and 1 GRS to `Fo5Xvgc58JMsMXsfwEY8TvjxX2x4Tdm5jf`

```js
const bos = buildOutputScript([
  {address: 'FWN1qdiRrymSR6jbpbanLYqZpjkEaZouHN', value: 100000000},
  {address: 'Fo5Xvgc58JMsMXsfwEY8TvjxX2x4Tdm5jf', value: 100000000}
]);
console.log(bos)
// '0200e1f505000000001976a9140d1b3823fd9e54aefec638c91cce4175c515dc2e88ac00e1f505000000001976a914c47766d537ffc10c550a55e6dfe649363b07748688ac'
```

## API

### buildOutputScript(outputs)

Returns a (hex string) P2PKH transaction output script.

#### outputs

Type: `Array(output[, output])`

An array of one or more output objects.

##### output.address

Type: `String`

A valid P2PKH address.

##### output.value

Type: `Number`

Value to send to `address` in gro.

## License

MIT © Luke Childs

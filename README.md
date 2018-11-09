# build-output-script

> Builds a P2PKH Bitcoin transaction output script

[![Build Status](https://travis-ci.com/lukechilds/build-output-script.svg?branch=master)](https://travis-ci.com/lukechilds/build-output-script)
[![Coverage Status](https://coveralls.io/repos/github/lukechilds/build-output-script/badge.svg?branch=master)](https://coveralls.io/github/lukechilds/build-output-script?branch=master)
[![npm](https://img.shields.io/npm/v/build-output-script.svg)](https://www.npmjs.com/package/build-output-script)

Builds a P2PKH Bitcoin transaction output script from an array of P2PKH addresses and amounts. Will also work with any Bitcoin derived cryptocurrencies with a single byte pubkey hash address prefix.

The output script is returned as a hex string and can be passed directly in to ledgerjs.

## Install

```shell
npm install build-output-script
```

## Usage

Send 1 BTC to `1LukeQU5jwebXbMLDVydeH4vFSobRV9rkj`

```js
buildOutputScript([{address: '1LukeQU5jwebXbMLDVydeH4vFSobRV9rkj', value: 100000000}]);
// '0100e1f505000000001976a914da6473ed373e08f46dd8003fca7ba72fbe9c555e88ac'
```

Send 1 BTC to `1LukeQU5jwebXbMLDVydeH4vFSobRV9rkj` and 1 BTC to `1BitcoinEaterAddressDontSendf59kuE`

```js
buildOutputScript([
  {address: '1LukeQU5jwebXbMLDVydeH4vFSobRV9rkj', value: 100000000},
  {address: '1BitcoinEaterAddressDontSendf59kuE', value: 100000000}
]);
// '0200e1f505000000001976a914da6473ed373e08f46dd8003fca7ba72fbe9c555e88ac00e1f505000000001976a914759d6677091e973b9e9d99f19c68fbf43e3f05f988ac'
```

Send 1 LTC to `Lf8hucmupbtenQ3VPdxvvJ8gTfAsaon2gf`

```js
buildOutputScript([{address: 'Lf8hucmupbtenQ3VPdxvvJ8gTfAsaon2gf', value: 100000000}]);
// '0100e1f505000000001976a914da6473ed373e08f46dd8003fca7ba72fbe9c555e88ac'
```

## API

### buildOutputScript(Array<[address, value]>)

Returns a (hex string) P2PKH transaction output script.

#### address

Type: `string`

A valid P2PKH address.

#### value

Type: `number`

Value to send to `address` in satoshis.

## License

MIT © Luke Childs

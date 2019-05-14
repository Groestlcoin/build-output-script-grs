import test from 'ava';
import buildOutputScript from '..';

test('Single address and value input returns valid output script', t => {
	const outputScipt = buildOutputScript([{address: 'FWN1qdiRrymSR6jbpbanLYqZpjkEaZouHN', value: 100000000}]);
	const expectedOutputScript = '0100e1f505000000001976a9140d1b3823fd9e54aefec638c91cce4175c515dc2e88ac';

	t.is(outputScipt, expectedOutputScript);
});

test('Multiple address and value inputs returns valid output script', t => {
	const outputScipt = buildOutputScript([
		{address: 'FWN1qdiRrymSR6jbpbanLYqZpjkEaZouHN', value: 100000000},
		{address: 'Fo5Xvgc58JMsMXsfwEY8TvjxX2x4Tdm5jf', value: 100000000}
	]);
	const expectedOutputScript = '0200e1f505000000001976a9140d1b3823fd9e54aefec638c91cce4175c515dc2e88ac00e1f505000000001976a914c47766d537ffc10c550a55e6dfe649363b07748688ac';

	t.is(outputScipt, expectedOutputScript);
});

test('Testnet P2PKH addresses with a different pubkey hash prefix returns valid output script', t => {
	const bitcoinOutputScipt = buildOutputScript([{address: 'FWN1qdiRrymSR6jbpbanLYqZpjkEaZouHN', value: 100000000}]);
	const testnetOutputScipt = buildOutputScript([{address: 'n2gRDSMJd9mmoofKPGP9pxKnVuFuCgwMu7', value: 100000000}]);
	const expectedOutputScript = '0100e1f505000000001976a9140d1b3823fd9e54aefec638c91cce4175c515dc2e88ac';

	t.is(bitcoinOutputScipt, testnetOutputScipt);
	t.is(bitcoinOutputScipt, expectedOutputScript);
});

test('Unsafe integer value throws error', t => {
	const MAX_SAFE_INTEGER = 9007199254740991;

	const outputScipt = buildOutputScript([{address: 'FWN1qdiRrymSR6jbpbanLYqZpjkEaZouHN', value: MAX_SAFE_INTEGER}]);
	const expectedOutputScript = '01ffffffffffff1f001976a9140d1b3823fd9e54aefec638c91cce4175c515dc2e88ac';

	t.is(outputScipt, expectedOutputScript);

	t.throws(() => buildOutputScript([{address: 'FWN1qdiRrymSR6jbpbanLYqZpjkEaZouHN', value: (MAX_SAFE_INTEGER + 1)}]));
});

test('Not passing an array throws error', t => {
	t.throws(() => buildOutputScript());
});

test('Passing an empty array throws error', t => {
	t.throws(() => buildOutputScript([]));
});

# conver

Comparisons for concrete semantic versions (i.e. compare `1.2.3` instead of `^1.2.3`).

## Motivation

[semver] is a great implementation of semantic versioning; including _all the edge cases._ These edge cases are important in many scenarios, but often we are simply comparing two concrete versions (i.e. compare `1.2.3` instead of `^1.2.3`).

In this more limited use-case case including all 1000+ lines of [semver] into your bundle for a web application is a bit of overkill. `conver` aims to do _ONLY_ concrete version comparisons in a drastically smaller package size (currently 28 LOC excluding comments).

## Usage

`conver` exposes the same comparison methods you would expect from the [semver] package. Specifically:

- `gt(v1, v2)`: returns `true` if `v1` is greater than `v2`.
- `lt(v1, v2)`: returns `true` if `v1` is less than `v2`.
- `equal(v1, v2)`: returns `true` if `v1` is equal to `v2`.
- `compare(v1, v2)` returns 0 if `v1 == v2`, or 1 if `v1` is greater, or -1 if `v2` is greater.
- `parse(v1)`: returns an array of `[major, minor, patch, build]`
- `stringify(src)`: returns a string representation of the specified
  `src` – an Array of `[major, minor, patch, build]`.

``` js
conver.gt('3.4.5', '1.2.3'); // true
conver.gt('1.2.3', '3.4.5'); // false

conver.lt('1.2.3', '3.4.5'); // true
conver.lt('3.4.5', '1.2.3'); // false

conver.eq('1.2.3', '9.8.0'); // false
conver.eq('1.2.3', '1.2.3'); // true

conver.parse('1.2.3');       // [1, 2, 3, '']
conver.parse('1.2.3-alpha'); // [1, 2, 3, 'alpha']

conver.stringify([1, 2, 3, 'alpha']); // '1.2.3-alpha'
conver.stringify([1, 2, 3]);          // '1.2.3'
conver.stringify([1, 2]);             // '1.2'
conver.stringify([1]);                // '1'
```

## Test

Tests are written with [nyc], [assume], and [mocha]. They can be run with `npm`:

```
npm test
```

##### LICENSE: MIT
##### AUTHOR: [Charlie Robbins](https://github.com/indexzero)

[nyc]: https://github.com/istanbuljs/nyc#readme
[assume]: https://github.com/bigpipe/assume#readme
[mocha]: https://mochajs.org/
[semver]: https://github.com/npm/node-semver#readme

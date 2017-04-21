# conver

Comparisons for concrete semantic versions (i.e. compare 1.2.3 instead of ^1.2.3)

## Usage

`conver` exposes the same comparison methods you would expect from the [semver] package. Specifically:

- `gt(a, b)`: returns `true` if `a` is greater than `b`.
- `lt(a, b)`: returns `true` if `a` is less than `b`.
- `equal(a, b)`: returns `true` if `a` is equal to `b`.

``` js
conver.gt('3.4.5', '1.2.3'); // true
conver.gt('1.2.3', '3.4.5'); // false

conver.lt('1.2.3', '3.4.5'); // true
conver.lt('3.4.5', '1.2.3'); // false

conver.eq('1.2.3', '9.8.0'); // false
conver.eq('1.2.3', '1.2.3'); // true
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

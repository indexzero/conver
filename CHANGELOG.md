# CHANGELOG

### 1.1.2

- [#3] Throw better error messages.

### 1.1.1

- [#2] Add legal check before compare to make sure all the inputs are legal semvers.
- Update `devDependencies`
- Add `.gitattributes`.
- Add additional test cases for partial semver strings (e.g. '1', '1.2').

### 1.1.0

- Handle lexographic comparison edge cases.
- Added `compare(v1, v2)`. Base `lt` and `gt` off of it.
- Update `README.md` with _"Motivation"_.

### 1.0.0

- Initial version

[#2]: https://github.com/indexzero/conver/pull/2
[#3]: https://github.com/indexzero/conver/pull/3

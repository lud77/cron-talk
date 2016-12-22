# crontalk v0.0.19
> A pure JS parser for natural language repeated events expressions

![coverage/lcov-report/index.html](https://img.shields.io/badge/tests-passing-green.svg)
![coverage/lcov-report/index.html](https://img.shields.io/badge/coverage-68.32-green.svg)


## Installation

	npm install --save crontalk



## Why?

Tired of messing with asterisks when scheduling jobs? Crontalk allows you to easily parse natural language expressions such as "every 3 days from next monday" and convert them to a JSON structure.


## Usage

	const ct = require('crontalk');

	let occurrences = ct.parse('every 3 days from the last day of september this year');

	console.log(occurrences);




## Documentation

Install the package and look at /docs/railroad.html for the railroad diagrams of Crontalk's DSL.

Look at the tests for usage examples.



## Licensing

This package is released under the [MIT License](https://opensource.org/licenses/MIT)


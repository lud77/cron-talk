'use strict';

const chai = require('chai');
const assert = chai.assert;

const ct = require('../dist/crontalk.js');

describe('Every_Span_Clause', function() {
	it('should allow "every [n] [units]"', function() {
		let parsed = ct.parse('every 3 days');
		assert.deepEqual(parsed, {
			"span": {
				"days": 3
			}
		});
	});

	it('should allow "every [n] [units] and [m] [units]"', function() {
		let parsed = ct.parse('every 3 days and 5 hours');
		assert.deepEqual(parsed, {
			"span": {
				"days": 3,
				"hours": 5
			}
		});
	});

	it('should allow "every [n] [units] and [m] [units] and [o] [units]"', function() {
		let parsed = ct.parse('every 3 days and 5 hours and 2 minutes');
		assert.deepEqual(parsed, {
			"span": {
				"days": 3,
				"hours": 5,
				"minutes": 2
			}
		});
	});

	it('should allow "every [unit]"', function() {
		let parsed = ct.parse('every year');
		assert.deepEqual(parsed, {
			"span": {
				"years": 1
			}
		});
	});	
});
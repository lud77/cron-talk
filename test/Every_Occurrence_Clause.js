'use strict';

const chai = require('chai');
const assert = chai.assert;

const ct = require('../dist/crontalk.js');

describe('Every_Occurrence_Clause', function() {
	it('should allow "every [month_literal] [lapse_clause]"', function() {
		let parsed = ct.parse('every january from year 1980 to year 1999');
		assert.deepEqual(parsed, {
			"span": {
				"years": 1,
				"lapse": {
					"from": {
						"year": 1980
					},
					"to": {
						"year": 1999
					}
				},
				"on": {
					"year": 0,
					"_month": 0
				}
			}
		});
	});

	it('should allow "every [ordinal] [month_literal] [lapse_clause]"', function() {
		let parsed = ct.parse('every third january from february 1980 to 1999');
		assert.deepEqual(parsed, {
			"span": {
				"years": 3,
				"lapse": {
					"from": {
						"year": 1980,
						"month": 1
					},
					"to": {
						"year": 1999
					}
				},
				"on": {
					"year": 2,
					"_month": 0
				}
			}
		});
	});

	it('should allow "every [ordinal] [weekday_literal] [lapse_clause]"', function() {
		let parsed = ct.parse('every second monday from the first week');
		assert.deepEqual(parsed, {
			"span": {
				"weeks": 2,
				"lapse": {
					"from": {
						"week": 0
					}
				},
				"on": {
					"week": 1,
					"_day": 0
				}
			}
		});
	});
});
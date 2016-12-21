'use strict';

const chai = require('chai');
const assert = chai.assert;

const ct = require('../dist/crontalk.js');

describe('Deictic_Clause', function() {
	it('should allow "[every_clause] from now"', function() {
		let parsed = ct.parse('every 3 minutes from now');
		assert.deepEqual(parsed, {
			"span": {
				"minutes": 3,
				"lapse": {
					"from": {
						"minute": "this"
					}
				}
			}
		});
	});

	it('should allow "[every_clause] from today"', function() {
		let parsed = ct.parse('every 3 days from today');
		assert.deepEqual(parsed, {
			"span": {
				"days": 3,
				"lapse": {
					"from": {
						"day": "this" 
					}
				}
			}
		});
	});

	it('should allow "[every_clause] from yesterday"', function() {
		let parsed = ct.parse('every 3 days from yesterday');
		assert.deepEqual(parsed, {
			"span": {
				"days": 3,
				"lapse": {
					"from": {
						"day": "last" 
					}
				}
			}
		});
	});

	it('should allow "[every_clause] from tomorrow"', function() {
		let parsed = ct.parse('every 3 days from tomorrow');
		assert.deepEqual(parsed, {
			"span": {
				"days": 3,
				"lapse": {
					"from": {
						"day": "next" 
					}
				}
			}
		});
	});

	it('should allow "[every_clause] from last [unit]"', function() {
		let parsed = ct.parse('every 3 days from last year');
		assert.deepEqual(parsed, {
			"span": {
				"days": 3,
				"lapse": {
					"from": {
						"year": "last" 
					}
				}
			}
		});
	});

	it('should allow "[every_clause] from next [unit]"', function() {
		let parsed = ct.parse('every 3 days from next month');
		assert.deepEqual(parsed, {
			"span": {
				"days": 3,
				"lapse": {
					"from": {
						"month": "next" 
					}
				}
			}
		});
	});

	it('should allow "[every_clause] from this [unit]"', function() {
		let parsed = ct.parse('every 3 days from this week');
		assert.deepEqual(parsed, {
			"span": {
				"days": 3,
				"lapse": {
					"from": {
						"week": "this" 
					}
				}
			}
		});
	});

	it('should allow "[every_clause] from the last [unit] of [month_literal] [last|this|next] [unit]"', function() {
		let parsed = ct.parse('every 3 days from the last day of september this year');
		assert.deepEqual(parsed, {
			"span": {
				"days": 3,
				"lapse": {
					"from": {
						"year": "this",
						"month": 8,
						"day": -1
					}
				}
			}
		});
	});	
});
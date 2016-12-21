'use strict';

const chai = require('chai');
const assert = chai.assert;

const ct = require('../dist/crontalk.js');

describe('Ordinal_Clause', function() {
	it('should allow "[every_clause] from the [ordinal_number] day"', function() {
		let parsed = ct.parse('every day from the 1th day');
		assert.deepEqual(parsed, {
			"span": {
				"days": 1,
				"lapse": {
					"from": {
						"day": 0
					}
				}
			}
		});
	});

	it('should allow "[every_clause] from the [ordinal_literal] day"', function() {
		let parsed = ct.parse('every day from the first day');
		assert.deepEqual(parsed, {
			"span": {
				"days": 1,
				"lapse": {
					"from": {
						"day": 0
					}
				}
			}
		});
	});

	it('should allow "[every_clause] from the last day"', function() {
		let parsed = ct.parse('every day from the last day');
		assert.deepEqual(parsed, {
			"span": {
				"days": 1,
				"lapse": {
					"from": {
						"day": -1
					}
				}
			}
		});
	});

	it('should allow "[every_clause] from the [ordinal_number] last day"', function() {
		let parsed = ct.parse('every day from the 2nd last day');
		assert.deepEqual(parsed, {
			"span": {
				"days": 1,
				"lapse": {
					"from": {
						"day": -2
					}
				}
			}
		});
	});

	it('should allow "[every_clause] from the [ordinal_literal] last day"', function() {
		let parsed = ct.parse('every day from the second last day');
		assert.deepEqual(parsed, {
			"span": {
				"days": 1,
				"lapse": {
					"from": {
						"day": -2
					}
				}
			}
		});
	});

	it('should allow "[every_clause] from the [ordinal_number]-last day"', function() {
		let parsed = ct.parse('every day from the 2nd-last day');
		assert.deepEqual(parsed, {
			"span": {
				"days": 1,
				"lapse": {
					"from": {
						"day": -2
					}
				}
			}
		});
	});

	it('should allow "[every_clause] from the [ordinal_literal]-last day"', function() {
		let parsed = ct.parse('every day from the second-last day');
		assert.deepEqual(parsed, {
			"span": {
				"days": 1,
				"lapse": {
					"from": {
						"day": -2
					}
				}
			}
		});
	});
});
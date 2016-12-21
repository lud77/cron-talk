'use strict';

const chai = require('chai');
const assert = chai.assert;

const ct = require('../dist/crontalk.js');

describe('Lapse_Clause', function() {
	it('should allow "[every_clause] from [time_clause] of [time_clause] to [time_clause]"', function() {
		let parsed = ct.parse('every 3 days from the 1th month of year 2016 to the 2nd month');
		assert.deepEqual(parsed, {
			"span": {
				"days": 3,
				"lapse": {
					"from": {
						"month": 0,
						"year": 2016
					},
					"to": {
						"month": 1
					}
				}
			}
		});
	});

	it('should allow "[every_clause] from [time_clause]', function() {
		let parsed = ct.parse('every 3 days from the 1th month');
		assert.deepEqual(parsed, {
			"span": {
				"days": 3,
				"lapse": {
					"from": {
				    	"month": 0
					}
				}
			}
		});
	});	

	it('should allow "[every_clause] until [time_clause]"', function() {
		let parsed = ct.parse('every 3 days until the 6th week');
		assert.deepEqual(parsed, {
			"span": {
				"days": 3,
				"lapse": {
					"to": {
						"week": 5
					}
				}
			}
		});
	});

	it('should allow "[every_clause] from [time_clause] of [time_clause] of [time_clause]"', function() {
		let parsed = ct.parse('every 3 days from the 1th week of the 2nd month of the 3rd year');
		assert.deepEqual(parsed, {
			"span": {
				"days": 3,
				"lapse": {
					"from": {
						"year": 2,
						"month": 1,
						"week": 0
					}
				}
			}
		});
	});		

	it('should allow "[every_clause] from [time_clause] of [time_clause] to [time_clause]"', function() {
		let parsed = ct.parse('every 3 days from the 1th week of the 2nd month to the 4th month ');
		assert.deepEqual(parsed, {
			"span": {
				"days": 3,
				"lapse": {
					"from": {
						"month": 1,
						"week": 0
					},
					"to": {
						"month": 3
					}
				}
			}
		});
	});		

	it('should allow "[every_clause] from the [n-th] of [month-literal] [year] to [year]"', function() {
		let parsed = ct.parse('every 3 days from the 12th of february 1980 to 1999');
		assert.deepEqual(parsed, {
			"span": {
				"days": 3,
				"lapse": {
					"from": {
						"day": 11,
						"month": 1,
						"year": 1980
					},
					"to": {
						"year": 1999
					}
				}
			}
		});
	});

	it('should allow "[every_clause] from the beginning of [year]"', function() {
		let parsed = ct.parse('every 3 days from the beginning of 1978');
		assert.deepEqual(parsed, {
			"span": {
				"days": 3,
				"lapse": {
					"from": {
						"minute": 0,
						"year": 1978
					}
				}
			}
		});
	});

	it('should allow "[every_clause] until the end of [time_clause]"', function() {
		let parsed = ct.parse('every 3 days until the end of the 5th hour of the last day of 1999');
		assert.deepEqual(parsed, {
			"span": {
				"days": 3,
				"lapse": {
					"to": {
						"minute": -1,
						"hour": 4,
						"day": -1,
						"year": 1999
					}
				}
			}
		});
	});
});
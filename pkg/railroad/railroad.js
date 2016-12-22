'use strict';

const grammkit = require('grammkit');
const parse = require('pegjs/lib/parser').parse;
const fs = require('fs');
const hbs = require('handlebars');

const template = hbs.compile(fs.readFileSync('pkg/railroad/railroad.md.hbs').toString('utf8'));
const grammar = parse(fs.readFileSync('src/peg/crontalk.peg').toString('utf8'));

let rules = [];

let ruleKeys = Object.keys(grammar.rules);

let iterate = function(ruleKeys, grammarRules, tplRules, callback, ndx) {
	let ruleIndex;
	if (typeof (ndx) === 'undefined') {
		ruleIndex = 0;
	} else {
		ruleIndex = ndx;
	}

	let rule = grammarRules[ruleKeys[ruleIndex]];

	try {
		let svg = grammkit.diagram(rule);

		fs.writeFile('docs/svg/' + rule.name + '.svg', '<?xml version="1.0" encoding="utf-8"?>' + svg, function(err) {
			if (err !== null) {
				console.log(err);
			}

			tplRules.push({ 
				name: rule.name,
				rule: svg 
			});

			if (ruleIndex < ruleKeys.length - 1) {
				setImmediate(iterate, ruleKeys, grammarRules, tplRules, callback, ruleIndex + 1);
			} else {
				setImmediate(callback, tplRules);
			}
		});
	} catch (err) {
		if (ruleIndex < ruleKeys.length - 1) {
			setImmediate(iterate, ruleKeys, grammarRules, tplRules, callback, ruleIndex + 1);
		} else {
			setImmediate(callback, tplRules);
		}
	}
};

let tplRules = [];

iterate(ruleKeys, grammar.rules, tplRules, function(rules) {
	let out = template({ rules: rules });
	fs.writeFileSync('docs/railroad.md', out);
});
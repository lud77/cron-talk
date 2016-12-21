'use strict';

let grammkit = require('grammkit');
let parse = require('pegjs/lib/parser').parse;
let fs = require('fs');
let hbs = require('handlebars');

let template = hbs.compile(fs.readFileSync('pkg/railroad/railroad.hbs').toString('utf8'));
let grammar = parse(fs.readFileSync('src/peg/crontalk.peg').toString('utf8'));

let rules = [];
for (let rule of grammar.rules) {
	try {
		let svg = grammkit.diagram(rule);
		rules.push({ 
			name: rule.name,
			rule: svg 
		});
	} catch (err) {
		console.log(err);
	}

}

var out = template({ rules: rules });

fs.writeFileSync('docs/railroad.html', out);
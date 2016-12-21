[
	{
		"glob": "src/app/js/**/*.js",
		"folder": "obj/app/js",
		"exec": "babel {{sourcefile}} -o {{targetfile}}"
	},
	{
		"glob": "src/web/js/**/*.js",
		"folder": "obj/web/js",
		"exec": ["babel {{sourcefile}} > uglifyjs "]
	},
	{
		"glob": "src/web/scss/**/*.scss",
		"folder": "obj/web/css",
		"exec": "node-sass {{sourcefile}} --output-style compressed -o {{targetfile}} && npm run bundle"
	}
]
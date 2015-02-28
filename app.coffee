axis         = require 'axis'
rupture      = require 'rupture'
jeet         = require 'jeet'
autoprefixer = require 'autoprefixer-stylus'
js_pipeline  = require 'js-pipeline'
css_pipeline = require 'css-pipeline'
dynamic_content = require 'dynamic-content'
yaml = require 'roots-yaml'

module.exports =
	ignores: ['readme.md', '_templates/**/*', '**/_*', '**/*.sublime*',  '_includes/**/*', '.gitignore', '.editorconfig', 'ship.*conf']

	dump_dirs: ['']


	extensions: [
		dynamic_content(write: 'content.json'),
		js_pipeline(files: ['assets/js/*.coffee', 'assets/js/*.js']),
		css_pipeline(files: 'assets/css/*.styl'),
		yaml()
	]

	stylus:
		use: [axis(), rupture(), jeet(), autoprefixer()]
		sourcemap: true

	jade:
		pretty: true
		basedir: '/Users/Thiago/Sites/thiagodebastos/'

	locals:
			siteUrl: 'http://thiagodebastos.com'
			siteTitle: 'thiagodebastos.com'
			description: 'This is where Thiago de Bastos keeps you connected to things he creates, thinks and feels. An Art directed blog'
			author:
				name: 'Thiago de Bastos'
				email: 'thiago@thiagodebastos.com'
				github: 'thiagodebastos'
				twitter: 'thiagodebastos'
				facebook: 'thiago.davoodifar'
				behance: 'xingur'
			analytics: 'google'
			config:
				node_env: process.env.NODE_ENV = "development"

	server:
		clean_urls: true

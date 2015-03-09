axis            = require 'axis'
rupture         = require 'rupture'
jeet            = require 'jeet'
autoprefixer    = require 'autoprefixer-stylus'
js_pipeline     = require 'js-pipeline'
css_pipeline    = require 'css-pipeline'
yaml            = require 'roots-yaml'
dynamic_content = require 'dynamic-content'

module.exports =
	ignores: ['readme.md', '_templates/**/*', '**/_*', '**/*.sublime*', '_layouts/**/*', '.gitignore', '.editorconfig', 'ship.*conf']

	dump_dirs: ['']

	extensions: [
		yaml(),
		js_pipeline(files: ['assets/js/*.coffee', 'assets/js/*.js']),
		css_pipeline(files: 'assets/css/*.styl'),
		dynamic_content(write: {'posts.json': 'posts', 'portfolio.json': 'portfolio'})
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
				phone: '+44 (0)7 53456 2784'
				city: 'London'
				github: 'thiagodebastos'
				twitter: 'thiagodebastos'
				facebook: 'thiagodebastos'
				behance: 'xingur'
			analytics: 'google'
			config:
				node_env: process.env.NODE_ENV = "development"

	server:
		clean_urls: true

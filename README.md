# thiagodebastos.com
===

This is the roots branch, hopefully soon to be merged with master. I felt Jekyll lacks many features and requires way too many tools to get going with an automated workflow. Check out [roots.cx](http://roots.cx) to see what you are missing!

- - -
At the moment I am working on a roots port of my currently unfinished
Jekyll site

### Setup

- make sure [node.js](http://nodejs.org) and [roots](http://roots.cx) are installed
- clone this repo down and `cd` into the folder
- run `npm install`
- run `roots watch`
- ???
- get money

### Deploying

- If you just want to compile the production build, run `roots compile -e production` and it will build to public.
- To deploy your site with a single command, run `roots deploy -to XXX` with `XXX` being whichever [ship](https://github.com/carrot/ship#usage) deployer you want to use.

### Userful Snippets
I use TextExpander but you can use whatever you'd like. I find these useful for including modules:

**;00** --> `include /_patterns/atoms/`
**;01** --> `include /_patterns/molecules/`
**;02** --> `include /_patterns/organisms/`
**;03** --> `include /_patterns/templates/`
**;04** --> `include /_patterns/pages/`

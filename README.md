# thiagodebastos.com

This is the roots branch, hopefully soon to be merged with master. I felt Jekyll lacks many features and requires way too many tools to get going with an automated workflow. Check out [roots.cx](http://roots.cx) to see what you are missing!
=======
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


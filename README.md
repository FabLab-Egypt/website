
Fab Lab Egypt Website
=====================



## Development

Build with `Jinja2` templating, Using `Clay` for static site generation.

First to develop the site `Python 2.7` is required for [Clay](http://lucuma.github.io/Clay/), install dependancy from `requirements.txt`
using `pip`.

The develop ment environment could be seted up in `virtualenv`, `env/` directory is included in the `.gitignore` file.

The following assumes you have virtualenv installed and your in the project root directory.

1. Setting up virtualenv
```
$ virtualenv env
$ source env/bin/activate
```

1. Install dependancy
```
$ pip install -r requirements.txt
```

1. Run clay's development server
```
$ clay run
```

1. Finaly to generate a static pages run
```
$ clay build
```

### Using SCSS/SASS

To use `SCSS` with `Clay` a work-around was implemented. `settings.py` file form line# 45 to 54, snippet below.

```
import sys
import subprocess
if 'run' in sys.argv:
    print ">>> Sass is watching for changes. Process is running in a separate screen session."
    subprocess.call(['screen','-d','-m','sass','--watch','source/assets/stylesheets:source/assets/stylesheets'])
elif 'build' in sys.argv:
    print "SASS Build"
    scss_file = 'source/assets/stylesheets/fabstrap-{}.scss'.format(LANG)
    css_file  = 'source/assets/stylesheets/fabstrap-{}.css'.format(LANG)
    subprocess.call(['sass',scss_file,css_file])
```  
#### Dependancy
To Use the SCSS/SASS work-around there are some none python requirements:

- [screen](http://www.gnu.org/software/screen/) allows you to use multiple windows in unix terminals.
- [SASS](http://sass-lang.com/install) for Compiling SASS/SCSS into CSS.

#### Usage

Using Sass/Scss is straightforward, if all dependencies are met,
Running clay development server `$ clay run` will start sass in a detached screen with the session name 'clay-sass'
to attach run `$ screens -r clay-sass` this will reattach to a detached screen session.

### Environment Variables

Another wotk-around for setting variables on the fly was to use environment variables, since passing an extra command line argument breaks Clay.

env. variables will have `CLAY_` as prefix, ex: `CLAY_LANG` is the env. variable for `LANG`.

To set an env. variable `$ export CLAY_LANG='en'`, this variable will be accessible with in jinja template as `LANG` with out the prefix.

> WIP: Work In Progress



- - -
_(c) Fab Lab EGYPT - 2014_

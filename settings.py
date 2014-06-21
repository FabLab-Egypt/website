# Project settings

## Do not show HTML fragments in the final build or in the _index.html
FILTER_PARTIALS = True

## Ignore the views listed here when building, even if they are full HTML pages
## You can use patterns here eg: "deprecated/*"
FILTER = [
    '.DS_Store',
    'webassets-cache/*',
    '.webassets-cache',
    'layout.html',
]

## When building, force the inclusion of all the HTML partials listed here.
## You can use patterns here eg: "alert-*.html"
INCLUDE = [

]

## Server
HOST = '0.0.0.0'
PORT = 8080

## Your own settings here
LANG='en' # Language Setting values [ar|en]

#############################
## THIS IS A HACK FOR SCSS ##
import sys
import subprocess
if 'run' in sys.argv:
  print ">>> Sass is watching for changes. Proceese is runing in a seprate screen session."
  subprocess.call(['screen','-d','-m','sass','--watch','source/assets/stylesheets:source/assets/stylesheets'])
elif 'build' in sys.argv:
  print "SASS Build"
  subprocess.call(['sass','source/assets/stylesheets/fabstrap.scss','source/assets/stylesheets/fabstrap.css'])

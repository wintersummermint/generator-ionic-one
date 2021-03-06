
# Generator Ionic One

Yeoman Ionic/ionic scaffolding for large projects


This follows practice with [Best Practice ionic-styleguide/johnpapa](https://github.com/johnpapa/ionic-styleguide).
Quickly bootstrap Ionic projects and dev environment with the help of Ionic One. This is still in working progress for additional features.

Generator 
- Builds skeleton (html,javascript, LESS, spec etc) for the component type.
- Update index.html and add the necessary `script` tags.
- Update app.less and add the @import as needed.
- For partials, update the app.js, adding the necessary route call if a route was entered in the generator prompts.

## Getting Started

Package manager (npm) need to be installed. You can get them from http://nodejs.org/.

### Install Prerequisites: Node, Grunt, Yeoman, and Bower.  Once Node is installed, do:
------------------------------------------------------------------------------------

    npm install -g yo grunt-cli bower

### Install this Generator using global -g:
------------------------------------------------------------------------------------
    npm install -g generator-ionic-one

### Finally Create project:
------------------------------------------------------------------------------------
    mkdir myNewproject
    cd myNewproject
    yo ionic-one

Note: if EACCESS error , run bower and npm on sudo.

## Run Application 
```

    grunt serve 
    
```
if you encountered error when 3rd party is installed library use reinstall manually bower and npm or use grunt serve --force, 

## Directory Structure
-----------------------------------------------------------------------------------
    /app-main ......................... Main module
      app-main-controller.js .......... app main js controller
      /home ........................... home feature folder
        home-controller.js ............ example simple controller
        home-controller-test.js........ example simple controller unit test
        
        home-directive.js ............. complex directive javascript
        home-directive.html ........... complex directive partial
        home-directive.less ........... complex directive LESS
        home-directive-test.js ........ complex directive unit test
        /home-partial ................. example partial
            home-partial.html ......... example partial html
            home-partial.js ........... example partial controller
            home-partial.less ......... example partial LESS
            home-partial-test.js ...... example partial unit test
    	/search ....................... example search component folder
      		my-filter.js .............. example filter
      		my-filter-test.js ......... example filter unit test
      	/search-partial ............... example partial
        	search-partial.html ....... example partial html
        	search-partial.js ......... example partial controller
        	search-partial.less ....... example partial LESS
        	search-partial-test.js .... example partial unit test
    	/service ...................... ionic services folder
        	my-service.js ............. example service
        	my-service-test.js ........ example service unit test
        	my-service2.js ............ example service
        	my-service2-test.js ....... example service unit test
    /assets ............................... assets 
        /js ............................... js libraries 
        /img .............................. image assets
    /dist ................................. distributable version of app built using grunt and Gruntfile.js
    /bower_component....................... 3rd party libraries managed by bower
    /node_modules ......................... npm managed libraries used by grunt
    app.less .............................. main app-less styles
    app.js ................................ ionic module initialization and route setup
    index.html ............................ main HTML file
    Gruntfile.js .......................... Grunt build file

-----------------------------------------------------------------------------------

## Running Generator:

generators for controller, directive, partial, service, filter, module, and modal.

```
	yo ionic-one:controller controllerName
	yo ionic-one:directive directiveName
	yo ionic-one:partial partialName
	yo ionic-one:service serviceName
	yo ionic-one:filter filterName
	yo ionic-one:module moduleName
	yo ionic-one:modal modalName

```
	Name paramater passed will be used as the file names.  Each sub-generator will ask for the folder in which to create the new skeleton files.  You may override the default folder for each sub-generator in the `.yo-rc.json` file.
	Modal subgenerator is a convenient shortcut to create partials that work as modals for Bootstrap v3.3.6 and ionic-UI-Bootstrap v0.10 (both come preconfigured with this generator).  If you choose not to use either of these libraries, simply don't use the modal subgenerator.

## Submodules
-------------

Use the `yo ionic-one:module my-module` specify a new subdirectory to place the module into.  Once you've created a submodule, running other subgenerators will now prompt you to select the module in which to place the new component.

## Libraries 
-------------

Includes ionic 1.3, Bootstrap 3, ionicUI Bootstrap, ionicUI Utils, FontAwesome 4, JQuery 2, Underscore 1.5, LESS 1.6, and Moment 2.5.  You may of course add to or remove any of these libraries.  But the work to integrate them into the app and into the build process has already been done for you.

## Build Process
-------------
```

    grunt test //karmajs testing
    grunt build //dist folder
    
```
The project will include a ready-made Grunt build that will:

* Build all the LESS files into one minified CSS file.
* Uses [grunt-ionic-templates](https://github.com/ericclemmons/grunt-ionic-templates) to turn all your partials into Javascript.
* Uses [grunt-ng-annotate](https://github.com/olov/ng-annotate) to preprocess all ionic injectable methods and make them minification safe.  Thus you don't have to use the array syntax.
* Concatenates and minifies all Javascript into one file.
* Replaces all appropriate script references in `index.html` with the minified CSS and JS files.
* (Optionally) Minifies any images in `/img`.
* Minifies the `index.html`.
* adds assets to dist
* Copies any extra files necessary for a distributable build (ex.  Font-Awesome font files, etc).

The resulting build loads only a few highly compressed files.

The build process uses [grunt-dom-munger](https://github.com/cgross/grunt-dom-munger) to pull script references from the `index.html`.  This means that **your index.html is the single source of truth about what makes up your app**.  Adding a new library, new controller, new directive, etc does not require that you update the build file.  Also the order of the scripts in your `index.html` will be maintained when they're concatenated.

Importantly, grunt-dom-munger uses CSS attribute selectors to manage the parsing of the script and link tags.  Its very easy to exclude certain scripts or stylesheets from the concatenated files. This is often the case if you're using a CDN. This can also be used to prevent certain development scripts from being included in the final build.

* To prevent a script or stylesheet from being included in concatenation, put a `data-concat="false"` attribute on the link or script tag.  This is currently applied for the `livereload.js` and `less.js` script tags.

* To prevent a script or link tag from being removed from the finalized `index.html`, use a `data-remove="false"` attribute.

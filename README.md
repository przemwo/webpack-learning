#Learning webpack

Visit [this](http://www.pro-react.com/materials/appendixA/) for tutorial.

##Getting Started
1. Run `npm init -y`
2. Install webpack as a project dependency: `npm i webpack -D`
3. Install webpack dev server: `npm i webpack-dev-server -D` - configure it under "devserver" entry. After that you start webpack calling `webpack-dev-server` instead of `webpack`.
4. Add `webpack.config.js` file and configure webpack there.

##Loaders
Through **loaders**, webpack can preprocess the source files and apply to them all kinds of changes and transformations.
Thanks to **loaders** you can:
1. Use future JS version and transform them into regular JS that current browsers understand.
2. Transform JSX files into plain JS
**Loaders** need to be installed separately (through `npm install`) and configured under "module.loaders" key in webpack.config.js file.
test - regex for file extensions
include/exclude - look/don't look in this directory
loader - loader to be used
query - additional options for the loader. Can be move to a separate file eg. `.babelrc` (babel resource configuration)

###Babel
Transform ES6/7 to ES5, JSX to JS.
`npm i babel-core -D` - install core functionality of babel.
`npm i babel-loader` - integration with webpack.
`npm i babel-preset-es2015` - compiling ES6.
`npm i babel-preset-react` - compiling JSX to JS.

###Style loader and CSS loader
`npm i style-loader -D` - add all computed style rules into the page
`npm i css-loader -D` - looks for @import and url statements in .css file and resolves them.

##Other
`__dirname` - is node global variable. The directory of the currently executed script
`source-map` - provides a way of mapping bundled code back to its original source file

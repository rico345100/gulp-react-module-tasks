# gulp-react-module-tasks
Common tasks for create react modules with Gulp + Browserify.

## What is this?
This is the template for building React Module with Gulp and Browserify. 
Only you need is configure the gulpfile.js to your needs, and then start the gulp to build it.
Every module in this project is minimal module for building distributable React module.

```bash
$ npm install
// after module wrote,
$ gulp
```

## Features
- Production Testing
- Live reloading
- UMD support

## Modules used
- Babel for transpile JSX
- Babelify for using Babel with Browserify
- Browserify for bundling
- BrowserSync for Live-reload
- Gulp for provide automated tasks for development
- Persistify for Disk caching to improve building time
- Watchify for Memory caching to improve building time
- React/ReactDOM
- babel-plugin-transform-class-properties for support Class properties which really handy with classes!

## Future plans
- JS uglify. I have some issues on applying uglify with JS Code. I will fix this soon!
- More options


## Quick Start
- First, install the dependencies.
```bash
$ npm install
```

- Second, run gulp. (If you didn't installed gulp globally, you should install gulp globally first). This step will transpile all JavaScript files in ./src directory and run BrowserSync.

```bash
$ gulp
```

- ...

- PROFIT!!


## Tasks
## Default Task
In the previous gulp-react-module-tasks, default task was build distributable module. From 1.1.0, it's now replaced to development task, which build all source scripts and run BrowserSync to debug.
Original default task is now changed to build task. See 'build task' to detail.

Default task build your application with existing test codes that located in same source directory './src/test.js'.
This task is useful for testing your React Component is working fine with production state.
Only one thing that you should careful about is you have to load your component like this:

```javascript
import MyComponent from './index';
```

After run this task, gulp builds script that contains React and your Component with test.js, and results to './test/test.js',
also it runs browser-sync to provide live-reloading.
On every updating of index.html or src/test.js will refresh your testing website that supported by browser-sync.


## Build Task
Build Task build your React Component for distribute, via NPM of course. 
It means that exclude all react-related dependencies and adding UMD support with browserify --standalone option.

```bash
$ gulp build
```

built script will located to ./dist directory as index.js, and package.json has './dist/index.js' as main script. So now you can publish your own module to NPM!


## Only 2 tasks?
This project is still working, and will have more functionalities in the future. 
If you have nice idea to improve this project, please comment at issues or sent me a mail to rico345100@gmail.com. Thanks!
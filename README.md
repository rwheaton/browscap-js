# Introduction

browscap-js is a port of PHP's get_browser function to JavaScript

It makes available a `getBrowser` function which takes a browser user agent string
and returns an associative array of properties and abilities of that browser.

You must use a preprocessed browscap.json file, which is provided too with the name `browscap.preprocessed.json`:

Example:

	var browscap = require('browscap-js');
	browscap.setJson('./browscap.preprocessed.json');

	var browser = browscap.getBrowser("Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; WinTSI 05.11.2009)");

	//Will print "IE 8.0"
	console.log(browser['Browser'] + " " + browser['Version']);

Thanks to [torvalamo](http://github.com/torvalamo) for some rewrites to
improve performance.

# Installation

Using npm run `npm install browscap-js`

You can get npm from http://npmjs.org/

Alternatively you can clone the git repository

# Examples

There is a test.js file which demonstrates how to use node-browscap and tests
several user agents.

To run:

	$ npm test

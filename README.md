[![Build Status](https://travis-ci.org/TwisterMW/angular-generator.svg?branch=master)](https://travis-ci.org/TwisterMW/angular-generator)
[![npm version](https://badge.fury.io/js/twistermw-angular-component-generator.svg)](https://badge.fury.io/js/twistermw-angular-component-generator)

# AngularJS Component Generator
Generates an AngularJS component, creating all related files (Controller, filter, module, servic e, spec for UT). Combined with the AngularJS Seed project: [AngularJS Seed Project](https://github.com/TwisterMW/angular-fc-seedproject.git)

## Requirements
1. NodeJS (version used 5.5.0)
2. Node NPM (version used 3.3.12)

## Installation
- Clone repo from [GitHub](git@github.com:TwisterMW/angular-generator.git)
- Do a npm install:
	```
	$ npm install
	```

## Usage
If we run at console this command: ```$ yo angular-component``` we'll be asked for a folder to deploy the generated components. The next step is choose the module name, and finally we can select all kind of angular files to be generated using the data inputed before.

`**NOTE:** If you create diferent modules for each component that you generate, you must include the module dependency on 'app/app.routes.js' file.`
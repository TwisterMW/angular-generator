(function() {
    'use strict';

    //Require dependencies
    var yeoman = require('yeoman-generator');
    var chalk = require('chalk');
    var yosay = require('yosay');

    module.exports = yeoman.Base.extend({
        prompting: function() {
            console.log(yosay('Hello, this is an AngularJS component generator'));

            return this.prompt([{
                store: true,
                type: 'input',
                name: 'pathname',
                message: 'Enter the name which will contain components folder'
            },{
                type: 'input',
                name: 'name',
                message: 'Enter the component name'
            },{
                type: 'input',
                name: 'modulename',
                message: 'Enter the parent module name'
            },{
                store: true,
                type: 'checkbox',
                name: 'includings',
                message: 'Select the files to be generated',
                choices: 
                  [{
                    name: 'Controller',
                    value: 'includeController',
                    checked: true,
                  },{
                    name: 'Service',
                    value: 'includeService',
                    checked: true,
                  },{
                    name: 'Filter',
                    value: 'includeFilter',
                    checked: false,
                  },{
                    name: 'Directive',
                    value: 'includeDirective',
                    checked: false,
                  },{
                    name: 'UT Specfile',
                    value: 'includeSpecs',
                    checked: false,
                  },{
                    name: 'HTML View file',
                    value: 'includeView',
                    checked: true
                  }]
            }]).then(function (answers){
                this.data = answers;

                console.log('It will be generated a component named: ', chalk.bold.blue(this.data.name));
                console.log('The component will include: ', chalk.bold.blue(this.data.includings));
            }.bind(this));
        },
        writing: function(){
            var params = this.data;
            params.includes = [];

            if(params.includings.indexOf('includeController') !== -1){
                params.controllername = params.name.toLowerCase() + "Controller";
            
                this.fs.copyTpl(
                    this.templatePath('controller-tpl.js'),
                    this.destinationPath(params.pathname + '/components/' + params.name + '/' + params.name + '-controller.js'),
                    { data: params}
                );

                params.includes.push(params.controllername + ".js");

                console.log('Copying 1 of ' + params.includings.length + ': ' + chalk.bold.green('--SUCCESS--'));
            }

            if(params.includings.indexOf('includeService') !== -1){
                params.servicename = params.name.toLowerCase() + "Factory";
            
                this.fs.copyTpl(
                    this.templatePath('service-tpl.js'),
                    this.destinationPath(params.pathname + '/components/' + params.name + '/' + params.name + '-service.js'),
                    { data: params}
                );

                params.includes.push(params.servicename + ".js");

                console.log('Copying 2 of ' + params.includings.length + ': ' + chalk.bold.green('--SUCCESS--'));
            }
        }
    });

})();
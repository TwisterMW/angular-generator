(function() {
    'use strict';

    //Require dependencies
    var chalk = require('chalk');
    var yosay = require('yosay');
    var yeoman = require('yeoman-generator');

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
                    name: 'Directive',
                    value: 'includeDirective',
                    checked: false,
                  },{
                    name: 'Specfile (UT)',
                    value: 'includeSpecs',
                    checked: false,
                  },{
                    name: 'View file (HTML)',
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

            if(params.includings.indexOf('includeController') !== -1){
                params.controllername = params.name + "Controller";
            
                this.fs.copyTpl(
                    this.templatePath('controller-tpl.js'),
                    this.destinationPath(params.pathname + '/components/' + params.name + '/' + params.name + '-controller.js'),
                    { data: params}
                );

                console.log('Copying controller...: ' + chalk.bold.green('--SUCCESS--'));
            }

            if(params.includings.indexOf('includeService') !== -1){
                params.servicename = params.name + "Factory";
            
                this.fs.copyTpl(
                    this.templatePath('service-tpl.js'),
                    this.destinationPath(params.pathname + '/components/' + params.name + '/' + params.name + '-service.js'),
                    { data: params}
                );

                console.log('Copying factory...: ' + chalk.bold.green('--SUCCESS--'));
            }

            if(params.includings.indexOf('includeDirective') !== -1){
                params.directivename = params.name + "Dir";
            
                this.fs.copyTpl(
                    this.templatePath('directive-tpl.js'),
                    this.destinationPath(params.pathname + '/components/' + params.name + '/' + params.name + '-directive.js'),
                    { data: params}
                );

                console.log('Copying directive...: ' + chalk.bold.green('--SUCCESS--'));
            }

            if(params.includings.indexOf('includeSpecs') !== -1){
                params.specsname = params.name.toLowerCase();
            
                this.fs.copyTpl(
                    this.templatePath('specs-tpl.js'),
                    this.destinationPath(params.pathname + '/components/' + params.name + '/' + params.name + '-specs.js'),
                    { data: params}
                );

                console.log('Copying specsfile...: ' + chalk.bold.green('--SUCCESS--'));
            }

            if(params.includings.indexOf('includeView') !== -1){
                params.viewname = params.name.toUpperCase();
            
                this.fs.copyTpl(
                    this.templatePath('view-tpl.html'),
                    this.destinationPath(params.pathname + '/components/' + params.name + '/' + params.name + '-tpl.html'),
                    { data: params}
                );

                console.log('Copying HTML view...: ' + chalk.bold.green('--SUCCESS--'));
            }

            this.spawnCommand('grunt', ['includeSource']);
        }
    });

})();
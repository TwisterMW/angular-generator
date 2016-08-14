(function(){
	'use strict';

	angular
		.module('<%= data.modulename %>')
		.directive('<% data.directivename %>', <%= data.directivename %>);

		function <%= data.directivename %>(){

		}

})();
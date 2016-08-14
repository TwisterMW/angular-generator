(function(){
	'use-strict';

	angular
		.module('<%= data.modulename %>')
		.factory('<%= data.servicename %>', <%= data.servicename %>);

	function <%= data.servicename %>(){
		// Declaration
		var service = {
			init: init
		}

		return service;

		// Definition
		function init(){

		}
	}

})();
(function(){
	'use-strict';

	angular
		.module('App.main', [])
		.controller('mainController', mainController);

	function mainController(){
		var vm = this;

		// Declaration
		vm.init = init;

		// Definition
		function init(){
			return 2+2; // For testing case
		}

		vm.init();
	}

})();
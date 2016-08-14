(function(){
	'use-strict';

	angular
		.module('App.main')
		.factory('mainFactory', mainFactory);

	function mainFactory(){
		// Declaration
		var service = {
			init: init
		};

		return service;

		// Definition
		function init(){

		}
	}

})();
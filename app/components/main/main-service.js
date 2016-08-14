(function(){
	'use-strict';

	angular
		.module('App.main')
		.factory('mainFactory', mainFactory);

	function mainFactory(){
		// Declaration
		var mainFactory = {
			init: init
		}

		return mainFactory;

		// Definition
		function init(){

		}
	}

})();
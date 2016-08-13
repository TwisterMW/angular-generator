(function(){
	'use-strict';

	angular
		.module('<%= data.modulename %>')
		.controller('<%= data.controllername %>', <%= data.controllername %>);

	function <%= data.controllername %>(){
		var vm = this;

		// Declaration
		vm.init = init;

		// Definition
		function init(){

		}

		vm.init();
	}

})();
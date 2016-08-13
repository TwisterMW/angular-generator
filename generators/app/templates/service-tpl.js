(function(){
	'use-strict';

	angular
		.module('<%= data.modulename %>')
		.factory('<%= data.servicename %>', <%= data.servicename %>);

	function <%= data.servicename %>(){
		// Declaration
		var <%= data.servicename %> = {
			init: init
		}

		return <%= data.servicename %>;

		// Definition
		function init(){

		}
	}

})();
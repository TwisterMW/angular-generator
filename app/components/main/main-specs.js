(function(){
	'use strict';

	describe('main - Test file', function(){

		var $controller;

		beforeEach(module('App.main'));

		beforeEach(inject(function(_$controller_){
			$controller = _$controller_;
		}));

		describe('First testing case (2+2)...', function(){
			it('should return proper value (4)...', function(){
				var $scope = {};
				var controller = $controller('mainController', { $scope: $scope });
				var res = controller.init();

				expect(res).toEqual(4);
			});
		});

	});

})();
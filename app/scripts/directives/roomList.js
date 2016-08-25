(function(){
	function roomList(){
		return {
			templateUrl: 'templates/directives/roomlist.html',
			replace: true,
			restrict: 'E',
		};
	}

	angular
		.module('blocChat')
		.directive('roomList', roomList);
})();
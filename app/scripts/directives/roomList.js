(function(){
	function roomList(){
		return {
			templateUrl: 'templates/directives/roomlist.html',
			replace: true,
			restrict: 'E',
			link: function(scope, attributes){
				scope.allRooms = null;
				scope.activeRoom = null;

				attributes.$observe('allRooms', function(newValue){
					scope.allRooms = newValue;
				});

				attributes.$observe('activeRoom', function(newValue){
					scope.activeRoom = newValue;
				});
			}
		};
	}

	angular
		.module('blocChat')
		.directive('roomList', roomList);
})();
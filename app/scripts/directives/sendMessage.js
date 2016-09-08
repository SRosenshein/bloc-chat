(function(){
	function sendMessage(){
		return function(scope, element, attrs){
			console.log(scope.currentRoom);
			//if (scope.currentRoom.length != 0){
				return {
					templateUrl: 'templates/directives/sendmessage.html',
					replace: true,
					controller: 'MessageCtrl',
					restrict: 'E'
				};
			//}
		};	
	}

	angular
		.module('blocChat')
		.directive('sendMessage', sendMessage);
})();
(function(){
	function sendMessage(){
		if (currentRoom.length != 0){
			return {
				templateUrl: 'templates/directives/sendmessage.html',
				replace: true,
				controller: 'MessageCtrl',
				restrict: 'E'
			};
		}	
	}

	angular
		.module('blocChat')
		.directive('sendMessage', sendMessage);
})();
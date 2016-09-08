(function(){
	function MessageCtrl($scope, Message){
		$scope.send = function(newMessage){
			Message.send(newMessage.trim());
		};
	}

	angular
		.module('blocChat')
		.controller('MessageCtrl', ['$scope', 'Message', MessageCtrl])
})();
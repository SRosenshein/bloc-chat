(function(){
	function ChatroomCtrl($scope, Room){
		$scope.messages = Room.getMessages;
	}

	angular
		.module('blocChat')
		.controller("ChatroomCtrl", ["$scope", "Room", ChatroomCtrl]);
})();
(function(){
	function HomeCtrl($scope, Room){
		$scope.chatRooms = Room.all;

		$scope.currentRoom = {};
		$scope.messageList = [];
		$scope.changeActiveRoom = function(room){
			$scope.currentRoom = room;
			$scope.messageList = Room.getMessages(room.$id);
		};
	}

	angular
		.module("blocChat")
		.controller("HomeCtrl", ["$scope", "Room", HomeCtrl]);
})();
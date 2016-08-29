(function(){
	function HomeCtrl($scope, Room){
		$scope.chatRooms = Room.all;

		$scope.currentRoom = {};
		$scope.messageList = [];

		//Pass in entire clicked room object
		$scope.changeActiveRoom = function(room){
			$scope.currentRoom = room;
			
			//message array from firebaseArray
			$scope.messageList = Room.getMessages(room.$id);
		};
	}

	angular
		.module("blocChat")
		.controller("HomeCtrl", ["$scope", "Room", HomeCtrl]);
})();
(function(){
	function HomeCtrl($scope, Room, Message){
		$scope.chatRooms = Room.all;

		$scope.currentRoom = {};
		$scope.messageList = [];

		//Pass in entire clicked room object
		$scope.changeActiveRoom = function(room){
			$scope.currentRoom = room;
			
			//message array from firebaseArray
			$scope.messageList = Room.getMessages(room.$id);
		};

		$scope.send = function(newMessage){
			Message.send(newMessage.trim(), $scope.currentRoom.$id);
		};
	}

	angular
		.module("blocChat")
		.controller("HomeCtrl", ["$scope", "Room", "Message", HomeCtrl]);
})();
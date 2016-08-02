(function(){
	function HomeCtrl($scope, Room){
		$scope.chatRooms = ["Room1", "Room2"];
	}

	angular
		.module("blocChat")
		.controller("HomeCtrl", ["$scope", "Room", HomeCtrl]);
})();
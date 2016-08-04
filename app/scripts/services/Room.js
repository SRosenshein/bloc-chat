(function(){
	function Room($firebaseArray){
		var ref = firebase.database().ref().child("rooms");
		var rooms = $firebaseArray(ref);

		return {
			all: rooms, //array of all room objects
			create: function(room){ //Function to add new room
				rooms.$add({name: room});
			}
		};
	}

	angular
		.module("blocChat")
		.factory("Room", ["$firebaseArray", Room]);
})();
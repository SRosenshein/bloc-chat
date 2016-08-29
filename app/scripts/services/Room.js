(function(){
	function Room($firebaseArray){
		var ref = firebase.database().ref().child("rooms");
		var rooms = $firebaseArray(ref);
		var mes = firebase.database().ref().child("messages");

		return {
			all: rooms, //array of all room objects
			create: function(room){ //Function to add new room
				rooms.$add({name: room});
			},
			getMessages: function(roomID){
				//retrieve message array based on currentRoom id
				var messages = $firebaseArray(mes.orderByChild("roomId").equalTo(roomID));
				return messages;
			}
		};
	}

	angular
		.module("blocChat")
		.factory("Room", ["$firebaseArray", Room]);
})();
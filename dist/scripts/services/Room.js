(function(){
	function Room($firebaseArray){
		var ref = firebase.database().ref().child("rooms");
		var rooms = $firebaseArray(ref);
		var mes = firebase.database().ref().child("messages");
		//var messages = $firebaseArray(mes.orderByChild("roomId").equalTo("-KPECmNxVtMfX1xI03wu"));

		return {
			all: rooms, //array of all room objects
			create: function(room){ //Function to add new room
				rooms.$add({name: room});
			},
			getMessages: function(roomID){
				var messages = $firebaseArray(mes.orderByChild("roomId").equalTo(roomID));
				console.log(roomID);
				return messages;
			}
		};
	}

	angular
		.module("blocChat")
		.factory("Room", ["$firebaseArray", Room]);
})();
(function(){
	function Room($firebaseArray){
		var ref = new Firebase("https://bloc-chat-ea6f3.firebaseio.com/rooms");
		var rooms = $firebaseArray(ref);

		return {
			all: rooms, //array of all rooms
			create: function(room){
				rooms.$add({name: room});
			}
		};
	}

	angular
		.module("blocChat")
		.factory("Room", ["$firebaseArray", Room]);
})();
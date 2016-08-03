(function(){
	function Room($firebaseArray){
		var ref = new Firebase("https://bloc-chat-ea6f3.firebaseio.com/");
		var rooms = $firebaseArray(ref.child('rooms'));

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
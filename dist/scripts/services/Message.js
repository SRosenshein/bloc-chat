(function(){
	function Message($firebaseArray, $cookies) {
		var ref = firebase.database().ref().child("messages");
		var messages = $firebaseArray(ref);
		var currentUser = $cookies.get('blocChatCurrentUser');

		return {
			send: function(newMessage) {
				messages.$add({
					content: newMessage,
					roomId: currentRoom.$id,
					username: currentUser
				});
			}
		};
	}

	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', 'ngCookies', Message]);
})();
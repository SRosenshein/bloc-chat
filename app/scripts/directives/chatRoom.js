(function(){
	function chatRoom(){
		return {
			templateUrl: 'templates/directives/chatroom.html',
			restrict: 'E',
			replace: true
		};
	}

	angular
		.module('blocChat')
		.directive('chatRoom', chatRoom);
})();
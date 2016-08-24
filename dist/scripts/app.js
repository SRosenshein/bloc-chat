(function(){
	function config($stateProvider, $locationProvider){
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
			});

		/*$stateProvider
			.state('home', {
				url: '/',
				templateUrl: '/templates/home.html',
				controller: 'HomeCtrl as home'})
			
			.state('home.room', {
				url: '/room',
				templateUrl: '/templates/chatroom.html',
				controller: 'ChatroomCtrl as chatroom'
			});
			.state('chatroom', {
				url: '/',
				templateUrl: '/templates/chatroom.html',
				controller: 'ChatroomCtrl as chatroom'
			});*/
	}




	angular
		.module("blocChat", ["firebase", "ui.router", "ui.bootstrap"])
		.config(config);

})();
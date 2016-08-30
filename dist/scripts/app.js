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

	function BlocChatCookies($cookies, $uibModal){
		var currentUser = $cookies.get('blocChatCurrentUser');
		if (!currentUser || currentUser ===''){
			$uibModal.open({
				templateUrl: '/templates/usermodal.html',
				controller: 'UserModalCtrl.js',
				size: 'sm',
				backdrop: 'static'
			});
			currentUser = $cookies.get('blocChatCurrentUser');
		}
	}

	angular
		.module("blocChat", ["firebase", "ui.router", "ui.bootstrap", 'ngCookies'])
		.run('BlocChatCookies' ['$cookies', '$uibModal', BlocChatCookies])
		.config(config);

})();
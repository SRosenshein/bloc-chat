(function(){
	function config($stateProvider, $locationProvider){
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
			});

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: '/templates/home.html',
				controller: 'HomeCtrl as home'});
					

			/*.state('modal', {
				url: '/modal',
				controller: 'ModalCtrl as modal',
				templateUrl: '/templates/modal.html'
			});*/
	}




	angular
		.module("blocChat", ["firebase", "ui.router", "ui.bootstrap"])
		.config(config);

})();
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
				views: {
					'': {
						templateUrl: '/templates/home.html',
						controller: 'HomeCtrl as home'
					},
					'modal@home': {
						templateUrl: '/templates/modal.html',
						controller: 'ModalCtrl as modal'
					}
				}
			});

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
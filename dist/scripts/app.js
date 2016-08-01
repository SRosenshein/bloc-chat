(function(){
	function config($locationProvider, $stateProvider){
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
			});

		$stateProvider
			.state('main', {
				url: '/',
				controller: 'mainCtrl as main',
				templateUrl: "/templates/main.html"
			});
	}




	angular
		.module("blocChat", ["firebase", "ui-router"])
		.config(config)

})();
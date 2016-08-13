(function(){
	function ModalCtrl($scope, $uibModal){
		$scope.test = "something";

		$scope.open = function(){
			console.log("test");
			var modalInstance = $uibModal.open({
				templateUrl: "/templates/modal.html",
				controller: "ModalInstanceCtrl"
			});
		};
	}

	angular
		.module("blocChat")
		.controller("ModalCtrl", ["$scope", "$uibModal", ModalCtrl]);
})();
(function(){
	function ModalCtrl($scope, $uibModal){

		$scope.open = function(){
			var modalInstance = $uibModal.open({
				templateUrl: "/templates/modal.html",
				controller: "ModalInstanceCtrl",
				size: "sm",
				backdrop: "static"
			});
		};
	}

	angular
		.module("blocChat")
		.controller("ModalCtrl", ["$scope", "$uibModal", ModalCtrl]);
})();
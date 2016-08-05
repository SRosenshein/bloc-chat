(function(){
	function ModalCtrl(Room, $scope, $uibModal){

		$scope.open = function(){
			var modalInstance = $uibModal.open({
				templateUrl: "/templates/modal.html",
				controller: "ModalCtrl as modal",
				size: "sm"
			});
		};

	}

	angular
		.module("blocChat")
		.controller("ModalCtrl", ["Room", "$uibModal", "$scope", ModalCtrl]);
})();
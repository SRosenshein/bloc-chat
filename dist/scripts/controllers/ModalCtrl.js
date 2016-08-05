(function(){
	function ModalCtrl(Room, $scope, $uibModal){

		$scope.open = function(){
			var modalInstance = $uibModal.open({
				templateUrl: "/templates/modal.html",
				size: "sm",
				controller: function($uibModalInstance, $scope){
					$scope.close = function(){
						$uibModalInstance.close();
					};
				}
			});
		};

	}

	angular
		.module("blocChat")
		.controller("ModalCtrl", ["Room", "$uibModal", "$scope", ModalCtrl]);
})();
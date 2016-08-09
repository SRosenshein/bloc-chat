(function(){
	function ModalInstanceCtrl($scope, $uibModalInstance){
		$scope.confirm = function(){
			$uibModalInstance.close();
		};

		$scope.cancel = function(){
			$uibModalInstance.close();
		};
	}

	angular
		.module("blocChat")
		.controller("ModalInstanceCtrl", ["$scope", "$uibModalInstance", ModalInstanceCtrl]);
})();
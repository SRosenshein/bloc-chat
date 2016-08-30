(function(){
	function UserModalCtrl($scope, $uibModalInstance, $cookies){
		$scope.confirm = function(username){
			if (username){
				$cookies.put('blocChatCurrentUser', username.trim());
				$uibModalInstance.close();
			} else {alert("Please enter a username");}
		};

	}

	angular
		.module('blocChat')
		.controller("UserModalCtrl", ["$scope", "$uibModalInstance", "$cookies", UserModalCtrl]);
})();
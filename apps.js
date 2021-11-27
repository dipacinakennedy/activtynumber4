(function){

	'us strict';
	angular.module('MsgApp',[])
	.controller('MsgController', MsgController);

	MsgController.$inject=[$'scope']{
		$scope.name="Kennedy M. Dipacinat";
		$scope.stateOfBeing ="rotate";

		$scope.saymessage = function(){
			return"rotate!";
		};
		$scope.clickhere= function(){
			$scope.stateOfBeing="clickhere;"
		}
		}
	}


// Code goes here

var model = {
	user : "Adam",
};

var todoApp = angular.module("todoApp", []);

todoApp.run(function($http) {
	$http.get("/TodoList/todos").success(function(data) {
		model.items = data;
	});
});

todoApp.filter("checkedItems", function() {
	return function(items, showComplete) {
		var resultArr = [];
		angular.forEach(items, function(item) {
			if (item.done === false || showComplete === true) {
				resultArr.push(item);
			}
		});
		return resultArr;
	}
});

todoApp.controller("ToDoCtrl",
		function($scope, $http) {
			$scope.todo = model;
			$scope.showComplete = false;
			$scope.myValue = false;
			$scope.added = false;

			angular.module('todoApp', []).filter('custom', function() {
				return function() {
					return "";
				}
			});

			$scope.incompleteCount = function() {
				var count = 0;
				angular.forEach($scope.todo.items, function(item) {
					if (!item.done) {
						count++
					}
				});
				return count;
			}

			$scope.someTest = function() {

				if ($scope.myValue === true) {
					$scope.myValue = false;
				} else {
					$scope.myValue = true;
				}

			}

			$scope.warningLevel = function() {
				return $scope.incompleteCount() < 3 ? "label-success"
						: "label-warning";
			}
			
			//Todo change the method name
			$scope.updateComplete = function(item,complete,actionText) {

				console.log("Update complete item: " + item + " complete: " + complete);
				
				//update status
				if(complete == true){
					complete = false;
				}else{
					complete = true;
				}
				
				// Simple POST request example (passing data) :
				$http.post('/TodoList/todos', {
					todoId : item,
					action : actionText,
					done : complete
				}).success(function(data, status, headers, config) {
					console.log("Update - success!");
		
					angular.forEach($scope.todo.items, function(item) {
						if (item.todoId === data.todoId) {
							console.log("Founded!!");
							item.done = complete;
						}
					});
					
					
					// this callback will be called asynchronously
					// when the response is available
					
				}).error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
				});
				
			}

			$scope.addNewItem = function(actionText) {

				// Simple POST request example (passing data) :
				$http.post('/TodoList/todos', {
					action : actionText,
					done : false
				}).success(function(data, status, headers, config) {
					console.log("Create - success!");
					// this callback will be called asynchronously
					// when the response is available
					
					console.log("Data: " + data);
					
					$scope.todo.items.push({
						todoId : data.todoId,
						action : actionText,
						done : false
					});
					
				}).error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
				});

				
				
				$scope.actionText = "";
				$scope.myValue = false;
				$scope.added = true;
			}

		});

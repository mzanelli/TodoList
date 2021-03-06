
var model = {
	user : "Adam",
};

var todoApp = angular.module("todoApp", ['ngRoute']);

todoApp.run(function($http) {
	$http.get("/TodoList/todos").success(function(data) {
		model.items = data;
		console.log("Run application!!")
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
		function($scope, $http, $location) {
			
			$scope.todo = model;
			console.log("Initialize controller!!")
			$scope.showComplete = false;
			$scope.myValue = false;
			$scope.added = false;
			$scope.edited = "pepe parada";
			
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
			
			
			$scope.deleteTodo = function (todoId){
				
				console.log("Delete todo: " + todoId);
				
				$http.delete("/TodoList/todos/"+todoId,[]).success(function(data, status, headers, config) {
					
					console.log("Delete - success!" + data.todoId);
		
					for(var i in $scope.todo.items){
					    if($scope.todo.items[i].todoId==data.todoId){
					    	$scope.todo.items.splice(i,1);
					        break;
					        }
					}
					
					
				}).error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
				});
			}
			
			$scope.editTodo = function (todoId){
				
				console.log("Edit todo: " + todoId);
				
				$http.get("/TodoList/todos/"+todoId,[])
				.success(function(data, status, headers, config) {
					
					$scope.todo.edited = data;
	
					
				}).error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
				});
			}
			
			// Todo change the method name
			$scope.updateComplete = function(todoId,complete,actionText) {

				console.log("Update complete item: " + todoId + " complete: " + complete);
				
				// update status
				if(complete == true){
					complete = false;
				}else{
					complete = true;
				}
				
				// Simple POST request example (passing data) :
				$http.post('/TodoList/todos', {
					todoId : todoId,
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
			
			$scope.updateTask = function(task) {

				// Simple POST request example (passing data) :
				$http.post('/TodoList/todos', {
					todoId : task.todoId,
					action : task.action,
					done : task.done
				}).success(function(data, status, headers, config) {
					console.log("Update - success!");
		
					angular.forEach($scope.todo.items, function(item) {
						if (item.todoId === data.todoId) {
							console.log("Founded!!");
							item.action = task.action;
							item.done = task.done;
						}
					});
					
					$location.path('/');
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
					console.log("Create - success!" + data.todoId);
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
	
	todoApp.config(function($routeProvider) {
	  $routeProvider

	  // route for the home page
	  .when('/edit', {
	    templateUrl: 'resources/edit.html',
	    controller: 'ToDoCtrl'
	  })
	  .when('/', {
		    templateUrl: 'resources/todo.html',
		    controller: 'ToDoCtrl'
		  })	  
		  ;
	  
	});

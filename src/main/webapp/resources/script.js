
var model = {
	user : "Adam",
};

var todoApp = angular.module("todoApp", ['ngRoute']);

todoApp.run(function($http) {
	$http.get("/TodoList/tasks").success(function(data) {
		model.items = data;
		console.log(" Application run!!")
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
			
			console.log("Initialize controller!!")

			$scope.todo = model;
			$scope.todo.showForm = false;
			$scope.todo.showComplete = false;
			$scope.todo.showAddedMessage = false;
			
			$scope.incompleteCount = function() {
				var count = 0;
				angular.forEach($scope.todo.items, function(item) {
					if (!item.done) {
						count++
					}
				});
				return count;
			}

			$scope.showForm = function() {
				console.log("Show form ... ");
				$scope.todo.showAddedMessage = false;
				if ($scope.todo.showForm === true) {
					$scope.todo.showForm = false;
				} else {
					$scope.todo.showForm = true;
				}
			}

			$scope.warningLevel = function() {
				return $scope.incompleteCount() < 3 ? "label-success"
						: "label-warning";
			}
			
			
			$scope.deleteTask = function (id){
				
				console.log("Delete todo: " + id);
				
				$http.delete("/TodoList/tasks/"+id,[]).success(function(data, status, headers, config) {
					
					console.log("Delete - success!" + data.id);
		
					//remove item from the model
					for(var i in $scope.todo.items){
					    if($scope.todo.items[i].id==data.id){
					    	$scope.todo.items.splice(i,1);
					        break;
					        }
					}
					
					
				}).error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
				});
			}
			
			$scope.editTask = function (id){
				
				console.log("Edit todo: " + id);
				
				$http.get("/TodoList/tasks/"+id,[])
				.success(function(data, status, headers, config) {
					
					$scope.todo.edited = data;
	
					
				}).error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
				});
			}
			
			// Todo change the method name
			$scope.updateTaskToComplete = function(id,complete,actionText) {

				console.log("Update complete item: " + id + " complete: " + complete);
				
				// update status
				if(complete == true){
					complete = false;
				}else{
					complete = true;
				}
				
				// Simple POST request example (passing data) :
				$http.post('/TodoList/tasks', {
					id : id,
					action : actionText,
					done : complete
				}).success(function(data, status, headers, config) {
					console.log("Update - success!");
		
					angular.forEach($scope.todo.items, function(item) {
						if (item.id === data.id) {
							item.done = complete;
						}
					});
				}).error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
				});
				
			}
			
			$scope.updateTask = function(task) {

				// Simple POST request example (passing data) :
				$http.post('/TodoList/tasks', {
					id : task.id,
					action : task.action,
					done : task.done
				}).success(function(data, status, headers, config) {
					console.log("Update - success!");
		
					angular.forEach($scope.todo.items, function(item) {
						if (item.id === data.id) {
							console.log("Founded!!");
							item.action = task.action;
							item.done = task.done;
						}
					});

					//show tasks list view
					$location.path('/');
					
				}).error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
				});
				
			}

			$scope.addNewTask = function(actionText) {

				// Simple POST request example (passing data) :
				$http.post('/TodoList/tasks', {
					action : actionText,
					done : false
				}).success(function(data, status, headers, config) {
					console.log("Create - success!" + data.id);
					// this callback will be called asynchronously
					// when the response is available
					
					console.log("Data: " + data);
					
					$scope.todo.items.push({
						id : data.id,
						action : actionText,
						done : false
					});
					
				}).error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
				});
				
				$scope.actionText = "";
				$scope.todo.showForm = false;
				$scope.todo.showAddedMessage = true;
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

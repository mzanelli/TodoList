  // Code goes here

  var model = {
        user: "Adam",
  };
  
  var todoApp = angular.module("todoApp", []);

  todoApp.run(function ($http) {
    $http.get("resources/todo.json").success(function (data) {
      model.items = data;
    });
  });

  todoApp.filter("checkedItems", function () {
  return function (items, showComplete) {
  var resultArr = [];
  angular.forEach(items, function (item) {
    if (item.done === false || showComplete === true) {
      resultArr.push(item);
    }
  });
  return resultArr;
}
});

todoApp.controller("ToDoCtrl", function ($scope) {
$scope.todo = model;
$scope.showComplete = false;
$scope.myValue=false;
$scope.added = false;

angular.module('todoApp',[])
.filter('custom', function() {
  return function() {
   return "";
  }
}); 

 
$scope.incompleteCount = function () {
  var count = 0;
  angular.forEach($scope.todo.items, function (item) {
    if (!item.done) { count++ }  });
      return count;
  }
  
$scope.someTest = function () {
    
    if($scope.myValue ===true){
     $scope.myValue = false;
    }else {
      $scope.myValue = true;
    }
    
  }  
  
$scope.warningLevel = function () { 
    return $scope.incompleteCount() < 3 ? "label-success" : "label-warning";
}

$scope.addNewItem = function (actionText) {
        $scope.todo.items.push({ action: actionText, done: false });
        $scope.actionText = "";
        $scope.myValue = false;
        $scope.added = true;
}
 

  
});

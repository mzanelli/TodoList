<!DOCTYPE html>
<html ng-app="todoApp">
  <head >
    <link data-require="bootstrap@3.3.2" data-semver="3.3.2" rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css" />
    <script data-require="jquery@2.1.3" data-semver="2.1.3" src="http://code.jquery.com/jquery-2.1.3.min.js"></script>
    <script data-require="bootstrap@3.3.2" data-semver="3.3.2" src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
    <script data-require="angular.js@1.4.0-rc.0" data-semver="1.4.0-rc.0" src="https://code.angularjs.org/1.4.0-rc.0/angular.js"></script>

    <link rel="stylesheet" href="resources/style.css" />
    <script src="resources/script.js"></script>
  </head>
  
  <body ng-controller="ToDoCtrl">
    <div class="page-header">
      <h1>
        {{todo.user}}'s To Do List
       <span class="label label-default" ng-class="warningLevel()"
        ng-hide="incompleteCount() == 0">
        {{incompleteCount()}}
        </span>
      </h1>
    </div>
    <a href="#" ng-click="someTest()">Add task</a>
   
    <div class="panel">
      <div class="input-group"  ng-show="myValue">
       <input class="form-control" ng-model="actionText" />
        <span class="input-group-btn">
          <button class="btn btn-default"
          ng-click="addNewItem(actionText)">Add</button>
        </span>
      </div>
      
      <div ng-show="added">
        Item added!
        
      </div>
  

      <table class="table table-striped">
      <thead>
        <tr>
          <th>Description</th>
          <th>Done</th>
        </tr>
      </thead> 
      <tbody>  
       <tr ng-repeat="item in todo.items   |checkedItems:showComplete | orderBy:'action'">
          <td>{{item.action}}</td>
          <td>{{item.done}}</td>
          <td><input type="checkbox" ng-model="item.done" /></td>
        </tr>
      </tbody>
      </table>

      <div class="checkbox-inline">
        <label><input type="checkbox" ng_model="showComplete"> Show Complete</label>
      </div>
    </div>
  </body>
</html>

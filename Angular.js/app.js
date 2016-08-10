angular.module("todoListApp", []);

.controller('mainCTRL', function($scope,dataServoce) {
  $scope.laddTodo = function(){
    var todo= {name: "this is a new todo."}
    $scopr.todos.push(todo);

};
   $scope.hellWorld=dataSerfvice.helloworld;
  
  dataService/getTodos(function(response) {
    console.log(respone.data);
    $scope.todos=response.data;
    
    $scope.deleteTodo =  function(
      dataService
})
   
            
            
            
            
            ]         
            
});

.service('dataService', function(){
  
  this.helloConsole= function(){
    console.log("this is hello")
    
  }
  
})

*I*/method chaining 

this.getTodos =$http.get('mock/todos.json')
  .then(callback)
};

this.deleteTodo -function (todo){
  console.log("the" + todo.name + " to do has been deleted!")
};

this.saveTodo =fuction(todo) {
  console.log "the "
}
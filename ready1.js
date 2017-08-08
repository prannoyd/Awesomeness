var myApp=angular.module("myApp",[]);

myApp.service("dataService", function() {
    var data = ""; var data1="";
return{

    setData: function(data) {
	 localStorage.setItem("key",data); 
	
	},
   setData1: function(data1) {
	 localStorage.setItem("key1",data1); 
	},

    getData: function() { 
	return localStorage.getItem("key");
	},

    getData1: function() { 
	return localStorage.getItem("key1");
	}
}
});

myApp.controller("myCntrl1", function($scope, $window,dataService) {
$scope.check=function(){
	dataService.setData($scope.loc.UserName);
	dataService.setData1($scope.loc.Pwd);
	if(($scope.loc.UserName !="") && ($scope.loc.Pwd!=""))
		{
	 		$window.location = 'user.html'
		}
	}
});


myApp.controller("myCntrl2",function($scope, dataService) {
$scope.result=dataService.getData();
$scope.result1=dataService.getData1();
});
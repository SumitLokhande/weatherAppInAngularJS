//Controller
weatherAppMod.controller("weatherAppCtrl",function ($scope,weatherAppServ) {
	//scope is object provided by controller
	//weatherAppMod is name of var declared in weatherAppMod.js
	// $scope.cityName = 'Mumbai';
 $scope.date = new Date();
$scope.callWeather = function(cityName){
	var returnedPromise=weatherAppServ.getData(cityName);
	returnedPromise.then(function(dataFromService){
	$scope.ContObj=dataFromService;
	console.log($scope.ContObj,"weatherData");
	},
	function(error){
		console.log(error)
	})
}
})
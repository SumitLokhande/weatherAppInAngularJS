weatherAppMod.factory("weatherAppServ",function($http,$q) {
	return{
		getData:function(cityName){
			var defer=$q.defer();
			// var self = this;
			// var city = cityName;
			console.log(cityName);
			$http({
				method:'GET',
				url:'http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&APPID=dabfc1f81db6b0a3f44c84f3a426537f'
			}).then(function(response){
				defer.resolve(response.data);
			}),
			function(error)
			{
				defer.reject(error);
			};
			return defer.promise;
		}
	}
})
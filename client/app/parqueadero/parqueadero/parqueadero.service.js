function parqueaderosService($resource,API){
	return $resource(API+'/api/parqueaderos',{
		id:'@id'
	},
	{
		update:{
			method:'PUT'
		}

	})
}

angular.module('parqueaderosApp')
.factory('parqueaderosService',parqueaderosService);

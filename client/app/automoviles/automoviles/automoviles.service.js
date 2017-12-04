function automovilesService($resource,API){
	return $resource(API+'/api/automoviles/:id',{
		id:'@id'
	},
	{
		update:{
			method:'PUT'
		}

	})
}

angular.module('parqueaderosApp')
.factory('automovilesService',automovilesService);

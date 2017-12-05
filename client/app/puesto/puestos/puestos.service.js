function puestosService($resource,API){
	return $resource(API+'/api/puestos',{
		id:'@id'
	},
	{
		update:{
			method:'PUT'
		}

	})
}

angular.module('parqueaderosApp')
.factory('puestosService',puestosService);

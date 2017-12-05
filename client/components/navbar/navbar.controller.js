'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
	},
    {
    'title': 'Parqueadero',
    'state': 'parqueadero'
 	}
  ];

  isCollapsed = true;
  //end-non-standard


}

angular.module('parqueaderosApp')
  .controller('NavbarController', NavbarController);

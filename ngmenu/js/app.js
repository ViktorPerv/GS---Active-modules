(function() {
	var app = angular.module('catsville', [ ]);

	app.controller('MyCtrl', function($scope) {

    	$scope.showChilds = function(index){
        	$scope.items[index].active = !$scope.items[index].active;
        	collapseAnother(index);
    	};
    	var collapseAnother = function(index){
        	for(var i=0; i<$scope.items.length; i++){
            	if(i!=index){
	                $scope.items[i].active = false;
    	        }
        	}
    	};    
    	$scope.items = [
        	{
	            name: "Item1",
    	        subItems: [
        	        {name: "SubItem1"},
            	    {name: "SubItem2"}
            	]
        	},
        	{
            	name: "Item2",
            	subItems: [
	                {name: "SubItem3"},
    	            {name: "SubItem4"},
        	        {name: "SubItem5"}
            	]
        	},
        	{
	            name: "Item3",
    	        subItems: [
        	        {name: "SubItem6"}
            	]
        	}
    	];
    });
})();
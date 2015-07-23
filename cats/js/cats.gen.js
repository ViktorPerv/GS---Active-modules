var cats = angular.module('cats', []);

(function() {
	//angular.bootstrap(document.getElementById('cats-app'), ['cats']);
})();
cats.controller('catscontroller', function($scope, $http) {
	$http.get('/json/cats').success(function (result) {
		$scope.cats = (function () {
			return result.nodes;
		})();
	});
});

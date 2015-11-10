app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        resolve: {
        	users: function(PopulationFactory) {
        		return PopulationFactory.getAllUsers();
        	},
        	products: function(PopulationFactory) {
        		return PopulationFactory.getAllProducts();
        	}
        },
        controller: 'HomeCtrl'
    });
});

app.controller('HomeCtrl', function ($scope, users, products) {
	console.log('hi');
	$scope.users = users;
	$scope.products = products;

	console.log("users: ", $scope.users);
	console.log("products: ", $scope.products);
});
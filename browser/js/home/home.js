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
        	},
            views: function(PopulationFactory) {
                return PopulationFactory.getAllViews();
            }
        },
        controller: 'HomeCtrl'
    });
});

app.controller('HomeCtrl', function ($scope, products, PopulationFactory) {

    $scope.products = products
    console.log("prodcuts", products)

    PopulationFactory.getAllUsers()
    .then(function(users) {
        $scope.users = users
        console.log("users: ", $scope.users);
    })
    // $scope.products = products



	// console.log("products: ", $scope.products);
});
app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'HomeCtrl',
        resolve: {
        	allUsers: function(PopulationFactory) {
        		return PopulationFactory.getAllUsers();
        	},
        	allProducts: function(PopulationFactory) {
        		return PopulationFactory.getAllProducts();
        	},
            views: function(PopulationFactory) {
                return PopulationFactory.getAllViews();
            }
        }
    });
});

app.controller('HomeCtrl', function ($scope, allUsers, allProducts, views) {

    $scope.allUsers = allUsers;
    $scope.allProducts = allProducts;
    $scope.views = views;
    
    console.log('views', $scope.views);
    console.log('users', $scope.allUsers);
    console.log('products', $scope.allProducts);

    // Build data sctructure
    $scope.viewsByUser = [];

    $scope.allUsers.forEach(function(user) {
        var thisUser = {};
        thisUser.user = user.email;
        $scope.views.forEach(function(view) {
            if (view.user !== "" && view.product !== "") {
                if (view.user == user._id) {
                    var thisProduct; 
                    $scope.allProducts.forEach(function(product) {
                        if (view.product == product._id) thisProduct = product.name;
                    });
                    thisUser[thisProduct] = thisUser[thisProduct] + 1 || 1;
                }
            }
        });
        $scope.viewsByUser.push(thisUser);
    });
    console.log('The Thing', $scope.viewsByUser)

});
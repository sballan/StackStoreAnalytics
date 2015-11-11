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

    $scope.views = views.filter(function(view) {
        return view.user !== "" && view.product !== "";
    });

    $scope.viewsNoUser = views.filter(function(view) {
        return view.user == "" && view.product !== "";
    });

    $scope.buys = views.filter(function(view) {
        return view.checkout
    })

    console.log('BUYS', $scope.buys)
    //[ {user: userEmail, [{item, quant, price}, {item, quant, price}] ]



    // Build data sctructure
    $scope.viewsByUser = [];
    //[{user: user1, product1: 3, product2: 4}, {user: user1, product1: 3, product2: 4}]
    $scope.allUsers.forEach(function(user) {
        var thisUser = {};
        thisUser.user = user.email;
        $scope.views.forEach(function(view) {
            if (view.product !== "") {
                if (view.user && view.user == user._id) {
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

    $scope.noUser = {user: 'NA'};
    $scope.viewsNoUser.forEach(function(view) {
        $scope.allProducts.forEach(function(product) {
            if (product._id === view.product) {
                var thisProduct = product.name;
            }
            $scope.noUser[thisProduct] = $scope.noUser[thisProduct] + 1 || 1;
        })
    });
    delete $scope.noUser.undefined;
    $scope.viewsByUser.push($scope.noUser);

    // FOR BUY DATA
    $scope.userBuys = [];
    $scope.allUsers.forEach(function(user) {
        var thisUser = {};
        thisUser.user = user.email;
        $scope.buys.forEach(function(buy) {
            if (buy.items.length) {
                if (buy.user && user.user === user._id) {
                    // loop through items
                    buy.items.forEach(function(item) {
                        var thisProduct;
                        $scope.allProducts.forEach(function(product) {
                            if (view.product === product._id) thisProduct = product.name;
                        });
                        thisUser[thisProduct] = thisUser[thisProduct] + 1 || 1;
                    })
                }
            }
        });
        $scope.viewsByUser.push(thisUser);
    });

});
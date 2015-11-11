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

    // Build data sctructure
    $scope.viewsByUser = [];
    //[{user: user1, product1: 3, product2: 4}, {user: user1, product1: 3, product2: 4}]
    $scope.allUsers.forEach(function(user) {
        var thisUser = {};
        thisUser.views = {}
        thisUser.user = user.email;
        $scope.views.forEach(function(view) {
            if (view.product !== "") {
                if (view.user && view.user == user._id) {
                    var thisProduct;
                    $scope.allProducts.forEach(function(product) {
                        if (view.product == product._id) thisProduct = product.name;
                    });
                    thisUser.views[thisProduct] = thisUser.views[thisProduct] + 1 || 1;
                }
            }
        });
        $scope.viewsByUser.push(thisUser);
    });

    $scope.noUser = {user: 'NA'};
    $scope.noUser.views = {};
    $scope.viewsNoUser.forEach(function(view) {
        $scope.allProducts.forEach(function(product) {
            if (product._id === view.product) {
                var thisProduct = product.name;
            }
            $scope.noUser.views[thisProduct] = $scope.noUser.views[thisProduct] + 1 || 1;
        })
    });
    delete $scope.noUser.views.undefined;
    $scope.viewsByUser.push($scope.noUser);

    // FOR BUY DATA
   $scope.userBuys = [];
   $scope.allUsers.forEach(function(user) {
       var thisUser = {};
       thisUser.buys = {};
       thisUser.user = user.email;
       $scope.buys.forEach(function(buy) {
           if (buy.items.length) {
               if (buy.user && buy.user === user._id) {
                   // loop through items and build dictionary
                   buy.items.forEach(function(item) {
                    var thisProduct;
                       $scope.allProducts.forEach(function(product) {
                           if (item.product == product._id) {
                                thisProduct = product.name;
                           }
                       });
                       thisUser.buys[thisProduct] = thisUser.buys[thisProduct] + 1 || 1;
                   });
               }
           }
       });
       $scope.userBuys.push(thisUser);
   });
   console.log('BUY DICTIONARY', $scope.userBuys);

    $scope.viewsByUser.forEach(function(viewUser) {
        $scope.userBuys.forEach(function(buyUser) {
            if(viewUser.user === buyUser.user) {
                viewUser.buys = buyUser.buys;
            }
        })
    })
    console.log('VBU', $scope.viewsByUser);

});
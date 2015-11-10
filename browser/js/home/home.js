app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
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
        },
        controller: 'HomeCtrl'
    });
});

app.controller('HomeCtrl', function ($scope, allUsers, allProducts, views) {


    $scope.populateViews = function() {
        views.forEach(function(user) {

        })
    }
});
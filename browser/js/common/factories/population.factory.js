app.factory('PopulationFactory', function ($http) {


	var PopulationFactory = {

		getAllViews: function() {
			return $http.get('/')
			.then(function(res) {
				return res.data
			})
		},

		getAllUsers: function() {
			return $http.get('http://127.0.0.1:1337/api/users')
			.then(function(res) {
				return res.data;
			});
		},

		getAllProducts: function() {
			return $http.get('http://127.0.0.1:1337/api/products')
			.then(function(res) {
				return res.data;
			});
		},


	};

	return PopulationFactory;

});
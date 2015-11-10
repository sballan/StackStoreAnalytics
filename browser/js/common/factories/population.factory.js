app.factory('PopulationFactory', function ($http) {

	return {

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
		}

	};

});
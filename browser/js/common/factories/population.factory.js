app.factory('PopulationFactory', function ($http) {


	var PopulationFactory = {
		getAllViews: function() {
			return http.get('/views')
			.then(function(res) {
				return res.data
			})
		},

		getAllUsers: function() {
			console.log('Trying to get Users')
			return $http.get('http://127.0.0.1:1337/api/users')
			.then(function(res) {
				usersCache = res.data;
				return res.data;
			});
		},

		getAllProducts: function() {
			console.log('Trying to get Products')
			return $http.get('http://127.0.0.1:1337/api/products')
			.then(function(res) {
				productsCache = res.data;
				return res.data;
			});
		},

	};

	return PopulationFactory;

});
app.factory('PopulationFactory', function ($http) {
	var usersCache = [];
	var productsCache = [];


	PopulationFactory = {

		getAllUsers: function() {
			console.log('trying')
			return $http.get('http://127.0.0.1:1337/api/users')
			.then(function(res) {
				usersCache = res.data;
				return res.data;
			});
		},

		getAllProducts: function() {
			console.log('trying')
			return $http.get('http://127.0.0.1:1337/api/products')
			.then(function(res) {
				productsCache = res.data;
				return res.data;
			});
		},

		// getParsedEntries: function() {
		// 	console.log("This is the parsed entries function")
		// 	this.getAllUsers()
		// 	.then(function(users) {
		// 		return this.getAllProducts()
		// 	})
		// 	.then(function(products) {
		// 		return {users: usersCache, products: productsCache}
		// 	})
		// }

	};

	return PopulationFactory;

});
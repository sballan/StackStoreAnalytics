//var View = mongoose.model('View');

$(document).ready(function() {

	window.addEventListener('Analytics', sendAnalytics);

	function sendAnalytics(args) {
		var parsedItems = args.detail.items.map(function(field) {
			return {
				product: field.product._id || null,
				priceWhenOrdered: field.priceWhenOrdered || null,
				quantity: field.quantity || null
			}
		})
		viewInfo = {
			user: args.detail.user || null,
			items: parsedItems || null,
			product: args.detail.product || null,
			checkout: args.detail.checkout || false
		}

		console.log("------ANOBJ", viewInfo);

		$.ajax({
			type: 'POST',
			url: 'http://localhost:3001/',
			data: viewInfo,
			success: function(newView) {
				console.info('view event registered');
			}
		});
	}

});









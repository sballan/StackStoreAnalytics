//var View = mongoose.model('View');

$(document).ready(function() {
console.log('WE HAVE THE FILE!!!!!');

	window.addEventListener('Analytics', sendAnalytics);

	function sendAnalytics(args) {
		var viewInfo = args.detail;
		console.log("ANOBJ", viewInfo);

		$.ajax({
			type: 'POST',
			url: 'http://localhost:3001/view',
			data: viewInfo,
			success: function(newView) {
				console.info('view event registered');
			}
		});
	}

});









//var View = mongoose.model('View');

$(document).ready(function() {
console.log('WE HAVE THE FILE!!!!!');

	window.addEventListener('Analytics', sendAnalytics);

	function sendAnalytics(args) {
		var viewInfo = args.detail;
		console.log("ANOBJ", viewInfo);

		$.ajax({
			type: 'POST',
			url: 'http://127.0.0.1:3001/view',
			data: viewInfo,
			success: function(newView) {
				console.info('view event registered');
			}
		}); 
	}

});









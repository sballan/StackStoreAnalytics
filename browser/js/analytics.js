$(document).ready(function() {
	window.addEventListener('Analytics', sendAnalytics)
	})

	function sendAnalytics(args) {
		var anObj = args.detail;
		// A TON OF LOGIC

		$.post("http://192.168.3.210:3001/rememberthis", args)
	  .
	}



})

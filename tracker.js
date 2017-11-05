"use strict";
(() => {

	var amounts = [];

	function tracker(africa) {
		var countdown;
		var prevMonth = 400;
		for (var n = 0; n >= 0; n--) {
			return (() => {
				countdown = window.setInterval(() => {
					document.getElementById("africa").innerHTML = prevMonth--; // the previous month's number					
					if (document.getElementById("africa").innerHTML == africa) {						
						window.clearInterval(countdown);
					}
				}, 50);	
			})(n);
		}
	}

	function getData(region, month) {
	    var starCountRef = firebase.database().ref(region + '/' + month +'/').on('value', function(snapshot) {
		  amounts.push(snapshot.val().amount); // returns amount at specified point.
		  tracker(amounts[0])
		});
	}

	getData('Africa', 'October 2017');
	getData('East Asia', 'October 2017');
	getData('Europe', 'October 2017');
	getData('Latin America', 'October 2017');
	getData('Near East', 'October 2017');

})();




"use strict";
(() => {

	var amounts = [];

	function tracker(africa, ea, europe, la, ne) {
		document.getElementById("africa").innerHTML = africa;
		document.getElementById("ea").innerHTML = ea;
		document.getElementById("europe").innerHTML = europe;
		document.getElementById("la").innerHTML = la;
		document.getElementById("ne").innerHTML = ne;
	}

	function getData(region) {
	    firebase.database().ref(region).on('value', function(snapshot) {
	   		for (var prop in snapshot.val()) {
	 			amounts.push(snapshot.val()[prop].amount)
	 		}
	 		var total = parseInt(amounts[0]) + parseInt(amounts[1]) + parseInt(amounts[2]) + parseInt(amounts[3]) + parseInt(amounts[4]);
	 		document.getElementById("timeframe").innerHTML = Object.keys(snapshot.val())[Object.keys(snapshot.val()).length - 1] + ' : ' + total;
			tracker(amounts[0], amounts[1], amounts[2], amounts[3], amounts[4]);
		});
	}

	function getTotal() {
	    firebase.database().ref('Totals').on('value', function(snapshot) {
	   		for (var prop in snapshot.val()) {
	 			document.getElementById("totals").innerHTML = snapshot.val()[prop];
	 		}
		});
	}

	getData('Africa');
	getData('East Asia');
	getData('Europe');
	getData('Latin America');
	getData('Near East');
	getTotal();

})();




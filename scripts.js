"use strict";
(() => {
	function setData(region, amount, digit) {
		firebase.database().ref(region + '/').child(document.getElementById("input"+ digit +"time").value).set({
	    	amount : amount // sets data in Database
	  });
	}

	function setTotal() {
		firebase.database().ref('Totals').set({
	    	amount : document.getElementById("total").value // sets data in Database
	  });
	}

	document.addEventListener("DOMContentLoaded", () => {
		document.getElementById("rcusa-submit").addEventListener("click", () => {
			if (document.getElementById("input1amount").value !== '' &&
				document.getElementById("input2amount").value !== '' && 
				document.getElementById("input3amount").value !== '' &&
				document.getElementById("input4amount").value !== '' &&
				document.getElementById("input5amount").value !== '' &&
				document.getElementById("input1time").value !== '' &&
				document.getElementById("input2time").value !== '' && 
				document.getElementById("input3time").value !== '' &&
				document.getElementById("input4time").value !== '' &&
				document.getElementById("input5time").value !== '' &&
				document.getElementById("total").value !== '') {
					setData('Africa', document.getElementById("input1amount").value, 1);
					setData('East Asia', document.getElementById("input2amount").value, 2);
					setData('Europe', document.getElementById("input3amount").value, 3);
					setData('Latin America', document.getElementById("input4amount").value, 4);
					setData('Near East', document.getElementById("input5amount").value, 5);
					setTotal();
				} else {
					alert("No blank fields, please.")
				}

		});
	});

	
})();




"use strict";
(() => {
	function setData(region, amount, digit) {
		firebase.database().ref(region + '/').child(document.getElementById("input"+ digit +"month").value).set({
	    	amount : amount // sets data in Database
	  });
	}

	document.getElementById("submit").addEventListener("click", () => {
		setData('Africa', document.getElementById("input1amount").value, 1);
		setData('East Asia', document.getElementById("input2amount").value, 2);
		setData('Europe', document.getElementById("input3amount").value, 3);
		setData('Latin America', document.getElementById("input4amount").value, 4);
		setData('Near East', document.getElementById("input5amount").value, 5);

		


	});
})();




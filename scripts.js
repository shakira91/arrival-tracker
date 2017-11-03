"use strict";
(() => {
	function setData(region, amount) {
		firebase.database().ref(region + '/').child(document.getElementById("input1month").value + ' 2017').set({
	    	amount : amount // sets data in Database
	  });
	}

	document.getElementById("submit").addEventListener("click", () => {
		setData('Africa', document.getElementById("input1amount").value);

	});
})();




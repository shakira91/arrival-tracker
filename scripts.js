"use strict";
(() => {

	function getData(region, month) {
	    var starCountRef = firebase.database().ref(region + '/' + month +'/').on('value', function(snapshot) {
		  console.log(snapshot.val()) // returns amount at specified point.
		});
	}

	function setData(region, amount) {
		firebase.database().ref(region + '/').child(document.getElementById("input1month").value).set({
	    	amount : amount // sets data in Database
	  });
	}

	document.getElementById("submit").addEventListener("click", () => {
		getData('Africa', 'October');
		setData('Africa', document.getElementById("input1amount").value);

	});

	// function tracker(el, element) {
	// 	var countdown;
	// 	var num = parseInt(el); //new number: 104 
	// 	var prev = 316; 
	// console.log(prev - num)
	// 	for (var n = 0; n >= 0; n--) {
	// 		return (() => {
	// 			countdown = window.setInterval(() => {
	// 				element.innerHTML = num--;
					
	// 				if (element.innerHTML == (prev).toString()) {
						
	// 					window.clearInterval(countdown);
	// 				}
	// 			}, 100);	
	// 		})(n);
	// 	}
	// }

	// tracker(document.getElementById("input1").innerHTML, document.getElementById("input1"));
	// tracker(document.getElementById("input2").innerHTML, document.getElementById("input2"));

})();




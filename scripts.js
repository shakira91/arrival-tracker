"use strict";
(() => {

	function tracker(el, element) {
		var countdown;
		
		for (var n = 50; n > 0; n--) {
			var digit1 = element;
			return (() => {
				countdown = window.setInterval(() => { 
					digit1.innerHTML = el +-- n;
					if (element.innerHTML == el +'0') {
						window.clearInterval(countdown);
					}
				}, 50);	
			})(n);
		}
	}

	tracker(document.getElementById("input1").innerHTML, document.getElementById("input1"));
	tracker(document.getElementById("input2").innerHTML, document.getElementById("input2"));

})();




(function() {
	function timerDisplay() {												   //Caluclates remaining number of minutes and seconds from 
		var today, currentTime, timeLength, sec, min, output, demDiv, elTimer; //milliseconds, Converts integer to readable display
		today = new Date();
		elTimer = document.getElementById('countdown');
		currentTime = today.getTime();
		timeRemaining = timerLength - currentTime;
		sec = Math.floor((timeRemaining / 1000) % 60);
		min = Math.floor(timeRemaining / 1000 / 60);
		output = min + ' : ' + sec;
		elTimer.textContent = output;
		if (timeRemaining <= 0) {											   //Discontinues function loop when countdown reaches 0
			clearInterval(displayTimer);
		}
	}
	var displayTimer = setInterval(timerDisplay, 1000); 					   //Continuously updates DOM by repeatedly calling timerDisplay()
	var timerLength = (function() { 										   //Calculates the length of timer based off user's selection 
		var elSelect, mins, today, currentTime, deadline;
		today = new Date();
		currentTime = today.getTime();
		elSelect = document.getElementById('lengthofTime');
		mins = elSelect.options[elSelect.selectedIndex].value;
		deadline = currentTime + mins*60*1000;
		return deadline
	})();
})();

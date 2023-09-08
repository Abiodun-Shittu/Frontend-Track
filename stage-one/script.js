window.onload = function () {
	// Display the current day of the week
	const days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const currentDate = new Date();
	document.querySelector('[data-testid="currentDayOfTheWeek"]').innerText =
		days[currentDate.getDay()];

	// Display the current UTC time in milliseconds
	document.querySelector('[data-testid="currentUTCTime"]').innerText =
		currentDate.getTime();
};

/*
 * Google Product Death Guesser - The JavaScript
 * =============================================
 *
 * Now, I don't usually like JavaScript, but for this project - yes I have to use it, we are manipulating
 * images, text and variables and generating random numbers. We cannot do this in HTML, we need an actual
 * programming language, not a Markup Language and a Styling Language. This code may not be the best, or the
 * most efficient. But it works.
 */

AvailableProducts = 30;
UsedImage = "None";
Score = 0;
ProductsShown = 0;
TimerSeconds = 0;
TimerMinutes = 0;
TimerOn = 0;

function timerInc() {
	TimerSeconds++;
	if (TimerSeconds == 60) {
		TimerSeconds = 0;
		TimerMinutes++;
	}
	
	document.getElementById("timerContent").textContent = TimerMinutes + "m " + TimerSeconds + "s";
}

function getRandNum(max) {
	return Math.floor(Math.random() * max);
}

function returnRandNum() {
	showImg(getRandNum(AvailableProducts) + ".png");

	document.getElementById("footerText").style.textAlign = "right";
	document.getElementById("howItWorksBox").style.display = "none";
	document.getElementById("productButton").textContent = "New Product";
	document.getElementById("Score").style.display = "block";
	document.getElementById("descriptionBox").style.display = "block";
	document.getElementById("scoreCounter").textContent = Score + "/" + ProductsShown;
	document.getElementsByClassName("sideBox")[0].style.display = "block";
	document.getElementById("ContentInfo").style.display = "none";

	if (TimerOn == 0) {
		var intervalID = window.setInterval(timerInc, 1000);
		TimerOn = 1;
	}
	
}

function showImg(ImageFile) {
	document.getElementsByClassName("productImage")[0].src = "assets/img/" + ImageFile;
	UsedImage = ImageFile;
	ShowProductName(ImageFile);
	updateDescription(ImageFile);
}

function changeTitleText(isCorrect) {
	if (isCorrect == 1) {
		Score++;
		document.getElementById("prevAnswerResult").textContent = "Correct!";
		document.getElementById("scoreCounter").textContent = Score + "/" + ProductsShown;
	}

	else
		document.getElementById("prevAnswerResult").textContent = "Incorrect";

	document.getElementById("productEOLEntryDate").value = "yyyy-mm-dd";
	revealKillDate(UsedImage);
	returnRandNum();
}

function endGame() {
	alert("You were shown " + ProductsShown + " Google Products. You got " + Score + " correct");
	location.reload();
}
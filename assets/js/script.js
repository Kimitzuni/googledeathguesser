/*
 * Google Product Death Guesser - The JavaScript
 * =============================================
 *
 * Now, I don't usually like JavaScript, but for this project - yes I have to use it, we are manipulating
 * images, text and variables and generating random numbers. We cannot do this in HTML, we need an actual
 * programming language, not a Markup Language and a Styling Language. This code may not be the best, or the
 * most efficient. But it works.
 */

AvailableProducts = 18;
UsedImage = "None";
Score = 0;

function createCookie(cookieValue) {
	switch(cookieValue) {
		case 1: {
			// Cookie: Never show 'How This Works' Again
			document.cookie = "howThisWorks_Show=False";
		}
	}
}

function readCookies() {
	// Read Cookies
	let cookieList = document.cookie;

	if (cookieList.length == 0)
		console.log("No Cookies");
	else {
		if (cookieList[0] == "howThisWorks_Show=False")
		document.getElementsByClassName("howItWorks").style.display = "none";
	}
	console.log(document.cookie);
}

function getRandNum(max) {
	return Math.floor(Math.random() * max);
}

function returnRandNum() {
	showImg(getRandNum(AvailableProducts) + ".png");

	document.getElementById("howItWorksBox").style.display = "none";
	document.getElementById("productButton").textContent = "New Product";
	document.getElementById("Score").style.display = "block";
	document.getElementById("descriptionBox").style.display = "block";
}

function showImg(ImageFile) {
	document.getElementsByClassName("productImage")[0].src = "assets/img/" + ImageFile;
	UsedImage = ImageFile;
	ShowProductName(ImageFile);
}

function ShowProductName(ProductImage) {
	const prodName = document.getElementById("productName");
	switch (ProductImage) {
		case '0.png': { prodName.textContent = "Google TV"; break; }
		case '1.png': { prodName.textContent = "Google Talk"; break; }
		case '2.png': { prodName.textContent = "Google Answers"; break; }
		case '3.png': { prodName.textContent = "Google Directory"; break; }
		case '4.png': { prodName.textContent = "Google Videos"; break; }
		case '5.png': { prodName.textContent = "iGoogle"; break; }
		case '6.png': { prodName.textContent = "Google Nexus"; break; }
		case '7.png': { prodName.textContent = "Google Code"; break; }
		case '8.png': { prodName.textContent = "YouTube Originals"; break; }
		case '9.png': { prodName.textContent = "Google Play Music"; break; }
       case '10.png': { prodName.textContent = "Android Market"; break; }
	   case '11.png': { prodName.textContent = "Google+"; break; }
	   case '12.png': { prodName.textContent = "Google Buzz"; break; }
	   case '13.png': { prodName.textContent = "Google Hangouts"; break; }
	   case '14.png': { prodName.textContent = "Google URL Shortner (goo.gl)"; break; }
	   case '15.png': { prodName.textContent = "Google GOOG-411"; break; }
	   case '16.png': { prodName.textContent = "Freebase"; break; }
	   case '17.png': { prodName.textContent = "Google Picasa"; break; }

	}
}

function submitDate() {
	const inputtedDate = document.getElementById('productEOLEntryDate').value;
	switch(UsedImage) {
		case '0.png': { if (inputtedDate == "2014-06-25") { changeTitleText(1); } else { changeTitleText(0); } break; } /* Google TV */
		case '1.png': { if (inputtedDate == "2022-06-16") { changeTitleText(1); } else { changeTitleText(0); } break; } /* Google Talk */
		case '2.png': { if (inputtedDate == "2009-12-31") { changeTitleText(1); } else { changeTitleText(0); } break; } /* Google Answers */
		case '3.png': { if (inputtedDate == "2011-07-20") { changeTitleText(1); } else { changeTitleText(0); } break; } /* Google Directory */
		case '4.png': { if (inputtedDate == "2012-08-20") { changeTitleText(1); } else { changeTitleText(0); } break; } /* Google Videos */
		case '5.png': { if (inputtedDate == "2013-11-01") { changeTitleText(1); } else { changeTitleText(0); } break; } /* iGoogle */
		case '6.png': { if (inputtedDate == "2013-02-21") { changeTitleText(1); } else { changeTitleText(0); } break; } /* Google Nexus */
		case '7.png': { if (inputtedDate == "2015-01-15") { changeTitleText(1); } else { changeTitleText(0); } break; } /* Google Code */
		case '8.png': { if (inputtedDate == "2022-12-01") { changeTitleText(1); } else { changeTitleText(0); } break; } /* YT Originals */
		case '9.png': { if (inputtedDate == "2020-12-03") { changeTitleText(1); } else { changeTitleText(0); } break; } /* Google Play Music */
       case '10.png': { if (inputtedDate == "2012-03-06") { changeTitleText(1); } else { changeTitleText(0); } break; } /* Android Market */
	   case '11.png': { if (inputtedDate == "2019-04-02") { changeTitleText(1); } else { changeTitleText(0); } break; } /* Google+ */
	   case '12.png': { if (inputtedDate == "2015-12-15") { changeTitleText(1); } else { changeTitleText(0); } break; } /* Google buzz */
	   case '13.png': { if (inputtedDate == "2022-11-01") { changeTitleText(1); } else { changeTitleText(0); } break; } /* Google Hangouts */
	   case '14.png': { if (inputtedDate == "2019-03-30") { changeTitleText(1); } else { changeTitleText(0); } break; } /* goo.gl */
	   case '15.png': { if (inputtedDate == "2007-04-06") { changeTitleText(1); } else { changeTitleText(0); } break; } /* GOOG-411 */
	   case '16.png': { if (inputtedDate == "2016-05-02") { changeTitleText(1); } else { changeTitleText(0); } break; } /* Freebase */
	   case '17.png': { if (inputtedDate == "2016-05-01") { changeTitleText(1); } else { changeTitleText(0); } break; } /* Google Picasa */
	}

}

function changeTitleText(isCorrect) {
	if (isCorrect == 1) {
		Score++;
		document.getElementById("titleText").textContent = "Correct!";
		document.getElementById("scoreCounter").textContent = Score;
	}

	else
		document.getElementById("titleText").textContent = "Incorrect";

	document.getElementById("productEOLEntryDate").value = "yyyy-mm-dd";
	PreviousImage = UsedImage;
	returnRandNum();
	revealKillDate(UsedImage);
}

function revealKillDate(product) {
	killDate = document.getElementById("prevKillDate");

	killDate.textContent = "The previous product was killed on";
	return;
}

function updateDescription(product) {
	productDesc = document.getElementById("productDesc");

	switch(product) {
		case '0.png': {
			productDesc.textContent = "Google TV is a discontinued smart TV operating system from Google co-developed by \
			Intel, Sony and Logitech. It launched in October 2010 with official devices initially made by Sony and \
			Logitech. Google TV integrated the Android 3.0/3.2 operating system and the Google Chrome web browser to \
			create an interactive television overlay on top of existing online video sites to add a 10-foot user \
			interface, for a smart TV experience.";
			break;
		}

		case '1.png': {
			productDesc.textContent = "Google Talk was an instant messaging service that provided both text and voice communication. \
			The instant messaging service was variously referred to colloquially as Gchat, Gtalk, or Gmessage among its users.";
			break;
		}

		case '2.png': {
			productDesc.textContent = "The Google Directory was a web directory hosted by Google. \
			Google Business Places and Recommended Businesses is now commonly referred to as the Google directory. Not much information \
			is given about this service on the Wikipedia page. Apologies for the short description.";
		}
	}
}

function ShowProductName(ProductImage) {
	const prodName = document.getElementById("productName");
    ProductsShown++;
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
       case '18.png': { prodName.textContent = "AngularJS"; break; }
       case '19.png': { prodName.textContent = "Google Station"; break; }
	   case '20.png': { prodName.textContent = "Google Allo"; break; }
	   case '21.png': { prodName.textContent = "Google Toolbar"; break; }
	   case '22.png': { prodName.textContent = "Google Desktop"; break; }
	   case '23.png': { prodName.textContent = "Google Sidewiki"; break; }
	   case '24.png': { prodName.textContent = "Google PowerMeter"; break; }
	   case '25.png': { prodName.textContent = "Jaiku"; break; }
	   case '26.png': { prodName.textContent = "BumpTop"; break; }
	   case '27.png': { prodName.textContent = "Picnik"; break; }
	   case '28.png': { prodName.textContent = "Google Poly"; break; }
	   case '29.png': { prodName.textContent = "Google Fusion Tables"; break; }

	}
}

function submitDate() {
	const inputtedDate = document.getElementById('productEOLEntryDate').value;
	switch(UsedImage) {
		case '0.png': { if (inputtedDate == "2014-06-25") changeTitleText(1); else changeTitleText(0); break; } /* Google TV */
		case '1.png': { if (inputtedDate == "2022-06-16") changeTitleText(1); else changeTitleText(0); break; } /* Google Talk */
		case '2.png': { if (inputtedDate == "2009-12-31") changeTitleText(1); else changeTitleText(0); break; } /* Google Answers */
		case '3.png': { if (inputtedDate == "2011-07-20") changeTitleText(1); else changeTitleText(0); break; } /* Google Directory */
		case '4.png': { if (inputtedDate == "2012-08-20") changeTitleText(1); else changeTitleText(0); break; } /* Google Videos */
		case '5.png': { if (inputtedDate == "2013-11-01") changeTitleText(1); else changeTitleText(0); break; } /* iGoogle */
		case '6.png': { if (inputtedDate == "2013-02-21") changeTitleText(1); else changeTitleText(0); break; } /* Google Nexus */
		case '7.png': { if (inputtedDate == "2016-01-15") changeTitleText(1); else changeTitleText(0); break; } /* Google Code */
		case '8.png': { if (inputtedDate == "2022-12-01") changeTitleText(1); else changeTitleText(0); break; } /* YT Originals */
		case '9.png': { if (inputtedDate == "2020-12-03") changeTitleText(1); else changeTitleText(0); break; } /* Google Play Music */
       case '10.png': { if (inputtedDate == "2012-03-06") changeTitleText(1); else changeTitleText(0); break; } /* Android Market */
	   case '11.png': { if (inputtedDate == "2019-04-02") changeTitleText(1); else changeTitleText(0); break; } /* Google+ */
	   case '12.png': { if (inputtedDate == "2015-12-15") changeTitleText(1); else changeTitleText(0); break; } /* Google Buzz */
	   case '13.png': { if (inputtedDate == "2022-11-01") changeTitleText(1); else changeTitleText(0); break; } /* Google Hangouts */
	   case '14.png': { if (inputtedDate == "2019-03-30") changeTitleText(1); else changeTitleText(0); break; } /* goo.gl */
	   case '15.png': { if (inputtedDate == "2007-04-06") changeTitleText(1); else changeTitleText(0); break; } /* GOOG-411 */
	   case '16.png': { if (inputtedDate == "2016-05-02") changeTitleText(1); else changeTitleText(0); break; } /* Freebase */
	   case '17.png': { if (inputtedDate == "2016-05-01") changeTitleText(1); else changeTitleText(0); break; } /* Google Picasa */
       case '18.png': { if (inputtedDate == "2022-01-01") changeTitleText(1); else changeTitleText(0); break; } /* AngularJS */
       case '19.png': { if (inputtedDate == "2020-09-30") changeTitleText(1); else changeTitleText(0); break; } /* Google Station */
       case '20.png': { if (inputtedDate == "2019-03-12") changeTitleText(1); else changeTitleText(0); break; } /* Google Allo */
	   case '21.png': { if (inputtedDate == "2021-12-12") changeTitleText(1); else changeTitleText(0); break; } /* Google Toolbar */
	   case '22.png': { if (inputtedDate == "2011-09-14") changeTitleText(1); else changeTitleText(0); break; } /* Google Desktop */
	   case '23.png': { if (inputtedDate == "2011-12-01") changeTitleText(1); else changeTitleText(0); break; } /* Google Sidewiki */
	   case '24.png': { if (inputtedDate == "2011-09-16") changeTitleText(1); else changeTitleText(0); break; } /* Google PowerMeter */
	   case '25.png': { if (inputtedDate == "2015-01-15") changeTitleText(1); else changeTitleText(0); break; } /* Jaiku */
	   case '26.png': { if (inputtedDate == "2012-08-01") changeTitleText(1); else changeTitleText(0); break; } /* BumpTop */
	   case '27.png': { if (inputtedDate == "2013-04-19") changeTitleText(1); else changeTitleText(0); break; } /* Picnik */
	   case '28.png': { if (inputtedDate == "2021-04-30") changeTitleText(1); else changeTitleText(0); break; } /* Google Poly */
	   case '29.png': { if (inputtedDate == "2019-12-03") changeTitleText(1); else changeTitleText(0); break; } /* Google Fusion Tables */
	}

}

function revealKillDate(product) {
	killDate = document.getElementById("prevKillDate");

	switch(product) { 
		case '0.png': { killDate.textContent = "Google TV, killed June 25th 2014"; break; }
		case '1.png': { killDate.textContent = "Google Talk, killed June 16th 2022, replaced by Google Hangouts/Chat"; break; }
		case '2.png': { killDate.textContent = "Google Answers, killed December 31st 2009"; break; }
		case '3.png': { killDate.textContent = "Google Directory, killed July 20th 2011"; break; }
		case '4.png': { killDate.textContent = "Google Videos, killed August 20th 2012"; break; }
		case '5.png': { killDate.textContent = "iGoogle, killed November 1st 2013"; break; }
		case '6.png': { killDate.textContent = "Google Nexus, replaced by Google Pixel on February 21st 2013"; break; }
		case '7.png': { killDate.textContent = "Google Code, killed January 15th 2016"; break; }
		case '8.png': { killDate.textContent = "YouTube Originals, set to die December (1st) 2022"; break; }
		case '9.png': { killDate.textContent = "Google Play Music, killed December 3rd 2020"; break; }
	   case '10.png': { killDate.textContent = "Android Market, replaced by Google Play on March 6th 2012"; break; }
	   case '11.png': { killDate.textContent = "Google+, killed April 2nd 2019"; break; }
	   case '12.png': { killDate.textContent = "Google Buzz, killed December 15th 2015"; break; }
       case '13.png': { killDate.textContent = "Google Hangouts, replaced by Google Chat and set to die November 1st 2022"; break; }
       case '14.png': { killDate.textContent = "Google URL Shortener (goo.gl), killed March 30th 2019"; break; }
       case '15.png': { killDate.textContent = "Google GOOG-411, killed April 6th 2007"; break; }
       case '16.png': { killDate.textContent = "Freebase, killed May 2nd 2016, replaced by WikiData"; break; }
       case '17.png': { killDate.textContent = "Google Picasa, killed May 1st 2016"; break; }
       case '18.png': { killDate.textContent = "AngularJS, security updates ceased January 1st 2022"; break; }
       case '19.png': { killDate.textContent = "Google Station, killed September 30th 2020"; break; }
       case '20.png': { killDate.textContent = "Google Allo, killed March 12th 2019"; break; }
	   case '21.png': { killDate.textContent = "Google Toolbar, killed quietly December 12th 2021 after 21 years."; break; }
	   case '22.png': { killDate.textContent = "Google Desktop, killed September 14th 2011"; break; }
	   case '23.png': { killDate.textContent = "Google Sidewiki, killed December (1st) 2011"; break; }
	   case '24.png': { killDate.textContent = "Google PowerMeter, killed September 16th 2011"; break; }
	   case '25.png': { killDate.textContent = "Jaiku, killed January 15th 2012"; break; }
	   case '26.png': { killDate.textContent = "BumpTop, discontinued August (1st) 2012, now Open Source on GitHub"; break; }
	   case '27.png': { killDate.textContent = "Picnik, killed on April 19th 2013"; break; }
	   case '28.png': { killDate.textContent = "Google Poly, killed on April 30th 2021"; break; }
	   case '29.png': { killDate.textContent = "Google Fusion Tables, killed on December 3rd 2019"; break; }
	}
	return;
}

function updateDescription(product) {
	productDesc = document.getElementById("productDesc");

	switch(product) {
		//#region Google TV
		case '0.png': {
			productDesc.textContent = "Google TV is a discontinued smart TV operating system from Google co-developed by \
			Intel, Sony and Logitech. It launched in October 2010 with official devices initially made by Sony and \
			Logitech. Google TV integrated the Android 3.0/3.2 operating system and the Google Chrome web browser to \
			create an interactive television overlay on top of existing online video sites to add a 10-foot user \
			interface, for a smart TV experience.";
			break;
		}
		//#endregion

		//#region Google Talk
		case '1.png': {
			productDesc.textContent = "Google Talk was an instant messaging service that provided both text and voice communication. \
			The instant messaging service was variously referred to colloquially as Gchat, Gtalk, or Gmessage among its users.";
			break;
		}
		//#endregion

		//#region Google Answers
		case '2.png': {
			productDesc.textContent = "Google Answers was an online knowledge market offered by Google, similar to that of Yahoo! Answers";
			break;
		}
		//#endregion

		//#region Google Directory
		case '3.png': {
			productDesc.textContent = "The Google Directory was a web directory hosted by Google. \
			Google Business Places and Recommended Businesses is now commonly referred to as the Google directory. Not much information \
			is given about this service on the Wikipedia page. Apologies for the short description.";
			break;
		}
		//#endregion

		//#region Google Videos
		case '4.png': {
			productDesc.textContent = "Google Video was a free video hosting service launched by the multinational technology company Google on \
			January 25, 2005. As similar to YouTube, this platform allowed video clips to be hosted on Google servers and embedded on to other \
			websites.";
			break;
		}
		//#endregion

		//#region iGoogle
		case '5.png': {
			productDesc.textContent = "iGoogle was a customizable Ajax-based start page or personal web portal launched by Google in May 2005. \
			It was discontinued because the company believed the need for it had eroded over time. At its peak in February 2007, the estimated \
			users were 7.1 million, in April 2008 about 20% of Google's traffic came from iGoogle.";
			break;
		}
		//#endregion

		//#region Google Nexus
		case '6.png': {
			productDesc.textContent = "Google Nexus is a discontinued line of consumer electronic devices that run the Android operating system. \
			Google managed the design, development, marketing, and support of these devices, but some development and all manufacturing were \
			carried out by partnering with original equipment manufacturers (OEMs).";
			break;
		}
		//#endregion
		
		//#region Google Code
		case '7.png': {
			productDesc.textContent = "Google previously ran a project hosting service called Google Code that provided revision control \
			offering Subversion, Mercurial and Git (transparently implemented using Bigtable as storage), an issue tracker, and a wiki for \
			documentation. The service was available and free for all OSI-approved Open Source projects (as of 2010, it was strongly recommended but \
			no longer required to use one of the nine well-known open source licenses: Apache, Artistic, BSD, GPLv2, GPLv3, LGPL, MIT, MPL and EPL).";
			break;
		}
		//#endregion

		//#region YouTube Originals
		case '8.png': {
			productDesc.textContent = "YouTube Premium offers original films and series produced in collaboration with professional studios and \
			YouTube personalities, under the banner YouTube Originals. Well known shows produced under this banner are Scare PewDiePie, Vsauce's \
			'Mind field' and The Slow-Mo Guys' 'Planet Slow Mo'.";
			break;
		}
		//#endregion

		//#region Google Play Music
		case '9.png': {
			productDesc.textContent = "Google Play Music is a discontinued music and podcast streaming service and an online music locker operated \
			by Google as part of its Google Play line of services. The service was announced on May 10, 2011; after a six-month, invitation-only beta \
			period, it was publicly launched on November 16, 2011.";
			break;
		}
		//#endregion

		//#region Android Market
		case '10.png': {
			productDesc.textContent = "Google Play, also branded as the Google Play Store and formerly Android Market, \
			is a digital distribution service operated and developed by Google. It serves as the official app store for certified devices \
			running on the Android operating system and its derivatives as well as Chrome OS, allowing users to browse and download applications \
			developed with the Android software development kit (SDK) and published through Google";
			break;
		}
		//#endregion

		//#region Google+
		case '11.png': {
			productDesc.textContent = "Google+ was a social network owned and operated by Google. The network was launched on June 28, 2011, \
			in an attempt to challenge other social networks, linking other Google products like Google Drive, Blogger and YouTube.";
			break;
		}
		//#endregion

		//#region Google Buzz
        case '12.png': {
            productDesc.textContent = "Google Buzz was a social networking, microblogging and messaging tool that was developed by Google which replaced Google \
            Wave and integrated into their web-based email program, Gmail. Users could share links, photos, videos, status messages and comments \
            organized in \"conversations\" and visible in the user's inbox.";
            break;
        }
		//#endregion

		//#region Google Hangouts
        case '13.png': {
            productDesc.textContent = "Google Hangouts is a discontinued cross-platform instant messaging service developed by Google. Originally \
            a feature of Google+, Hangouts became a standalone product in 2013, when Google also began integrating features from Google+ Messenger \
            and Google Talk into Hangouts.";
            break;
        }
		//#endregion

		//#region Google URL Shortener (goo.gl)
        case '14.png': {
            productDesc.textContent = "Google URL Shortener, also known as goo.gl, is a discontinued URL shortening service owned by Google. It was \
            launched in December 2009, initially used for Google Toolbar and Feedburner. The company launched a separate website, goo.gl, in September \
            2010";
            break;
        }
		//#endregion

		//#region GOOG-411
        case '15.png': {
            productDesc.textContent = "GOOG-411 was a telephone service launched by Google in 2007, that provided a speech-recognition-based business \
            directory search, and placed a call to the resulting number in the United States or Canada. The service was accessible via a toll-free \
            telephone number";
            break;
        }
		//#endregion

		//#region Freebase
		case '16.png': {
            productDesc.textContent = "Freebase was a large collaborative knowledge base consisting of data composed mainly by its community members. \
            It was an online collection of structured data harvested from many sources, including individual, user-submitted wiki contributions.";
            break;
        }
		//#endregion

		//#region Google Picasa
        case '17.png': {
            productDesc.textContent = "Picasa was a cross-platform image organizer and image viewer for organizing and editing digital photos, \
            integrated with a now defunct photo-sharing website, originally created by a company named Lifescape (which at that time was incubated \
            by Idealab) in 2002. \"Picasa\" is a blend of the name of Spanish painter Pablo Picasso, the phrase mi casa (Spanish for \"my house\") \
            and \"pic\" for pictures.";
            break;
        }
		//#endregion

		//#region AngularJS
        case '18.png': {
            productDesc.textContent = "AngularJS was a JavaScript-based front-end framework for developing single-page apps. \
            It was maintained mainly by Google and a community of individuals and corporations. It aimed to simplify both the development and the \
            testing of such applications by providing a framework for client-side model–view–controller and model–view–viewmodel \
            architectures, along with components commonly used in web applications and progressive web applications.";
            break;
        }
		//#endregion

		//#region Google Station
        case '19.png': {
            productDesc.textContent = "Google Station was a Google service that allowed partners to roll out Wi-Fi hotspots in public places by \
            providing software and advice on hardware to turn fiber connections into Wi-Fi. It was only implemented in India and Indonesia but in \
            March 2018, the service was launched in Mexico.";
            break;
        }
		//#endregion

		//#region Google Allo
        case '20.png': {
            productDesc.textContent = "Google Allo was an instant messaging mobile app by Google for the Android and iOS mobile operating systems, \
            with a web client available on Google Chrome, Mozilla Firefox, and Opera.";
            break;
        }
		//#endregion

		//#region Google Toolbar
		case '21.png': { 
			productDesc.textContent = "Google Toolbar is a discontinued web browser toolbar for Internet Explorer, developed by Google. \
			It was first released in 2000 for Internet Explorer 5. Google Toolbar was also distributed as a Mozilla plug-in for Firefox from \
			September 2005 to June 2011.";
			break;
		}
		//#endregion

		//#region Google Desktop
		case '22.png': {
			productDesc.textContent = "Google Desktop was a computer program with desktop search capabilities, created by Google for Linux, Apple Mac \
			OS X, and Microsoft Windows systems. It allowed text searches of a user's email messages, computer files, music, photos, chats, Web pages \
			viewed, and the ability to display \"Google Gadgets\" on the user's desktop in a Sidebar.";
			break;
		}
		//#endregion

		//#region Google Sidewiki
		case '23.png': {
			productDesc.textContent = "Google Sidewiki was a web annotation tool from Google, launched in September 2009. Sidewiki was a browser \
			extension that allowed anyone logged into a Google Account to make and view comments about a given website in a sidebar. Despite the name, \
			the tool was not a collaborative wiki, though the comments were editable by the author.";
			break;
		}
		//#endregion

		//#region Google PowerMeter
		case '24.png': { 
			productDesc.textContent = "Google PowerMeter was a software project of Google's philanthropic arm, Google.org, to help consumers track \
			their home electricity usage. The development of the software was part of an effort by Google to invest in renewable energy, \
			electricity grid upgrades, and other measures that would reduce greenhouse gas emissions.";
			break;
		}
		//#endregion

		//#region Jaiku
		case '25.png': {
			productDesc.textContent = "Jaiku was a social networking, micro-blogging and lifestreaming service comparable to Twitter, founded a month \
			before the latter. Jaiku was founded in February 2006 by Jyri Engeström and Petteri Koponen from Finland and launched in July of \
			that year. It was purchased by Google on October 9, 2007.";
			break;
		}
		//#endregion

		//#region BumpTop
		// I actually think this product is really cool
		case '26.png': {
			productDesc.textContent = "BumpTop was a 3D desktop environment that simulates the normal behavior and physical properties of a \
			real-world desk and enhances it with automatic tools to organize its contents. It is aimed at stylus interaction, making it more suitable \
			for tablet computers and handheld PCs. It was created at the University of Toronto as Anand Agarawala's master's thesis.";
			break;
		}
		//#endregion

		//#region Picnik
		case '27.png': {

		}
		//#endregion

		//#region Poly
		case '28.png': {
			productDesc.textContent = "Poly was a website created by Google for users to browse, distribute, and download 3D objects. It was \
			intended to allow creators to easily share and access 3D objects. It featured a free library containing thousands of 3D objects for use \
			in virtual reality and augmented reality applications.";
			break;
		}
		//#endregion

		//#region Google Fusion Tables
		case '29.png': { 
			productDesc.textContent = "Google Fusion Tables was a web service provided by Google for data management. \
			Fusion tables can be used for gathering, visualising and sharing data tables. Data are stored in multiple tables that Internet users \
			can view and download.";
			break;
		}
		//#endregion
	}
}

# Google Product Death Guesser

Google has a notorious reputation for being a company that kills products instead of maintaining them. So I turned this into a game.

## How it works
How it works is simple. When you press the *Show Product* button, a logo of a Google product will appear, and you have to guess when it was, or going to be, killed. For every one you get correct you get an extra point.

It is written in HTML, CSS and JavaScript (a language I have a reputation of hating), but in this case, I have to use JavaScript. We're messing with HTML and user input, we cannot get around that. We need JS.

All the pictures on it are taken straight from the Wikipedia pages of the corrosponding product.

If the date given on the Wikipedia page didn't specify a day, eg:

> *PRODUCT NAME* ended support November 2013

We will take the first day of the month, so for the example above, the answer would be November 1st 2013.

## Fonts
Fonts used are 'Ubuntu' and 'Product Sans'.

## TODO List
Here contains things that I'm either gonna implement or you are free to implement and open a pull request to have that change here.

|                Feature                |
|:-------------------------------------:|
| Mobile Support - Resize Appropriately |

## Download for Offline Playing
Are you going to be without internet for a while? Perhaps on a flight, or just technical difficulties. Want to play this offline? Well, luckily you can.

You can click [here]() and download a zip file of this Git repository, and you can play it without an internet connection.

Simply unzip it using your favourite archive tool, whether 7zip, WinRAR etc. And then just open `index.html` in a web browser.

## LICENSE
This is licensed under the GNU General Public License v2. I usually don't license my site projects, but this is one that I actually spent a fair bit of time on and I feel like that's an appropriate license, despite that being the license I use everywhere (GPL2 Bias)
/*var headlines = JSON.parse(raw_headlines);
*/
var headlines = [{"right_link": "http://www.foxnews.com/politics/2017/02/16/trump-blasts-out-control-media-defends-agenda-at-heated-press-conference.html", "right_source": "FOX News", "right_date": "2/16/2017", "left_headline": "\"Trump Lashes Out\" -CNN 4:07 PM 2/16.....Article headline: \"An Amazing Moment in History: Donald Trump's press conference.\"", "topic": "Press Conference 2/16", "left_date": "2/16/2017", "left_source": "CNN", "middle_headline": "Trump holds a 77 minute press conference.", "right_headline": "\"Press Beatdown: Trump blasts out of control media, defends agenda administration.\" - Fox News 4:07 PM 2/16", "left_link": "http://www.cnn.com/2017/02/16/politics/donald-trump-press-conference-amazing-day-in-history/index.html"},
{"right_link": "http://www.foxnews.com/politics/2017/02/15/just-like-russia-trump-renews-fight-with-intelligence-agencies-amid-leaks.html", "right_source": "FOX News", "right_date": "2/15/2017", "left_headline": "\"Trump Aides Were In Constant Touch With Senior Russian Officials During Campaign\" - CNN 2/15 10:37pm", "topic": "Russia Leaks", "left_date": "2/15/2017", "left_source": "CNN", "middle_headline": "Trump's administration is accussed of being in touch with Russia.", "right_headline": "\" 'Just like Russia' Trump renews fight with intellegence agencies amid leaks.\" - Fox News 2/15", "left_link": "http://www.cnn.com/2017/02/14/politics/donald-trump-aides-russians-campaign/index.html"},
{"right_link": "http://www.foxnews.com/politics/2017/02/16/trump-blasts-out-control-media-defends-agenda-at-heated-press-conference.html", "right_source": "FOX News", "right_date": "1/30/2017", "left_headline": "\"Trump signs executive order to keep out 'radical Islamic terrorists'\" 2:02 PM 1/30 ", "topic": "Immigration Ban", "left_date": "1/30/2017", "left_source": "CNN", "middle_headline": "Trump banned people from the following countries (that are predominantly muslim) from entering the US: Iraq, Syria, Iran, Sudan, Libya, Somalia and Yemen.\n\n", "right_headline": "\"Some Muslim-American activists back Trump's extreme vetting.\" -Fox News 1/30 ", "left_link": "http://www.cnn.com/2017/01/27/politics/trump-plans-to-sign-executive-action-on-refugees-extreme-vetting/"},
{"right_link": "http://www.foxnews.com/us/2017/01/29/tears-and-detention-for-us-visitors-as-trump-travel-ban-hits.html", "right_source": "FOX News", "right_date": "1/29/2017", "left_headline": "\"Inside the confusion of the Trump executive order and travel ban\" -CNN 1/30 11:39", "topic": "Immigration Ban", "left_date": "1/30/2017", "left_source": "CNN", "middle_headline": "Trump's travel ban affect's hundreds of travelers in its first days.", "right_headline": "\"Tears and detention for US visitors as Trump travel ban hits\" -Fox News 1/29", "left_link": "http://www.cnn.com/2017/01/28/politics/donald-trump-travel-ban/"},
{"right_link": "http://www.foxnews.com/opinion/2017/02/07/heres-why-betsy-devos-will-be-great-education-secretary.html", "right_source": "FOX News", "right_date": "2/7/2017", "left_headline": "\"A vote for DeVos is a vote for resegregation\" -CNN 2/5 7:58 pm", "topic": "Betsy De Vos", "left_date": "2/5/2017", "left_source": "CNN", "middle_headline": "Betsy De Vos will be sworn in as the new Education Secretary. ", "right_headline": "\"Here's why Betsy DeVos will be a great Education Secretary\" - Fox News 2/7", "left_link": "http://www.cnn.com/2017/02/05/opinions/devos-racism-public-school-opinion-wong/"},
{"right_link": "http://www.foxnews.com/opinion/2017/01/30/trumps-travel-ban-and-democrats-big-con.html", "right_source": "FOX News", "right_date": "1/30/2017", "left_headline": "\"It's a Muslim ban, and it's unconstitutional\" - CNN 2/6 8:26pm", "topic": "Travel Ban", "left_date": "2/6/2017", "left_source": "CNN", "middle_headline": "Trump's travel ban is a hotly contested.", "right_headline": "\"Trump's travel ban and the Democrats' big con\" -Fox News 1/30", "left_link": "http://www.cnn.com/2017/02/06/opinions/muslim-ban-unconstitutional-opinion-pate/"},
{"right_link": "#", "right_source": "WSJ", "right_date": "Feb 15", "left_headline": "Example", "topic": "Sample", "left_date": "January 30th, 5pm", "left_source": "NYT", "middle_headline": "This is an example", "right_headline": "Test", "left_link": "#"}]

var headlineNumber = headlines.length - 1;

function newHeadline() {
	 headlineNumber = (headlineNumber + 1) % headlines.length;
	document.getElementById('leftHeadline').innerHTML = headlines[headlineNumber]["left_headline"];
	document.getElementById('leftLink').href = headlines[headlineNumber]["left_link"];
	document.getElementById('leftSource').innerHTML = headlines[headlineNumber]["left_source"];
	document.getElementById('leftDate').innerHTML = headlines[headlineNumber]["left_date"];
	
	document.getElementById('rightHeadline').innerHTML = headlines[headlineNumber]["right_headline"];
	document.getElementById('rightLink').href = headlines[headlineNumber]["right_link"];
	document.getElementById('rightSource').innerHTML = headlines[headlineNumber]["right_source"];
	document.getElementById('rightDate').innerHTML = headlines[headlineNumber]["right_date"];
	
	/*document.getElementById('topic').innerHTML = headlines[headlineNumber]["topic"]; */
	document.getElementById('middleHeadline').innerHTML = headlines[headlineNumber]["middle_headline"];
	}
	
newHeadline()

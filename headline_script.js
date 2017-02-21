var promise = function(url){
  return new Promise(function(resolve, reject){
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
    if (request.status == 200) {
        resolve(request.response);
      }
      else {
        reject(Error(request.statusText));
      }
    };
    request.onerror = function() {
      reject(Error("Network Error"));
    };
    request.send();
  });
}
var spreadsheet = '1DsdrF3dQxpTHGdegq9KfCBRzP_ag2wP7Hw_U2uv9FbA';
var headline2;
var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheet + "/od6/public/values?alt=json"
promise(url).then((response) => {
  	headline2 = JSON.parse(response);
  	newHeadline()
}, (error) => {
	console.log('error', error);
	// window.location.reload();
})

var headlineNumber = headlines.length - 1;
function newHeadline() {
	var entries = headline2.feed.entry;
	 headlineNumber = (headlineNumber + 1) % entries.length;
	 var entry = headline2.feed.entry[headlineNumber];
	document.getElementById('leftHeadline').innerHTML = entry.gsx$leftsummary.$t;
	document.getElementById('leftLink').href = entry.gsx$leftlink.$t;
	document.getElementById('leftSource').innerHTML = entry.gsx$leftsource.$t;
	document.getElementById('leftDate').innerHTML = entry.gsx$leftdate.$t;
	
	document.getElementById('rightHeadline').innerHTML = entry.gsx$rightsummary.$t;
	document.getElementById('rightLink').href = entry.gsx$rightlink.$t;
	document.getElementById('rightSource').innerHTML = entry.gsx$rightsource.$t;
	document.getElementById('rightDate').innerHTML = entry.gsx$rightdate.$t;
	
	/*document.getElementById('topic').innerHTML = headlines[headlineNumber]["topic"]; */
	document.getElementById('middleHeadline').innerHTML = entry.gsx$middlesummary.$t;
}
	


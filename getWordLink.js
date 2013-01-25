 var page = new WebPage(),
     system = require('system'),
     urlBase = 'http://sv.forvo.com/word/',
     word = "zahlungsbefehl",
     debug = false;
 
var log = function(logMsg) {
  if(debug)
    console.log(logMsg);
}

 /**
  * This callback is invoked when a script writes to the JavaScript console. 
  */
 page.onConsoleMessage = function (msg, line, source) {
  // links only
  if (msg.substring(0, 4) == "http")
     console.log(msg);
 };
 
 /**
  * This callback is invoked when there is a JavaScript alert. 
  */
 page.onAlert = function (msg) {
     console.log('page.alert> ' + msg);
 };


 var makeURL = function(word) {
  return urlBase + word;
 }

 var usage = function() {
  console.log("USAGE: phantomjs getWordLink.js <word>");
 }

 // START OF SCRIPT
  if (system.args.length === 1) {
    usage();
    phantom.exit();
  } 

 var url = makeURL(system.args[1]);
 page.open(url, function (status) {
  if (status === 'success') {
    log("# Loading page "+url);
    // Evaluate a jQuery expression to get hold of the download link,
    // then log it to console. jQuery is already loaded per defualt by forvo.
    page.evaluate(function() {
     var link = ($("[download]")[0].href);
     console.log(link); // Logs to the "browser" console, which in turn is redirected to console (above)
    });
    phantom.exit();
  }
});



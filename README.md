# Forvo Link
Phantom.js script that accepts a word on the command line and then prints the corresponding mp3 download link on http://sv.forvo.com.

## Installation

- Install [Phantom.js](http://phantomjs.org/) 
- Clone/Download this project
- Done!

## Example command line usage
	$ phantomjs getWordLink.js zahlungsbefehl
	http://sv.forvo.com/download/mp3/zahlungsbefehl/de/1973191

## Notes
The script is reallt slow, but it does the trick. Set variable `debug = true;` to get some minor debug logging.

*2013-Jan-25* First working version, but without error management or handling of "word not found" 
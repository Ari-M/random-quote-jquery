//script.js

//DECLARE VARIABLES AND ARRAYS
var quotePlaceholder = $('#quoteText');
var button = $('#generator');

var quotes = [
	"Looks like I picked the wrong week to quit sniffing glue.  -Steve McCroskey",
	"Joey, have you ever been in a...in a Turkish Prison?  -Captain Oveur",
	"Looks like I picked the wrong week to quit amphetamines.  -Steve McCroskey",
	"Boy trapped in refrigerator eats own foot.  -Newspaper Headline",
	"Shanna, they bought their tickets, they knew what they were getting into. I say, let 'em crash.  -Jack Kirkpatrick"
];

var quoteInserter = function() {
	console.log('quoteInserter executed')
	pickRandom()
	var i = pickRandom();
	var quote = quotes[i];
	$(quotePlaceholder).text(quote);
};

var pickRandom = function() {
	console.log('pickRandom executed')
	var chosen = Math.floor(Math.random()*quotes.length);
	return chosen;
};

//Event Listeners
$(button).on('click', quoteInserter);



$(document).on('ready', function() {
  
var letterCapitalize = function(sentance){

	sentance = sentance.split(" ");

	for (var i = 0; i <sentance.length; i++) {
		for (var j = 0; j <sentance[i].length; j++) {
			var caps

			if (j===0){
				 caps = sentance[i][j].toUpperCase();
			}
			else {
				caps += sentance[i][j];
			}
		}

	};
	return caps
	// var caps = sentance[0].toUpperCase();

	// for (var i = 1; i<sentance.length; i++) {
	// 	caps += sentance[i]
	// 	};
	
	// console.log(caps);

}
letterCapitalize('jon like pizza')








});


var wordCount = function(words){


}

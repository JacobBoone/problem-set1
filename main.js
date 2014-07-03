$(document).on('ready', function() {
	  
	var letterCapitalize = function(sentance){

		sentance = sentance.split(" ");
		// this goes thru each word
		for (var i = 0; i <1; i++) {
			// this goes thru each letter of each word
			for (var j = 0; j <sentance[i].length-1; j++) {
				// var caps 

				if (j===0){
					 caps = sentance[i][j].toUpperCase();
				}
				else {
					caps += sentance.join(" ");
					// caps += sentance[i][j];
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
	letterCapitalize('jon likes pizza')


// ROUGHLY what it was before i changed it about - GIVES only Pizza
	// var letterCapitalize = function(sentance){

	// 	sentance = sentance.split(" ");

	// 	for (var i = 0; i <sentance.length; i++) {
	// 		for (var j = 0; j <sentance[i].length; j++) {
	// 			var caps

	// 			if (j===0){
	// 				 caps = sentance[i][j].toUpperCase();
	// 			}
	// 			else {
	// 				caps += sentance[i][j];
	// 			}
	// 		}

	// 	};
	// 	return caps
	// 	// var caps = sentance[0].toUpperCase();

	// 	// for (var i = 1; i<sentance.length; i++) {
	// 	// 	caps += sentance[i]
	// 	// 	};
		
	// 	// console.log(caps);

	// }
	// letterCapitalize('jon like pizza')






});


var wordCount = function(words){

	words = words.split(" ")
	var count = words.length

	return count

}


wordCount('I hate jquery functions. They can go to Hades!')









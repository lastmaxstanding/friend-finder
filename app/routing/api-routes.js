var path = require('path');



var friends = require('../data/info.js').friends;
var total = 0;
var other = [];
var match = 0;

module.exports = function(app){

	app.get('/api/friends', function(request, response){

		response.json(friends); 
	});

	app.post('/api/friends', function(request, response){

		for(var j=0; j < friends.length; j++){

			for(var i=0; i < 10; i++){

				other += Math.abs(parseInt(request.body.scores[i]) - parseInt(friends[j].scores[i]));
			}
			other.push(other);
			other = 0;
		}

		

		for(var x = 1; x < allDiffs.length; x++){

			if(other[x] < other[bestMatch])
				match = x;
		}	



		var html = "<html><head><body><p>" + match + "</p></body></html>";

		var newFriend = request.body;

		friends.push(newFriend);

		other.length = 0;
		response.send(html);


		console.log("best match is " + match);
		

	});

}
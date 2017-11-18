/* Verify if property exists */
var armory = {
	addSword: function(sword) {
		this.swords = this.swords ? this.swords : []; // if swords do not exists, set them a empty array
		this.swords.push(sword);
	}
};


/* Using a logical assignment */
armory.addSword = function(sword) {
	this.swords = this.swords || []; // the OR operator take the first value not falsy
	this.swords.push(sword);
};

//obs.: when all elements are false, we'll get the last falsy value

armory.addSword("Katana");
armory.addSword("Broadsword");
console.log(armory.swords);

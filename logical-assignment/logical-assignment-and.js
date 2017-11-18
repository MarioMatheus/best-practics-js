var armory = {
	addSword: function(sword) {
		this.swords = this.swords || []; // the OR operator take the first value not falsy
		this.swords.push(sword);
	},
	retrieveSword: function(request) {
		return  this.swords && (this.swords.indexOf(request) >= 0) ?
				this.swords.splice(this.swords.indexOf(request), 1)[0] : undefined;
	}
};

armory.addSword("Katana");
armory.addSword("Broadsword");
armory.addSword("Claymore");
armory.addSword("Scimitar");
console.log(armory.swords);

var isKnight = true;
var weapon = isKnight && armory.retrieveSword("Claymore");
// obs.: the AND operator take the first falsy || the last truthy

console.log(weapon);

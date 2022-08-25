const Potion = require('../lib/Potion');

<<<<<<< HEAD
=======

>>>>>>> 4083d626a40ddeca0f60d70ef9c312e7beaef88a
function Player(name = '') {
  this.name = name;

  this.health = Math.floor(Math.random() * 10 + 95);
  this.strength = Math.floor(Math.random() * 5 + 7);
  this.agility = Math.floor(Math.random() * 5 + 7);

  this.inventory = [new Potion('health'), new Potion()];
<<<<<<< HEAD
=======

  // returns an object with various player properties
  Player.prototype.getStats = function() {
    return {
      potions: this.inventory.length,
      health: this.health,
      strength: this.strength,
      agility: this.agility
    };
  };

  // returns the inventory array or false if empty
  Player.prototype.getInventory = function() {
    if (this.inventory.length) {
      return this.inventory;
    }
    return false;
  };
>>>>>>> 4083d626a40ddeca0f60d70ef9c312e7beaef88a
}

Player.prototype.getHealth = function() {
  return `${this.name}'s health is now ${this.health}!`;
};

<<<<<<< HEAD
Player.prototype.getStats = function() {
  return {
    potions: this.inventory.length,
    health: this.health,
    strength: this.strength,
    agility: this.agility
  };
};

Player.prototype.getInventory = function() {
  if (this.inventory.length) {
    return this.inventory;
  }
  return false;
};

=======
//player alove
>>>>>>> 4083d626a40ddeca0f60d70ef9c312e7beaef88a
Player.prototype.isAlive = function() {
  if (this.health === 0) {
    return false;
  }
  return true;
};

<<<<<<< HEAD
=======
// playeer heath status
Player.prototype.reduceHealth = function(health) {
  this.health -= health;

  if (this.health < 0) {
    this.health = 0;
  }
};

Player.prototype.getAttackValue = function() {
  const min = this.strength - 5;
  const max = this.strength + 5;

  return Math.floor(Math.random() * (max - min) + min);
};

// add potion to method to player prototype
>>>>>>> 4083d626a40ddeca0f60d70ef9c312e7beaef88a
Player.prototype.addPotion = function(potion) {
  this.inventory.push(potion);
};

<<<<<<< HEAD
Player.prototype.usePotion = function(index) {
  const potion = this.inventory.splice(index, 1)[0];
=======
  // Use potion
Player.prototype.usePotion = function(index) {
  const potion = this.getInventory().splice(index, 1)[0];
>>>>>>> 4083d626a40ddeca0f60d70ef9c312e7beaef88a

  switch (potion.name) {
    case 'agility':
      this.agility += potion.value;
      break;
    case 'health':
      this.health += potion.value;
      break;
    case 'strength':
      this.strength += potion.value;
      break;
  }
};

<<<<<<< HEAD
Player.prototype.getAttackValue = function() {
  const min = this.strength - 5;
  const max = this.strength + 5;

  return Math.floor(Math.random() * (max - min) + min);
};

Player.prototype.reduceHealth = function(health) {
  this.health -= health;

  if (this.health < 0) {
    this.health = 0;
  }
};

module.exports = Player;
=======
  module.exports = Player;
  
>>>>>>> 4083d626a40ddeca0f60d70ef9c312e7beaef88a

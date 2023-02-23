const {Character} = require('./character');


class Enemy extends Character {
  constructor(name, description, currentRoom) {
    // Fill this in
    super(name, description, currentRoom);
    this.cooldown = 3000;
    this.attackTarget = null;
    this.isActivie = true;
    this.actCounter = 0;
  }

  setPlayer(player) {
    this.player = player;
  }


  randomMove() {
    // Fill this in

  }

  takeSandwich(sandwich) {
    // Fill this in
    this.health += 10;
    console.log(`Oh ${this.name} found ${sandwich}, He can be stronger up to +10`);

    // removing from room
    let roomItems = this.currentRoom.items;

    this.currentRoom.items = roomItems.filter(roomItem => roomItem.name !== sandwich);

  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
    const resetCooldown = function() {
      this.cooldown = 0;
      this.act();
    };
    setTimeout(resetCooldown.bind(this), this.cooldown);
  }

  attack() {
    // Fill this in
    if(this.currentRoom === this.player.currentRoom){
      console.log(`${this.name} attacking ${this.player.name}!!!`);
      this.player.health -= 10;
      console.log(`${this.player.name} receives -10 hits. ${this.player.name}'s health is now ${this.player.health}`);
      if(this.player.health <= 0){
        this.player.die();
      }
      this.cooldown = this.cooldown;
    }
  }

  applyDamage(amount) {
    // Fill this in
    this.health -= amount;
    console.log(`${this.name} receives -10 hit. ${this.name} health is now ${this.health}`);
  }



  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
    } else if (this.cooldown > 0) {
      this.rest();
    } else {
      this.scratchNose();
      this.rest();
    }

    // Fill this in
  }


  scratchNose() {
    this.cooldown += 1000;

    this.alert(`${this.name} scratches its nose`);

  }


}

module.exports = {
  Enemy,
};

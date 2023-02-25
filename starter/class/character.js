class Character {

  constructor(name, description, currentRoom, health = 100, strength = 10) {
    this.name = name;
    this.description = description;
    this.currentRoom = currentRoom;
    this.health = health;
    this.strength = strength;
    this.items = [];

  }

  applyDamage(amount) {
    // Fill this in
    this.health -= amount;
    if(this.health <= 0) this.die();
  }

  die() {
    // Fill this in
    for(let i = 0; i < this.items.length; i++){
      this.currentRoom.items.push(this.items[i]);
      this.items.splice(i, 1);
    }
    this.currentRoom = null;
  }

}

module.exports = {
  Character,
};

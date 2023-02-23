const { Character } = require('./character');
const { Enemy } = require('./enemy');
const { Food } = require('./food');
const { World } = require('./world');

class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
    this.items = [];
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    // Fill this in
    let item = this.currentRoom.getItemByName(itemName);
    this.items.push(item); // Adding to player
    
    // removing from room
    let roomItems = this.currentRoom.items;
    this.currentRoom.items = roomItems.filter(roomItems => roomItems.name !== itemName);
  }

  dropItem(itemName) {
    // Fill this in
    let item = this.getItemByName(itemName);

    // removing from player
    let playerItems = this.items;
    this.items = playerItems.filter(playerItems => playerItems.name !== itemName);

    // adding to room
    this.currentRoom.items.push(item);
  }

  eatItem(itemName) {
    // Fill this in
    let item = this.getItemByName(itemName);
    if(item && item.isFood){
      let playerItems = this.items;
      this.items = playerItems.filter(playerItems => playerItems.name !== itemName);
      this.health += 10;
      console.log("Feeling better now, Health is up by +10");
    }

  }

  getItemByName(name) {
    // Fill this in
    return this.items.find(item => item.name = name);
  }

  hit(name) {
    // Fill this in

    // get enemy
    let [enemy] = World.getEnemiesInRoom(this.currentRoom).filter(enemy => enemy.name = name);

    //set the enemy target
    if(enemy.health > 0){
      console.log(`${this.name} attacking ${enemy.name}!!!`);
      enemy.applyDamage(10);
      enemy.setTarget();
    }
  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player,
};

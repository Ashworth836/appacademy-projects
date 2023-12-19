const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');

class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
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
    this.items.push(item); //adding to player

    //removing from room
    let roomItem = this.currentRoom.items;
    this.currentRoom.items = roomItem.filter(roomItem => roomItem.name != itemName);
  }

  dropItem(itemName) {
    // Fill this in
    let item = this.getItemByName(itemName);
    // removing from player
    let playerItems = this.items;
    this.items = playerItems.filter(playerItems => playerItems.name != itemName);
    //adding to room
    this.currentRoom.items.push(item);
  }

  eatItem(itemName) {
    // Fill this in
    if (this.items.find(item => item.name === itemName) instanceof Food) {
      this.items.splice(
        this.items.findIndex(item => item.name === itemName),
        1
      );
    }
  }

  getItemByName(name) {
    // Fill this in
    return this.items.find(item => item.name === name);
  }

  hit(name) {
    // Fill this in
    const enemy = this.currentRoom.getItemByName(name);
    enemy.health -= this.strength;
    enemy.attackTarget = this;
  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player,
};

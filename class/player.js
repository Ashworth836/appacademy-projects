const {Food} = require('./food')

class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
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
        let item = this.currentRoom.items.find(element => element.name === itemName);
        let index = this.currentRoom.items.indexOf(itemName);

        this.currentRoom.items.splice(index, 1);
        this.items.push(item);

    }

    dropItem(itemName) {
        let item = this.items.find(element => element.name === itemName);
        let index = this.currentRoom.items.indexOf(itemName);

        this.currentRoom.items.push(item);
        this.items.splice(index, 1);
    }

    eatItem(itemName) {
        let item = this.items.find(element => element.name === itemName);
        if(item instanceof Food){
            let index = this.items.indexOf(item);
            this.items.splice(index, 1);
        }

        console.log(this.items);
    }

    getItemByName(name) {
        let item = this.items.find(element => element.name === name);
        return item;
    }
}

module.exports = {
  Player,
};

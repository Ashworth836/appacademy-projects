// Your code here
const Dragon = require('./dragon');

class FriendlyDragon extends Dragon {
    constructor(name, color, lifeGoals, friend){
        super(name, color);
        this.lifeGoals = lifeGoals;
        this.friend = friend;
    }

    hasLifeGoals(){
        for(let i = 0; i < this.lifeGoals.length; i++){
            let lifeGoal = this.lifeGoals[i];
            console.log(`${this.name} likes to ${lifeGoal}`);
        }
    }

    helpsPeople(){
        return `${this.name} helps their friend ${this.friend}`;
    }
}

try {
    module.exports = FriendlyDragon;
} catch {
    module.exports = null;
}

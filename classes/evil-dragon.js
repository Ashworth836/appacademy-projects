// Your code here
const Dragon = require('./dragon');

class EvilDragon extends Dragon{
    constructor(name, color, evilDoings, nemesis){
        super(name, color);
        this.evilDoings = evilDoings;
        this.nemesis = nemesis;
    }

    dontInviteThemOverForDinner(){
        for (let i = 0; i < this.evilDoings.length; i++) {
            const evil = this.evilDoings[i];
            console.log(`${this.name} will ${evil}`);
        }
    }

    burnsNemesis(){
        return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`;
    }
}


try {
    module.exports = EvilDragon;
} catch {
    module.exports = null;
}

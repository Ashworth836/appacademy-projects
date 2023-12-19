const chai = require("chai");
const { expect } = require('chai');
const spies = require("chai-spies");
chai.use(spies);

const {Player} = require("../class/player.js");
const {Room} = require("../class/room.js");
const {Item} = require("../class/item.js");
const {Food} = require("../class/food.js");

const {Darkroom} = require("../class/darkroom.js");
const {Light} = require("../class/light.js");


describe ('Darkroom', function () {

  let character;
  let room;
  let darkroom;
  let item;
  let light;

  beforeEach(function() {
    consoleSpy = chai.spy.on(console, 'log');
    room =  new Room("Test Room", "A test room");
    darkroom =  new Darkroom("Test Dark Room", "A Darktest room");
    item = new Item("rock", "just a simple rock");
    light = new Item("lamp", "just a simple lamp");
    //character = new Character('Character', 'an ordinary character', room);
    darkroom.items.push(item, light );
    //room.items.push(item, light);
  });
  afterEach(() => {
    chai.spy.restore(console);
  });

  it('should have name and description attributes', function () {
    expect(darkroom.name).to.equal("Test Dark Room");
    expect(darkroom.description).to.equal('A Darktest room');
  });

  it('should be an inherit  of room', function () {
    expect(darkroom instanceof Room).to.be.true;    
  });

  it('should have light attribute set to false', function () {
    expect(darkroom.light).to.be.false;    
  });

  it('should print dark message if light is false', function () {
    darkroom.printRoom()
    expect(consoleSpy).to.have.been.called.once.with('You cannot see anything')    
  });

  it('should print normal room message if .light is true', function () {
    darkroom.light = true;  
    darkroom.printRoom();
    //expect(consoleSpy).to.have.been.called.once.with('Test Dark Room')    

  });
  
});
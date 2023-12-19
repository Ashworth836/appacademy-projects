const { expect} = require('chai');

const Screen = require("../class/screen");

const Bejeweled = require("../class/bejeweled.js");

describe ('Bejeweled', function () {

  // Add tests for setting up a basic board
  // describe('initialize grid', function() {
  //   let newBejeweled;

  //   beforeEach(() => {
  //     newBejeweled = new Bejeweled();
  //     Screen.quit();
  //   });
  //   it('should create grid with 8 * 8 size with element of fruit', function() {
  //     const fruits = newBejeweled.fruits;
  //     const grid = newBejeweled.grid;
  //     const ifInclude = [];

  //     for (let i = 0; i < grid.length; i += 1) {
  //       for (let j = 0; j < grid[0].length; j += 1) {
  //         ifInclude.push(fruits.includes(grid[i][j]));
  //       }
  //     }

  //     expect(ifInclude).to.not.include(false);

  //   });

  // });

  // Add tests for a valid swap that matches 3
  describe('swap fruit', function() {
    let grid;

    it('should swap left if horizontal match', function() {
      grid = [[ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
              [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
              [ '🥝', '🥝', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
              [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
              [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
              [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
              [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
              [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ] ];

      expect(Bejeweled.swapLeft(grid, 4, 5)).to.be.true;
      expect(grid).to.deep.equal([[ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
                                  [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
                                  [ '🥝', '🥝', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
                                  [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
                                  [ '🍓', '🍓', '🍊', '🍊', '🍊', '🥥', '🥝', '🥝' ],
                                  [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
                                  [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
                                  [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ] ]);
    });

    it('should swap left if vertical match', function() {
      grid = [[ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
              [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
              [ '🥝', '🥝', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
              [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
              [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
              [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
              [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
              [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ] ];

      expect(Bejeweled.swapLeft(grid, 2, 2)).to.be.true;
      expect(grid).to.deep.equal([[ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
                                  [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
                                  [ '🥝', '🍊', '🥝', '🍇', '🍇', '🥝', '🍊', '🍓' ],
                                  [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
                                  [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
                                  [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
                                  [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
                                  [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ] ]);
    });

    it('should swap right if horizontal match', function() {
      grid = [[ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
              [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
              [ '🥝', '🍇', '🥝', '🍇', '🍇', '🥝', '🍊', '🍓' ],
              [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
              [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
              [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
              [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
              [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ] ];

      expect(Bejeweled.swapRight(grid, 2, 1)).to.be.true;
      expect(grid).to.deep.equal([[ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
                                  [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
                                  [ '🥝', '🥝', '🍇', '🍇', '🍇', '🥝', '🍊', '🍓' ],
                                  [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
                                  [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
                                  [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
                                  [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
                                  [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ] ]);
    });

    it('should swap right if vertical match', function() {
      grid = [[ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
              [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
              [ '🥝', '🥝', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
              [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
              [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
              [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
              [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
              [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ] ];

      expect(Bejeweled.swapRight(grid, 2, 1)).to.be.true;
      expect(grid).to.deep.equal([[ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
                                  [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
                                  [ '🥝', '🍊', '🥝', '🍇', '🍇', '🥝', '🍊', '🍓' ],
                                  [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
                                  [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
                                  [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
                                  [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
                                  [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ] ]);
    });

    it('should swap up if vertical match', function() {
      grid = [[ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
              [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
              [ '🥝', '🥝', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
              [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
              [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
              [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
              [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
              [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ] ];

      expect(Bejeweled.swapUp(grid, 7, 6)).to.be.true;
      expect(grid).to.deep.equal([[ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
                                  [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
                                  [ '🥝', '🥝', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
                                  [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
                                  [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
                                  [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
                                  [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🥝', '🍊' ],
                                  [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🍇', '🍇' ] ]);
    });

    it('should swap up if horizontal match', function() {
      grid = [[ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
              [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
              [ '🥝', '🥝', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
              [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
              [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
              [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
              [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
              [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ] ];

      expect(Bejeweled.swapUp(grid, 2, 1)).to.be.true;
      expect(grid).to.deep.equal([[ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
                                  [ '🍊', '🥝', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
                                  [ '🥝', '🍊', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
                                  [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
                                  [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
                                  [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
                                  [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
                                  [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ] ]);
    });

    it('should swap down if vertical match', function() {
      grid = [[ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
              [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
              [ '🥝', '🥝', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
              [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
              [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
              [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
              [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
              [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ] ];

      expect(Bejeweled.swapDown(grid, 0, 5)).to.be.true;
      expect(grid).to.deep.equal([[ '🥝', '🍇', '🥥', '🍓', '🍊', '🥥', '🍇', '🍇' ],
                                  [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥝', '🍓', '🍊' ],
                                  [ '🥝', '🥝', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
                                  [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
                                  [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
                                  [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
                                  [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
                                  [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ] ]);
    });


    it('should swap down if horizontal match', function() {
      grid = [[ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
              [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
              [ '🥝', '🥝', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
              [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
              [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
              [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
              [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
              [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ] ];

      expect(Bejeweled.swapDown(grid, 3, 5)).to.be.true;
      expect(grid).to.deep.equal([[ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
                                  [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
                                  [ '🥝', '🥝', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
                                  [ '🍊', '🍊', '🍇', '🍓', '🍓', '🍊', '🍊', '🥥' ],
                                  [ '🍓', '🍓', '🍊', '🍊', '🥥', '🥝', '🥝', '🥝' ],
                                  [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
                                  [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
                                  [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ] ]);
    });


    it('should not swap up if row is top', function() {
      grid = [[ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
              [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
              [ '🥝', '🥝', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
              [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
              [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
              [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
              [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
              [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ] ];

      expect(Bejeweled.swapUp(grid, 0, 6)).to.be.false;
      expect(grid).to.deep.equal([[ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
                                  [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
                                  [ '🥝', '🥝', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
                                  [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
                                  [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
                                  [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
                                  [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
                                  [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ] ]);
    });


    it('should not swap down if row is bottom', function() {
      grid = [[ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
              [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
              [ '🥝', '🥝', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
              [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
              [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
              [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
              [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
              [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ] ];

      expect(Bejeweled.swapDown(grid, grid.length - 1, 6)).to.be.false;
      expect(grid).to.deep.equal([[ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
                                  [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
                                  [ '🥝', '🥝', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
                                  [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
                                  [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
                                  [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
                                  [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
                                  [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ] ]);
    });

    it('should not swap left if col is left-most', function() {
      grid = [[ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
              [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
              [ '🥝', '🥝', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
              [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
              [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
              [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
              [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
              [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ] ];

      expect(Bejeweled.swapLeft(grid, 2, 0)).to.be.false;
      expect(grid).to.deep.equal([[ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
                                  [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
                                  [ '🥝', '🥝', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
                                  [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
                                  [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
                                  [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
                                  [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
                                  [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ] ]);
    });


    it('should not swap right if col is right-most', function() {
      grid = [[ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
              [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
              [ '🥝', '🥝', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
              [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
              [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
              [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
              [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
              [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ] ];

      expect(Bejeweled.swapRight(grid, 2, grid[0].length - 1)).to.be.false;
      expect(grid).to.deep.equal([[ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
                                  [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
                                  [ '🥝', '🥝', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
                                  [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
                                  [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
                                  [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
                                  [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
                                  [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ] ]);
    });

  });

  // Add tests for swaps that set up combos

  describe('swap to show combos', function() {

    it('should delete if matching more than 3 in a row', function() {
      grid = [[ '🥝', '🍇', '🥥', '🍓', '🍊' ],
              [ '🍊', '🍊', '🥝', '🥝', '🍇' ],
              [ '🥝', '🥝', '🥝', '🍇', '🍇' ],
              [ '🍊', '🍊', '🍇', '🍓', '🍓' ],
              [ '🍓', '🍓', '🍊', '🍊', '🥥' ] ];
      Bejeweled.removeFruit(grid);
      expect(grid).to.deep.equal([[ '🥝', '🍇', '🥥', '🍓', '🍊' ],
                                  [ '🍊', '🍊', '🥝', '🥝', '🍇' ],
                                  [ '  ', '  ', '  ', '🍇', '🍇' ],
                                  [ '🍊', '🍊', '🍇', '🍓', '🍓' ],
                                  [ '🍓', '🍓', '🍊', '🍊', '🥥' ] ]);

    });

    it('should delete if matching more than 3 in a col', function() {
      grid = [[ '🥝', '🍇', '🥥', '🍓', '🍊' ],
              [ '🍊', '🍊', '🥝', '🥝', '🍇' ],
              [ '🍇', '🥝', '🥝', '🥝', '🍇' ],
              [ '🍊', '🍊', '🥝', '🍓', '🍓' ],
              [ '🍓', '🍓', '🍊', '🍊', '🥥' ] ];
      Bejeweled.removeFruit(grid);
      expect(grid).to.deep.equal([[ '🥝', '🍇', '🥥', '🍓', '🍊' ],
                                  [ '🍊', '🍊', '  ', '🥝', '🍇' ],
                                  [ '🍇', '  ', '  ', '  ', '🍇' ],
                                  [ '🍊', '🍊', '  ', '🍓', '🍓' ],
                                  [ '🍓', '🍓', '🍊', '🍊', '🥥' ] ]);
    });

    it('should drop down fruits if lower fruits become double space', function() {
      grid = [[ '🥝', '🍇', '🥥', '🍓', '🍊' ],
              [ '🍊', '🍊', '🥝', '🥝', '🍇' ],
              [ '🍇', '🥝', '🥝', '🥝', '🍇' ],
              [ '🍊', '🍊', '🥝', '🍓', '🍓' ],
              [ '🍓', '🍓', '🍊', '🍊', '🥥' ] ];
      Bejeweled.removeFruit(grid);
      Bejeweled.dropDown(grid);
      expect(grid).to.deep.equal([[ '🥝', '  ', '  ', '  ', '🍊' ],
                                  [ '🍊', '🍇', '  ', '🍓', '🍇' ],
                                  [ '🍇', '🍊', '  ', '🥝', '🍇' ],
                                  [ '🍊', '🍊', '🥥', '🍓', '🍓' ],
                                  [ '🍓', '🍓', '🍊', '🍊', '🥥' ] ]);
    });

    // it('should calucate the correct combo number', function() {
    //   grid = [[ '🥝', '🍇', '🥥', '🍓', '🍊' ],
    //           [ '🍊', '🍊', '🥝', '🥝', '🍇' ],
    //           [ '🍇', '🥝', '🥝', '🥝', '🍇' ],
    //           [ '🍊', '🍊', '🥝', '🍓', '🍓' ],
    //           [ '🍓', '🍓', '🍊', '🍊', '🥥' ] ];
    //   Bejeweled.removeFruit(grid);
    //   Bejeweled.dropDown(grid);
    // });

  });

  // Add tests to check if there are no possible valid moves
  describe('no possible valid moves', function() {

    it('should not change the grid as no matching', function() {
      grid = [[ '🥝', '🍇', '🥥', '🍓'],
              [ '🍊', '🍊', '🍓', '🥝'],
              [ '🍇', '🥝', '🍇', '🥝'],
              [ '🍊', '🍊', '🍓', '🍓'] ];
      let combo = Bejeweled.removeFruit(grid);
      expect(combo).to.equal(0);
      expect(grid).to.deep.equal([[ '🥝', '🍇', '🥥', '🍓'],
                                  [ '🍊', '🍊', '🍓', '🥝'],
                                  [ '🍇', '🥝', '🍇', '🥝'],
                                  [ '🍊', '🍊', '🍓', '🍓'] ]);
    });
  })
});

const { expect, use } = require('chai');

const User = require("../class/user.js");

/**
    describe ('User class', function(){
     
     it('should create successfully', function() {
         
         let user = new User();
 
         expect(user).to.exist;
     });
 
     it('should set username on creation', function() {
 
         let user = new User("john_doe");
 
         expect(user.username).to.equal("john_doe");
     })
 });
 */

/**DRY CODE*/
describe('User class', function() {

    let user;

    beforeEach(() => {
        user = new User('john_doe');
    });

    it('should create successfully', function() {
        expect(user).to.exist;
    });

    it('should set username on creation', function() {
        expect(user.username).to.equal('john_doe');
    })
}) 

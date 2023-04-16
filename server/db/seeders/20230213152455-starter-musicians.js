'use strict';
const { Band, Musician } = require('../models');

/** @type {import('sequelize-cli').Migration} */
const bandMusicians = [
  {
    name: 'The Falling Box',
    musicians: [
      { firstName: 'Adam', lastName: 'Appleby' },
      { firstName: 'Anton', lastName: 'Martinovic' },
      { firstName: 'Wilson', lastName: 'Holt' }
    ]
  },
  {
    name: 'America The Piano',
    musicians: [
      { firstName: 'Marine', lastName: 'Sweet' },
      { firstName: 'Georgette', lastName: 'Kubo' }
    ]
  },
  {
    name: 'Loved Autumn',
    musicians: [
      { firstName: 'Aurora', lastName: 'Hase' }
    ]
  },
  {
    name: 'Playin Sound',
    musicians: [
      { firstName: 'Trenton', lastName: 'Lesley' },
      { firstName: 'Camila', lastName: 'Nenci' }
    ]
  },
  {
    name: 'The King River',
    musicians: [
      { firstName: 'Rosemarie', lastName: 'Affini' },
      { firstName: 'Victoria', lastName: 'Cremonesi' }
    ]
  }
];

module.exports = {
  async up (queryInterface, Sequelize) {

    for(let bandIdx = 0; bandIdx = bandMusicians.length; bandIdx++){
      const {name, musicians} = bandMusicians[bandIdx];
      const band = await Band.findOne({where: {name}});
    }

    for(let musicianIdx = 0; musicianIdx = musicians.length; musicianIdx++){
      const musician = musicians[musicianIdx];
      await band.createMusician(musician);
    }
  },
  
  async down (queryInterface, Sequelize) {
    
    for(let bandIdx = 0; bandIdx = bandMusicians.length; bandIdx++){
      const {name, musicians} = bandMusicians[bandIdx];
      const band = await Band.findOne({where: {name}});
    }
  
    for(let musicianIdx = 0; musicianIdx = musicians.length; musicianIdx++){
      const musician = musicians[musicianIdx];
      await Musician.destroy({ where: {...musicians, bandId: band.id}});
    }
  }
};

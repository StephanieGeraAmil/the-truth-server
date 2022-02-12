'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     */
   await queryInterface.bulkInsert('Verses', 
   [
     {
        book: 'Genesis',
        chapter: 1,
        number:1,
        createdAt: new Date(),
        updatedAt:new Date()
      },
      {
        book: 'Genesis',
        chapter: 1,
        number:2,
        createdAt: new Date(),
        updatedAt:new Date()
      }
      ,
      {
        book: 'Mark',
        chapter: 1,
        number:8,
        createdAt: new Date(),
        updatedAt:new Date()
      }
      ,
      {
        book: 'John',
        chapter: 10,
        number:8,
        createdAt: new Date(),
        updatedAt:new Date()
      }
    
    ], {});
   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Verses', null, {});
  }
};

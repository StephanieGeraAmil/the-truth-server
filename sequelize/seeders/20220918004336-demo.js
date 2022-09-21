"use strict";
const { v4: uuidv4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      ////////////////////////////////
      ///users
      await queryInterface.bulkInsert(
        "users",
        [
          {
            id: uuidv4(),
            name: "John Doe",
            email: "johndoe@gmail.com",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      );
      await queryInterface.bulkInsert(
        "users",
        [
          {
            id: uuidv4(),
            name: "Jane Williams",
            email: "janewilliams@gmail.com",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      );
      await queryInterface.bulkInsert(
        "users",
        [
          {
            id: uuidv4(),
            name: "Sara Jhonson",
            email: "sarajhonson@gmail.com",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      );
      const users = await queryInterface.sequelize.query(
        `SELECT id from "users";`
      );
       ////////////////////////////////
      ///decks
   
      await queryInterface.bulkInsert(
        "decks",
        [
          {
            id: uuidv4(),
            name: "Body Image",
            owner: users[0][0].id,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      );
      await queryInterface.bulkInsert(
        "decks",
        [
          {
            id: uuidv4(),
            name: "Fear",
            owner: users[0][0].id,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      );
      await queryInterface.bulkInsert(
        "decks",
        [
          {
            id: uuidv4(),
            name: "Doubt",
            owner: users[0][0].id,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      );
       ////////////////////////////////
      ///notes
       ////////////////////////////////
      ///verses
       ////////////////////////////////
      ///images
       ////////////////////////////////
      ///cards
       ////////////////////////////////
      ///tags
    } catch (e) {
      console.log(e);
    }
  },

  async down(queryInterface, Sequelize) {
    try {
      await queryInterface.bulkDelete("users", null, {});
      await queryInterface.bulkDelete("decks", null, {});
    } catch {
      console.log("error on deleting the seed data");
    }
  },
};

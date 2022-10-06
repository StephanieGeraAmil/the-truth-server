"use strict";
const { sequelize } = require("../models");
module.exports = {
  async up(queryInterface, DataTypes) {
    try {
      const result = await sequelize.transaction(async (t) => {
        await queryInterface.createTable(
          "Users",
          {
            id: {
              allowNull: false,

              primaryKey: true,
              type: DataTypes.UUID,
              defaultValue: DataTypes.UUIDV4,
            },
            name: {
              type: DataTypes.STRING,
            },
            email: {
              type: DataTypes.STRING,
            },
            createdAt: {
              allowNull: false,
              type: DataTypes.DATE,
              defaultValue: DataTypes.NOW,
            },
            updatedAt: {
              allowNull: false,
              type: DataTypes.DATE,
              defaultValue: DataTypes.NOW,
            },
          },
          { transaction: t }
        );
        /////////////////////////////////////////////////////////////////////////
        await queryInterface.createTable(
          "Decks",
          {
            id: {
              allowNull: false,

              primaryKey: true,
              type: DataTypes.UUID,
              defaultValue: DataTypes.UUIDV4,
            },
            name: {
              type: DataTypes.STRING,
            },
            createdAt: {
              allowNull: false,
              type: DataTypes.DATE,
              defaultValue: DataTypes.NOW,
            },
            updatedAt: {
              allowNull: false,
              type: DataTypes.DATE,
              defaultValue: DataTypes.NOW,
            },
            UserId: {
              type: DataTypes.UUID,
              references: {
                model: {
                  tableName: "Users",
                },
                key: "id",
              },
              allowNull: false,
            },
          },
          { transaction: t }
        );

        /////////////////////////////////////////////////////////////////////////
        await queryInterface.createTable(
          "Imgs",
          {
            id: {
              allowNull: false,

              primaryKey: true,
              type: DataTypes.UUID,
              defaultValue: DataTypes.UUIDV4,
            },
            url: {
              type: DataTypes.STRING,
            },
            createdAt: {
              allowNull: false,
              type: DataTypes.DATE,
              defaultValue: DataTypes.NOW,
            },
            updatedAt: {
              allowNull: false,
              type: DataTypes.DATE,
              defaultValue: DataTypes.NOW,
            },
          },
          { transaction: t }
        );
        /////////////////////////////////////////////////////////////////////////
        await queryInterface.createTable(
          "Notes",
          {
            id: {
              allowNull: false,

              primaryKey: true,
              type: DataTypes.UUID,
              defaultValue: DataTypes.UUIDV4,
            },
            content: {
              type: DataTypes.STRING,
            },
            createdAt: {
              allowNull: false,
              type: DataTypes.DATE,
              defaultValue: DataTypes.NOW,
            },
            updatedAt: {
              allowNull: false,
              type: DataTypes.DATE,
              defaultValue: DataTypes.NOW,
            },
          },
          { transaction: t }
        );
        /////////////////////////////////////////////////////////////////////////
        await queryInterface.createTable(
          "Tags",
          {
            id: {
              allowNull: false,

              primaryKey: true,
              type: DataTypes.UUID,
              defaultValue: DataTypes.UUIDV4,
            },
            name: {
              type: DataTypes.STRING,
            },
            createdAt: {
              allowNull: false,
              type: DataTypes.DATE,
              defaultValue: DataTypes.NOW,
            },
            updatedAt: {
              allowNull: false,
              type: DataTypes.DATE,
              defaultValue: DataTypes.NOW,
            },
          },
          { transaction: t }
        );
        /////////////////////////////////////////////////////////////////////////
        await queryInterface.createTable(
          "Verses",
          {
            id: {
              allowNull: false,

              primaryKey: true,
              type: DataTypes.UUID,
              defaultValue: DataTypes.UUIDV4,
            },
            book: {
              type: DataTypes.STRING,
            },
            chapter: {
              type: DataTypes.DECIMAL,
            },
            verse_number: {
              type: DataTypes.DECIMAL,
            },
            version: {
              type: DataTypes.STRING,
            },
            scripture: {
              type: DataTypes.STRING,
            },
            createdAt: {
              allowNull: false,
              type: DataTypes.DATE,
              defaultValue: DataTypes.NOW,
            },
            updatedAt: {
              allowNull: false,
              type: DataTypes.DATE,
              defaultValue: DataTypes.NOW,
            },
          },
          { transaction: t }
        );
        /////////////////////////////////////////////////////////////////////////
        await queryInterface.createTable(
          "Cards",
          {
            id: {
              allowNull: false,

              primaryKey: true,
              type: DataTypes.UUID,
              defaultValue: DataTypes.UUIDV4,
            },

            NoteId: {
              allowNull: true,
              type: DataTypes.UUID,
              defaultValue: DataTypes.UUIDV4,
              references: {
                model: {
                  tableName: "Notes",
                },
                key: "id",
              }, 
            },
            ImgId: {
              allowNull: true,
              type: DataTypes.UUID,
              defaultValue: DataTypes.UUIDV4,
              references: {
                model: {
                  tableName: "Imgs",
                },
                key: "id",
              },
            },

            createdAt: {
              allowNull: false,
              type: DataTypes.DATE,
              defaultValue: DataTypes.NOW,
            },
            updatedAt: {
              allowNull: false,
              type: DataTypes.DATE,
              defaultValue: DataTypes.NOW,
            },
          },
          { transaction: t }
        );
        /////////////////////////////////////////////////////////////////////////
        await queryInterface.createTable(
          "cards_verses",
          {
            CardId: {
              type: DataTypes.UUID,
              primaryKey: true,
            },
            VerseId: {
              type: DataTypes.UUID,
              primaryKey: true,
            },
            createdAt: {
              allowNull: false,
              type: DataTypes.DATE,
              defaultValue: DataTypes.NOW,
            },
            updatedAt: {
              allowNull: false,
              type: DataTypes.DATE,
              defaultValue: DataTypes.NOW,
            },
          },
          { transaction: t }
        );
        /////////////////////////////////////////////////////////////////////////
        await queryInterface.createTable(
          "verses_tags",
          {
            VerseId: {
              type: DataTypes.UUID,
              primaryKey: true,
            },
            TagId: {
              type: DataTypes.UUID,
              primaryKey: true,
            },
            createdAt: {
              allowNull: false,
              type: DataTypes.DATE,
              defaultValue: DataTypes.NOW,
            },
            updatedAt: {
              allowNull: false,
              type: DataTypes.DATE,
              defaultValue: DataTypes.NOW,
            },
          },
          { transaction: t }
        );
        /////////////////////////////////////////////////////////////////////////
        await queryInterface.createTable(
          "cards_decks",
          {
            order: {
              type: DataTypes.DECIMAL,
            },
            CardId: {
              type: DataTypes.UUID,
              primaryKey: true,
            },
            DeckId: {
              type: DataTypes.UUID,
              primaryKey: true,
            },
            createdAt: {
              allowNull: false,
              type: DataTypes.DATE,
              defaultValue: DataTypes.NOW,
            },
            updatedAt: {
              allowNull: false,
              type: DataTypes.DATE,
              defaultValue: DataTypes.NOW,
            },
          },
          { transaction: t }
        );
      });
    } catch (e) {
      console.log(e);
    }
  },
  async down(queryInterface, DataTypes) {
    try {
      await queryInterface.dropTable("verses_tags");
      await queryInterface.dropTable("cards_decks");
      await queryInterface.dropTable("cards_verses");
      await queryInterface.dropTable("Decks");
      await queryInterface.dropTable("Users");
      await queryInterface.dropTable("Imgs");
      await queryInterface.dropTable("Notes");
      await queryInterface.dropTable("Tags");
      await queryInterface.dropTable("Verses");
      await queryInterface.dropTable("Cards");
    } catch {
      console.log("unable to process the undone on the migration");
    }
  },
};

"use strict";
const { sequelize } = require("../models");
module.exports = {
  async up(queryInterface, DataTypes) {
    try {
      const result = await sequelize.transaction(async (t) => {
        await queryInterface.createTable(
          "users",
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
          "decks",
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
            owner: {
              type: DataTypes.UUID,
              references: {
                model: {
                  tableName: "users",
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
          "imgs",
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
          "notes",
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
          "tags",
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
          "verses",
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
          "cards",
          {
            id: {
              allowNull: false,

              primaryKey: true,
              type: DataTypes.UUID,
              defaultValue: DataTypes.UUIDV4,
            },

            note: {
              allowNull: true,
              type: DataTypes.UUID,
              defaultValue: DataTypes.UUIDV4,
              references: {
                model: {
                  tableName: "notes",
                },
                key: "id",
              },
            },
            image: {
              allowNull: true,
              type: DataTypes.UUID,
              defaultValue: DataTypes.UUIDV4,
              references: {
                model: {
                  tableName: "imgs",
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
            CardsId: {
              type: DataTypes.UUID,
              primaryKey: true,
            },
            VersesId: {
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
            VersesId: {
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
            CardsId: {
              type: DataTypes.UUID,
              primaryKey: true,
            },
            DecksId: {
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
      await queryInterface.dropTable("decks");
      await queryInterface.dropTable("users");
      await queryInterface.dropTable("imgs");
      await queryInterface.dropTable("notes");
      await queryInterface.dropTable("tags");
      await queryInterface.dropTable("verses");
      await queryInterface.dropTable("cards");
    } catch {
      console.log("unable to process the undone on the migration");
    }
  },
};

"use strict";
module.exports = {
  async up(queryInterface, DataTypes) {
    try {
      await queryInterface.createTable("users", {
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
      });
      /////////////////////////////////////////////////////////////////////////
      await queryInterface.createTable("decks", {
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
      });

      /////////////////////////////////////////////////////////////////////////
      await queryInterface.createTable("imgs", {
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
      });
      /////////////////////////////////////////////////////////////////////////
      await queryInterface.createTable("notes", {
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
      });
      /////////////////////////////////////////////////////////////////////////
      await queryInterface.createTable("tags", {
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
      });
      /////////////////////////////////////////////////////////////////////////
      await queryInterface.createTable("verses", {
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
      });
      /////////////////////////////////////////////////////////////////////////
      await queryInterface.createTable("cards", {
        id: {
          allowNull: false,
 
          primaryKey: true,
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
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
        img: {
          type: DataTypes.UUID,
          references: {
            model: {
              tableName: "imgs",
            },
            key: "id",
          },
          allowNull: true,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
        },
        note: {
          type: DataTypes.UUID,
          references: {
            model: {
              tableName: "notes",
            },
            key: "id",
          },
          allowNull: true,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
        },
        verse: {
          type: DataTypes.UUID,
          references: {
            model: {
              tableName: "verses",
            },
            key: "id",
          },
          allowNull: true,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
        },
      });
      await queryInterface.createTable("verses_tags", {
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },
        VerseId: {
          type: DataTypes.UUID,
          primaryKey: true,
        },
        TagId: {
          type: DataTypes.UUID,
          primaryKey: true,
        },
      });
      await queryInterface.createTable("cards_decks", {
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },
        CardsId: {
          type: DataTypes.UUID,
          primaryKey: true,
        },
        DecksId: {
          type: DataTypes.UUID,
          primaryKey: true,
        },
      });
    } catch (e) {
      console.log(e);
    }
  },
  async down(queryInterface, DataTypes) {
    try {
      await queryInterface.dropTable("users");
      await queryInterface.dropTable("decks");
      await queryInterface.dropTable("imgs");
      await queryInterface.dropTable("notes");
      await queryInterface.dropTable("verses");
      await queryInterface.dropTable("tags");
      await queryInterface.dropTable("cards");
      await queryInterface.dropTable("verses_tags");
      await queryInterface.dropTable("cards_decks");
    } catch {
      console.log("unable to process the undone on the migration");
    }
  },
};

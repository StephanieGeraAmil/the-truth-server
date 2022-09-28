"use strict";
const { v4: uuidv4 } = require("uuid");
const { sequelize } = require("../models");

module.exports = {
  async up(queryInterface) {
    // const t = await sequelize.transaction();
    try {
      const result = await sequelize.transaction(async (t) => {
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
            {
              id: uuidv4(),
              name: "Jane Williams",
              email: "janewilliams@gmail.com",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: uuidv4(),
              name: "Sara Jhonson",
              email: "sarajhonson@gmail.com",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            // {
            //   id: uuidv4(),
            //   name: "Jason Stone",
            //   email: "jasonstone@gmail.com",
            //   createdAt: new Date(),
            //   updatedAt: new Date(),
            // },
          ],
          { transaction: t }
        );
        const users = await queryInterface.sequelize.query(
          `SELECT id from "users";`,
          { transaction: t }
        );
        ////////////////////////////////
        ///decks
        await queryInterface.bulkInsert(
          "decks",
          [
            // {
            //   id: uuidv4(),
            //   name: "Fear",
            //   owner: users[0][0].id,
            //   createdAt: new Date(),
            //   updatedAt: new Date(),
            // },
            // {
            //   id: uuidv4(),
            //   name: "Doubt",
            //   owner: users[0][0].id,
            //   createdAt: new Date(),
            //   updatedAt: new Date(),
            // },
            // {
            //   id: uuidv4(),
            //   name: "Body Image",
            //   owner: users[0][1].id,
            //   createdAt: new Date(),
            //   updatedAt: new Date(),
            // },
            {
              id: uuidv4(),
              name: "Laziness",
              owner: users[0][0].id,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: uuidv4(),
              name: "Favorites",
              owner: users[0][0].id,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: uuidv4(),
              name: "Fav",
              owner: users[0][1].id,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            // {
            //   id: uuidv4(),
            //   name: "Friends",
            //   owner: users[0][2].id,
            //   createdAt: new Date(),
            //   updatedAt: new Date(),
            // },
          ],
          { transaction: t }
        );

        ////////////////////////////////
        ///notes
        await queryInterface.bulkInsert(
          "notes",
          [
            {
              id: uuidv4(),
              content: "If I continue doing this, where will I end up?",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: uuidv4(),
              content: "What Would Jesus Do?",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: uuidv4(),
              content: "He knows best",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: uuidv4(),
              content: "He doesn't make mistakes",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            // {
            //   id: uuidv4(),
            //   content:
            //     "Listen with love / Understand / Talk, Counsel, Do with a servant heart / People will know you through your actions and words",
            //   createdAt: new Date(),
            //   updatedAt: new Date(),
            // },
            // {
            //   id: uuidv4(),
            //   content: "Faith develop better in community",
            //   createdAt: new Date(),
            //   updatedAt: new Date(),
            // },
            {
              id: uuidv4(),
              content: "Let God handle it!",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            // {
            //   id: uuidv4(),
            //   content:
            //     "He wouldn't allow anything that he can't use for your good",
            //   createdAt: new Date(),
            //   updatedAt: new Date(),
            // },
            // {
            //   id: uuidv4(),
            //   content: "Lord, please help me with my unbelief",
            //   createdAt: new Date(),
            //   updatedAt: new Date(),
            // },
            {
              id: uuidv4(),
              content: "See the big picture",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: uuidv4(),
              content: "Trust more",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: uuidv4(),
              content: "Love more",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ],
          { transaction: t }
        );

        ////////////////////////////////
        ///verses
        await queryInterface.bulkInsert(
          "verses",
          [
            // {
            //   id: uuidv4(),
            //   book: "Proverbs",
            //   chapter: 3,
            //   verse_number: 5,
            //   version: "NLT",
            //   scripture:
            //     "Trust in the Lord with all your heart; do not depend on your own understanding",
            //   createdAt: new Date(),
            //   updatedAt: new Date(),
            // },
            // {
            //   id: uuidv4(),
            //   book: "Proverbs",
            //   chapter: 3,
            //   verse_number: 6,
            //   scripture:
            //     "Seek his will in all you do, and he will show you which path to take",
            //   version: "NLT",
            //   createdAt: new Date(),
            //   updatedAt: new Date(),
            // },
            {
              id: uuidv4(),
              book: "Philippians",
              chapter: 4,
              verse_number: 13,
              scripture:
                "For I can do everything through Christ, who gives me strength",
              version: "NLT",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: uuidv4(),
              book: "2 Peter",
              chapter: 1,
              verse_number: 3,
              scripture:
                "By his divine power, God has given us everything we need for living a godly life. We have received all of this by coming to know him, the one who called us to himself by means of his marvelous glory and excellence",
              version: "NLT",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: uuidv4(),
              book: "1 Corinthians",
              chapter: 10,
              verse_number: 13,
              scripture:
                "The temptations in your life are no different from what others experience. And God is faithful. He will not allow the temptation to be more than you can stand. When you are tempted, he will show you a way out so that you can endure",
              version: "NLT",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: uuidv4(),
              book: "Galatians",
              chapter: 6,
              verse_number: 7,
              scripture:
                "Don’t be misled—you cannot mock the justice of God. You will always harvest what you plant",
              version: "NLT",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: uuidv4(),
              book: "Galatians",
              chapter: 6,
              verse_number: 8,
              scripture:
                "Those who live only to satisfy their own sinful nature will harvest decay and death from that sinful nature. But those who live to please the Spirit will harvest everlasting life from the Spirit. ",
              version: "NLT",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            // {
            //   id: uuidv4(),
            //   book: "Proverbs",
            //   chapter: 11,
            //   verse_number: 30,
            //   scripture:
            //     "The seeds of good deeds become a tree of life; a wise person wins friends.",
            //   version: "NLT",
            //   createdAt: new Date(),
            //   updatedAt: new Date(),
            // },
            {
              id: uuidv4(),
              book: "Colossians",
              chapter: 4,
              verse_number: 5,
              scripture:
                "Live wisely among those who are not believers, and make the most of every opportunity.",
              version: "NLT",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            // {
            //   id: uuidv4(),
            //   book: "Hebrews",
            //   chapter: 12,
            //   verse_number: 1,
            //   scripture:
            //     "Therefore, since we are surrounded by such a huge crowd of witnesses to the life of faith, let us strip off every weight that slows us down, especially the sin that so easily trips us up. And let us run with endurance the race God has set before us.",
            //   version: "NLT",
            //   createdAt: new Date(),
            //   updatedAt: new Date(),
            // },
            // {
            //   id: uuidv4(),
            //   book: "Hebrews",
            //   chapter: 12,
            //   verse_number: 2,
            //   scripture:
            //     "We do this by keeping our eyes on Jesus, the champion who initiates and perfects our faith. Because of the joy awaiting him, he endured the cross, disregarding its shame. Now he is seated in the place of honor beside God’s throne.",
            //   version: "NLT",
            //   createdAt: new Date(),
            //   updatedAt: new Date(),
            // },
            {
              id: uuidv4(),
              book: "Psalms",
              chapter: 139,
              verse_number: 23,
              scripture:
                "Search me, O God, and know my heart; test me and know my anxious thoughts",
              version: "NLT",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: uuidv4(),
              book: "Psalms",
              chapter: 139,
              verse_number: 24,
              scripture:
                "Point out anything in me that offends you, and lead me along the path of everlasting life",
              version: "NLT",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: uuidv4(),
              book: "Proverbs",
              chapter: 13,
              verse_number: 19,
              scripture:
                "It is pleasant to see dreams come true, but fools refuse to turn from evil to attain them",
              version: "NLT",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ],
          { transaction: t }
        );
        ////////////////////////////////
        ///images
        // await queryInterface.bulkInsert(
        //   "imgs",
        //   [
        //     {
        //       id: uuidv4(),
        //       createdAt: new Date(),
        //       updatedAt: new Date(),
        //     },

        //   ],
        //   {}
        // );
        const verses = await queryInterface.sequelize.query(
          `SELECT id from "verses";`,
          { transaction: t }
        );
        const notes = await queryInterface.sequelize.query(
          `SELECT id from "notes";`,
          { transaction: t }
        );
        ////////////////////////////////
        ///cards
        await queryInterface.bulkInsert(
          "cards",
          [
            {
              id: uuidv4(),

              note: notes[0][0].id,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: uuidv4(),
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: uuidv4(),

              note: notes[0][1].id,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: uuidv4(),
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ],
          { transaction: t }
        );
        ////////////////////////////////
        ///tags
        await queryInterface.bulkInsert(
          "tags",
          [
            {
              id: uuidv4(),
              name: "laziness",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            // {
            //   id: uuidv4(),
            //   name: "confussion",
            //   createdAt: new Date(),
            //   updatedAt: new Date(),
            // },
            {
              id: uuidv4(),
              name: "wisdom",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            // {
            //   id: uuidv4(),
            //   name: "fiendship",
            //   createdAt: new Date(),
            //   updatedAt: new Date(),
            // },
            // {
            //   id: uuidv4(),
            //   name: "faith",
            //   createdAt: new Date(),
            //   updatedAt: new Date(),
            // },
            // {
            //   id: uuidv4(),
            //   name: "envy",
            //   createdAt: new Date(),
            //   updatedAt: new Date(),
            // },
            // {
            //   id: uuidv4(),
            //   name: "forgiveness",
            //   createdAt: new Date(),
            //   updatedAt: new Date(),
            // },

            {
              id: uuidv4(),
              name: "fear",
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ],
          { transaction: t }
        );
        ////////////////////////////////
        ///verses_tags

        const tags = await queryInterface.sequelize.query(
          `SELECT id from "tags";`,
          { transaction: t }
        );
        await queryInterface.bulkInsert(
          "verses_tags",
          [
            {
              VersesId: verses[0][0].id,
              TagId: tags[0][0].id,

              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              VersesId: verses[0][1].id,
              TagId: tags[0][0].id,

              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              VersesId: verses[0][2].id,
              TagId: tags[0][0].id,

              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ],
          { transaction: t }
        );
        ////////////////////////////////
        ///cards_decks
        const cards = await queryInterface.sequelize.query(
          `SELECT id from "cards";`,
          { transaction: t }
        );
        const decks = await queryInterface.sequelize.query(
          `SELECT id from "decks";`,
          { transaction: t }
        );
        await queryInterface.bulkInsert(
          "cards_decks",
          [
            {
              CardsId: cards[0][0].id,
              DecksId: decks[0][0].id,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              CardsId: cards[0][1].id,
              DecksId: decks[0][0].id,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              CardsId: cards[0][2].id,
              DecksId: decks[0][0].id,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            {
              CardsId: cards[0][2].id,
              DecksId: decks[0][1].id,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              CardsId: cards[0][3].id,
              DecksId: decks[0][1].id,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ],
          { transaction: t }
        );
        ////////////////////////////////
        ///cards_verses
        await queryInterface.bulkInsert(
          "cards_verses",
          [
            {
              CardsId: cards[0][0].id,
              VersesId: verses[0][0].id,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              CardsId: cards[0][1].id,
              VersesId: verses[0][0].id,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              CardsId: cards[0][2].id,
              VersesId: verses[0][0].id,
              createdAt: new Date(),
              updatedAt: new Date(),
            },

            {
              CardsId: cards[0][2].id,
              VersesId: verses[0][1].id,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              CardsId: cards[0][3].id,
              VersesId: verses[0][1].id,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ],
          { transaction: t }
        );

        //await t.commit();
      });
    } catch (e) {
      console.log(e);
      // await t.rollback();
    }
  },

  async down(queryInterface, Sequelize) {
    try {
      await queryInterface.bulkDelete("cards_decks", null, {});
      await queryInterface.bulkDelete("verses_tags", null, {});
      await queryInterface.bulkDelete("decks", null, {});
      await queryInterface.bulkDelete("users", null, {});
      await queryInterface.bulkDelete("notes", null, {});
      await queryInterface.bulkDelete("tags", null, {});
      await queryInterface.bulkDelete("verses", null, {});
      await queryInterface.bulkDelete("cards", null, {});
    } catch (e) {
      console.log(e);
    }
  },
};

const Sequelize = require("sequelize");

const migrate = async () => {
  try {
    const db = new Sequelize({
      db_url: process.env.DATABASE_URL,
      dialect: "postgres",

    });
    const migrations = await db.query("SELECT * FROM `SequelizeMeta`");
     console.log(migrations);
    await migrations.map((migration) =>
      migration.up(db.queryInterface, Sequelize)
    );
  } catch (e) {
    console.log(e);
  }
};
module.exports = migrate;

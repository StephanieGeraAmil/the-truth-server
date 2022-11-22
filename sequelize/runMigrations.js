const Sequelize = require("sequelize");

const getMigrations = async (db) => {
  const migrations = await db.query("SELECT * FROM `SequelizeMeta`");
  return migrations;
};
const aplyMigrations = async (migrations) => {
  await migrations.map((migration) =>
    migration.up(db.queryInterface, Sequelize)
  );
};

const migrate = async () => {
  const db = new Sequelize({
    db_url: DATABASE_URL,
    dialect: "postgres",
  });

  const migrations = await getMigrations(db);
  await aplyMigrations(migrations);
};
module.exports = migrate;

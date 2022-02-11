const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Verse= sequelize.define('Verse', {
        _id:{ type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, unique:true,primaryKey: true},
        book:{type: DataTypes.STRING, allowNull: false},
        chapter:{type: DataTypes.DECIMAL(4,0), defaultValue:0,allowNull: false},
        number: {type: DataTypes.DECIMAL(4,0), defaultValue:0,allowNull: false}

            // bar_id: {
            //     type: DataTypes.INTEGER,

            //     references: {
            //       // This is a reference to another model
            //       model: Bar,

            //       // This is the column name of the referenced model
            //       key: 'id',

            //       // With PostgreSQL, it is optionally possible to declare when to check the foreign key constraint, passing the Deferrable type.
            //       deferrable: Deferrable.INITIALLY_IMMEDIATE
            //       // Options:
            //       // - `Deferrable.INITIALLY_IMMEDIATE` - Immediately check the foreign key constraints
            //       // - `Deferrable.INITIALLY_DEFERRED` - Defer all foreign key constraint check to the end of a transaction
            //       // - `Deferrable.NOT` - Don't defer the checks at all (default) - This won't allow you to dynamically change the rule in a transaction
            //     }
            //   }



    }, {
            // Other model options go here
            tableName: 'verses'
         }); 
        
console.log(Verse === sequelize.models.Verse); 



export default sequelize.models.Verse;


(async () => {
 await sequelize.sync({ force: true });
  console.log("The table for the Verse model was just (re)created!");
  const verse = await Verse.create({
    book: 'Genesis',
    chapter: 1,
    number:1
  });
  console.log(verse.toJSON());
})();


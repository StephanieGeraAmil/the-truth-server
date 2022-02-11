const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Verse= sequelize.define('Verse', {
    
        book: {
                type: DataTypes.STRING,
                allowNull: false
            },
        chapter:  {type:Number, default:0},
        number:  {type:Number, default:0},
        date:{type:Date, default:new Date()},
     
        }, {
            // Other model options go here
            tableName: 'verses'
         }); 
        
console.log(Verse === sequelize.models.Verse); 
await Verse.sync({ force: true });
console.log("The table for the Verse model was just (re)created!");

export default sequelize.models.Verse;


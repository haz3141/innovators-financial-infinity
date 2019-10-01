module.exports = function(sequelize, DataTypes) {
    let Coin = sequelize.define("Coin", {
       image: {
           type: DataTypes.STRING,
           notEmpty: true
       },
       symbol: {
           type: DataTypes.STRING,
           notEmpty: true
       },
       currentprice: {
           type: DataTypes.DOUBLE,
           notEmpty: true
       },
       volume: {
           type: DataTypes.INTEGER,
           notEmpty: true
       },
       change: {
           type: DataTypes.DECIMAL,
           notEmpty: true
       }
    })
    return Coin
};
module.exports = function(sequelize, DataTypes) {
  let Lines = sequelize.define("Lines", {
    ethprice: {
      type: DataTypes.DECIMAL,
      notEmpty: true
    },
    time: {
      type: DataTypes.DATE,
      notEmpty: true
    }
  });
  return Lines;
};

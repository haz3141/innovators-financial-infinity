module.exports = function(sequelize, DataTypes) {
  let Graph = sequelize.define("Graph", {
    price: {
      type: DataTypes.DECIMAL,
      notEmpty: true
    },
    current_time: {
      type: DataTypes.DATE,
      notEmpty: true
    }
  });
  return Graph;
};

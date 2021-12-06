const City = (sequelize, DataTypes) => {
  const City = sequelize.define("City", {
    adrress: DataTypes.STRING,
    number: DataTypes.INTEGER,
  });
  return City;
};

module.exports = City;

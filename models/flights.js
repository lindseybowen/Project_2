 

module.exports = (sequelize, DataTypes)=>{
  const Post = sequelize.define("Flight", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    flight_num: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    departure_airport: {
      type: DataTypes.STRING,
    },
    arrival_airport: {
      type: DataTypes.STRING,
    },
    departure_date: {
      type: DataTypes.STRING,
    },
    return_date: {
      type: DataTypes.STRING,
    },
    oneWay: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    numberOfSeats: {
      type: DataTypes.INTEGER,
    }
  })
  return Post;
}
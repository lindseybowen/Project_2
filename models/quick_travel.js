const { Sequelize, DataTypes } = require("sequelize/types");

module.exports = (Sequelize, Datatypes) =>{
  const Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    body: {
      type: Dtatbase.TEXT,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: "Personal",
    }
  })
  return Post;
}
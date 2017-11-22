module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
        validate: {
          len: [3]
      }
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
       len: [5]
    },
    facebook_name: {
      type: DataTypes.STRING
    },
    twitter_name: {
      type: DataTypes.STRING
    },
    insta_name: {
      type: DataTypes.STRING
    }
  });
  return User;
};

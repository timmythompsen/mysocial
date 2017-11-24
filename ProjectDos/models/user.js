module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
        validate: {
          len: [3]
      }
    },
    name_last: {
      type: DataTypes.STRING,
      allowNull: true
    },
    name_first: {
      type: DataTypes.STRING,
      allowNull: true
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
    },
    li_name: {
      type: DataTypes.STRING
    },
    interest1: {
      type: DataTypes.STRING
    },
    interest2: {
      type: DataTypes.STRING
    },
    interest3: {
      type: DataTypes.STRING
    },
    profile_pic: {
      type: DataTypes.STRING
    }        
  });
  return User;
};

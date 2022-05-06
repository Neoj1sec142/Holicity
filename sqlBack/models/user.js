'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      //Follower / Following Associations
      User.belongsToMany(models.User, {
        as: 'followers',
        through: models.Follower,
        foreignKey: 'userId'
      }),
      User.belongsToMany(models.User, {
        as: 'following',
        thorugh: models.Follower,
        foreignKey: 'followerId'
      }),
      // Post Associations
      User.hasMany(models.Post, {
        foreignKey: 'userId'
      }),
      User.hasMany(models.Comment, {
        foreignKey: 'userId'
      })
    }
  }
  User.init({
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    bio: DataTypes.TEXT,
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    passwordDigest: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};
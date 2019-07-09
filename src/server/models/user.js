const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {});

  User.beforeCreate(async (user, options) => {
    const password_digest = await bcrypt.hash(user.password, 10)
    user.password = password_digest
  })

  User.associate = function(models) {
    // associations can be defined here
  };

  return User;
};
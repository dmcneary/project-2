module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    password: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      isEmail: true,
        notNull: true,
        notEmpty: true
    },
    id: {
      /*add UUID object if necessary??? */
    }
  });
  return Example;
};

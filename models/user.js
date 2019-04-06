var bcrypt = require("bcrypt-nodejs");

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    password: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        notEmpty: true
      }
    }
    // if we want a whole user profile 
    // firstName: DataTypes.STRING, 
    // lastName: DataTypes.STRING,
    // address: {
    //   street: DataTypes.TEXT,
    //   city: DataTypes.TEXT
    // },
    // aboutMe: {
    //   type: DataTypes.TEXT,
    //   allowNull: true}
  });

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  /* if we want to use 
  User.associate = function (models) {
    User.hasMany(models.Favorite, {
      onDelete: "cascade"
    });
  }*/
  return User;
  // return Example;
};

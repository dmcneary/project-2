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
// if we want to use 
  User.associate = function(models) { 
    User.hasMany(models.Favorite, {
      onDelete: "cascade"
    });
  }
  return User;
  // return Example;
};

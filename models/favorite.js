module.exports = function(sequelize, DataTypes) {
    var Favorite = sequelize.define("Favorite", {
        url: {
            type: DataTypes.STRING, 
            allowNull: false
        },
    })

    Favorite.associate = function(models) {
        Favorite.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return Favorite;
};
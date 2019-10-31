module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        ticketNum: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },

        modelName: {
            type: DataTypes.STRING,
            allowNull: false
        },

        returnTime: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    return Customer;
};
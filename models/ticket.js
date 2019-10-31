module.exports = function(sequelize, DataTypes) {

  var Ticket = sequelize.define("Ticket", {
    ticketNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    userName: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      } 
    },

    modelName: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    returnTime: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    }

  });
  return Ticket;
};
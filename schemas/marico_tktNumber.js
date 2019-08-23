/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('marico_tktnumber', {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      tktnumber: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true
      },
      tktmessage: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      userid: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      status: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      startdate: {
        type: DataTypes.DATEONLY,
        allowNull: true
      }
    }, {
      tableName: 'marico_tktnumber',
      timestamps: false
    });
  };
  
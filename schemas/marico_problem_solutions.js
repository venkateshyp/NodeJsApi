/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('marico_problem_solutions', {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      intent: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      solutions: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    }, {
      tableName: 'marico_problem_solutions',
      timestamps:false
    });
  };
  
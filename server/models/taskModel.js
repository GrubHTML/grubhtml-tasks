const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConnection");
const TaskModel = sequelize.define("Task", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  isCompleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  isDeleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  isImportant: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },

  dueDate: {
    type: DataTypes.DATE,
  },
});

// Relationship placeholder for future:
TaskModel.associate = (models) => {
  TaskModel.belongsTo(models.User, { foreignKey: "userId" });
};

module.exports = TaskModel;

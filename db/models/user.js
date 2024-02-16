import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database'; // Assuming you have a separate file for Sequelize initialization

class User extends Model {
  static associate(models) {
    // Define associations here if needed
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobileNo: {
      type: DataTypes.STRING,
      allowNull: true, // Change to false if email is compulsory
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
    timestamps: true, // Enable timestamps (createdAt and updatedAt)
    tableName: 'Users', // Optional: define custom table name if different from model name
  },
);

export default User;

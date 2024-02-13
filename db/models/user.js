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
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true, // Change to false if email is compulsory
      validate: {
        isEmail: true, // Validate email format
      },
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

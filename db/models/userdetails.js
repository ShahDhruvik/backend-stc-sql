'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserDetails.init(
    {
      userId: DataTypes.INTEGER,
      email: DataTypes.STRING,
      dob: DataTypes.DATE,
      gender: DataTypes.STRING,
      departmentId: DataTypes.INTEGER,
      designationId: DataTypes.INTEGER,
      isActive: DataTypes.BOOLEAN,
      isDeleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'UserDetails',
    },
  );
  return UserDetails;
};

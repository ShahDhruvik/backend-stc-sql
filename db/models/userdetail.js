'use strict';
const { Model } = require('sequelize');
const Users = require('../../src/model/user.model');
const Departments = require('../../src/model/department.model');
const Designations = require('../../src/model/designation.model');
module.exports = (sequelize, DataTypes) => {
  class Userdetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Userdetail.init(
    {
      userId: DataTypes.INTEGER,
      email: DataTypes.STRING,
      gender: DataTypes.STRING,
      bod: DataTypes.DATE,
      departmentId: DataTypes.INTEGER,
      designationId: DataTypes.INTEGER,
      isActive: DataTypes.BOOLEAN,
      isDeleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Userdetail',
    },
  );
  Userdetail.hasOne(Users, { foreignKey: 'userId' });
  Userdetail.hasOne(Departments, { foreignKey: 'departmentId' });
  Userdetail.hasOne(Designations, { foreignKey: 'designationId' });
  return Userdetail;
};

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pages.init({
    name: DataTypes.STRING,
    menu_id: DataTypes.INTEGER,
    url: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pages',
  });
  return Pages;
};
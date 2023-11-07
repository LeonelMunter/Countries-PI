const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {

    sequelize.define("country", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            unique: true,
            primaryKey: true,
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          imgflag: {
            type: DataTypes.STRING,
            validate: {
              isUrl: true,
            },
            allowNull: false,
          },
          continent: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          capital: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          subregion: {
            type: DataTypes.STRING,
          },
          area: {
            type: DataTypes.REAL,
          },
          population: {
            type: DataTypes.INTEGER,
          },

    })
}
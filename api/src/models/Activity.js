const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

    sequelize.define("activity", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          difficulty: {
           type: DataTypes.ENUM,
           allowNull: false,
           values: ["Principiante", "Aficionado", "Normal", "Profesional", "Experto"],
          },
          duration: {
            type: DataTypes.REAL(2, 2),
            allowNull: false,
          },
    })
}
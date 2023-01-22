module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define("images", {
      type: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      itemname: {
        type: DataTypes.STRING,
      },
      itemdesc: {
        type: DataTypes.STRING,
      },
      itemprice: {
        type: DataTypes.INTEGER,
      },
      data: {
        type: DataTypes.BLOB("long"),
      },
    });
  
    
    return Image;
  };
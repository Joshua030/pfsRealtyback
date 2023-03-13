const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "property",
    {
      mls_id: {
        type: DataTypes.STRING,
        // allowNull: false,
        // unique: true,
      },
      name: {
        type: DataTypes.STRING,
        // allowNull: false,
        // unique: true,
      },
      url: {
        type: DataTypes.STRING,
        // allowNull: false,
        // unique: true,
      },
      json_data: {
        type: DataTypes.JSONB,
        // allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        // allowNull: false,
        // unique: true,
      },
      city: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      state: {
        type: DataTypes.STRING,
      },
      postal_code: {
        // type: DataTypes.INTEGER,
        type: DataTypes.STRING,
      },
      sub_type_text: {
        type: DataTypes.STRING,
      },
      natural_price: {
        // type: DataTypes.INTEGER,
        type: DataTypes.STRING,
      },
      property_area: {
        // type: DataTypes.INTEGER,
        type: DataTypes.STRING,
      },
      property_baths_full: {
        // type: DataTypes.INTEGER,
        type: DataTypes.STRING,
      },
      property_bedrooms: {
        // type: DataTypes.INTEGER,
        type: DataTypes.STRING,
      },
      property_roof: {
        type: DataTypes.STRING,
      },
      property_cooling: {
        type: DataTypes.STRING,
      },
      property_heating: {
        type: DataTypes.STRING,
      },
      property_fireplaces: {
        type: DataTypes.STRING,
      },
      property_flooring: {
        type: DataTypes.STRING,
      },
      property_laundry_features: {
        type: DataTypes.STRING,
      },
      property_pool: {
        type: DataTypes.STRING,
      },
      property_type: {
        type: DataTypes.STRING,
      },
      property_year_built: {
        // type: DataTypes.INTEGER,
        type: DataTypes.STRING,
      },
      property_style: {
        type: DataTypes.STRING,
      },
      property_subdivision: {
        type: DataTypes.STRING,
      },
      property_parking_description: {
        type: DataTypes.STRING,
      },
      association_fee: {
        // type: DataTypes.INTEGER,
        type: DataTypes.STRING,
      },
      geo_lat: {
        // type: DataTypes.INTEGER,
        type: DataTypes.STRING,
      },
      geo_lng: {
        // type: DataTypes.INTEGER,
        type: DataTypes.STRING,
      },
      geo_county: {
        type: DataTypes.STRING,
      },
      mls_status_text: {
        type: DataTypes.STRING,
      },
      list_date: {
        // type: DataTypes.INTEGER,
        type: DataTypes.STRING,
      },
      modified_date: {
        // type: DataTypes.INTEGER,
        type: DataTypes.STRING,
      },
      estimated_month_fee: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false, // disable timestamps
    }
  );
};

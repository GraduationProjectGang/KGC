require('dotenv').config();

module.exports = {
    "development": {
      "username": "root",
      "password": process.env.SEQUELIZE_PASSWORD,
      "database": "database_stressy",
      "host": process.env.SEQUELIZE_HOST,
      "dialect": "mysql"
      
    },
    "test": {
      "username": "root",
      "password": process.env.SEQUELIZE_PASSWORD,
      "database": "database_KGC",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "username": "root",
      "password": process.env.SEQUELIZE_PASSWORD,
      "database": "database_KGC",
      "host": "127.0.0.1",
      "dialect": "mysql"
    }
  };
  

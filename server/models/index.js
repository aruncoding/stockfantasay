import connection from "../config/connectDb.js";
import { Sequelize } from "sequelize";
import userModel from "../module/user/models/user.model.js";

const sequelize = new Sequelize(
    connection.config.database,
    connection.config.user,
    connection.config.password, {
    host: connection.host,
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: connection.config.pool.max,
        min: connection.config.pool.min,
        acquire: connection.config.pool.acquire,
        idle: connection.config.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = userModel(sequelize, Sequelize);

export default db;

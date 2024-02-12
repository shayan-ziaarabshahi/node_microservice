"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var product_1 = require("./entity/product");
var AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'test_database',
    synchronize: true,
    logging: true,
    entities: [product_1.Product],
    subscribers: [],
    migrations: [],
});
exports.default = AppDataSource;

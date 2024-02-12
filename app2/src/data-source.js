"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var product_1 = require("./entity/product");
var AppDataSource = new typeorm_1.DataSource({
    type: 'mongodb',
    host: '127.0.0.1',
    port: 27017,
    username: '',
    password: '',
    database: 'test',
    synchronize: true,
    logging: false,
    entities: [product_1.Product],
    subscribers: [],
    migrations: [],
});
exports.default = AppDataSource;

import { DataSource } from 'typeorm';
import { Product } from './entity/product';

const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '1234',
  database: 'test_database',
  synchronize: true,
  logging: true,
  entities: [Product],
  subscribers: [],
  migrations: [],
});

export default AppDataSource;

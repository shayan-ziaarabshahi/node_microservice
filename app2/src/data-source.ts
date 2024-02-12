import { DataSource } from 'typeorm';
import { Product } from './entity/product';

const AppDataSource = new DataSource({
  type: 'mongodb',
  host: '127.0.0.1',
  port: 27017,
  username: '',
  password: '',
  database: 'test',
  synchronize: true,
  logging: false,
  entities: [Product],
  subscribers: [],
  migrations: [],
});

export default AppDataSource;

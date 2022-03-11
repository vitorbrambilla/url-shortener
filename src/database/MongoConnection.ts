import moongose from 'mongoose';
import { config } from '../config/Constants';

export class MongoConnection {
  public async connect(): Promise<void> {
    try {
      await moongose.connect(config.MONGO_CONNETION, { useNewUrlParser: true, useUnifiedTopology: true })
      console.log('Database connected');
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  }
}
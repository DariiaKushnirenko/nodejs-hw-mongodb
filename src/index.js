
import { setupServer } from './server.js';
import { initMongoDB } from './db/initMongoDB.js';


const initMongoConnection = async () => {
  await initMongoDB();
  setupServer();
};

initMongoConnection();

import mongoose from 'mongoose';
import { getEnvVar } from '../utils/getEnvVar.js';

const clientOptions = {
    serverApi:
        { version: '1', strict: true, deprecationErrors: true },
};

export const initMongoDB = async () => {
 
    const user = getEnvVar('MONGODB_USER');
    const pwd = getEnvVar('MONGODB_PASSWORD');
    const url = getEnvVar('MONGODB_URL');
    const db = getEnvVar('MONGODB_DB');
      
    const uri = `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster1`;

    try {
        await mongoose.connect(uri, clientOptions);
        await mongoose.connection.db.admin().command({ ping:1});
    console.log('Mongo connection successfully established!');
  } catch (err) {
    console.log('Error while setting up mongo connection', err);
        process.exit(1);
  }
};
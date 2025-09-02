import cloudinary from 'cloudinary';
import fs from 'node:fs/promises';

// import { getEnvVar } from './getEnvVar.js';
// import { CLOUDINARY } from '../constants/index.js';

// cloudinary.v2.config({
//   secure: true,
//   cloud_name: getEnvVar(CLOUDINARY.CLOUD_NAME),
//   api_key: getEnvVar(CLOUDINARY.API_KEY),
//   api_secret: getEnvVar(CLOUDINARY.API_SECRET),
// });

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
  secure: true,
});

export const saveFileToCloudinary = async (file) => {
  const response = await cloudinary.v2.uploader.upload(file.path);
  await fs.unlink(file.path);
  return response.secure_url;
};
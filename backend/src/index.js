import fetch from 'node-fetch';
import Unsplash from 'unsplash-js';
import { toJson } from 'unsplash-js';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

global.fetch = fetch;

const unsplash = new Unsplash({
  accessKey: process.env.ACCESS_KEY,
  secret: process.env.SECRET_KEY,
  callbackUrl: process.env.CALLBACK_URL,
});

const app = express();

app.get('/api/photos', (req, res) => {
  unsplash.photos
    .listPhotos(1, 20)
    .then(toJson)
    .then((json) => res.json(json));
});

const { PORT=5000 } = process.env.PORT;

app.listen(PORT,()=>{
  console.log(`Listening on ${PORT}`);
  console.log(`REST APIs at http://localhost:${PORT}/api/photos`);
});

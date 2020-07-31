import express from 'express';
import { Server } from 'http';

import path from 'path';
import bodyParser from 'body-parser';

// eslint-disable-next-line no-underscore-dangle
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const app = express();

const server = Server(app);

app.use(bodyParser.json());
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname.substring(2)));
});

server.listen(process.env.PORT || 8080);

import express from 'express';
import { Server } from 'http';

import path from 'path';
import bodyParser from 'body-parser';

const app = express();

const server = Server(app);

app.use(bodyParser.json());
app.use(express.json());

app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('dist', 'index.html'));
});

server.listen(process.env.PORT || 8080);

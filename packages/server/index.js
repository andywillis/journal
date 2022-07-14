import path, { dirname } from 'path';
import http from 'http';
import express from 'express';
import { fileURLToPath } from 'url';
import DraftLog from 'draftlog';

import 'dotenv/config';

import routes from './routes';

import journal from './data/journal_old2' assert { type: 'json' };

DraftLog(console);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, '../../client/build')));
app.use(express.json());

const port = process.env.PORT || 4000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// app.get('/sse', routes.sse());
app.get('/journal', routes.journal(journal));
app.get('/', routes.root());

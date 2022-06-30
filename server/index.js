import express from 'express';
import cors from 'cors';

import routes from './routes/api.js';

const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

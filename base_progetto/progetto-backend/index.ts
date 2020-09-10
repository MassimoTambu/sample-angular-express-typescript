import cors from 'cors';
import express from 'express';
import { Consts } from '../common/consts';
import { RouterUsers } from './src/routes/users.router';

const app: express.Application = express();

app.use(cors());
app.use(Consts.USERS, RouterUsers);

app.get('/', function (req, res) {
  console.log(req);
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log(`App is listening on port ${Consts.BASE_URL}!`);
});

import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { Consts } from '../../../common/consts';
import { fetchUsers, insertUser } from '../controllers/users.controller';

export const RouterUsers = express.Router();

RouterUsers.use(bodyParser.urlencoded({ extended: true }));
RouterUsers.use(bodyParser.json());

RouterUsers.use(cors());

RouterUsers.get(Consts.FETCH, fetchUsers);
RouterUsers.post(Consts.ADD, insertUser);

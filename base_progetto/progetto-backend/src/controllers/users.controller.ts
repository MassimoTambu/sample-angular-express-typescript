import { Request, Response } from 'express';
import { QueryResult } from 'pg';

import { pool } from '../database';
import { IUser } from '../../../common/models/IUsers';

export const fetchUsers = async (req: Request, res: Response) => {
  console.log('fetch users');
  const response: QueryResult<IUser> = await pool.query(
    ` SELECT * FROM Users `
  );

  res.send(response.rows);
};

export const insertUser = async (req: Request, res: Response) => {
  const name: String = req.body.name;
  const surname: String = req.body.surname;
  console.log(`insert user ${name} ${surname}`);
  pool.query(
    `INSERT INTO users (name, surname)
    VALUES ('${name}', '${surname}')`,
    (err: Error, result: QueryResult) => {
      if (err) {
        res.status(400).send(err.message);
        throw err.message;
      }
      res.status(200).send({ messageText: 'Utente creato!' });
    }
  );
};

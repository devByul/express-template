import mysql, { Pool } from "mysql2/promise";

import { logger } from "./logger";
import dotenv from "./dotenv";
import { IDataBase } from "../interface/IDatabase";

const pool: { [key: string]: Pool } = {};

const connectionTestQuery = async (db_info: IDataBase) => {
  const { name, host, port, user, password, database, connectionLimit } =
    db_info;

  try {
    pool[name] = mysql.createPool({
      host,
      port,
      user,
      password,
      database,
      connectionLimit,
    });

    const conn = await pool[name].getConnection();
    const rows = (await conn.query("SELECT VERSION() AS version")) as any;

    logger.info(`MySQL Connection User : ${user}`);
    logger.info(`MySQL ${name} Connection Version : ${rows[0][0].version}`);
  } catch (error: any) {
    logger.error(
      `MySQL ${name} Connection Error : [${error.code}] ${error.message}`
    );
    process.exit(1);
  }
};

(async () => {
  const { thingsflow } = dotenv.database;
  [thingsflow].map((database) => {
    connectionTestQuery(database);
  });
})();

export default pool;

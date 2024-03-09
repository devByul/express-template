export interface IDataBase {
  name: string;
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
  connectionLimit: number;
}

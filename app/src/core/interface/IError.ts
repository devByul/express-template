import { Result } from "express-validator";
import { StatusCodes } from "http-status-codes";

export interface IError {
  code: string;
  message: string;
  status: StatusCodes;
  validation?: Result;
}

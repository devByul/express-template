import { StatusCodes } from "http-status-codes";
import { Result } from "express-validator";
import { IError } from "../interface/IError";

class ErrorBuilder {
  private error: IError;

  constructor() {
    this.error = { code: "", message: "", status: StatusCodes.OK };
  }

  setCode = (code: string) => {
    this.error.code = code;
    return this;
  };

  setStatus = (status: StatusCodes) => {
    this.error.status = status;
    return this;
  };

  setMessage = (message: string) => {
    this.error.message = message;
    return this;
  };

  setValidation = (result: Result) => {
    this.error.validation = result;
    return this;
  };

  build = (): IError => {
    return this.error;
  };
}

export default ErrorBuilder;

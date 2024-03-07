import { Result, validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";
import { IMiddleware } from "../../core/interface/IExpress";
import ErrorBuilder from "../../core/error/error.builder";
import BaseController from "../controller/base.controller";
import ERRORCODE from "../../core/error/code.enum";

export default class ValidationMiddleware extends BaseController {
  /**
   * Request 측에서 전달받은 body, param, queryString 값이 유효성 검사 이후 해당 미들웨어를 호출합니다.
   * validationResult 값 중 error 가 발생하지 않을 경우 next 함수로 다음 서비스 로직으로 넘어 갑니다.
   */
  static validatorChecker: IMiddleware = (req, res, next) => {
    try {
      const result: Result = validationResult(req);

      if (!result.isEmpty()) {
        throw new ErrorBuilder()
          .setCode(ERRORCODE.VALIDATION_ERROR)
          .setStatus(StatusCodes.UNPROCESSABLE_ENTITY)
          .setMessage("ValidationError Message")
          .setValidation(result)
          .build();
      }

      next();
    } catch (error: any) {
      BaseController.error(res, error?.status, error);
    }
  };
}

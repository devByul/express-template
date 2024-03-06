import { StatusCodes } from "http-status-codes";
import ErrorBuilder from "../../core/config/error/error";
import { IController } from "../../core/interface/IExpress";
import WorldService from "../service/world.service";
import BaseController from "./base.controller";

export default class WorldController extends BaseController {
  static helloWorld: IController = (req, res) => {
    const result = WorldService.getHelloWorld();

    BaseController.json(res, 200, result);
  };

  static errorWorld: IController = (req, res) => {
    try {
      throw new ErrorBuilder()
        .setCode("ErrorWorld")
        .setStatus(StatusCodes.BAD_REQUEST)
        .setMessage("Error World!")
        .build();
    } catch (error: any) {
      BaseController.error(res, error?.status, error);
    }
  };
}

import { StatusCodes } from "http-status-codes";
import ErrorBuilder from "../../core/error/error.builder";
import { IController } from "../../core/interface/IExpress";
import WorldService from "../service/world.service";
import BaseController from "./base.controller";
import ERRORCODE from "../../core/error/code.enum";

export default class WorldController extends BaseController {
  static helloWorld: IController = (req, res) => {
    const result = WorldService.getHelloWorld();

    BaseController.json(res, 200, result);
  };

  static errorWorld: IController = (req, res) => {
    const { world }: any = req.query;
    try {
      throw new ErrorBuilder()
        .setCode(ERRORCODE.ERROR_WORLD)
        .setStatus(StatusCodes.BAD_REQUEST)
        .setMessage(`${world} Error World!`)
        .build();
    } catch (error: any) {
      BaseController.error(res, error?.status, error);
    }
  };
}

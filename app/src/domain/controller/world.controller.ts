import { IController } from "../../core/interface/IExpress";
import BaseController from "./base.controller";

export default class WorldController extends BaseController {
  static helloWorld: IController = (req, res) => {
    BaseController.json(res, 200, "Hello World");
  };

  static errorWorld: IController = (req, res) => {
    try {
      throw new Error("Error World");
    } catch (error: any) {
      BaseController.error(res, 400, {
        code: "Error World",
        message: "Error World Msg",
      });
    }
  };
}

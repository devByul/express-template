import { Router } from "express";
import { query } from "express-validator";
import WorldController from "../../controller/world.controller";
import ValidationMiddleware from "../../middleware/validation";

const router = Router();

router.get("/hello", WorldController.helloWorld);
router.get(
  "/error",
  query("world").notEmpty().isString(),
  ValidationMiddleware.validatorChecker,
  WorldController.errorWorld
);

export default router;

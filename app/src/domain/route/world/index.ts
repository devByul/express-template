import { Router } from "express";
import WorldController from "../../controller/world.controller";

const router = Router();

router.get("/hello", WorldController.helloWorld);
router.get("/error", WorldController.errorWorld);

export default router;

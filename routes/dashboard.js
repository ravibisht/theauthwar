import { Router } from "express";
import { dashboard } from "../controller/dashboard";

const router = Router()
router.route('/dashboard').get(dashboard)

export default router
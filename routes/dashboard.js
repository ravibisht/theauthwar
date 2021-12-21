import { Router } from "express"
import { dashboard } from "../controller/dashboard"
import AuthMiddleWare from "../middleware/AuthMiddleWare"

const router = Router()

router.route('/dashboard').get(AuthMiddleWare, dashboard)

export default router
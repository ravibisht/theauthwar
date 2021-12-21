import {Router} from "express"
import {login} from "../controller/auth"

const router = Router()

router.route('/login').post(login)

export default router
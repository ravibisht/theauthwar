import jsonwebtoken from "jsonwebtoken"
import 'dotenv/config'
import { HttpException } from "../exception"

export const login = (req, res) => {

    const {username, password} = req.body

    console.log(req.body);

    if (username && password) {
        const token = jsonwebtoken.sign({username}, process.env.JWT_SECRET, {expiresIn: '1h'})
        return res.status(200).json({token})
    }

    throw new HttpException(400, "Email id or password is wrong.")
}


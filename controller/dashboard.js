import jsonwebtoken from "jsonwebtoken"
import { HttpException } from "../exception"

export const dashboard = (req, res) => {

    const username = req.username
    const luckyNumber = Math.floor(Math.random() * 100)
    const message = `Hello ${username} your lucky no is ${luckyNumber}.`
    return res.status(200).json({ message })

}


import jsonwebtoken from "jsonwebtoken"
import HttpException from "../exception/HttpException"

export const dashboard = (req, res) => {

    const { authorization } = req.headers

    console.log(req.headers);
    if (authorization && authorization.startsWith('Bearer')) {
        const luckyNumber = Math.floor(Math.random() * 100)
        try {
            const { username } = jsonwebtoken.verify(authorization.split(' ')[1], process.env.JWT_SECRET)
            const message = `Hello ${username} your lucky no is ${luckyNumber}.`
            return res.status(200).json({ message })
        } catch (error) {
            throw new HttpException(401, "A Valid Token Not Provided.")
        }


    }
    throw new HttpException(401, `UnAutheticated `)
}


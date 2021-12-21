import 'dotenv/config'
import jsonwebtoken from 'jsonwebtoken'
import { HttpException } from '../exception'

export default async (req, res, next) => {

    console.log(`${new Date()} => `);
    console.log(req.headers);
    const { authorization } = req.headers

    if (authorization && authorization.startsWith('Bearer')) {

        try {
            console.log(process.env.JWT_SECRET);
            const { username } = jsonwebtoken.verify(authorization.split(' ')[1], process.env.JWT_SECRET)
            req.username = username
            next()
        } catch (error) {
            next(new HttpException(401, "A Valid Token Not Provided."))
        }

    } else {
        next(new HttpException(401, "A Valid Token Not Provided."))
    }

}
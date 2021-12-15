import HttpException from "../exception/HttpException"

export default (err, req, res, next) => {
    if (err instanceof HttpException) {
        return res.status(err.statusCode).json({ msg: err.message })
    }

    return res.status(500).json({
        msg: `Some thing went wrong : ${err}`
    })
}
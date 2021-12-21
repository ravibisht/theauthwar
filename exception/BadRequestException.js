import HttpException from "./HttpException"
import { StatusCodes } from 'http-status-codes'

export default class BadRequestException extends HttpException {
    constructor(message) {
        this.statusCode = StatusCodes.BAD_REQUEST
        super(message, this.statusCode)
    }
}
import HttpException from './HttpException'
import { StatusCodes } from 'http-status-codes'

export default class UnAuthorizedException extends HttpException {
    constructor(message) {
        this.statusCode = StatusCodes.UNAUTHORIZED
        super(message, this.statusCode)
    }
}
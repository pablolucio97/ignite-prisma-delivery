import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

interface IEnsureAuthenticatePayload {
    sub: string
}

export default async function (req: Request, res: Response, next: NextFunction) {
    const bearerToken = req.headers.authorization
    if (!bearerToken) {
        return res.status(401).json({
            message: 'Token missing'
        })
    }
    const token = bearerToken.split(' ')[1]
    try {
        const { sub } = verify(token, 'b51a4ad33cbd2c22f8196ae4857337b2') as IEnsureAuthenticatePayload
        req.id_client = sub
        return next()
    } catch (error) {
        return res.status(401).json({
            message: 'Invalid token'
        })
    }
}
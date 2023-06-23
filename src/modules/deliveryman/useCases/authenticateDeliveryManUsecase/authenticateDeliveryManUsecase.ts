import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { prisma } from '../../../../database/prismaClient';
import { AppError } from '../../../../errors/AppError';

export interface IAuthenticateDeliveryMan {
    username: string;
    password: string;
}

export class AuthenticateDeliveryManUseCase {
    async execute({ username, password }: IAuthenticateDeliveryMan) {
        try {
            const deliveryMan = await prisma.deliveryMan.findFirst({
                where: {
                    username,
                }
            })

            if (!deliveryMan) {
                throw new AppError(403, 'Username or password is invalid')
            }

            const passwordMatches = await compare(password, deliveryMan.password)

            if (!passwordMatches) {
                throw new AppError(403, 'Username or password is incorrect')
            }

            const token = sign({
                username
            }, "b51a4ad33cbd2c22f8196ae4857557b2", {
                subject: deliveryMan.id,
                expiresIn: '1d'
            })

            return token
        } catch (error) {
            console.log(error)
        }

    }
}
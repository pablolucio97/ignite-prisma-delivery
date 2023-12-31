import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { prisma } from '../../../../database/prismaClient';
import { AppError } from '../../../../errors/AppError';

export interface IAuthenticateClient {
    username: string;
    password: string;
}

export class AuthenticateClientUseCase {
    async execute({ username, password }: IAuthenticateClient) {
        const client = await prisma.clients.findFirst({
            where: {
                username,
            }
        })

        if (!client) {
            throw new AppError(403, 'Username or password is invalid')
        }

        const passwordMatches = await compare(password, client.password)

        if (!passwordMatches) {
            throw new AppError(403, 'Username or password is incorrect')
        }

        const token = sign({
            username
        }, "b51a4ad33cbd2c22f8196ae4857337b2", {
            subject: client.id,
            expiresIn: '1d'
        })

        return token

    }
}
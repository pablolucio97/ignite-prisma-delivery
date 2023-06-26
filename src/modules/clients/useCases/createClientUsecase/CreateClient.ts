import { prisma } from '../../../../database/prismaClient'
import { hash } from 'bcrypt'
import { AppError } from '../../../../errors/AppError';

interface ICreateClient {
    username: string;
    password: string;
}

export class CreateClientUseCase {

    async execute({ username, password }: ICreateClient) {

        try {
            const clientExist = await prisma.clients.findFirst({
                where: {
                    username
                }
            })

            if (clientExist) {
                throw new AppError(403, 'Client already exists')
            }

            const encryptedPassword = await hash(password, 8)

            const client = await prisma.clients.create({
                data: {
                    username,
                    password: encryptedPassword
                }
            })

            return client
        } catch (error) {
            console.log(error)
        }
    }
}
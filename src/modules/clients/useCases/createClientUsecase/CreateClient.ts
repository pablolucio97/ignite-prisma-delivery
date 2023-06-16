import { prisma } from '../../../../database/prismaClient'
import { hash } from 'bcrypt'

interface ICreateClient {
    username: string;
    password: string;
}

export class CreateClientUseCase {

    async execute({ username, password }: ICreateClient) {

        const clientExist = await prisma.clients.findFirst({
            where: {
                username: {
                    mode: "insensitive"
                }
            }
        })

        if (clientExist) {
            throw new Error('Client already exists')
        }

        const encryptedPassword = await hash(password, 8)

        const client = await prisma.clients.create({
            data: {
                username,
                password: encryptedPassword
            }
        })
        
        return client
    }
}
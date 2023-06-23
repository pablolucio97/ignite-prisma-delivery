import {prisma} from '../../../../database/prismaClient'
import { AppError } from '../../../../errors/AppError';
import {hash} from 'bcrypt'

interface ICreateDeliveryMan{
    username: string;
    password: string;
}

export class CreateDeliveryManUseCase{
    async execute({username, password} : ICreateDeliveryMan){
        try {
            const deliveryManAlreadyExists = await prisma.deliveryMan.findFirst({
                where:{
                    username:{
                        mode: 'insensitive'
                    }
                }
            })

            if(deliveryManAlreadyExists){
                throw new AppError(403, 'Delivery man already exists')
            }

            const encryptedPassword = await hash(password, 8)

           const deliveryMan = await prisma.deliveryMan.create({
                data:{
                    username,
                    password: encryptedPassword
                }
            })

            return deliveryMan

        } catch (error) {
            console.log(error)
        }
    }
}
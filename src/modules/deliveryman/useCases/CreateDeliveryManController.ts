import {Request, Response} from 'express'
import {CreateDeliveryManUseCase} from './CreateDeliveryManUseCase'

export class CreateDeliveryManController {
    async handle(request: Request, response: Response): Promise<Response>{
        const {username, password} = request.body

        const createDeliveryManUseCase = new CreateDeliveryManUseCase()

        const deliveryMan = await createDeliveryManUseCase.execute({username, password})
   
        return response.status(201).json(deliveryMan)

    }
}
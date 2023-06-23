import {Request, Response} from 'express'
import {CreateDeliveryUseCase} from './CreateDeliveryUseCase'

export class CreateDeliveryController{
    async handle(req: Request, res: Response): Promise<Response>{
        const {id_client, item_name, id_deliveryman} = req.body
        const createDeliveryUseCase = new CreateDeliveryUseCase()
        const delivery = await createDeliveryUseCase.execute({
            id_client,
            item_name,
            id_deliveryman
        })
        return res.status(201).json(delivery)
    }
}
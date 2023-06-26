import { Request, Response } from 'express'
import { FindAllDeliveriesByDeliverymanUseCase } from './findAllDeliveriesByDeliverymanUseCase'

export class FindAllDeliveriesByDeliverymanController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id_deliveryman } = req
        const findAllDeliveriesUseCase = new FindAllDeliveriesByDeliverymanUseCase()
        const deliveries = await findAllDeliveriesUseCase.execute(id_deliveryman)
        return res.status(201).json(deliveries)
    }
}
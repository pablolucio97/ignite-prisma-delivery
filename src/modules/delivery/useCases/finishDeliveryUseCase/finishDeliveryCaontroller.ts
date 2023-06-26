import { Request, Response } from 'express'
import { FinishDeliveryUseCase } from './finishDeliveryUseCase'

export class FinishDeliveryController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id_deliveryman } = req
        const { id: id_delivery } = req.params
        const finishDeliveryUseCase = new FinishDeliveryUseCase()
        const delivery = await finishDeliveryUseCase.execute({ id_delivery, id_deliveryman })
        return res.status(201).json(delivery)
    }
}
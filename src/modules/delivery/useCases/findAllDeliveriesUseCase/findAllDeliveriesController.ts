import { Request, Response } from 'express'
import { FindAllDeliveriesUseCase } from './findAllDeliveriesUseCase'

export class FindAllDeliveriesController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id_deliveryman } = req
        const findAllDeliveriesUseCase = new FindAllDeliveriesUseCase()
        const deliveries = await findAllDeliveriesUseCase.execute(id_deliveryman)
        return res.status(201).json(deliveries)
    }
}
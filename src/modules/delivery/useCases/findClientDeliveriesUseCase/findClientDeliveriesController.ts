import { Request, Response } from 'express'
import { FindClientDeliveriesUseCase } from './findClientDeliveriesUseCase'

export class FindClientDeliveriesController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id_client } = req
        const findClientDeliveriesUseCase = new FindClientDeliveriesUseCase()
        const deliveries = await findClientDeliveriesUseCase.execute(id_client)
        return res.status(201).json(deliveries)
    }
}
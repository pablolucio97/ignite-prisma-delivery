import { Request, Response } from 'express'
import { FindAllDeliveriesWithoutEndDateUseCase } from './findAllDeliveriesWithoutEndDateUseCase'
export class FindAllDeliveriesWithoutEndDateController {
    async handle(req: Request, res: Response): Promise<Response> {
        const findAllDeliveriesWithoutEndDateUseCase = new FindAllDeliveriesWithoutEndDateUseCase()
        const deliveries = await findAllDeliveriesWithoutEndDateUseCase.execute()
        return res.status(200).json(deliveries)
    }
}
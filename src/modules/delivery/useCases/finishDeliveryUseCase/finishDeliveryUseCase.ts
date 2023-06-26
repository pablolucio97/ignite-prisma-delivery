import { prisma } from "../../../../database/prismaClient";

interface IFinishDelivery {
    id_delivery: string;
    id_deliveryman: string;
}

export class FinishDeliveryUseCase {
    async execute({ id_delivery, id_deliveryman }: IFinishDelivery) {
        const result = await prisma.deliveries.updateMany({
            where: {
                id: id_delivery,
                id_deliveryman,
            },
            data: {
                end_at: new Date(),
            }
        })

        return result
    }
}
import { prisma } from "../../../../database/prismaClient";

export class FindAllDeliveriesByDeliverymanUseCase {
    async execute(id_deliveryman: string) {
        const deliveries = await prisma.deliveryMan.findMany({
            where: {
                id: id_deliveryman
            },
            select: {
                Deliveries: true,
                id: true,
                password: true
            }
        })
        return deliveries
    }
}
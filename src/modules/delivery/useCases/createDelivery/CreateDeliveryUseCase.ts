import { prisma } from '../../../../database/prismaClient'
interface ICreatedDelivery {
    item_name: string;
    id_client: string;
    id_deliveryman?: string | null;
}

export class CreateDeliveryUseCase {

    async execute({ id_client, item_name }: ICreatedDelivery) {
        try {
            const delivery = await prisma.deliveries.create({
                data: {
                    item_name,
                    id_client,
                    id_deliveryman: null
                }
            })
            return delivery
        } catch (error) {
            console.log(error)
        }
    }

}
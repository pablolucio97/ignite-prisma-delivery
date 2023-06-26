import { Router } from 'express'
import { AuthenticateClientController } from './modules/clients/useCases/authenticateClientUsecase/authenticateClientController'
import { CreateClientController } from './modules/clients/useCases/createClientUsecase/CreateClientController'
import { CreateDeliveryManController } from './modules/deliveryman/useCases/createDeliveryManUseCase/CreateDeliveryManController'
import { AuthenticateDeliveryManController } from './modules/deliveryman/useCases/authenticateDeliveryManUsecase/authenticateDeliveryManController'
import { CreateDeliveryController } from './modules/delivery/useCases/createDelivery/CreateDeliveryController'
import ensureAuthenticateClient from './middlewares/authenticateClient'
import ensureAuthenticateDeliveryMan from './middlewares/authenticaDeliveryman'
import { FindAllDeliveriesWithoutEndDateController } from './modules/delivery/useCases/findAllDeliveriesWithoutEndDate/findAllDeliveriesWithoutEndDateController'
import { UpdateDeliveryManController } from './modules/deliveryman/useCases/updateDeliveryManUseCase/updateDeliveryManController'
import { FindClientDeliveriesController } from './modules/delivery/useCases/findClientDeliveriesUseCase/findClientDeliveriesController'
import { FindAllDeliveriesController } from './modules/delivery/useCases/findAllDeliveriesUseCase/findAllDeliveriesController'


const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const createDeliveryMan = new CreateDeliveryManController()
const authenticateDeliveryManController = new AuthenticateDeliveryManController()
const createDeliveryController = new CreateDeliveryController()
const findAllDeliveriesWithoutEndDateController = new FindAllDeliveriesWithoutEndDateController()
const updateDeliveryManController = new UpdateDeliveryManController()
const findClientDeliveriesController = new FindClientDeliveriesController()
const findAllDeliveriesController = new FindAllDeliveriesController()

routes.post('/clients', createClientController.handle)
routes.post('/clients', createClientController.handle)
routes.post('/clients/auth', authenticateClientController.handle)

routes.post('/deliverymen', createDeliveryMan.handle)
routes.post('/deliverymen/auth', authenticateDeliveryManController.handle)

routes.put(
    '/deliveries/update-deliveryman/:id',
    ensureAuthenticateDeliveryMan,
    updateDeliveryManController.handle
)
routes.post('/deliveries', ensureAuthenticateClient, createDeliveryController.handle)
routes.get(
    '/deliveries/deliveryman/available',
    ensureAuthenticateDeliveryMan,
    findAllDeliveriesController.handle
)
routes.get(
    '/deliveries/client/available',
    ensureAuthenticateClient,
    findClientDeliveriesController.handle
)
routes.get(
    '/deliveries/available',
    ensureAuthenticateDeliveryMan,
    findAllDeliveriesWithoutEndDateController.handle
)

export { routes }


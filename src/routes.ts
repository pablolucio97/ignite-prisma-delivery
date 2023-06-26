import { Router } from 'express'
import { AuthenticateClientController } from './modules/clients/useCases/authenticateClientUsecase/authenticateClientController'
import { CreateClientController } from './modules/clients/useCases/createClientUsecase/CreateClientController'
import { CreateDeliveryManController } from './modules/deliveryman/useCases/createDeliveryManUseCase/CreateDeliveryManController'
import { AuthenticateDeliveryManController } from './modules/deliveryman/useCases/authenticateDeliveryManUsecase/authenticateDeliveryManController'
import { CreateDeliveryController } from './modules/delivery/useCases/createDelivery/CreateDeliveryController'
import ensureAuthenticateClient from './middlewares/authenticateClient'


const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const createDeliveryMan = new CreateDeliveryManController()
const authenticateDeliveryManController = new AuthenticateDeliveryManController()
const createDeliveryController = new CreateDeliveryController()


routes.post('/clients', createClientController.handle)
routes.post('/clients/auth', authenticateClientController.handle)
routes.post('/deliverymen', createDeliveryMan.handle)
routes.post('/deliverymen/auth', authenticateDeliveryManController.handle)
routes.post('/deliveries', ensureAuthenticateClient, createDeliveryController.handle)

export { routes }


import { Router } from 'express'
import { CreateClientController } from './modules/clients/useCases/createClientUsecase/CreateClientController'
import { AuthenticateClientController } from './modules/accounts/useCases/authenticateClientUsecase/authenticateClientController'
import { CreateDeliveryManController } from './modules/deliveryman/useCases/createDeliveryManController'

const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const createDeliveryMan = new CreateDeliveryManController()


routes.post('/clients', createClientController.handle)
routes.post('/clients/auth', authenticateClientController.handle)
routes.post('/deliverymen', createDeliveryMan.handle)

export { routes }
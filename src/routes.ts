import { Router } from 'express'
import { CreateClientController } from './modules/clients/useCases/createClientUsecase/CreateClientController'
import { AuthenticateClientController } from './modules/accounts/useCases/authenticateClientUsecase/authenticateClientController'

const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()


routes.post('/clients', createClientController.handle)
routes.post('/clients/auth', authenticateClientController.handle)

export { routes }
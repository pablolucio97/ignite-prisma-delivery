import { Router } from 'express'
import { CreateClientController } from './modules/clients/useCases/createClientUsecase/CreateClientController'

const routes = Router()

const createClientController = new CreateClientController()

routes.post('/clients', createClientController.handle)

export { routes }
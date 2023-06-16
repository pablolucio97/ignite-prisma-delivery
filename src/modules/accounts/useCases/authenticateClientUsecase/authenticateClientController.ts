import {Request, Response} from 'express'
import { AuthenticateClientUseCase } from './authenticateClientUsecase'

export class AuthenticateClientController{
    async handle(req: Request, res: Response){
         const {username, password} = req.body
         const authenticateClientUseCase = new AuthenticateClientUseCase()
         const result = await authenticateClientUseCase.execute({
             username,
             password
         })
 
         return res.status(201).json(result)
     }
 }
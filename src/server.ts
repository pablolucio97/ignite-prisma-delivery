import express, { json } from 'express'
import cors from 'cors'
import { routes } from './routes'
import 'express-async-errors'
import { AppError } from './errors/AppError'

const app = express()
app.use(cors())
app.use(json())
app.use(routes)

app.use((
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            message: err.message
        })
    }

    return res.status(500).json({
        message: `Internal server error: ${err.message}`
    })
})

app.listen(3333, () => {
    console.log('Server running at 3333')
})

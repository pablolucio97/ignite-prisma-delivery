import express from 'express'

const app = express()

app.listen(3333, () => {
    console.log('Server running at 3333')
})

app.get('/', (req, res) => {
    res.json({
        message: "Server running"
    })
})
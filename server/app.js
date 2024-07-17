import express, { json } from 'express';
import cors from 'cors';

import { userRouter } from './routes/user.js';
import { componentRouter } from './routes/component.js';
import { toolRouter } from './routes/tool.js';


const app = express()
app.disable('x-powered-by')
app.use(json())

const corsOptions = {
    origin: ['http://localhost:5173'],
    methods: ['GET', 'PUT', 'PATCH', 'POST'],
    allowedHeaders: ["Content-type", "Authorization"],
    optionsSuccessStatus: 200,
    credentials: true
}
app.use(cors(corsOptions))


app.use('/user', userRouter)
app.use('/component', componentRouter)
app.use('/tool', toolRouter)

const port = process.env.PORT ?? 3001
app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`)
})

import express, { urlencoded } from "express"
import 'dotenv/config'
import authRouter from "./routes/auth"
import dashboardRouter from "./routes/dashboard"
import NotFoundMiddleWare from "./middleware/NotFoundMiddleWare"



const app = express()

const port = process.env.PORT || 3000

app.use(urlencoded({ extended: false }))
app.use(express.static('./public'))
app.use(express.json())

app.use(process.env.BASE_SLUG, authRouter)
app.use(process.env.BASE_SLUG, dashboardRouter)
app.get('/', (req, res) => res.sendFile('../public/index.html'))
app.use(NotFoundMiddleWare)
app.listen(port, () => console.log(`Server Listening to ${port}`))
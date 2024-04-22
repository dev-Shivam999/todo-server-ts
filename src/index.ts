import express ,{Express,Request,Response} from "express"
import helmet from "helmet"
import { Db } from "./db/Db"
import route from "./routes/TodoRoute"
import cors from "cors"


const app:Express= express()

Db()
app.use(express.json())
app.use(helmet())
app.use(cors())
app.use('/todo',route)


app.listen(3000,() => {

console.log("app listening on 3000000");

})
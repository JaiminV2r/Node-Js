const express = require("express")
const app = express();

const dotenv = require('dotenv')
dotenv.config()

const cors = require('cors')
app.use(cors());

app.use(express.json()); // MIME type

const module1 = require('./get_produst')
app.use('/get_product',module1)

const module2 = require('./post_product')
app.use('/insert',module2)

const module3 = require('./update_products')
app.use('/update',module3)

const module4 = require('./delete_produst')
app.use('/delete',module4)

let port = process.env.PORT ||1234;
app.listen(port, () =>{
    console.log('server listen port no.: ',port)
}) 
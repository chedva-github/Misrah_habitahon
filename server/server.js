const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const controller = require('./controller')

// const router = require('./routes/api')
app.use(bodyParser.json())
app.use(cors())
// app.use(router)
// app.use('/', router)

app.get('/getProdacts', controller.getProdacts);
app.get('/getCategories', controller.getCategories);
app.post('/addProdact', controller.addProdact);

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://MinistryofDefence:AV123456@cluster0.6dxfbnx.mongodb.net/test', connectionParams)
  .then(() => console.log("coneccted to DB"))
  .catch(err => console.log(err))

app.listen(4000, () => console.log("listening port 4000"))


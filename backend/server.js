const express = require('express')
const cors = require('cors')

//ändra även proxy i package.json om annan port
const port = 4000;

const translateRoute = require('./routes/translate')


//express app
const app = express()

//för att anropa via annan port
app.use(cors())

app.use(express.json())

//routes
app.use(translateRoute)

//lyssna
app.listen(port, () => {
  console.log('Lyssnar på port ' + port);  
})

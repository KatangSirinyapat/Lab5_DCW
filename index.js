const express = require('express')
const app = express()
const cors = require('cors');
const PORT = 8000
 
let dogs = [
   { id: 1, name: 'Siberian' , age: 1 },
   { id: 2, name: 'Russkiy' , age: 5 }, 
   { id: 3, name: 'Pug' , age: 3 }]
 
app.use(cors())
 
app.get('/', (req,res) => {
   res.json(dogs)
})
 
app.listen(PORT, () => console.log(`listen at ${PORT}`))
const express = require('express')
const app = express()





// app.get('/', (req, res)=> {
//     res.render('/views/index')
// })



const PORT = 3000
app.listen(PORT, ()=> {
    console.log(`Server started on ${PORT}`)
})
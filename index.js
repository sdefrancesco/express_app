const express = require('express')
const path = require('path');
const bodyParser = require('body-parser')

const app = express()


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.get('/', (req, res)=> {
    res.render('index')
})
app.get('/about', (req, res)=> {
    res.render('about')
})

app.post('/posts/new', (req, res)=> {
    console.log(req.body)
    res.send('Success', req.body)
})

app.get('/download', (req, res)=> {
    console.log('download')
    res.download('./public/images/city.jpg')
})



const PORT = 3000
app.listen(PORT, ()=> {
    console.log(`Server started on ${PORT}`)
})
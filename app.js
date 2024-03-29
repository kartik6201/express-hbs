const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public/views')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index' ,{
        title: 'Home',
        name: 'Amay'    

    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Amay'
    })
})
app.get('/help', (req, res) => {
    res.render('help', {
    })
})
app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
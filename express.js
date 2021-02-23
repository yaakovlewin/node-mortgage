let express = require('express')

let path = require('path')

let ourApp = express();



//ourApp.use(express.static('MY WEB'))

ourApp.listen(5501)
console.log('running')
ourApp.get('/', (req, res) => {
    console.log(req)
    res.sendFile(path.join(__dirname + '/my.html'))
})

ourApp.get('/my.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/my.html'))
})

ourApp.get('/about', (req, res) => {
    res.send(`<h1>we are working on this page....</h1>`)

})

ourApp.use('/assets', (express.static(__dirname + '/public')))

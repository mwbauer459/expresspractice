const express = require('express')
const app = express()
const port = 3000

const things = require('./things.js')

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.post('/hello', (req, res)=> {
    res.send('You just called the post method')
})

app.use('/things', things);

app.listen(port, ()=> {
    console.log('Example app listen at localhost:${port}')
})




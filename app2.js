const express = require('express')
const port = 3000

const generateTitle = () =>{
    return "Node js"
} 

const app = express()
app.set('view engine', 'hbs')
app.get('/', (req, resp) => {

    const title = generateTitle()

    resp.render('index', {
        pageTitle: title,
        pageBody: "Hello node"
    })
})

app.get('/kontakt', (req, resp) => {
    resp.send("Dane kontaktowe")
})
//localhost:3000/kontakt

app.listen(port)
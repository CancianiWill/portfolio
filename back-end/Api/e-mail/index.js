import express from 'express'

const app = express()

const port= 3000

app.get('/',(req, res) => res.send(''))

app.get('/send', (req, res) => {

})

app.listen(port, () => console.log(`Running on port ${port}!`))
const express = require('express')
const z = require('zod')
const app = express()

const schema = z.array(z.number())
app.use(express.json())

app.post('/health-checkup', function(req, res){

    const {kidneys} = req.body;
    const r = schema.safeParse(kidneys)
    const kidneyLength = kidneys.length;

    res.send(r)

    // res.send('Your kidney length is')
})

app.listen(3000, console.log('Server started'))
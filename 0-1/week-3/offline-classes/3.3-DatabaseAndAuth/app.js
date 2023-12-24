const express = require('express')

const app = express()

app.use(express.json());

function isOldEnoughMiddlware(req, res, next){
    const {age} = req.query
    if(age>= 14){
        next();
    }else{
        res.json({msg: 'Sorry you are too young.'})
    }

    

}

app.get('/ride1',isOldEnoughMiddlware, (req, res)=>{
    res.json({
        msg: 'You have successfully riden the ride1.'
    })
})


app.listen(3000, console.log('Server started.'))
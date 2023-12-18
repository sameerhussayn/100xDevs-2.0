const express = require('express')

const app = express()
app.use(express.json())
let users = [
    {
        name: 'john',
        kidneys: [
            {
                healthy: false
            },
        ]
    }
]
// app.use(express.json())

app.get('/',function(req, res){
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length
    let numberOfHealthyKidneys = 0;
    johnKidneys.map(ele => {
        if(ele.healthy) numberOfHealthyKidneys++
    })
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys,
        kidneys: users[0].kidneys
    })
})

app.post('/', function(req,res){
   const healthy = req.body.isHealthy;
   users[0].kidneys.push({healthy})
   res.send('Added successfully.')

})

app.put('/', function(req, res){
    let unhealthy = 0
    users[0].kidneys.map(kidney =>{
        if(!kidney.healthy){
            unhealthy++ 
        }
    })

    if(unhealthy === 0)  return res.status(411).json({msg: 'No unhealthy kidneys.'})
    users = users.map(user =>{
        return {
            ...user,
            kidneys: user.kidneys.map(kidney=>{
               return {healthy :true}
            })
        }
    })

    res.send('updated successfully.')
})

app.delete('/', (req,res)=>{
    let unhealthy = 0
    users[0].kidneys.map(kidney =>{
        if(!kidney.healthy){
            unhealthy++
        }
    })
    if(unhealthy === 0)  return res.status(411).json({msg: 'No unhealthy kidneys.'})
    users = users.map(user=>{
        return {
            ...user,
            kidneys: user.kidneys.filter(kidney => kidney.healthy)
        }
    })
    res.send('Deleted successfully.')
})

app.listen(3000)
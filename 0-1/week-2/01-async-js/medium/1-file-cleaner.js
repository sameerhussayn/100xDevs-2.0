const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (err, data)=>{
    if(err) console.log(err)
   
    let updatedText = data.replaceAll(/\s+/g, ' ')
    console.log(updatedText)
    fs.writeFile('input.txt', updatedText, (err)=>{
        if(err) console.log(err)

        console.log('space removed successfully.')
    })
})

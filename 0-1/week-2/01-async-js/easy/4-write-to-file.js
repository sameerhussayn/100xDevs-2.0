const fs = require('fs')

fs.writeFile('test.txt', 'This is written using writeFile', (err )=>{
    if(err) console.log(err)

    console.log('File written success.')
})

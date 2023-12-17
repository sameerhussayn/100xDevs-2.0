// const time = new Date().toLocaleTimeString()

setInterval(() => {
    const today = new Date()
let format1 = today.getHours() + ':' + today.getMinutes() +':'+ today.getSeconds()
let format2 = today.toLocaleTimeString();
console.log(format1, format2)
}, 1000);


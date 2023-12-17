let count = 0;

function counter(){
    setTimeout(function Counter(){
        count++;
        console.log(count)
        setTimeout(counter, 0)
    },1000)
}

counter()
const lorem = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt omnis sit optio? Amet illum necessitatibus, fugiat assumenda deleniti et aliquid quidem numquam libero itaque, consequatur quod modi commodi dicta perferendis?'

export default function paraGenerator(value){
    const para = lorem.split(' ')
    const generatedPara = []
    for(let i=0; i<value -3;i++){
        generatedPara.push(para[Math.floor(Math.random()*30)])
    }
    return  'Lorem ipsum dolor,' + generatedPara.join(' ')
}


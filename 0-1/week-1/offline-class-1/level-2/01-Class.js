
// class Animal {
//   constructor(name, legCount) {
//     this.name = name
//     this.legCount = legCount
//   }
//   describe() {
//     return `${this.name} has ${this.legCount} legs`
//   }
// }


class Animal {
  constructor(name, legCount, speaks){
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }
  speak(){
    console.log(`${this.name} says ${this.speaks}`)
  }
}

let dog = new Animal('dog', 4, 'Bhow Bhow')
console.log(dog)
dog.speak()

// function fnAnimal(name, legCount, speaks){
//   return Animal = {
//     name,
//     legCount,
//     speaks,
//     speak: function(){ console.log(`${name} says ${speaks}`)}
//   }
// }
// let fndog = fnAnimal('dog', 4, 'Bhow Bhow')
// let cat = fnAnimal('cat', 4, 'Meow Meow')
// console.log(cat)
// console.log(fndog)
// cat.speak()
// fndog.speak()
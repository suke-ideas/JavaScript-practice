// Day 15 : 5/6/2022: classes

// Exercises level 1:

// 1. create an animal class.
class Animal {
    constructor 
    (   name = 'dog',
        age = 2,
        color = 'black', 
        legs = 4)
    {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
    get getName(){
        return this.name;
    }
    get getAge(){
        return this.age;
    }
    get getColor(){
        return this.color;
    }
    get getLegs(){
        return this.legs;
    }
}

let pig = new Animal('pig',1,'pink',);

console.log(pig)
console.log(pig.getColor);

class dog extends Animal{

    setInf(call){
        console.log( `con cho keu ${call}`);
    }
   
}

let conCho = new dog();
conCho.setInf('gau gau')
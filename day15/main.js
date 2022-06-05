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

class cat extends Animal{
    constructor (name,age,color,legs,call)
    {
        super(name,age,color,legs);
        this.call = call;
    }

    static setInf()
    {
        console.log(`tui la con meo biet keu mew mew\
        >..<`);
    }

}
let conMeo = new cat('meo', 1 , 'white',4,'mew mew');

cat.setInf()

// Exercises level 2:
// override the method you create in Animal class
class Pig extends Animal {
    constructor (name,age,color,legs,call = 'ét')
    {
        super(name,age,color,legs);
        this.call = call;
    }
    static setInf()
    {
        console.log(` con heo biet keu ụt ét`)
    }

    get getName (){
        console.log(`Tui là ${this.name}`)
    }
}

let heo = new Pig('heo',1,'pink',4,'ụt ét');
Pig.setInf();
heo.getName;

// Exercises level 3:

class PersonAccount{
    constructor(
        fName = 'Alo',
        lName = 'chưa biết',
        incomes = 1000,
        expenses = 500,
    )
    {
        this.fName = fName;
        this.lName = lName;
        this.incomes = incomes;
        this.expenses = expenses;
    }
    get totalIncomes()
    {
        return this.incomes;
    }

    get totalExpenses(){
        return this.expenses;
    }

    set addIncomes(incomes)
    {
        this.incomes = incomes;
    }

    set addExpenses(expenses){
        this.expenses = this.expenses;
    }

    getInf() {
        console.log(`Tôi là ${this.fName} ${this.lName}, \
        lương ${this.incomes}$ =))`)
    }
}

let who = new PersonAccount('Agrinata','Nanu',1000,225);
who.getInf();
who.addIncomes = 2000;
who.getInf();
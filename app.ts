//      1


abstract class Animal {
    abstract makeSound():void
}
class Dog extends Animal{
    makeSound(): void {
        console.log('Bark')
    }
}
class Cat extends Animal{
    makeSound(): void {
        console.log('Meow')
    }
}

const animals:Animal[] =[
    new Dog(),
    new Cat()
]
animals.forEach(animal => {
    animal.makeSound()
})

//      2

abstract class Shape {
    abstract calculateArea(): number
}
class Rectangle extends Shape {
    private width: number
    private height: number

constructor(width: number, height: number){
    super()
    this.width = width
    this.height = height
}
calculateArea(): number {
    return this.width * this.height
}
}

abstract class ColoredShape extends Shape {
    abstract color():string
}

class ColoredCircle extends ColoredShape{
    radius: number
    private circleColor: string

    constructor(radius:number, color:string){
        super()
        this.radius = radius
        this.circleColor = color
    }
    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2)
    }
    color():string{
        return this.circleColor
    }
}

class ColoredRectangle extends ColoredShape{
    width: number
    height: number
    private rectColor:string
    constructor(width:number, height:number, color: string){
        super()
        this.width = width
        this.height = height
        this.rectColor = color
    }
    calculateArea(): number {
        return this.width * this.height
    }
    color(): string{
        return this.rectColor
    }
}

class Circle extends Shape {
    private radius: number
    constructor(radius: number){
        super()
        this.radius = radius
    }
    calculateArea():number{
        return Math.PI * Math.pow(this.radius, 2)
    }
}
const shape: Shape[] = [
    new Rectangle(5, 10), new Circle(7),
    new Circle(7),
    new ColoredCircle(5,'Red'),
    new ColoredRectangle(4,6,'Blue')
]

shape.forEach(shape => {
    console.log(`Area: ${shape.calculateArea()}`)
})

const coloredShapes: ColoredShape[]= [
    new ColoredCircle(5,'Red'),
    new ColoredRectangle(4,6,'Blue')
]
coloredShapes.forEach(coloredShapes => {
    console.log(`Area: ${coloredShapes.calculateArea()}, Color: ${coloredShapes.color()} `)
})

//      3

abstract class Appliance {
   abstract turnOn():number
   abstract turnOff():number
}

class WashingMachine extends Appliance{
    private on:number
    private  off:number
    constructor(on:number, off:number){
        super()
        this.on = on
        this.off = off
    
}
turnOn(): number {
    console.log('Wash machiene is on')
    return this.on
}

turnOff(): number {
    console.log('Wash machiene is off')
    return this.off
}
}


class Refrigerator extends Appliance{
    private on:number
    private  off:number
      constructor(on:number, off:number){
          super()
          this.on = on
          this.off = off
      }
  
      turnOn(): number {
        console.log('Refregerator  is on')
        return this.on
    }
    
    turnOff(): number {
        console.log('Refregerator  is off')
        return this.off
    }
}

const appliances:Appliance[] =[
    new WashingMachine(1,0),
    new Refrigerator(1,0),
]

appliances.forEach(appliance => {
    appliance.turnOn()
    appliance.turnOff()
})

//      4

abstract class Account {
    protected balance: number

    constructor(initialBalance: number){
        this.balance = initialBalance
    }
    abstract deposit(amount: number):void
    abstract withdraw(amount: number):void

    getBalance(): number{
        return this.balance
    }
}

class SavingsAccount extends Account{
    private rate: number

    constructor(initialBalance:number, rate:number){
        super(initialBalance)
        this.rate = rate
    }
    deposit(amount: number):void{
        this.balance += amount
    }
withdraw(amount: number): void {
    if(amount <= this.balance){
    }else{
        console.log('Insufficient founds for withdrawl')
    }
}
addInterest(): void{
    this.balance += this.balance * this.rate /100
}
}
class CheckingAccount extends Account{
    private fee: number

    constructor(initialBalance:number, fee:number){
        super(initialBalance)
        this.fee = fee
    }
    deposit(amount: number): void {
        this.balance += amount
    }
    withdraw(amount: number): void {
        const totalAmount = amount + this.fee
        if(totalAmount <= this.balance){
            this.balance -= totalAmount
        }else{
            console.log('Insufficient founds for withdrawl')
        }
    }
}
const saving = new SavingsAccount(100,5)
saving.deposit(200)
console.log(`Saving account balance after deposit ${saving.getBalance()}`)
saving.addInterest()
console.log(`Saving account balance after interest ${saving.getBalance()}`)
saving.withdraw(100)
console.log(`Saving account balance after withdrawl ${saving.getBalance()}`)

const checking = new CheckingAccount(1000,10)
checking.deposit(100)
console.log(`Checking account balance after deposit ${checking.getBalance()}`)
checking.deposit(300)
console.log(`Checking account balance after withdrawl with fee ${checking.getBalance()}`)


//      5

abstract class Media {
    abstract play():void
}

class Audios extends Media {
   play(): void {
       console.log('Playng audio')
   }
}

class Video extends Media {
   play(): void {
       console.log('Playng video')
   }
}
const media: Media[] = [
    new Audios(),
    new Video()
]
media.forEach(item => {
    item.play()
})


class stat{
     static  a=10;
    static increment()
    {
        this.a=++this.a;
    }
    greet()
    {
    console.log("hello");
    }
    
}
stat.increment();
console.log(stat.a);
stat.increment();
console.log(stat.a);
let ab=new stat();
ab.greet();

class ambesh {
    constructor(name)
    {
        this.name=name;
       //this.age=age;
    }
    greet(name,age)
    {
        console.log(`hello to the class my name is ${this.name} and my age is ${this.age} `);
    }
}
class gaurav extends ambesh{
    constructor(age,name)
    {
        super(name);
       this.age=age;
    }
     greet(name,age)
     {
         console.log("ambesh singh");   
     }
     greettwice()
     {
         this.greet();
          this.greet();
     }

}
let a=new gaurav(21,"ambesh");
  a.greet("ambesh");
  a.greettwice();

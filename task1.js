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

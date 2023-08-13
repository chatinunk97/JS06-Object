function Developer(name,age){
    this.name = name,
    this.age  = age,

    //Below is the fixed property/method
    this.role = 'dev',
    this.salary = 40_000,
    this.dev = function(){
        console.log("I'm the developer")
    }
}

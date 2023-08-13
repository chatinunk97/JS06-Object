function CalculatorCreator(){
    this.a = null,
    this.b = null,
    this.read = function(){
        this.a = +prompt("1st Number");
        this.b = +prompt("1nd Number");
    }
    this.sum = function(){
        return this.a + this.b
    }
    this.mul = function(){
        return this.a * this.b
    }
}
const a = new CalculatorCreator()
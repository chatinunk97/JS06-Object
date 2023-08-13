let calculator = {
  a: null,
  b: null,
  read: function () {
    this.a = +prompt("1st Num");
    this.b = +prompt("2nd Num");
  },
  sum: function () {
    return this.a + this.b;
  },
  mul: function () {
    return this.a * this.b;
  },

};

calculator.read(5, 10);
console.log(calculator.sum());
console.log(calculator.mul());

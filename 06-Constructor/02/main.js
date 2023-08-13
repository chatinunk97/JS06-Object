function Accumulator(startingValue) {
  this.currentValue = startingValue;
  this.read = function (newNum) {
    this.currentValue += +newNum;
  };
  this.show = function () {
    alert(this.currentValue);
  };
}

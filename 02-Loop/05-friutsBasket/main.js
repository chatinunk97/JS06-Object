basket = {};
const TERMINATE = "stop";
let key;
let value;

let fruitBasketFunc = (fruitBasket, fruitProp, fruitUnit) => {
  if (fruitUnit > 1) {
    fruitProp += "s";
  }

  fruitBasket[fruitProp] = fruitUnit;
  console.log(fruitBasket);
};

do {
  key = prompt("Enter a fruit name");
  value = prompt("Enter a number");
  fruitBasketFunc(basket, key, +value);
  console.log(key == TERMINATE);
  console.log(value == TERMINATE);
} while (key != TERMINATE && value != TERMINATE);

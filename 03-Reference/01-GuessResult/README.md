บรรทัดที่มี * , ** , *** ให้ผลลัพธ์เป็นอะไร เพราะอะไร


```js
const product1 = { name: 'Coke', price: 18, size: '500mL' };

const product2 = product1;
product2.name = 'Pepsi';
product2.price = 19;

console.log(product1); // * shows { name: 'Pepsi', price: 19, size: '500mL' }
console.log(product2); // ** shows { name: 'Pepsi', price: 19, size: '500mL' }
console.log(product1 === product2); // *** True since they are referencing to the same Object's memory address
```
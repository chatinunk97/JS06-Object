บรรทัดที่มี * และ ** ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
const user = {
  email: 'cc@gmail.com',
  isActive: true
};

user.isActive = false;
console.log(user); // * Shows the user's object structure and return undefined
user = {};
console.log(user); // ** show error user is a CONST cannot be reassign

```

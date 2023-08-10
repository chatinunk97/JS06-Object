let object = {};
let isEmptyObj = (object) => {
  for (let k in object) {
    return false;
    // If it comes to this loop only once
    // That means it's an object
  }
  return true;
};

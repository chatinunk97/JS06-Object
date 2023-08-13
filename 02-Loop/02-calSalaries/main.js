let isEmptyObj = (object) => {
  for (let k in object) {
    return false;
    // If it comes to this loop only once
    // That means it's an object
  }
  return true;
};

let calSalary = (salaryObject) => {
  // Validate Input
  if (isEmptyObj(salaryObject)) {
    return 0;
  }
  let sumSalary = 0;
  for (k in salaryObject) {
    sumSalary += salaryObject[k];
  }
  return sumSalary;
};

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let oneObject = {};

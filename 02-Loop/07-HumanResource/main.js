let checkEmployee = (employeeList , employeeName ) =>{
    if ( employeeList[employeeName]){
        
        return (`Name : ${employeeName}, salary : ${employeeList[employeeName]["salary"]}, address : ${employeeList[employeeName]["address"]["district"]} ,  ${employeeList[employeeName]["address"]["province"]}`);
    }
    return "Not Found";
}


const employees = {
    john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
    peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
    mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
    sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
  };
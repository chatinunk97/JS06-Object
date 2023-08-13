const state1 = { username: 'john', point: 100, loading: true };
const new_config = { loading : false, point:75}


const newObject = Object.assign({success:true,},state1,new_config)
console.log(newObject)
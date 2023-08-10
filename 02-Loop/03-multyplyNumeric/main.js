let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
  };


let multiplyNumberic = (obj , num ) =>{
    for( k in obj){
        if(typeof(obj[k]) == "number"){
            obj[k] *=num
        }
    }
}



  multiplyNumberic(menu,100)
  console.log(menu)
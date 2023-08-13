let theSentinel = () =>{
    let objSentinel = {};
    do{
        key = prompt(`Please enter a Key`);
        value = prompt(`Please enter a Value`);
        if(key.toLowerCase() == 'stop' || value.toLowerCase() == 'stop'){
            return objSentinel
        }
        objSentinel[key] = value;
    }while(true)
}
a = theSentinel();
console.log(a)
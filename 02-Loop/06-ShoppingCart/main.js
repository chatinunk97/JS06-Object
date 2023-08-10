let productCreate = (productName , unit , price , discount = 0)=>{
    product = {
        productName,
        unit,
        price,
        discount
    }
    if (discount === 0){
        console.log("here")
        delete product["discount"]
    }
    return product;
}

let calDiscount = productObject =>{
    if(productObject["discount"] === undefined){
        return productObject["price"]
    }
    else{
        return product["price"] * (1-productObject["discount"]/100)
    }
}

console.log(productCreate("phone",100,100,5))
console.log(calDiscount(product))
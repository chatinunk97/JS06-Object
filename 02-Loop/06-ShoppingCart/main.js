let productCreate = (productName , unit=0 , price=0 , discount = 0)=>{
    product = {
        productName,
        unit,
        price,
        discount
    }
    if (discount === 0){
        delete product["discount"]
    }
    return product;
}

let calDiscount = productObject =>{
    if(productObject["discount"] === undefined){
        return productObject["price"]
    }
    else{
        return (product["price"] * (1-productObject["discount"]/100)) * product["unit"]
    }
}
let productName = prompt("Input your product name")
let productUnit = +prompt("Input your unit")
let productPrice = +prompt("Input your price")
let productDiscount = +prompt("Input your discount")


console.log(productCreate(productName,productUnit,productPrice,productDiscount))
console.log(calDiscount(product))
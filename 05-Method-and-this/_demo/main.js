// const log = console.log;
// log("Method and this keyword")
// function saySomething(){
//     log("Hi")
// }

// const programer = {
//     name : "Boss",
//     age : 26,
//     sleep(){
//         console.log("Sleeping")
//     }
// }
//Mini Lab
//Object with your name
//Requirements 2-3
//Skilss 4
//--- Key:named function
//--- Key:Anonymous
//--- Key:Arrow Function
//--- Key:Method Short hand

// let speakEn = () => console.log("Hi I speak English")

// const myProfile = {
//     name : "Boss",
//     dev_1 : "HTML",
//     dev_2 : "JS",
//     lan_1 : speakEn,
//     lan_2 : function(){console.log("I speak JP")} ,
//     lan_3 : () => console.log("I speak Thai"),
//     games(){
//         console.log("Tekken")
//     }
// }

// log(myProfile)

// const calculator = {
//     sum : (x,y) => x+y,
//     minus : (x,y) => x-y
// }

//THIS keyword

function dev(){
    console.log(`${this.name} is a dev !`)
}
// "this" is not evaluate here it cannot find anything now

const user = {
    name : "Boss",
    dev : dev,
    age : 26,
    add_age : function(){
        this.age++
    }
}
//not even here

//but it's here 
// It now knows that this is user and find this.name here
console.log(user.dev())


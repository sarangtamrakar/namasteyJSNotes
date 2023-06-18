// call , apply & bind method in js





// let obj1 = {
//    firstname:"sarang",
//    lastname:"tamrakar",
//    printFullName : function(hometown){
//       console.log(this.firstname + " " +this.lastname +hometown);
//    }
// }



// let obj2 = {
//    firstname:"baba",
//    lastname:"bhai",
// }




//call method
// in call method we can calll the method of obj & pass the another object to it
// in call we pass arg by comma
// obj.printFullName.call(obj,"keolari");


// in apply method we pass the arg as arr
// obj.printFullName.apply(obj,['keolari'])


// bind method
// in bind method , we create separate copy of method with new obj

// newmethod = obj1.printFullName.bind(obj2,'mumbai')

// newmethod();




// polyfill for bind method

let obj3 = {
   firstname:"baba",
   lastname:"bhai",
}

let printFullName = function (name){
   console.log(this.firstname + " "+ this.lastname + " "+name);
}

// let newmethod2 = printFullName.bind(obj3,"sarang");
// newmethod2();





// // define our own myibind method
// Function.prototype.mybind = function (...args){
//    let obj = this; 
//    let params = args.slice(1);
//    return function(...args2){
//       obj.apply(args[0],[...params, ...args2]);
//    }
// }


// let newmethod3 = printFullName.mybind(obj3,"sarang");
// newmethod3("male");
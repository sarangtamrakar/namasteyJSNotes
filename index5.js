// fucntion currying is process of transformatation 
// with mulitople arg into same fuction with less args 


// function currying usin bind method


let multiply = function (x,y){
   console.log(x*y);
}


multiplyByTwo = multiply.bind(this);
multiplyByTwo(2,9);





// // function currying using closure
// let multiply_closure = function(x){
//    return function(y){
//       console.log(x*y);
//    }
// }


// returned_curry_function = multiply_closure(2);
// returned_curry_function(3);
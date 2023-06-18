// rest & spread operators


// rest operator

// // in es5  we use argumnets keyword for getting all the args
// function add(a,b){
//    console.log(arguments)
//    return a+b;
// }

// const res = add(10,20,30,40,50);
// console.log(res);


// // rest with function in arr

// // rest operator in es6 we use ...args for rest operators
// function add2(a,b,...args){
//    console.log(args)
//    return a+b;
// }

// const res2 = add2(10,20,30,40,50);
// console.log(res2);



//  rest with obj

// obj = {
//    name: "sarang",
//    age:24,
//    hobbies:['cricket',"swimming"]
// }
// // this is called arr restructuring
// const {age,...args} = obj;

// console.log(args);










// spread operator
//  in spread operator separate the each value froma arr


// names = ["sarang","baba","kalyani"]

// function printNames(a,b,c){
//    console.log(a,b,c);
// }

// printNames(...names,"agal","hhsuh");



// // merge two arrys using spread operators
// let arr1 = [10,20,30,40,50];
// let arr2 = [60,70,80,90,100];

// let arr3 = [...arr1,...arr2];
// console.log(arr3);



// res in obj


obj = {
   name: "sarang",
   age:24,
   hobbies:['cricket',"swimming"]
}

// overwrite  the obj value with the help of spread operator
newObj = {
   ...obj,
   age:200
}

console.log(newObj)

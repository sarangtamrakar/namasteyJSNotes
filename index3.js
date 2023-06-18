



function area(radius){
   return Math.PI * radius * radius;
}


function circusference(radius){
   return 2*Math.PI*radius;
}


Array.prototype.calculate = function (logic){
   res = [];
   for(let val of this){
      res.push(logic(val));
   }
   return res;
}


// let arr = [1,2,3]
// console.log(arr.calculate(area));

// console.log(arr.map(area));


// console.log(calculate(arr,area));










// map
// const arr2 = [1,9,2,3,4];

// function double(element){
//    return element*2;
// }

// function binary(element){
//    return element.toString(2);
// }

// const output = arr2.map(binary);

// const res2 = arr2.map((x)=> x.toString(2));
// console.log(res2);



// filter
// odd value
// const output = arr2.filter((x)=> x%2!=0);
// const output = arr2.filter((x)=> x>=4);
// console.log(output);




// // reduce
// const arr2 = [1,9,2,3,4];

// // find sum
// let res1 = arr2.reduce((acc,curr)=> acc = acc+curr,10);


// // find maximum
// let res2 = arr2.reduce(function (acc,curr){
//    if(curr>acc){
//       acc = curr;
//    }
//    return acc;
// },0);
// console.log(res2);



let arr2 = [
   {"firstName":"sarang1","lastname":"tamrakar","age":24},
   {"firstName":"sarang","lastname":"tamrakar","age":24},
   {"firstName":"adarsh","lastname":"tamrakar","age":21},
   {"firstName":"babu","lastname":"tamrakar","age":16}
];


// const res = arr2.reduce(function (acc,curr){
//    if(acc[curr.age]==null){
//       acc[curr.age]=1;
//    }else{
//       acc[curr.age] = acc[curr.age] + 1;
//    }

//    return acc;

// },{})

// console.log(res);





// const res = arr2.reduce(function (acc,curr){
//    if(curr.age>20){
//       acc.push(curr.firstName);
//    }
//    return acc;
// },[])

// console.log(res);



const res = arr2.filter(function (ele){
   if(ele.age>20){
      return ele;
   }
}).map(function (ele){
   return ele.firstName;
})

console.log(res);























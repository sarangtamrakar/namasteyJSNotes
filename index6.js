let count = 0;

let getData = function(bhai){
   console.log("suggessted "+bhai+ (count));
   count++;
}


// function debounce(fn, d){
//    let timer;
//    return function(){
//       if(timer) clearTimeout(timer);
//       timer = setTimeout(function(){
//          fn();
//       },d)
//    }
// }


// let betterfunction = debounce(getData,500);

// document.getElementById("fname").addEventListener("keyup", betterfunction);




function throatling(fn,d){
   let timer = new Date().getTime();
   
   return function() {
      obj = this;
      args = arguments;
      console.log(args);
      if((new Date().getTime()-timer)>d){
         fn.apply(obj,args);
         timer = new Date().getTime();
      }
   }
}

betterfunction = throatling(getData,2000);


document.getElementById("fname").addEventListener("keyup", betterfunction);


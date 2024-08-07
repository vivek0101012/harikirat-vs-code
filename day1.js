// sum from 1-100
// function sum(x){
// let ans=0;
// for(let  i=1; i<=x;i++ )
// {
// ans+=i;
// }
// return ans;
// }

// let x=100;
// console.log(sum(x));


// function fibo(x){
// let ans;
// let a=0,b=1;
// if(x==0){ans=0;}
// if (x==1){ans=1;}
// else{
//     for(let i=1; i<=x;i++)
//    {let c=a+b;
//     a=b;
//     b=c;}
    
// }

// return a;
// }

// console.log(fibo(10));




//
// for(let i=1; i<=5;i++){
// let x='';

//     for(let j=1; j<=i;j++)
// {
// x+='*';
//     if(j==i){console.log(x);}
// }



// }


// array of the objects

// var user=[
//     {name:"harkirat", age:20 },{name:"vivel ", age:20},{name:"vivel ", age:20},
//     {name:"harkirat", age:20 },{name:"vivel ", age:20},{name:"vivel ", age:20},

// ]
// for(let i=0; i<=5;i++){


//     console.log(`${user[i].name} is ${user[i].age} years old`);
// }


// CALC IN THE JS:: passing the fn inside a function -- rough aidea of what a call back is 

// //
// function multiply(x,y){
//     return x*y;
// }
// function sum(x,y){
//     return x+y;
// }
// function divide(x,y){
//     return x/y;
// }

// function subtract(x,y){
//     return x-y;
// }

// function doairthemetic(x,y,whattodo){

//     return whattodo(x,y);

// }
// console.log( doairthemetic(2,9,subtract));


// few problems _-- patten to print


// gaps to leave= total lines -currentline number

// function pattern(lines){

    
// for(let totallines=1; totallines<=lines;totallines++)
//     {
//     let x='';
//     for(let i=1; i<=lines-totallines;i++){
//         x+=' ';
//     }
//     for(let j=1;j<=2*totallines-1;j++)
//     {
//     x+='*';
    
//     }
//     console.log(x);
//     }
// }
// pattern(10)



// // building a stop watch
// var counter=1;
// function printcounter(){
// // console.clear();
// console.log(` you will be doomed in ${counter} secs`);
// counter=counter+1;
// }

// setInterval(printcounter,1000);

// // some heavly loopin let learn about the program control

// var counter2=1
// for( var i=1; i<=1000000000000000;i++){
//     counter2++;
// }
// console.log(counter2); 


// promises
// setTimeout(function medicine1get(){
//     console.log("HELLO");
    
//     setTimeout(function medicine2get(){
//         console.log("HELLO2"); },1000 )},1000)


// promises to avoid -- -> call back hell
// rules:->
// async function should return  an object i.e. promise (synchronously)
// in the call back the webapi gets  the function which will be pushed to qeue and later pushed to call stack 
// the same doesnot happen in the promise method of writing a sync fucntions      
// function promisebody(resolve){
//  setTimeout(resolve,5000);
// //  its an asysnschronous fn that executes the resolve fn after 5 sec
// }
// function medicine1get(){
//     var ans= new Promise(promisebody);
//     // its synchronously returns the promise the object
//     return ans;
// }
// function print(){
//     console.log("i got poked")
// }

// var abs=medicine1get();
// abs.then(print);


// assignmetns
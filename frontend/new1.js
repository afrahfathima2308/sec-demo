// var name ="hi";
// console.log(name)
// let number=6;
// console.log(number)
// number=7;
// console.log(number)
// const A=10;
// console.log(A)
// let b=20;
// b=30+1;
// console.log(b)
//function studentdetails(name,rollno,age){
  //  return  "Name:"+name+", Rollno:"+rollno+",Age:"+age+ "";
    //}
  //let A= studentdetails("Afrah",301,19);
    //console.log(A)

// let arr=[1,2,3,4,5,7];
// arr.push(6);
// console.log(arr)

// function playerdetails(name,score){
//     return "Name:"+name+", Score:"+score+"";
// }
// let addscore=playerdetails( 100);
// let multiplyscore=score*2;
// let dividescore=score/2;
// let multiplyscore1=score*score;
// console.log(addscore)
// function playerdetails(name,score){
//     return "Name:"+name+", Score:"+score+"";

// }



// function playerdetails(name, score) {
// let add = score+20;
// let subtract = score-20;
// let multiply = score*20;
// let division= score/20;
// return "Name:"+name+", Score:"+score+ ", Add:"+add+", Subtract:"+subtract+", Multiply:"+multiply+", Division:"+division+"";
// }
// console.log(playerdetails("Alice", 10))


// function playerdetails(name, score) {
//     return "Name:"+name+", Score:"+score+"";
//     }
//     let b=playerdetails("Afrah", 10);
//     console.log(b)
//      let score=20;
// addscore=score+2;
// subscore=score-2;
// multiplyscore=score*2;
// divisionscore=score/2;
//     console.log(addscore)
//     console.log(subscore)
//     console.log(multiplyscore)
//     console.log(divisionscore)

// 
// function areaofrectangle(length, breadth) {
//     return length * breadth;
// }
// let area = areaofrectangle(5, 10);
// console.log("Area of rectangle: " + area)
// function factctorial(n){
//  if(n==0||n==1){
//     return 1;
//  }
//  else{
//     return n*factctorial(n-1);
//  }
// }
//  console.log(factctorial(5))


// function calculator(num1, num2){
// let add= num1+num2;
// let subtract=num1-num2;
// let multiply=num1*num2;
// let divide=num1/num2;
// return "add:"+add+",subtract:"+subtract+",multiply:"+multiply+",divide:"+divide+"";
// }
// console.log(calculator(5,0))


// function compoundinterest(p,r,t){
//     let amount=p*(Math.pow((1+r/100),t));
//     return amount;
// }
// let p= prompt("enter p:");
// let r= prompt("enter r:");
// let t= prompt("enter t:");
// let amount=p*(Math.pow((1+r/100),t));
// console.log(amount)

// function calculator(num1,num2,operator){
//   if(operator==='+'){
//     return (num1+num2);
//   }
//   if(operator==='-'){
//     return(num1-num2)
//   }
//    if(operator==='*'){
//     return (num1+num2);
//   }
//   if(operator==='/'){
//     return (num1+num2);
//   }
// }


// let num1 = prompt("enter a num1:");
// let num2 = prompt("enter a num2:");
// let cal=(calculator(num1,num2))
// 
// marks=78;
// if(marks>=90){
//   console.log('o')
// }
// else if(marks<80 && marks>=70){
//   console.log('A')
// }
// else if(marks<70 && marks>=60){
//   console.log('B')
// }
// else if(marks<60 && marks>=50){
//   console.log('C')
// }
// else if(marks<=40){
//   console.log('F')
// }


// let speed=30;
// let distance=0;
// for(i=10;i<90;i+=10){
//   distance=distance+speed/6;
//   if(speed<120){
//     speed*=2;
//   }
// }
// distance=distance+speed/10
// console.log(distance)


// 

// let i=0;
// let x=5;
// while(i<=10){
//   console.log(x +"*"+ i+"="+ x*i)
//   i++;
// }


// function calculateFare(distance) {
//   let fare = 0;

//   // First 4 km
//   if (distance <= 4) {
//     fare = 30;
//     return fare;
//   } else {
//     fare = 30;
//     distance -= 4;
//   }

//   // Next 5 km (4 to 9)
//   if (distance <= 5) {
//     fare += distance * 10;
//     return fare;
//   } else {
//     fare += 5 * 10;
//     distance -= 5;
//   }

//   // Next 10 km (9 to 19)
//   if (distance <= 10) {
//     fare += distance * 15;
//     return fare;
//   } else {
//     fare += 10 * 15;
//     distance -= 10;
//   }

//   // Beyond 19 km
//   fare += distance * 20;

//   return fare;
// }

// let distance=calculateFare(`19.5);

// console.log(distance);

//DOM MANIPULATIONS//

myDiv.addEventListener('click',()=>{
alert('Div clicked!');
});



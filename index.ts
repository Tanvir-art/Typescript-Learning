// let userName : string = "ovi"
// let a : []
// let user = "tanvir"
// console.log(userName)

// function addNumber(num1:number, num2:number){
//     return num1 + num2;
// }
// console.log(addNumber(20,10))

let userId: string | number;

// userId = 101; // no error
// userId = "101"; // no error
// userId = true; // error
  
// == uninon ==
function userIdDataType(userId: string | number) {
  console.log(typeof userId);
}

// ==tuple==
let user : [number, string] = [101, 'a']
console.log(user[0])







// userIdDataType('123'); // no error
// userIdDataType(123); // no error
// userIdDataType(true); // error

// const isEven = (num: number | string) => {
//   if (typeof num === 'number') {
//     console.log(typeof num); 
//     return num % 2 === 0 ? 'even' : 'odd';
//   } else {
//     console.log(typeof num);
//     return Number(num) % 2 === 0 ? 'even' : 'odd';
//   }
// };

// console.log(isEven(32));
// console.log(isEven('32'));

// let multiple : (string | number) [] = [1, 'a']
// console.log(multiple)

// let employee : [string , number] = ['a' , 2]
// let employee1 : {name: string  , age: number} = {name: 'a' , age:  2}

// class User {
//     userName : string;
//     age : number;

//     constructor(userName : string, age : number ){
//         this.userName = userName;
//         this.age = age;
//     }

//     display():void{
//         console.log(`username : ${this.userName} age : ${this.age}`)
//     }
// }

// class Student extends User {
//     studentId : number
//     constructor(userName: string, age: number , studentId: number){
//         super(userName, age)
//         this.studentId = studentId;
//     }
// }
//   let user2 = new Student ("Rabeya Islam", 31, 2);
//  user2.display();






//enum

enum RequestType {
    getData = 1,
    readData,
    deleteData
}
console.log(RequestType['getData'])
console.log(2)


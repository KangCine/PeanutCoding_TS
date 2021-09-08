// 문제 1
// 다음 코드에서 Error 나는 부분이 있을까요? 있으면 어디에?

// let user: string;
// user = 'BROCK';
// user = 2; // error

// 문제 2
// 다음 코드에서 타입 추론이 일어나고 있나요?

let greetings = "hello"; //문제 2-1
// 넵!

let audience: string = "world"; //문제 2-2
// 아니요! 타입을 지정을 해주었기때문에 추론하지 않습니다!

// interface와 type은 거의 비슷하지만 interface는 확장(상속)이 가능하다.
interface UserInterface {
  user: string;
  age: number;
}

// 다음 코드는 오류가 날까요?(문제4-6)
// 난다면 왜 날까요? / 안 난다면 왜 안 날까용?

// 문제 4
type User = { name: string; age: number };
type User2 = Array<string | number>;
const sample_user2: User2 = ['Max', 29];
const sample_user: User = { name: "Max", age: 29 };
// 형식이 잘못되어서 에러가 난거 아닐까요??

// 문제 5
type Product = { name: string; price: number; soldout: boolean };
const sample_product: Product = {
  name: "Nice Rice",
  price: 4500,
  soldout: false,
};
// Product Type에 soldout: boolean을 추가해주면 에러가 안날거같아용

// 문제 6
type Intern = { name: string } | string;
let new_intern: Intern = { name: "Bbi-ttag-gu-ri" };
new_intern = "Chirilli";
// | string이 붙으면 Intern이 string타입이 될수도 있나봐용
// 그래서 에러가 안납니다!

// 문제 7
// 다음 중에 enum으로 바꿔쓸 수 있는 코드는 어떤 것일까요?
// 직접 enum으로 바꿔보세용.

// A)
const users = ["Max", "Michael", "Julie"];

// B)
const userA = { name: "Max" };
const userB = { name: "Michael" };

const ROLE_ADMIN = 0;
const ROLE_AUTHOR = 1;

enum users2 {
  userA = "Max",
  userB = "Micgael",
}

enum Role {
  ROLE_ADMIN,
  ROLE_AUTHOR,
}

// 문제 8
// 다음 JavaScript 코드를
// TypeScript 형식으로 바꿔보세요.

// user data의 인터페이스를 명시해보고
// 함수의 타입도 정의해보세요.

function getUserData(name: string): UserData {
  return {
    name,
    gender: "M",
  };
}

interface UserData {
  name: string;
  gender: "M" | "F" | "N";
}

const user_data = getUserData("BROCK");

// 문제9
// 다음 코드는 오류가 날까요?
// 난다면 왜 날까용? / 안 난다면 왜 안 날까용?

function sendRequest(data: string, callbackFunction: (response: any) => void) {
  // ... sending a request with "data"
  return callbackFunction({ data: "Hi there!" });
}

sendRequest("Send this!", (response) => {
  console.log(response);
  return true;
});



// 다음 함수들에 타입을 붙여
// TypeScript 형식으로 바꿔주세요.

// 문제10-1
function doCalculation(number1: number, number2: number) {
  const multiplication = number1 * number2;
  const addition = number1 + number2;
  return multiplication + addition;
}
console.log(doCalculation(10, 20));

// 문제10-2
const doCalculation2 = (number1: number, number2: number) =>
  number1 * number2 + number1 + number2;

console.log(doCalculation2(10, 20));

// 문제11-1
function returnFunction(number1: number) {
  return function addNumbers(number2: number) {
    return number1 + number2;
  };
}

console.log(returnFunction(10)(20));

// 문제11-2
const returnFunction2 = (number1: number) => (number2: number) => number1 + number2;

console.log(returnFunction2(10)(20));

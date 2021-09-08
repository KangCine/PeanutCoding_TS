// 문제 1
// 다음 코드에서 Error 나는 부분이 있을까요? 있으면 어디에?
// let user: string;
// user = 'BROCK';
// user = 2; // error
// 문제 2
// 다음 코드에서 타입 추론이 일어나고 있나요?
var greetings = "hello"; //문제 2-1
// 넵!
var audience = "world"; //문제 2-2
// const sample_user: User = ['Max', 29];
var sample_user = { name: "Max", age: 29 };
var sample_product = {
    name: "Nice Rice",
    price: 4500,
    soldout: false
};
var new_intern = { name: "Bbi-ttag-gu-ri" };
new_intern = "Chirilli";
// | string이 붙으면 Intern이 string타입이 될수도 있나봐용
// 그래서 에러가 안납니다!
// 문제 7
// 다음 중에 enum으로 바꿔쓸 수 있는 코드는 어떤 것일까요?
// 직접 enum으로 바꿔보세용.
// A)
var users = ["Max", "Michael", "Julie"];
// B)
var userA = { name: "Max" };
var userB = { name: "Michael" };
var ROLE_ADMIN = 0;
var ROLE_AUTHOR = 1;
var users2;
(function (users2) {
    users2["userA"] = "Max";
    users2["userB"] = "Micgael";
})(users2 || (users2 = {}));
var Role;
(function (Role) {
    Role[Role["ROLE_ADMIN"] = 0] = "ROLE_ADMIN";
    Role[Role["ROLE_AUTHOR"] = 1] = "ROLE_AUTHOR";
})(Role || (Role = {}));
// 문제 8
// 다음 JavaScript 코드를
// TypeScript 형식으로 바꿔보세요.
// user data의 인터페이스를 명시해보고
// 함수의 타입도 정의해보세요.
function getUserData(name) {
    return {
        name: name,
        gender: "M"
    };
}
var user_data = getUserData("BROCK");
// 문제9
// 다음 코드는 오류가 날까요?
// 난다면 왜 날까용? / 안 난다면 왜 안 날까용?
function sendRequest(data, callbackFunction) {
    // ... sending a request with "data"
    return callbackFunction("{ " + data + ": \"Hi there!\" }");
}
sendRequest("Send this!", function (response) {
    console.log(response);
    return true;
});
// 다음 함수들에 타입을 붙여
// TypeScript 형식으로 바꿔주세요.
// 문제10-1
function doCalculation(number1, number2) {
    var multiplication = number1 * number2;
    var addition = number1 + number2;
    return multiplication + addition;
}
console.log(doCalculation(10, 20));
// 문제10-2
var doCalculation2 = function (number1, number2) {
    return number1 * number2 + number1 + number2;
};
console.log(doCalculation2(10, 20));
// 문제11-1
function returnFunction(number1) {
    return function addNumbers(number2) {
        return number1 + number2;
    };
}
console.log(returnFunction(10)(20));
// 문제11-2
var returnFunction2 = function (number1) { return function (number2) { return number1 + number2; }; };
console.log(returnFunction2(10)(20));

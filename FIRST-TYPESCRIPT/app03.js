var someValue = 5;
someValue = "hello";
someValue = true;
// any의 경우 타입을 명시하지 않고 아무거나 사용하겠다는 의미임
// 다른 타입으로 새롭게 선언 하여도 에러가 발생하지않음...
// but 타입스크립트에서는 타입에 관한 더 많은 정보를 명싷라 수록 더 좋음!
// 타입 에러를 컴파일시 잡아내서 코드를 효과적으로 유지 보수!!
// so, any는 될수 있으면 피하는게 좋음!!
//
// 제한된 타입을 동시에 지정 하고 싶을때
// 유니언 타입을 사용한다 -> 파이프( | ) 기호를 사용하면됨
var someValue2 = 5;
someValue2 = "world";
var totalCost;
var orderId;
var calculateTotalCost = function (price, qty) { };
var findOrderID = function (customer, productId) {
    return orderId;
};
var itemPrice;
var setItemPrice = function (price) {
    if (typeof price === 'string') {
        itemPrice = 0;
    }
    else {
        itemPrice = price;
    }
};
setItemPrice(50);

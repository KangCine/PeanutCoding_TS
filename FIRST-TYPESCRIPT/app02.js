"use strict";
var studentID = 12345;
var studentName = 'Jenny Kim';
var age = 21;
var gender = 'female';
var subject = 'Javascript';
var courseCompleted = false;
// 숫자 열거형(Numeric Enum)
// enum GenderType {
//     Male,
//     Female,
//     GenderNeutral
// }
// 문자 열거형(String Enum)
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
    GenderType["genderNeutral"] = "genderNeutral";
})(GenderType || (GenderType = {}));
var student1 = {
    studentID: 121212,
    studentName: 'Janet Jackson',
    age: 20,
    gender: 'female',
    subject: 'Mongo DB',
    courseCompleted: false
};
// 최신버전의 TS의 경우 null과 undefinded도 타입으로 인식을하기 때문에 | null과 같이 타입을 선언을 해주거나 
// tsconfig.json에서 설정을 해주어야 한다.
function getStudentDetails(studentID) {
    return {
        studentID: 123456,
        studentName: 'Mark Jacobs',
        // age: 20,
        gender: 'male',
        subject: 'Node Js',
        courseCompleted: true
        // 만약 age를 지우면 Strdent Type의 반환값에 포함되어야 하는데 
        // 인터페이스에서 정의된  age 프로터피가 age 프로퍼티가 없다.
        // 하지만 age 프로퍼티에 ?를 붙여주면 있어도 되고 없어도 되는 선택적 프로퍼티가 된다.
    };
}
function saveStudentDetails(student) {
    // student.studentID = 11222; // Cannot assign to 'studentID' because it is a read-only property -> 읽기 전용이라서 변경 불가능
}
saveStudentDetails(student1);

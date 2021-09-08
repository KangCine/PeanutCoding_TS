"use strict";
var student = {
    name: 'Jake',
    course: 'Getting Started with TypeScript',
    codingIQ: 80,
    code: function () {
        console.log('brain is working hard');
    }
};
// student.name = 10; // error
function calculateCodingIQ(lostPoints) {
    return 100 - lostPoints;
}

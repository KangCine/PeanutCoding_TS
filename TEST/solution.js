console.log(solution("01011112222"));
function solution(phone_number) {
    var num = phone_number.split('');
    var answer = '';
    for (var i = 0; i < num.length - 4; i++) {
        num[i] = '*';
    }
    for (var i = 0; i < num.length; i++) {
        answer += num[i];
    }
    return answer;
}

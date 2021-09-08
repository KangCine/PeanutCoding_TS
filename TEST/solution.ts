console.log(solution("01011112222"));

function solution(phone_number: string) {
  // let num: Array<string> = phone_number.split('');
  let num = phone_number.split('');
  let answer = '';

  for (let i = 0; i < num.length - 4; i++) {
    num[i] = '*';
  }

  for (let i = 0; i < num.length; i++) {
    answer += num[i];
  }

  return answer;
}

//519page

/* 
[ 자동 형 변환 ]
    1. 문자열 숫자 * 1 = 숫자형 
    2. 문자열 + 숫자형 >> 자동 문자열 +(연결 연산자)

[ 자료형 변환 함수 ]
    1. Nuber(문자열)
        string을 숫자열로 변환
        문자를 숫자로 바꾸려하면 NaN(not a number) 오류 발생
    2. parseInt()
        정수 숫자 변환
    3. parseFloat()
        실수 숫자로 변환
    4. String()
        문자열 변환 함수
*/


//1.1
let input = prompt("숫자를 입력하세요."); //prompt는 항상 문자열을 반환
console.log(typeof input); //string
let result = input * 10;
console.log(result);
console.log(typeof result);

//1.2
let one = "20"; //string
let two = 10;   //number
console.log(one + two); // 2010

let time = prompt('사용(분) 시간을 입력하세요.') // 8
console.log( time * 1000);          //  number 8000
console.log( time + 1000);           // string 81000

//2.1
console.log(Number("10"));

//2.2.
console.log(parseInt("123"));
console.log(parseInt("123.45"));    //소수점 탈락
console.log(parseInt("123.45abc")); //소수점, 문자 탈락

//2.3.
console.log(parseFloat('123.45'));

// 2.4.
console.log(String("123"));

// 생각1
// 국어 점수와 수학 점수를 prompt로 입력받아 더한 결과를 console.log()에 출력
let korean = prompt("국어 점수")
let math = prompt("수학 점수")
let sum = parseInt(korean) + math*1
console.log(`총합계 : ${sum}`)

// 생각2
// 이름과 나이(숫자)를 prompt로 입력받아 document.write를 이용하여 h3 마크업으로 출력
let name = prompt("이름이 무엇입니까?")
let age = Number(prompt("나이는 몇입니까?")) // 소괄호 중첩시 안쪽 소괄호부터 실행

document.write(`<h3> ${name}(${age}) </h3>`)
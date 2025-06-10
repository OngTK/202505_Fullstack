//523page
/*
[ 연산자 ]
    1. 산술연산자
        하나의 연산결과를 숫자로 반환
        +
        -
        *
        /
        % : 나머지
        ++ : 1 증가
        -- : 1 감소

    2. 연결연산자
        연산에 문자열이 포함될 때 연결 연산
        +

    3. 비교 연산자 
        하나의 연산결과를 논리(true/false) 값으로 반환
        > 초과
        < 미만
        >= 이상
        <= 이하
        == (값이) 같다
        != 같지 않다
        === (값과 자료형이) 같다
        !== 같지 않다.

    4. 논리 연산자 
        결과를 논리 값으로 반환
        && and 연산자
        || or 연산자
        !  not 연산자
*/

// 1. 산술 연산자
console.log( 10 + 3 );
console.log( 10 - 3 );
console.log( 10 * 3 );
console.log( parseInt( 10 / 3 )); // 10/3 연산 후 parseInt로 정수화
console.log( 10 % 3 );

//2. 연결 연산자
console.log( "점수 : " + 10);

/*
// 생각1
// [지문1] prompt 함수로 국어 , 영어 , 수학 점수를 각 입력받아서 각 변수에 저장하고 총점 과 평균을 계산하여 console탭에 출력하시오.
let 국어 = Number(prompt("국어 점수"));
let 영어 = Number(prompt("영어 점수"));
let 수학 = Number(prompt("수학 점수"));

let sum = 국어 + 영어 + 수학;
let average = sum / 3;

console.log( `총점 : ${sum} / 평균 : ${average}`);

// [지문2] prompt 함수로 반지름를 입력받아서 원넓이[반지름*반지름*3.14] 계산하여 console탭에 출력하시오.
let radius = Number(prompt("반지름을 입력해주세요."));
let circle = radius*radius * 3.14;
console.log(`원의 넓이는 ${circle}`);

// [지문3] prompt 함수로 두 실수를 입력받아서 앞 실수의 값이 뒤실수의 값의 비율% 계산하여 console탭에 출력하시오.
let 실수1 = Number(prompt("실수1을 입력하세요."));
let 실수2 = Number(prompt("실수2을 입력하세요."));
let ratio = (실수1 / 실수2) * 100
console.log(`비율은 ${ratio}%`)
*/

/*
// [지문4] prompt 함수로 정수를 입력받아 입력받은 값이 홀수이면 true / 짝수이면 false 로 console탭에 출력하시오.
let 정수1 = parseInt(prompt("숫자를 입력하세요."))
console.log(정수1 % 2 == 1);

// [지문5] prompt 함수로 정수를 입력받아 입력받은 값이 7의 배수이면 true / 아니면 false 로 console탭에 출력하시오.
let 정수2 = parseInt(prompt("숫자를 입력하세요."))
console.log(정수2 % 7 == 0);

// [지문6] prompt 함수로 아이디 와 비밀번호를 입력받아서 아이디가 'admin' 이고 비밀번호가 1234 와 일치하면 true / 아니면 false 출력하시오.
let ID = prompt("아이디")
let PW = prompt("비밀번호")
console.log( ID == 'admin' && PW == 1234 )

// [지문7] prompt 함수로 정수를 입력받아 입력받은 값이 홀수 이면서 7배수 이면 true / 아니면 false 로 console탭에 출력하시오.
let 정수3 = parseInt(prompt("숫자를 입력하세요."))
console.log( 정수3 % 2 == 1 && 정수3 % 7 == 0);
*/

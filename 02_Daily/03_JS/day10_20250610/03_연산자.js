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

    5. 대입 연산자 (할당 연산자, 복합대입 연산자)
        변수 저장에 사용되는 기호
        = 오른쪽 데이터를 왼쪽에 할당
        += 오른쪽 데이터를 왼쪽 데이터에 더한 후 대입
        -= 오른쪽 데이터를 왼쪽 데이터에서 뺀 후 대입
        *= 오른쪽 데이터를 왼쪽 데이터에 곱한 후 대입
        /= 오른쪽 데이터를 왼쪽 데이터에 나눈 후 대입
        %= 왼쪽 나누기 오른쪽의 나머지를 대입

    6. 증감 연산자
        ++ : 1 증가
        -- : 1 감소

    7. 삼항 연산자
        항이 3개
        (1)조건 ? (2)true : (3)flase 
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
console.log( ID == 'admin' && PW == '1234' )

// [지문7] prompt 함수로 정수를 입력받아 입력받은 값이 홀수이면서 7배수 이면 true / 아니면 false 로 console탭에 출력하시오.
let 정수3 = parseInt(prompt("숫자를 입력하세요."))
console.log( `결과 : ${정수3 % 2 == 1 && 정수3 % 7 == 0}`);
*/


// 5. 대입 연산자
let 변수 = 10 ;
console.log(변수); // 10
변수 += 3;
console.log(변수); // 13
변수 -= 4;
console.log(변수); // 9
변수 *= 2;
console.log(변수); // 18

// 6. 증감연산자
let 나이 = 40;
console.log( 나이 );   // 40
console.log( ++나이 ); // 41 선위증가
console.log( 나이++ ); // 41 (증가하지 않음) 후위증가 : cinsole 이 먼저되고 그 후에 증가됨
console.log( 나이 ); // 42 위에서 ++가 후위 증가가 반영

// 7. 삼항 연산자
// 80점 이상이면 '합격', 아니면 '불합격'
let 점수 = 80; 
let 결과 = 점수 >= 80 ? "합격" : "불합격"
console.log(결과)
/*
// [지문8] 1차점수 와 2차점수 prompt함수로 각 입력받아서 총점이 150점이상이면 '합격' 아니면 '불합격' HTML의 <h3> 에 출력하시오.
let 점수1 = Number(prompt("1차 점수:")) ;
let 점수2 = Number(prompt("2차 점수:"));
let 결과8 = 점수1 + 점수2 >= 150 ? "합격" : "불합격";
document.write(`<h3> 결과 : ${결과8}<h3>`) ;

// [지문9] 두 사람의 이름을 prompt함수로 각 입력받아서 만일 이름이 '유재석' 이면 뒤에 (방장) 이라고 이름 뒤에 붙이고 아니면 생략한다.  
// HTML의 <ol> 에 결과를 출력하시오.

let 이름1 = prompt("이름을 입력하세요. 1");
let 이름2 = prompt("이름을 입력하세요. 2");

let 이름1_결과 = 이름1 == "유재석" ? 이름1 += "(방장)" : 이름1;
let 이름2_결과 = 이름2 == "유재석" ? 이름2 += "(방장)" : 이름2;

document.write(`<ol> <li> ${이름1_결과} </li> <li>${이름2_결과}</li> </ol>`);
*/
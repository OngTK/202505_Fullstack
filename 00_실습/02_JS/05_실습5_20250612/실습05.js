// [ 실습5 ]

/* ==============================
문제 1: 과일 목록 관리
다음 과일 목록 배열이 주어져 있습니다.
let fruitList = [ '사과', '바나나' ];
사용자로부터 새로운 과일 이름을 입력받아, 
fruitList에 이미 존재하는 과일이면 '이미 존재하는 과일입니다.'를 출력하세요. 
존재하지 않는 과일이면 배열에 추가한 뒤, 변경된 배열 전체를 출력하는 프로그램을 작성하시오.
*/
/*
let fruitList = [ '사과', '바나나' ];
let newFruit = prompt("과일");

if ( fruitList.indexOf(newFruit) >= 0 ) {
    console.log("이미 존재하는 과일입니다.");
} else {
    fruitList.push(newFruit);
    console.log(fruitList);
};
*/

/* ==============================
문제 2: 성별에 따른 색상 지정
주민등록번호 13자리를 문자열로 입력받습니다. 
성별을 나타내는 7번째 숫자가 '1' 또는 '3'이면 'blue'를, 
'2' 또는 '4'이면 'red'를 출력하는 프로그램을 작성하시오.
*/
/*
let id_num = prompt("주민등록번호 13자리를 입력해주세요.")

// 텍스트도 index로 중간 글자를 가져올 수 있다!!!!!!!!!!!!!!!!!!!!!!!!

if (id_num[6] == 1 || id_num[6] == 3) {  
    console.log('blue')
} else if (id_num[6] == 2 || id_num[6] == 4) {
    console.log('red')
} else {
    console.log('주민등록번호가 올바르지 않습니다.')
}
*/

/* ==============================
문제 3: 구매 금액에 따른 할인율 적용
사용자로부터 총 구매 금액을 입력받습니다.
구매 금액에 따라 아래와 같이 할인율을 적용하여 
최종 결제 금액을 출력하는 프로그램을 작성하시오.
50,000원 이상: 10% 할인
30,000원 이상 50,000원 미만: 5% 할인
10,000원 이상 30,000원 미만: 1% 할인
10,000원 미만: 할인 없음
*/
/*
let sum3 = Number(prompt("총 구매금액"));

if ( sum3 >= 50000) {
    console.log(`총 구매금액 : ${sum3} / 할인율 10%`);
    console.log(`최종결제 금액 : ${sum3 *(1-0.1)}`);
} else if (sum3 >= 30000) {
    console.log(`총 구매금액 : ${sum3} / 할인율 5%`);
    console.log(`최종결제 금액 : ${sum3 *(1-0.05)}`);
}  else if (sum3 >= 10000) {
    console.log(`총 구매금액 : ${sum3} / 할인율 1%`);
    console.log(`최종결제 금액 : ${sum3 *(1-0.01)}`);
}  else {
    console.log(`총 구매금액 : ${sum3} / 할인 없음`);
    console.log(`최종결제 금액 : ${sum3}`);
}
*/

/* ==============================
문제 4: 월(Month)에 따른 계절 판별
1부터 12 사이의 월(Month)을 숫자로 입력받아, 해당하는 계절을 출력하는 프로그램을 작성하시오.
봄: 3, 4, 5월
여름: 6, 7, 8월
가을: 9, 10, 11월
겨울: 12, 1, 2월
만약 1~12 이외의 숫자를 입력하면 '잘못된 월입니다.'를 출력하세요.
*/
/*
let Month = prompt("월을 입력해주세요")
if ( Month >= 3 && Month <= 5) {
    console.log("봄");
} else if ( Month >= 6 && Month <= 8) {
    console.log("여름");
} else if ( Month >= 9 && Month <= 11) {
    console.log("가을");
} else if ( Month == 1 || Month == 2 || Month == 12) {
    console.log("겨울");
} else {
    console.log("잘못된 월입니다.")
}
*/

/* ==============================
문제 5: 세 수 중 가장 큰 수 찾기
서로 다른 세 개의 정수를 입력받아, 가장 큰 수를 출력하는 프로그램을 작성하시오.
*/

/*
let num5_1 = Number(prompt("숫자를 입력해주세요"));
let num5_2 = Number(prompt("숫자를 입력해주세요"));
let num5_3 = Number(prompt("숫자를 입력해주세요"));


if (num5_1 > num5_2 && num5_1 > num5_3) {
    console.log(`가장 큰 수는 ${num5_1} 입니다.`);

} else if (num5_2 > num5_1 && num5_2 > num5_3) {
    console.log(`가장 큰 수는 ${num5_2} 입니다.`);
} else {
    console.log(`가장 큰 수는 ${num5_3} 입니다.`);
}
*/

/* ==============================
문제 6: 윤년 판별기
사용자로부터 연도(year)를 입력받아 해당 연도가 윤년인지 평년인지 판별하는 프로그램을 작성하시오.
윤년 조건:
연도가 4의 배수이면서, 100의 배수는 아닐 때
또는 연도가 400의 배수일 때
출력 예시: '2024년은 윤년입니다.' 또는 '2023년은 평년입니다.'
*/

/*
let year6 = Number(prompt("윤별을 판독할 년도를 입력해주세요."));

if (year6 % 4 == 0 && year6 % 100 != 0) {
    console.log(`${year6}년은 윤년입니다.`);
} else {
    console.log(`${year6}년은 평년입니다.`);
}
*/

/* ==============================
문제 7: 세 수 오름차순 정렬
서로 다른 세 개의 정수를 입력받아, 오름차순(작은 수부터 큰 수 순서)으로 정렬하여 출력하는 프로그램을 작성하시오.
예시: 17, 4, 8 입력 시 4, 8, 17 출력
*/

/*
let num7_1 = Number(prompt("숫자를 입력해주세요"));
let num7_2 = Number(prompt("숫자를 입력해주세요"));
let num7_3 = Number(prompt("숫자를 입력해주세요"));

if (num7_1 < num7_2 && num7_1 < num7_3) {
    if (num7_2 < num7_3) {
        console.log(`오름차순 정렬 ${num7_1} ${num7_2} ${num7_3}`);
    } else {
        console.log(`오름차순 정렬 ${num7_1} ${num7_3} ${num7_2}`);       
    }
} else if (num7_2 < num7_1 && num7_2 < num7_3){
    if (num7_1 < num7_3) {
        console.log(`오름차순 정렬 ${num7_2} ${num7_1} ${num7_3}`);
    } else {
        console.log(`오름차순 정렬 ${num7_2} ${num7_3} ${num7_1}`);       
    }
} else {
    if (num7_1 < num7_2) {
        console.log(`오름차순 정렬 ${num7_3} ${num7_1} ${num7_2}`);
    } else {
        console.log(`오름차순 정렬 ${num7_3} ${num7_2} ${num7_1}`);       
    }
} 
*/

// 배열로 오름차순 만들기
/*
let num7_1 = Number(prompt("숫자를 입력해주세요. 1"));
let num7_2 = Number(prompt("숫자를 입력해주세요. 2"));
let num7_3 = Number(prompt("숫자를 입력해주세요. 3")); 

let numList = [ num7_1 , num7_2 , num7_3 ];
console.log(numList)

let temp; //swap을 위한 임시변수 선언
if ( numList[0] > numList[1]){
    temp = numList[0];
    numList[0] = numList[1];
    numList[1] = temp;
}
console.log(numList)
if ( numList[0] > numList[2]){
    tmep = numList[0];
    numList[0] = numList[2];
    numList[2] = temp;
}
console.log(numList)

if ( numList[1] > numList[2]){
    tmep = numList[1];
    numList[1] = numList[2];
    numList[2] = temp;
}
console.log(numList)

console.log(`${numList[0]}, ${numList[1]}, ${numList[2]}`)
*/

/* ==============================
문제 8: 가위바위보 게임
두 명의 플레이어가 참여하는 가위바위보 게임을 만드시오.
입력: 플레이어 1과 플레이어 2는 각각 0(가위), 1(바위), 2(보) 중 하나의 숫자를 입력합니다.
규칙:
가위(0)는 보(2)를 이깁니다.
바위(1)는 가위(0)를 이깁니다.
보(2)는 바위(1)를 이깁니다.
출력:
플레이어 1이 이기면 '플레이어1 승리'를 출력합니다.
플레이어 2가 이기면 '플레이어2 승리'를 출력합니다.
두 플레이어가 같은 것을 내면 '무승부'를 출력합니다.
*/

/*
let player8_1 = Number(prompt("플레이어 1 : 0(가위), 1(바위), 2(보)"));
let player8_2 = Number(prompt("플레이어 2 : 0(가위), 1(바위), 2(보)")); 

if (player8_1 == 0) {
    if (player8_2 == 0) {
        console.log("무승부");
    } else if (player8_2 == 1) {
        console.log("플레이어 2 승리");
    } else (
        console.log("플레이어 1 승리");
    )
} else if (player8_1 == 1) {
    if (player8_2 == 0) {
        console.log("플레이어 1 승리");
    } else if (player8_2 == 1) {
        console.log("무승부");
    } else (
        console.log("플레이어 2 승리");
    )
} else {
    if (player8_2 == 0) {
        console.log("플레이어 2 승리");
    } else if (player8_2 == 1) {
        console.log("플레이어 1 승리");
    } else (
        console.log("무승부");
    )
}
*/

/* ==============================
문제 9: 주차 차량 위치 검색
주차장 차량 정보가 다음과 같이 두 개의 배열로 관리되고 있습니다. 
두 배열에서 같은 인덱스는 동일한 차량의 정보를 의미합니다.
차량 번호 목록: let carArray = [ '250어7142', '142가7415', '888호8888' ];
주차 위치 목록: let locationArray = [ 'A1', 'B3', 'C2' ];
사용자로부터 차량 번호를 입력받아, 
carArray에서 해당 차량을 찾은 뒤 locationArray에 있는 그 차량의 주차 위치를 찾아 출력하는 프로그램을 작성하시오. 
만약 해당하는 차량 번호가 없다면 '차량이 존재하지 않습니다.'를 출력하시오.
*/

/*
let carArray = [ '250어7142', '142가7415', '888호8888' ];
let locationArray = [ 'A1', 'B3', 'C2' ];

let carNum = prompt("차량 번호를 입력해주세요.")

let carIndex = carArray.indexOf(carNum);

if ( carIndex >=0 && carIndex <=2 ) {
    console.log(`주차위치 : ${locationArray[carIndex]}`);
} else {
    console.log( "차량이 존재하지 않습니다." );
}
*/

/* ==============================
문제 10: 수강 신청 목록에서 과목 제외하기
현재 수강 신청한 과목 목록이 배열로 주어져 있습니다.
let courseList = ['수학', '영어', '과학', '국어'];
사용자로부터 제외하고 싶은 과목명을 입력받아, 
courseList에 해당 과목이 존재하면 목록에서 삭제한 뒤 변경된 배열 전체를 출력하세요. 
만약 존재하지 않는 과목이면 '해당 과목은 신청 목록에 없습니다.'를 출력하는 프로그램을 작성하시오.
*/
/*
let courseList = ['수학', '영어', '과학', '국어'];

let subject = prompt("제외하고 싶은 과목명을 입력해주세요.");

let courseIndex = courseList.indexOf(subject);

if (courseIndex >= 0 && courseIndex <= 3) {
    courseList.splice(courseIndex,1);
    console.log(courseList);
} else {
    console.log("해당 과목은 신청 목록에 없습니다.");
}
    */
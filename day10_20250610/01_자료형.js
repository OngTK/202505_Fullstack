//513p 자료형
/*
[ 숫자형 ]
    정수 : 소수점이 없는 숫자
    실수 : 소수점이 있는 숫자
            실수는 정밀한 계산이 불가 : 부동소수점 >> 별도의 정밀한 함수가 필요
*/

console.log(100);
console.log(typeof 100); // >> number // typeof 자료 : 자료의 자료형(종류) 반환

console.log(0.1 + 0.2);


/*
[ 문자열 ] 
    '' or ""로 묶음
    이스케이프 문자(특수기호)
        \ddd 8진수
        \xddd 16진수
*/

console.log(typeof "100");
console.log(typeof "안녕하세요.");
console.log(" \\안녕1 ");   // \안녕1
console.log(" \'안녕2 ");   // '안녕2
console.log(" \"안녕3 ");   // "안녕3 
console.log(" \n안녕4 ");   // (줄바꿈) 안녕4
console.log(" \t안녕15 ");  // (tab) 안녕5
 

/*
[ 템플릿 리터널 ]
    ` 백틱, 변수나 식을 넣을때는 ${}
    문자와 변수, 식을 섞어서 하나의 문자열을 만드는 표현 형식
*/

console.log("안녕"+"자바");         // + 연결 연산자 사용
console.log(`${"안녕"}${"자바"}`)   // ``묶음으로 자료 합치기

let name = 'kim'
let classRoom = 204
console.log(name + "님, " + classRoom + "호 강의실로 입장하세요." );
console.log(`${name}님, ${classRoom}호 강의실로 입장하세요.`);


/* 
[ 논리형 boolean ]
    true false
*/

console.log(true);
console.log(false);

/*
[ undefined / null]
    undefined : 데이터의 자료형이 정의되지 않은 상태
    null : 데이터 값이 유효하지 않은 상태
*/

let 과일상자;           // 변수를 선언하고 자료를 대입하지 않음
console.log(과일상자);  // 자료가 없는 변수 호출 >> undefined 

let 채소상자=null;
console.log(채소상자);

/*
[ 배열 array ]
    하나의 변수에 여러 자료를 저장 
[ , , , , ...]
    - 인덱스(index)
*/

let season = ["봄", "여름", "가을", "겨울"] ;
console.log(season)
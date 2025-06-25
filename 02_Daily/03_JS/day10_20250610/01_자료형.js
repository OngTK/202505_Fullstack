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
    - 인덱스(index) : 0~n으로 표시
    - 배열 호출 
        console.log(Array); >> 배열의 모든 값이 출력
        console.log(Array[index]); >> 배열에 해당 index의 요소가 출력
    - 배열 수정
        전체
            변수명 = [ , , , ]; >> 새로운 자료 입력
        특정요소
            변수명[index] = ""      
    - 배열 내 요소 추가
        변수명.push(새로운 값) >> 가장 마지막에 추가됨
    - 배열 내 요소 삭제
        변수명.splice(index, ea)
    - 배열 내 특정 요소 찾기
        변수명.indexOf(찾을값) >> 있으면 index 번호를, 없으면 -1을 반환
*/

let season = ["봄", "여름", "가을", "겨울"] ; //index 0~3 / length 4
console.log(season);
console.log(season[0]);
console.log(season[1]);
console.log(season[2]);
console.log(season[3]);
console.log(season[4]); // undifined

/* 생각 1)
변수 : 1개 = season
리터럴 : 4개 = 봄, 여름, 가을, 겨울 
타입 : 2개 = array, String
변수가 갖는 자료 1개: [ ] (배열 통으로 1개) 
*/

season = ["배두훈", "강형호", "조민규", "고우림"]
console.log(season);
season[2] = "박강현";
console.log(season);

season.push("조민규");
console.log(season);

season.splice(2,1);
console.log(season);

console.log(season.indexOf("고우림"));
console.log(season.indexOf("박강현"));
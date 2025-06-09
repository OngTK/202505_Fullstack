/*
[ 변수 ]
    - 정의 : 하나의 자료를 담아두는 공간(메모리)
    - 목적 : 재사용성과 가독성을 위해
    - 사용법 : 
        ! 변수 선언
            let 변수명;         : 초기값 X
            let 변수명 = 자료;   : 초기값 O
    - 형태
        let : 변수 선언을 위한 키워드/명령어
        변수명 : 메모리 공간에 상진적인 이름
                    카멜표기법 myCar, totalArea
        = : 오른쪽 항을 왼쪽 항에 대입/할당
        자료 : 변수에 저장할 데이터/값
*/

//509page

let width; // 변수 선언
let height;

width = 200; // 변수에 값 할당/대입
height = 50;

let area = width * height;
console.log(area);

// 1. 변수 선언 방법

let 이름1;               //초기값 X 변수  선언
let 이름2 = "유재석";     //초기값 O 변수  선언

// 2. 변수 호출 방법 // 주의! 문자처리 하지 않기!!
console.log(이름1); 
console.log(이름2);

// 3. 변수 값 수정      변수명 = 새로운 값

이름1 = "고우림";
이름2 = "배두훈";

console.log(이름1); 
console.log(이름2);


/*
[ 상수 ]
    - 정의 : 변수와 같이 하나의 자료/데이터를 담아 두는 공간. 수정 불가
    - 목적 : 절대값, 협 업간의 다른 사람이 바꾸면 안되는 값
    - 사용법 : 
        ! 변수 선언
        const 변수명 = 초기값;      ! 상수는 초기값 필수
    - 형태
        const   : 상수를 선언하기 위한 키워드
        변수명   :                      
                        전체 대문자로 사용하는 경우가 많음
        =       :
        자료     : 상수(고정)으로 저장할 자료
*/

// 1. 상수 선언 방법
const 이름3 = "강형호";

// 2. 상수 호출
console.log(이름3);

// 3. 상수 수정 >> 불가능!!
 
//에러발생 : Uncaught TypeError: Assignment to constant variable.

// 이름3 = "조민규";



// 생각!
let point1 = 50;
// 변수명 : point1 / 리터럴 : 50
let point2 = 100
// 변수명 : point2 / 리터럴 : 100
let point3 = point1 + point2
// 변수명 : point3 / 리터럴 : 150 (새로운 리터럴 1개)
// 총 리터럴 3개!!

/* // 생각!
let point1 = 50;
let point4 = 50;
let point2 = 100
let point3 = point1 + point2

// 총 리터럴 3개!! 
// 50은 변수명이 서로 다를 뿐이지, 50은 그 자체가 상수이므로 한 개의 리터럴로 봐야함 */
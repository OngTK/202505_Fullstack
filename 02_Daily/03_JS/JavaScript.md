# JS_01_JavaScript(JS) 시작
<span style="font-size:20px; font-weight:600" >JS : 자바 스크립트 : 웹 문서의 동적 역할 </span>

## JS의 특징
#### 1. 사용처<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   : 웹 프로그래밍, 서버 개발, 소프트웨어 개발

#### 2. 라이브러리 종류 <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font : REACT, ANGULAR(지원 중단), VUE.JS, JQUERY<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;back : NODE.JS<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;app : REACT NATIVE(지원 중단)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;REACT NATIVE WEB : web/app 동시 개발<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;software : NW.JS

#### 3. 사용법
 - 주의 : HTML 없이 JS 파일만으로 실행되지 않음
 - 방법 1 <br>
         1. HTML 파일 내 <body> 마크업 안에서 가장 아래<br>
         2. script 마크업을 이용하여 JS 코드를 작성<br>
```html
<body>
    <div> test </div>

    <script>
        function test(){
            //함수 선언
        }
    </script>
</body>
```
  - 방법 2<br>
          1. JS 파일을 생성하여 JS 코드를 작성<br>
          2. HTML 파일 내 <body> 마크업 안에서 가장 아래<br>
          3. <script src="JS파일 경로.js"></script>
```html
<body>
    <div> test </div>

    <script src="JS파일 경로.js"> </script>
</body>
```
```JS
// 별도의 JS 파일
function test(){
    //함수 선언
}
```

#### 4. 주석<br>
<div style = "color : #548235 ; font-weight:500">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// 한 줄 주석<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/* 여러줄 주석 */
</div>   


#### 5. 실행 확인<br>

    브라우저 
    <br>> f12(개발자 도구) 
    <br>> [sources tab]에서 .js 파일 여부 확인
    <br>> [console tab]에서 .js 출력 메세지 확인

#### 6. 용어
  1) 데이터(Data, 자료) <br>
          &nbsp;&nbsp;&nbsp;&nbsp;사실이나 값을 그대로 나타낸 객관적 자료
  2) 리터럴(literal)<br>
          &nbsp;&nbsp;&nbsp;&nbsp;프로그래밍 언어에서 소스코드에 직접 표현한 값<br>
          &nbsp;&nbsp;&nbsp;&nbsp;개발자가 사용할 수 있도록 미리 정해진 값을 넣어 놓음 (상수 = 수정할 수 없는 고정 값)<br>
          &nbsp;&nbsp;&nbsp;&nbsp;자료의 타입/종류 >> 자료형<br>
  3) 자료형<br>
          &nbsp;&nbsp;&nbsp;&nbsp;프로그래밍 언어에서 자료들을 분류하는 방법 >> 데이터 처리의 효율화

---
---
# JS_02_출력·입력함수, 변수와 상수, 자료형, 연산자

## 1. 출력함수
1. console.log(출력할 자료) <br>: F12 > consol tab에 출력

```js
console.log( 10 )
console.log( "안녕하세요" )
```

2. alert(출력할 자료)<br>: 브라우저 알림(alert) 창으로 출력
```js
alert( 3.14 )
alert( true )
```

3. document.write( HTML )<br>: document( html문서 ).wirte <br>: html 문서에 출력
```js
document.write( "<h3> JS에서 작성한 HTML 입니다. </h3>" )
```
4. document.querySelector( "선택자" ).innerHTML <br>: 특정한 선택자(마크업, class, id)의 inner 영역에 출력한다.<br>
.innerHTML : <마크업> inner(사이) </마크업> : 마크업 사이의

```js
document.querySelector( "h3" ).innerHTML = "<h3> 특정한 선택자 HTML을 작성합니다. </h3>"
```
<span style="font-size:12px; color:#eeeeee">※자세한 내용은 추후 dom객체에서...</span>

## 2. 입력함수

1. confirm( ) : 브라우저 확인/취소 알림창<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[확인=true / 취소=false]을 반환 
```js
confirm('(1)입력 해주세요. ')
```
2. prompt() : 브라우저 텍스트 입력 알림창<br>
```js
prompt("(2) 입력 해주세요.")
```
3. document.querySlector("선택자").innerHTML
              : 특정한 선택자의 마크업 텍스트 호출

4. document.querySlector("선택자").value
              : 특정한 선택자의 value 속성값 호출 <br><br>
<span style="font-size:12px; color:#eeeeee">※ 3, 4번 관련 자세한 내용은 추후 dom객체에서...</span>


## 3. '변수'와'상수'

### 변수
 - 정의 : 하나의 자료를 담아두는 공간(메모리)
 - 목적 : 재사용성과 가독성을 위해
 - 사용법 : 변수 선언<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; let 변수명;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         : 초기값 X<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; let 변수명 = 자료;   &nbsp;&nbsp;&nbsp;&nbsp;: 초기값 O<br>
 - 형태<br>
     let&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 변수 선언을 위한 키워드/명령어<br>
     변수명 &nbsp;: 메모리 공간에 상진적인 이름(일반적으로 카멜표기법으로 작성 myCar, totalArea)<br>
     = &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 오른쪽 항을 왼쪽 항에 대입/할당<br>
     자료&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 변수에 저장할 데이터/값<br>

###  상수
  - 정의 : 변수와 같이 하나의 자료/데이터를 담아 두는 공간. 수정 불가
  - 목적 : 절대값, 협 업간의 다른 사람이 바꾸면 안되는 값
  - 사용법 : 변수 선언<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const 변수명 = 초기값;      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;☆★상수는 초기값 필수☆★<br>
  - 형태<br>
      const&nbsp;&nbsp;&nbsp;&nbsp;: 상수를 선언하기 위한 키워드<br>
      변수명&nbsp;   : 전체 대문자로 사용하는 경우가 많음<br>
      =&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 오른쪽 항을 왼쪽 항에 대입/할당<br>
      자료&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 상수(고정)으로 저장할 자료<br>
```js
// 1. 변수
let width; // 변수 선언
let height;

width = 200; // 변수에 값 할당/대입
height = 50;

// 2. 상수
const area = 200;
//상수는 값을 수정할 수 없음

```

## 4. JS 자료형
### 1] 자료형 종류
    [ex]
    1. 숫자형(Number)           : 10(정수), 3.14(실수)
    2. 문자열(String)           : "", ''
    3. 불리언(Boolean)          : true, false
    4. 배열(Array)              : [ 자료, 자료, 자료, ]
    5. 객체(Object)             : { 속성명 : 자료, 속성명 : 자료 } : 이름(속성명)과 자료를 한 쌍으로
    6. 특수 : undefined, null   : 
        undefined-자료가 할당되지 않은 상태 / null-자료가 존재하지 않음

#### 1) 숫자형
    정수 : 소수점이 없는 숫자
    실수 : 소수점이 있는 숫자
            실수는 정밀한 계산이 불가 : 부동소수점 >> 별도의 정밀한 함수가 필요

#### 2) 문자열 
    '' or ""로 묶음
    이스케이프 문자(특수기호)
        \ddd 8진수
        \xddd 16진수
#### 3) 논리형 boolean 
    true / false
#### 4) 배열 array
    하나의 변수, 자료에 여러 자료를 저장하는 방법 
    [ , , , , ...]
       - 인덱스(index) 
           0 ~ n-1
           자료들이 저장된 순서
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
       - 배열의 길이
           변수명.length : 자료의 개수를 반환

#### 5) undefined / null
    undefined : 데이터의 자료형이 정의되지 않은 상태
    null : 데이터 값이 유효하지 않은 상태

#### 6) 템플릿 리터널
    백틱( `` ) 이용 >> ` ${} ${} `
    문자와 변수, 식을 섞어서 하나의 문자열을 만드는 표현 형식

#### 7) 키워드 : 
    미리 정해진 기능이 포함된 특수문자/문자열
    [], {}, console, Number, String, if, for .etc

### 2] 자료형 변환
    문자열 숫자 * 1 = 숫자형 
    문자열 + 숫자형 >> 자동 문자열 +(연결 연산자)

#### 1) 자료형 변환 함수
    1. Nuber(문자열)
        string을 숫자열로 변환
        문자를 숫자로 바꾸려하면 NaN(not a number) 오류 발생
    2. parseInt()
        정수 숫자 변환
    3. parseFloat()
        실수 숫자로 변환
    4. String()
        문자열 변환 함수


## 5. 연산자

 1. 산술연산자<br>

     하나의 연산결과를 숫자로 반환<br>
     더하기 + / 빼기 - / 곱하기 * / 나누기 / 나머지 %<br><br>

 2. 연결연산자<br>
     연산에 문자열이 포함될 때 연결 연산<br>
     문자열 + 문자열 = 문자열문자열<br><br>

 3. 비교 연산자 <br>
     하나의 연산결과를 논리(true/false) 값으로 반환
     <br>> 초과 / < 미만 /     >= 이상 /     <= 이하
     <br> == (값이) 같다 /   != 같지 않다 
     <br>  === (값과 자료형이) 같다 /   !== 같지 않다.<br><br>

 4. 논리 연산자 <br>
     결과를 논리 값으로 반환
     <br>&& and 연산자
     <br>|| or 연산자
     <br>!  not 연산자<br><br>

 5. 대입 연산자 (할당 연산자, 복합대입 연산자)
     <br>변수 저장에 사용되는 기호
     <br>= 오른쪽 데이터를 왼쪽에 할당
     <br>+= 오른쪽 데이터를 왼쪽 데이터에 더한 후 대입
     <br>-= 오른쪽 데이터를 왼쪽 데이터에서 뺀 후 대입
     <br>*= 오른쪽 데이터를 왼쪽 데이터에 곱한 후 대입
     <br>/= 오른쪽 데이터를 왼쪽 데이터에 나눈 후 대입
     <br>%= 왼쪽 나누기 오른쪽의 나머지를 대입<br><br>

 6. 증감 연산자<br>
     ++ : 1 증가<br>
     -- : 1 감소<br><br>

 7. 삼항 연산자<br>
     항이 3개<br>
     사용법 : 조건 ? true : flase ; <br><br>





---
# JS_03_조건문

## 1. 조건문이란?

특정 조건에 따라 순서대로 명령을 처리하는 방법

```JS

// 단일 조건문
if (조건) {
    true;       // 참일 때, 명령문
    }
else {
    false;      // 거짓일 때, 명령문
    }

// 다중 조건문
if (조건1) {
        true; 
        }
    elseif (조건2) {
        true; 
        }
    elseif (조건3) {
        true; 
        }
    else { flase; }
```
```js
// 예제) 합격/불합격 판정<br>두 개의 점수를 입력받아 총점을 계산하세요. 
// 총점이 90점 이상이면 '성공'을, 그렇지 않으면 '실패'를 출력하는 프로그램을 작성하시오.

let point1 = Number(prompt("첫번째 점수"));
let point2 = Number(prompt("두번째 점수"));
let sum = point1 + point2;

if ( sum >= 90 ) {
    console.log("성공");
} else {
    console.log("실패");
}
```
```js
// 예제) 나이에 따른 놀이공원 입장료 계산
// 사용자의 나이를 정수로 입력받아, 아래 기준에 따라 입장료를 출력하는 프로그램을 작성하시오.
// 8세 미만: '무료'
// 8세 이상 19세 이하: '5,000원'
// 20세 이상 65세 미만: '10,000원'
// 65세 이상: '3,000원
let age = prompt("고객님의 나이를 입력해주세요.")

if ( age < 8 ) {
    console.log("무료");
} else if ( age <= 19 ) {
    console.log("5,000원");
} else if ( age < 65 ) {
    console.log("10,000원");
} else {
    console.log("3,000원");
};
```
```js
// 예제) 로그인 시스템
// 사용자로부터 아이디와 비밀번호를 입력받습니다. 
// 아이디가 'admin'이고 비밀번호가 '1234'와 모두 일치하면 '로그인 성공'을, 
// 하나라도 다르다면 '로그인 실패'를 출력하는 프로그램을 작성하시오.

let id = prompt("ID를 입력하세요.")
let pw = prompt("패스워드를 입력하세요.")

if ( id == 'admin' && pw == '1234') {
    console.log("로그인 성공");
} else {
    console.log("로그인 실패");
};
```

----
----

# JS_04_반복문

## 1. 반복문이란?
특정한 조건의 논리 결과가 true 일 때 특정한 명령어들을 반복처리

### 1) 형태
<span style="font-size:20px;font-weight:bold"> for ( 초기값 ; 조건문 ; 증감식) {실행문}</span>

### 2) 문법
- 초기값 : 반복할 때 반복의 카운터/횟수를 체크하는 변수의 처음값
- 조건문 : 반복 실행문이 실행되는 조건으로 true 이면 { } 실행, 아니면 종료
- 증감식 : 반복 변수의 증가 혹은 감소 변화 연산식
- 실행문 : 조건이 true일때 반복실행되는 코드
```js
// 1~5를 출력하는 반복문
for (let i = 1 ; i <= 5; i++){
    console.log(i)
}
// >> 결과 : 1 2 3 4 5 
```

### 3) 배열과 반복문의 관계
- 배열의 인덱스는 순차적인 순서 번호가 존재
- 배열의 길이 : 변수명.lenght
- 배열의 마지막 인데스 : 변수명.lenght-1

## 2. 반복문 제어 키워드
### 1) continue 
- 가장 가까운 for문의 증감식으로 이동
```js
for () {
    if (true) {
        continue;
        }; // true일 경우, 아래 코드를 실행하지 않고 for 문의 증감식으로 이동!!
    console.log();
    };
```
### 2) break
- 가장 가까운 for문의 종료
```js
    for () {
        if (true) {
            break;
            }; // true일 경우, // 반복문 자체를 종료
    };
```
### 3) 무한 루프
```js
    for( ; ; ){  }  // for 안에 아무것도 넣지 않음 or 조건식, 증감식이 무조건 true
```

## 3. 예제
```js
// 1~10, 누적합계. 단, 누적합계 10 초과시 종료
let sum = 0;
for (i = 1; i <= 10; i++) {
    sum += i;
    if (sum > 10) { break; }     // 반복문 자체를 종료
}
console.log(sum)
```
```js
// 배열 요소의 합계와 평균 구하기
// 다음 학생들의 점수가 담긴 배열이 있습니다. 
// for 반복문을 사용하여 모든 점수의 합계와 평균을 계산하여 콘솔에 출력하시오.
let scores = [85, 92, 78, 65, 95];
*/

let scores1 = [85, 92, 78, 65, 95];
let sum1 = 0;
for (let i = 0; i < scores1.length; i++) {
    sum1 += scores1[i];
};
console.log(`합계 : ${sum1}`);
console.log(`평균 : ${sum1 / scores1.length}`);

```
```js
// 배열에서 특정 값의 개수 세기
// 다음 배열에서 'A'형 혈액형을 가진 사람이 몇 명인지 for 반복문을 통해 세고, 그 수를 콘솔에 출력하시오.

let bloodTypes = ['A', 'B', 'O', 'AB', 'A', 'B', 'A'];
let count = 0;

for (let i = 0; i < bloodTypes.length; i++) {
    if (bloodTypes[i] == 'A') {
        count++;
    };
};
console.log(`${bloodTypes.length}명 중 A형은 ${count}명`);
```

----
----

# JS_05_객체

## 1. 객체란?
1) 정의
    - 객체, Object : 주체(나, 대상)가 아닌 다른 실체(타인)
    - 주체, Subject : '나/대상'이라는 실체, 중심
2) 생활 속 객체 : 모든 것
    - 어떠한 대상을 정의할 수 있는 모든 것

> 개발자(주체자) 관점에서 컴퓨터 속(객체)를 만든다.

## 2. JS 객체 
### 1) 종류

(1) 클래스 기반의 객체

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;class : 객체를 만들기 위한 틀, 설계도, 자바에서는 필수.

(2) 클래스가 없는 객체

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ } 를 이용

### 2) 배열과 객체의 차이점

(1) 배열

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ ], 인덱스, 자료 순서 有, 목록

(2) 객체

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ }, 속성명, 자료 순서 無, 정보

#### ※ 변수
    배열과 객체 자료를 저장하는 메모리 공간
    ※ 예시
    정보를 만들떼는 객체화하고, 동일한 정보(객체)들을 여러개 묶을 때는 배열
    이 배열은 하나의 변수에 저장하여 사용
    const 제품목록 = [ {name : '콜라', price : 1000} , {name : '사이다', price : 1200} ]


### 3) 객체 선언시 속성(properties) 구성
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;속성명과 자료를 한 쌍(entry)으로 하고, 쉼표로 구분하여 여러 쌍(entry)을 { } 로 감싼다.<br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;속성명은 임의로 작성하되, 특수문자가 포함된 경우 text로 묶는다.<br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;속성명은 자료를 식별하는 목적이므로 중복 불가

### 4) 객체 호출
```js
console.log( 변수명 );                   // 전체 호출
console.log( 변수명.속성명 );             // 특정 속성의 자료 호출 / 접근·도트 연산자 >> 특정 위치로 이동
console.log( 변수명['속성명2'] );         // 속성명에 특수문자 포함 or 변수일 경우 
console.log( Object.keys( 변수명 ) );    // 객체 내 모든 속성명(key)를 배열로 반환
console.log( Object.values( 변수명 ) );  // 객체 내 모든 자료(value)를 배열로 반환
console.log( Object.entries( 변수명 ) ); // 객체 내 모든 entry를 배열로 반환
```

### 5) 객체 내 속성 추가·삭제·수정

- 추가 <br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;변수명.속성명 = 자료<br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;변수명['속성명'] = 자료
- 수정 : (추가와 동일)
- 삭제  <br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;delete 변수명.속성명
- 확인<br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;속성명 in 변수명 >> true or false
### 6) 객체 속성내 자료
변수 값, 리터럴 값, 객체, 배열, 함수 등 모든 자료 대입 가능
```js
let var1 = 10;
const var2 = { 
    props1 : 3.14 , 
    props2 : var1 , 
    props3 : { } , 
    props4 : [] , 
    props5 : function(){} 
    };
```

### 7) 배열과 객체의 조합

- 공통점 : 여러 개의 자료를 하나의 자료로 묶는다.
- 차이점 : 배열-인덱스로 자료를 구분 vs 객체-속성명으로 자료 구분

#### ※ 일반적으로 <br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;서로 다른 의미의 자료를 가질 때는 객체    
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;동일한 자료의 의미를 가질 때는 배열

#### in 연산자
- 객체 내 특정한 속성이 있는지 확인
- 속성명 in 변수명 >> true or false 
```js
console.log( 'props1' in var2 ) ; // true
console.log( 'props6' in var2 ) ; // false
```

----
----

# JS_06_함수

## 1. 함수 Function
### 1) 정의

특정한 {} 안에 미리 정의된 코드

### 2) 목적

미리 정의된 코드를 재사용

### 3) 함수 종류

- 라이브러리 : 미리 만들어진 함수
- 정의함수 : 나(개발자)가 만든 함수
### 4) 함수도 JS에서는 자료형

### 5) JS함수 표현 방법
- 선언적 함수
    선언 키워드를 이용하여 함수를 만드는 방법
    function 함수명(){};

- 익명 함수
    함수명 없이 정의하는 방법
    function (){};

- 화살표(람다식) 함수
    선언키워드와 함수명 없이 정의하는 방법
    ( ) => {}       


### 6) 함수 만드는 방법
function    : 
함수명       : 
()          : 매개변수 (함수 안으로 들어오는 데이터)
        인수   : 들어가는 수
        인자값 : 들어온 수
{}          : 함수가 실행될 때 처리되는 명령어들
return      : 함수가 종료되면서 함수를 호출했던 곳으로 반환되는 값 (필수 X)

### 7) 함수 호출
- JS
    함수명();
    함수명(인수, ...) : ,로 구분하여 정해진 매개변수를 함수에 대입
- HTML
    <마크업 이벤트속성='함수명()'>

```js
// [1] 함수 만들기
function 함수1(){
    console.log(`내가 처음 만든 함수`)
};

// [2] 함수 호출
함수1();

// [3] 간단한 함수 만들기
function 더하기(x , y) {
    console.log( x + y );
    return 10 ; //return 값은 무조건 1개
};

더하기(1, 2); // result = 3
```

## 2. 예제
```js
// 기본 함수 선언 및 호출
// '함수 호출 성공!'이라는 메시지를 콘솔에 출력하는 sayHello라는 이름의 함수를 정의하고, 
// 그 함수를 호출하시오.

function sayHello() {
    console.log('함수 호출 성공!');
};
sayHello();
```
```js
// for 반복문을 포함한 함수
// 임의의 숫자 n을 매개변수로 받아, 
// 1부터 n까지의 숫자를 콘솔에 차례대로 출력하는 printNumbers 함수를 정의하시오.

function printNumbers(n) {
    let print = '';
    for (let i = 1; i <= n; i++) {
        console.log(i);
    };
};
printNumbers(5)
```
```js
// 배열을 매개변수로 전달
// 임의의 이름 들이 담긴 배열을 매개변수로 받아, 
// for 반복문을 사용하여 배열의 모든 요소를 콘솔에 하나씩 출력하는 printFruits 함수를 정의하시오.

let Fruits = ['사과', '수박', '포도', '딸기'];
function printFruits(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    };
};

printFruits(Fruits);

```
```js
// 가장 긴 단어 찾기
// 문자열로 이루어진 배열을 매개변수로 받아, 
// for 반복문을 사용해 가장 긴 단어를 찾아 반환하는 findLongestWord 함수를 만드세요. 
// 아래 words 배열로 테스트해 보세요.

const words = ['apple', 'banana', 'kiwi', 'strawberry'];

function findLongestWord(array) {
  let longest = "";

  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longest.length) {
      longest = words[i];
    };
  };
  return longest;
}
console.log(findLongestWord(words));
```

---
---

# JS_07_dom객체


## 1. dom객체란?
Document Object Model : 문서 객체 모델 
HTML을 객체로 다루기 위한 내장 객체

## 2. 주요 속성

|속성|설명|
|---|---|
|document.write('출력 내용')|HTML에 출력하는 함수|
|document.querySelector('선택자') |HTML에 지정한 선택자를 JS 객체로 반환하는 함수|
|document.querySelectorAll('선택자')|HTML에 지정한 선택자 모두를 JS 객체를 배열로 반환하는 함수|
|dom객체.innerHTML|마크업 내 html을 호출하는 속성<br>ex) div, span, button, table|
|dom객체.value  |value 값을 JS 객체로 가져옴 <br>ex) input, select, textarea etc.|
|dom객체.style |마크업 내 style CSS 요소 대입|
|dom객체.style.css속성명|마크업 내 styel CSS 요소 추가|
|dom객체.classList |마크업 내 적용된 class들을 반환|
| dom객체.classList.add('class명') <br>dom객체.classList.remove('class명')<br>||
|dom객체.classList.toggle('class명')|마크업 내 지정 클래서가 없으면 추가, 있으면 삭제|
| dom객체.classList.contains('class명')|마크업 내 지정 클래스가 있는지 확인 > true/flase|
|dom객체.src||
|dom객체.remove||
|마크업.files[0]|첨부파일의 첫번째 파일 객체를 가져옴<br>`<input type='files'>`<br>[ + 파일객체를 URL 주소로 만들어주는 함수 ]<br>ex) URL.createObjectURL(마크업.files[0])|

## 3.예제
#### 1) 요소 내용 변경하기

id가 'title'인 `<h1>` 요소의 내용을 'DOM 조작 성공!'으로 변경하시오.

(1) 목표 요소     : #title
(2) 사용할 내장 속성/메소드: .innerHTML
(3) 처리할 내용   : 'DOM 조작 성공!' 텍스트로 교체

```html
<h1 id="title">이전 제목</h1>
```
```js
console.log(document.querySelector('#title').innerHTML)
document.querySelector('#title').innerHTML = 'DOM 조작 성공!';
```

#### 2) 사용자 입력값 가져와서 표시하기
id가 'usernameInput'인 `<input>`에 이름을 입력하고 
'확인' 버튼(id: 'submitBtn')을 클릭하면,
id가 'greeting'인 `<p>` 태그에 "안녕하세요, [입력된이름]님!"이라고 표시하시오.

(1) 목표 요소     : #usernameInput, #submitBtn, #greeting
(2) 사용할 내장 속성/메소드:  .value, .innerHTML
(3) 처리할 내용   : 버튼 클릭 시 input의 value를 읽어와 p 태그에 삽입

```html
<input type="text" id="usernameInput" placeholder="이름을 입력하세요">
<button id="submitBtn" onclick="func()">확인</button>
<p id="greeting">결과가 여기에 표시됩니다.</p>
```
```js
function func() {
    console.log('func exe');   

    const userName = document.querySelector('#usernameInput').value;
    console.log(userName);

    document.querySelector('#greeting').innerHTML = `안녕하세요. ${userName} 님!`;
};
```

#### 3) 요소 스타일 동적으로 변경하기
'스타일 변경' 버튼(id: 'styleBtn')을 클릭하면,
id가 'colorBox'인 <div>의 배경색을 'skyblue'로, 글자색을 'white'로 변경하시오.
(1) 목표 요소     : #styleBtn, #colorBox
(2) 사용할 내장 속성/메소드: .style
(3) 처리할 내용   : 버튼 클릭 시 div의 배경색과 글자색 스타일 변경

```html
<button id="styleBtn" onclick="func()">스타일 변경</button>
<div id="colorBox">이 박스의 스타일이 바뀝니다.</div>
```
```js
function func() {
    console.log('func4 exe');
    const colorBox = document.querySelector('#colorBox');
    colorBox.style = "color : white; background : skyblue";
};
```

#### 4) select 에서 선택한 option값 console 출력하기
(1) 목표 요소        : #foodSelect
(2) 사용할 내장 속성/메소드 : .value
(3) 처리할 내용      : select 요소의 값이 변경될 때마다 선택된 option의 value를 콘솔에 출력

```html
<select id="foodSelect" onchange="func()">
    <option value="">-- 음식을 선택하세요 --</option>
    <option value="pizza">피자</option>
    <option value="chicken">치킨</option>
    <option value="sushi">초밥</option>
</select>
```
```js
function func() {
    console.log('func exe');
    const foodSelect = document.querySelector('#foodSelect').value;
    console.log(foodSelect);
};
```

# JS_08_날짜/시간 관련 객체
## 1. 시간 반환 객체

new Date() = 현재 시스템(PC의 날짜와 시간을 반환)

## 2. 사용방법

### 1) 년도 
let year = new Date().getFullYear()
### 2) 달
let month = new Date().getMonth() + 1 

1월이 [0]부터 시작하므로 +1 필수
month = month > 9 ? month : `0${month}`     
>> 1~9월 일 경우 앞에 0이 표시되어 보이게

### 3)일
let day = new Date().getDate()        
getDate(OO일)

### 4)요일 
getDay (일요일 0 ~ 토요일 6), 

  let pdate = `${year}-${month}-${day}`


```js
let year = new Date().getFullYear() // 현재 연도 반환함수

let month = new Date().getMonth() + 1 // 1월이 0부터 시작하므로 +1 필수
month = month > 9 ? month : `0${month}` // 1~9월 일 경우 앞에 0이 표시되어 보이게

let day = new Date().getDate()        // getDay(요일 1~7), getDate(OO일)
day = day > 9 > day : `0${day}`

let pdate = `${year}-${month}-${day}`

let hour = today.getHours();  //시

let min = today.getMinutes(); //분

let sec = today.getSeconds(); //초
```

---
---

# JS_9_웹스토리지

## 1. 종류
###  sessionStorage 
- 브라우저가 실행되는 동안만 저장되며 브라우저를 닫으면 데이터가 사라짐
- ex) 일회성 정보, 이전 페이지 기록
### localStorage 
- 사용자가 직접 삭제하거나 브라우저 캐시, 쿠키 등을 청소하지 않는 한 영구 저장
- ex) 설정 정보, 팝업창(다시 보지 않기), 테마, 자동로그인 etc

## 2. 사용법
### 1) 자료 대입
sessionStorage.setItem( '속성명/key' , '값/value' ); 
### 2) 자료 호출
sessionStorage.getItem( '속성명/key' );
속성이 존재하지 않으면 null, 존재하면 value를 반환
### 3) 자료 삭제
sessionStorage.removeItem( '속성명/key' );
    속성만 삭제

localStorage.clear(); 
    전체삭제

## 3. 확인 방법
- 웹 브라우저 F12 > application tab > local/sesssion strorage
- 도메인 별로 웹스토리지가 할당

## 4. JSON (JavaScript Object Notation)
자바스크립트 객체 문법의 형식

- 자바 객체를 문자열 타입이지만, 객체형식(모양)으로 표현한 것
    ex) 3 : 숫자타입, 숫자모양 vs "3" : 문자열타입, 숫자모양
- { age : 40 } 객체타입, 객체모양 vs "{age:40}" 문자열타입, 객체모양

### 1) Storage, HTTP 
Storage, HTTP은 객체지향이 아님
문자열과 바이트만 전송 가능함.
따라서, [객체 > 문자열] >> [문자열 > 객체] 로의 타입변환이 필요

### 2) 사용법
    (1) JSON.stringify (자료);  : 해당 자료를 문자열 타입으로 반환
    (2) JSON.parse(자료);       : 해당 자료를 JS 타입으로 반환


## 5. 예제

#### 예제 1. localStorage에 데이터 저장하고 불러오기
localStorage에 <input> 으로 입력받은 사용자의 아이디를 저장하고, 
페이지를 새로고침해도 그 값이 유지되는 것을 확인하시오. 
```html
<input id="userInput" type="text" placeholder="ID를 입력하세요."/>
<button onclick="func1()"> 예제1 버튼</button>
```
```js
function func1(){
    console.log('func1 exe');

    let userInput = document.querySelector('#userInput');
    let user = userInput.value
    console.log(user);

    localStorage.setItem('user', user);
    console.log(localStorage)
};
```
#### 예제 2. localStorage에 객체 저장하기 (JSON.stringify)
아래 사용자의 환경 설정(객체)을 문자열로 변환하여 localStorage에 저장 하시오. 
```js
const userSettings = { theme: 'dark', notifications: true, language: 'ko' };
console.log(JSON.stringify(userSettings));

const data = JSON.stringify(userSettings);
localStorage.setItem("data", data)

console.log(localStorage)
```

#### 예제 3: localStorage에서 객체 불러오기 (JSON.parse)
localStorage에 문자열로 저장된 사용자 설정(userSettings) 을 다시 객체로 변환하여 사용 하시오. 
```js
let getData = JSON.parse(localStorage.getItem('data'));
console.log(getData);
```

#### 예제 4: 데이터 삭제하기 (removeItem, clear)
스토리지에 저장된 특정 데이터(userSettings) 또는 전체 데이터를 삭제 하시오. 
```js
localStorage.removeItem("data");
// localStorage.clear();

console.log(localStorage)
```

#### 5) 예제 5: 방문 횟수 카운터 만들기
페이지가 로드될 때마다 sessionStorage를 사용하여 방문 횟수를 1씩 증가시키시오. 
현재 방문 횟수를 id="visitCount"인 span 태그에 "이번 세션에서 O번째 방문입니다." 형식으로 출력하시오. 
(페이지를 새로고침하면 숫자가 올라가고, 브라우저 탭을 닫았다 다시 열면 1로 초기화되어야 합니다.) 
```html
<span id="visitCount"></span>
```
```js
// 1. 기존 웹 스토리지 불러오기
let visit = sessionStorage.getItem('visit');
console.log(visit);

// 2. 새로운 웹스토리지에 값 저장
if ( visit == null ) {                   // 2. 속성명 X = 최초방문 = 속성명을 만들기 
    sessionStorage.setItem('visit', 1);     
} else{                                  // 3. 이미 존재한다면
    visit = Number(visit) + 1 ;
    sessionStorage.setItem('visit', visit);
}

document.querySelector("#visitCount").innerHTML = `이번 세션에서 ${visit}번째 방문입니다. `
```

# JS_10_Interval, Query String

## 1. Interval
### 1) 정의
시간적인 간격에 따라 특정 함수 실행
### 2) 사용법   
#### (1) setInterval( 함수명 , millisec)
  - 특정 함수를 millisec 마다 실행
  - 함수명 : () 소괄호 없이
  - m sec 

    1 msec = 10^-3 sec
    1 sec = 10^3 msec
    1min = 60 * 10^3 msec

#### (2) clearInterval (interval 객체)
- 중지할 interval 객체를 대입

```html
<h3 id='box1'></h3>

<h3 id='box2'></h3>

<h3 id='box3'></h3>
<button onclick="타이머시작()"> start </button>
<button onclick="타이머중지()"> stop </button>
```

```js
// [1] 1초 간격에 따른 증가함수 반복 실행 ===================
let value = 0;
function 증가함수() {
    value++;

    const box1 = document.querySelector('#box1');
    let html = value;
    box1.innerHTML = html;
};
setInterval(증가함수, 1000);

//[2] 시계 ===============================================
function 시계함수() {
    //현재 시간 구하기
    let today = new Date();
    let hour = today.getHours();  //시
    let min = today.getMinutes(); //분
    let sec = today.getSeconds(); //초

    const box2 = document.querySelector('#box2');
    let html = `${hour} : ${min} : ${sec}`;
    box2.innerHTML = html;
};
setInterval(시계함수,1000)

//[3] 타이머 ==============================================
let time = 0;
let timerID; // 추후, interval 객체 저장
function 시간증가(){
    time++;
    document.querySelector("#box3").innerHTML = time;
};
function 타이머시작(){
    timerID = setInterval(시간증가,1000)
};

function 타이머중지(){
    clearInterval(timerID)
};
```

## 2. 쿼리스트링(Query String)
### 1) 정의 
URL 후단에 매개변수를 기재하고 이를 통해 해당 데이터를 출력하는 방법
### 2) 형태
URL?변수명=값
페이지 이동(요청)간의 데이터를 전달하기 위해 사용
### 3) 사용법
#### (1) 이동방법
html : `<a href='이동경로?변수명=값&변수명=값'>`
js : `location.href='이동경로?변수명=값&변수명=값'`
#### (2) URL 상의 매개변수를 가져오는 방법
[1] new URLSearchParams(location.search).get(URL상의 변수명);
현재 URL 경로를 반환하는 객체

[2] let url = new URLSearchParams(location.search)
let 변수명 = url.get('변수명')

    ※ location.href VS location.search
    href : URL 전체를 가져옴
    search : URL에서 ? 뒤의 query string만 가져옴

```html
<h3>쿼리스트링</h3>
<a href="1_queryString.html"> 링크1 </a> <br/>
<a href="1_queryString.html?param=3"> 링크2(쿼리스트링) </a> ?param=3<br/>
<a href="1_queryString.html?pcode=10&page=3"> 링크3(변수2개) </a> <br/>

<button onclick="이동함수()">링크버튼4</button>
```
```js
//[1]
let url = new URLSearchParams(location.search);
console.log(url);

//[2]
let param = url.get('param');
console.log(param);

//[3]
let url3 = new URLSearchParams(location.search);
let pcode = url3.get('pcode')
console.log(pcode)

let page = url3.get('page')
console.log(page)

//[4] JS에서 페이지를 요청하는 방법
function 이동함수(){
    location.href='1_queryString.html?sort=1&code=8';
}
let url4 = new URLSearchParams(location.search)
let sort = url4.get('sort')
console.log(sort)
let code = url4.get('code')
console.log(code)
```
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

    [ex]
    1. 숫자형(Number)           : 10(정수), 3.14(실수)
    2. 문자열(String)           : "", ''
    3. 불리언(Boolean)          : true, false
    4. 배열(Array)              : [ 자료, 자료, 자료, ]
    5. 객체(Object)             : { 속성명 : 자료, 속성명 : 자료 } : 이름(속성명)과 자료를 한 쌍으로
    6. 특수 : undefined, null   : 
        undefined-자료가 할당되지 않은 상태 / null-자료가 존재하지 않음

### 1. 숫자형
    정수 : 소수점이 없는 숫자
    실수 : 소수점이 있는 숫자
            실수는 정밀한 계산이 불가 : 부동소수점 >> 별도의 정밀한 함수가 필요

### 2. 문자열 
    '' or ""로 묶음
    이스케이프 문자(특수기호)
        \ddd 8진수
        \xddd 16진수
### 3. 논리형 boolean 
    true / false
### 4. 배열 array
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

### 5. undefined / null
    undefined : 데이터의 자료형이 정의되지 않은 상태
    null : 데이터 값이 유효하지 않은 상태

### 6. 템플릿 리터널
    백틱( `` ) 이용 >> ` ${} ${} `
    문자와 변수, 식을 섞어서 하나의 문자열을 만드는 표현 형식

### 7. 키워드 : 
    미리 정해진 기능이 포함된 특수문자/문자열
    [], {}, console, Number, String, if, for .etc

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
---


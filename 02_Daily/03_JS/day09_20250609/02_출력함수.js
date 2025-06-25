/*
출력함수

HTML과 CSS와 달리 JS는 프로그래밍 언어
명령이나 연산을 기계와 소통하는 언어
*/

10 // 숫자 10 이라는 리터럴 값이자 숫자 자료형
3.14 // 숫자 3.14 라는 리터럴 값이자 숫자 자료형
"안녕하세요" // 안녕하세요 라는 리터럴 값이자 문자형 자료형
true // true 라는 리터럴 값이자 불리언 자료형
[ 10, 3.14, "안녕하세요", true] //[]안에 여러 개의 리터럴 값을 포함하는 배열 자료형 

/*
1. console.log(출력할 자료)      : F12 > consol tab에 출력
*/
console.log( 10 )
console.log( "안녕하세요" )

// 2. alert( 출력할 자료 )       : 브라우저 알림(alert) 창으로 출력
alert( 3.14 )
alert( true )

// 3. document.write( HTML )    : document(html문서).wirte : html 문서에 출력
document.write( "<h3> JS에서 작성한 HTML 입니다. </h3>" )

// 4. document.querySelector( "선택자" ).innerHTML : 특정한 선택자(마크업, class, id)를 출력한다.
//  .innerHTML : <마크업> inner(사이) </마크업> : 마크업 사이의 

document.querySelector( "h3" ).innerHTML = "<h3> 특정한 선택자 HTML을 작성합니다. </h3>"

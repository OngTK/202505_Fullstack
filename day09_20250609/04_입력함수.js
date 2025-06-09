/*
입력함수
*/
/* 1. confirm() : 브라우저에 확인/취소 알림창을 발생
                  확인=true / 최소=flase / 반환값, 리턴값, 결과값*/
confirm('(1)입력 해주세요. ')

// 2. prompt() : 브라우저에 텍스트 입력 알림창
prompt("(2) 입력 해주세요.")

// 3. document.querySlector("선택자").innerHTML
//              : 특정한 선택자의 마크업 텍스트 호출

// 4. document.querySlector("선택자").value
//              : 특정한 선택자의 value 속성값 호출


// [ 변수와 입력함수 ] : 입력받은 결과물을 변수에 저장
// 1. let 변수명 = confirm()

let result1 = confirm("확인 또는 취소를 클릭하세요.")
console.log(result1)

// 2. let 변수명 = prompt()
let result2 = prompt("사용자 전화번호를 입력하세요.")
console.log(result2)  
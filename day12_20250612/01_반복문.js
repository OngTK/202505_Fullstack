/*
[ 반복문 ]
    특정한 조건의 노리 결과가 true 일 때 특정한 명령어들을 반복처리
    for (반복 변수의 초기값 ; 조건문 ; 증감식 ) { 반복되는 코드 ;}

*/


/*
연습할때, 
1. for 안쓰고 그냥 해보기
2. for 써보기!
*/
//[1] '안녕하세요' 문자열 5번 출력하기
// 1.1.
console.log("안녕하세요.");
console.log("안녕하세요.");
console.log("안녕하세요.");
console.log("안녕하세요.");
console.log("안녕하세요.");

// 1.2.
for (let 반복변수 = 1; 반복변수 <= 5; 반복변수++) {
    console.log(반복변수);   
}

//[2] 1~5까지 누적합계 구하기
//2.1.
let 총합계 = 0;
총합계 = 총합계 + 1 ;
총합계 = 총합계 + 2 ;
총합계 = 총합계 + 3 ;
총합계 = 총합계 + 4 ;
총합계 = 총합계 + 5 ;
console.log(총합계)

//2.2.
let sum = 0 ;
for ( let i = 1; i <=5 ; i++) {
    sum = sum + i
}
console.log(sum)

//[3] 구구단
//3.1.
console.log( `2 X 1 = ${2*1}`);
console.log( `2 X 2 = ${2*2}`);
console.log( `2 X 3 = ${2*3}`);
console.log( `2 X 4 = ${2*4}`);
console.log( `2 X 5 = ${2*5}`);
console.log( `2 X 6 = ${2*6}`);
console.log( `2 X 7 = ${2*7}`);
console.log( `2 X 8 = ${2*8}`);
console.log( `2 X 9 = ${2*9}`);

//3.2.
for (let n = 1 ; n <=9 ; n++) {
    console.log(`2 X ${n} = ${2 * n }`);
}

//[4] 3개의 정수를 입력받아 배열에 저장
//4.1. 
/*
let numList41 = [];
let num41 = prompt('정수1');
numList41.push(num41) ;
let num42 = prompt('정수2');
numList41.push(num42) ;
let num43 = prompt('정수3');
numList41.push(num43) ;
console.log(numList41)
*/

//4.2.
/*
let numList42 = [];
for (let l = 1 ; l <= 3 ; l++) {
    num00 = prompt(`정수 ${l}`)
    numList42.push(num00)
}
console.log(numList42)
*/
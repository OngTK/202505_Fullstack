/*
[ for ]
    1. 형태
        for ( 초기값 ; 조건문 ; 증감식) {실행문}
    2. 문법
        2.1. 초기값 : 반복할 때 반복의 카운터/횟수를 체크하는 변수의 처음값
        2.2. 조건문 : 반복 실행문이 실행되는 조건으로 true 이면 { } 실행, 아니면 종료
        2.3. 증감식 : 반복 변수의 증가 혹은 감소 변화 연산식
        2.4. 실행문 : 조건이 true일때 반복실행되는 코드
    3. 순서
        1. 초기값 >> 조건문 >(true)> 실행문 > 증감식 > 
                    조건문 >(true)> 실행문 > 증감식 >
                    ....
                    조건문 >(false)> 종료
    4. 배열과 반복문의 관계
        4.1. 배열의 인덱스는 순차적인 순서 번호가 존재
        4.2. 배열의 길이 : 변수명.lenght
        4.3. 배열의 마지막 인데스 : 변수명.lenght-1
*/

// 유느님이 계단을 1칸씩 총 10칸을 오른다.
/*for( let 유느님 = 1 ; 유느님 <= 10 ; 유느님++ ) {
    console.log
}*/

//[1] 배열 데이터를 하나씩 조회.
let 과일상자 = ["사과", "포도", "딸기"];
//1.1.
console.log(과일상자[0]);
console.log(과일상자[1]);
console.log(과일상자[2]);
//1.2.
for (i = 0; i <= 2; i++) {
    console.log(과일상자[i]);
};

for (i = 0; i <= 과일상자.length - 1; i++) {
    console.log(과일상자[i]);
};

//[2] 압력받은 데이터들을 하나의 배열에 추가/저장하시오.

let list1 = [];
for (let count = 1; count <= 3; count++) {
    let data1 = prompt("데이터를 입력하시오");
    list1.push(data1);
}
console.log(list1)

// 생각1 : 상기의 list를 ul 마크업의 li 요소 하나씩 출력하시오
/* 1.1
let html = `<ul>
                <li> ${ list1[0] } </li>
                <li> ${ list1[1] }</li>
                <li> ${ list1[2]}</li>
            </ul>`
document.write(html)*/
/*1.2*/
let html = `<ul>`
for (let i = 0; i <= 2; i++) {
    html += `<li> ${list1[i]} </li>`}
html +=`</ul>` 

document.write(html)

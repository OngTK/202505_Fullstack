// [1]
for (let i = 1; i <= 3; i++) {
    console.log(i);
}

// [2]
for (let i = 1; i <= 2; i++) {
    console.log(i);
    for (let h = 1; h <= 3; h++) {
        console.log(h);
    }
};

// 구구단

for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        console.log(`${i} X ${j} = ${i * j}`);
    };
}

// 별 찍기(트리??)
let output = '';
for (let i = 1; i <= 5; i++) {
    for (j = 1; j <= i; j++) {
        output += "*";
    }
    output += "\n";
}
console.log(output)


/* [ 반복문 제어 키워드 ]
    1. continue 
        가장 가까운 for문의 증감식으로 이동
        for () {
            if (true) {continue;}; >> true일 경우, 아래 코드를 실행하지 않고 for 문의 증감식으로 이동!!
            console.log;
        };

    2. break
        가장 가까운 for문의 종료
*/

// continue ex)
// 1~5, 단, 3은 출력하지 않는다.
for (let i = 1; i <= 5; i++) {
    if (i == 3) { continue; }; // i가 3이면, 밑에 코드는 실행하지 않고 위에 증감식으로 이동!!
    console.log(i);
}

// break ex)
// 1~10, 누적합계. 단, 누적합계 10 초과시 종료
let sum = 0;
for (i = 1; i <= 10; i++) {
    sum += i;
    if (sum > 10) { break; }     // 반복문 자체를 종료
}
console.log(sum)

/*
[ 무한 루프 ]
    for( ; ; ){ }
*/

// for( ; ; ){ console.log("무한출력")} ; 

/*생각! : 1~45 사이의 6개 정수를 입력받아 하나의 배열에 저장 하시오.
조건 
    - 1~45사이
    - 중복 값 제외
    - 총 6개만 저장
*/

let numList = []; // 배열 저장 선언
// 무한루프로 반복적으로 입력받기
for (; ;) {
    let num = prompt("로또 번호 입력 : ");
    if (num < 1 || num > 45) {
        console.log('[경고] 1~45 사이 수만 입력해주세요.')
        continue;
    };
    if (numList.indexOf(num) != -1) {
        console.log('[경고] 이미 입력한 수 입니다.')
        continue;
    } ;
    numList.push(num)    
    if (numList.length == 6) { 
        break; 
    }; // 배열의 길이가 6개가 되면 종료
} // for end 
console.log(numList)



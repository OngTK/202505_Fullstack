// Q1. 변수 x가 10보다 크고 20보다 작을 때 변수 x를 출력하는 조건식을 완성하라
/*
let x = prompt("변수를 입력하세요.");
if (x > 10 && x<20 ) {
    console.log(x);
} else {
    console.log("범위에 해당하지 않습니다.");
}
*/

// Q2. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
/*for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    };
};
*/

// Q3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.
/*for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        console.log(toString(i));
    };
};
*/

// 구구단 전체 출력

/*
for (i = 1 ; i <= 9 ; i++) {
    for (n = 1 ; n <= 9 ; n++) {
        console.log(`${i} X ${n} = ${i*n}`)
    }
}
*/
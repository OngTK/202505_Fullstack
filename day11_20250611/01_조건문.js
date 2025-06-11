// 527page

/*
[ 조건문 ]
    특정 조건에 따라 명령을 순서대로 처리
    복잡한 조건 처리 가능
    if 내에서 선언 가능
    중첩 가능

    if (조건) {
        true; }
    else {
        false; }

    =======
    if (조건1) {
        true; }
    elseif (조건2) {
        true; }
    elseif (조건3) {
        true; }
    ....
    else { flase; }

 */

/* ex) 지갑에 돈의 10,000원 이상이면 택시, 아니면 걸어간다. 
    
    if ( money >= 10000 ){
        console.log("택시");}
    else { 
            console.log("도보"); }
*/

// 1. if(조건) 참 일때
if ( 10 > 3 ) console.log("10은 3보다 크다");

if ( 10 > 20 ) console.log("10은 20보다 크다"); //false 이므로 출력되지 않음

// 2. 명령어 코드가 2개 이상일 때, {}로 묶음
if ( 10 > 20 ) console.log("10은 20보다 크다"); console.log("10은 20보다 크다");
if ( 10 > 20 ) {
    console.log("10은 20보다 크다"); 
    console.log("10은 20보다 크다");
}

// 3. if~else
if ( 10 > 3 ) {
    console.log( "10은 3보다 크다" );
} else {
    console.log( "10은 3보다 작다" );
};


// 4. if~elseif~elseif~... : 다수조건
if (10 > 20) { console.log( "10은 20보다 크다" );} 
else if( 10 > 15 ) { console.log( "10은 15보다 크다" );} 
else if ( 10 > 10 ) { console.log( "10은 10보다 크다" ); } 
else {console.log( "그 외다" );}     
    
// 5. 중첩if
let 성별 = "남";
let 점수 = "80";

if (성별 == "남") {
    if (점수 >= 90) {
        console.log("남자 우수")} 
    else {
        console.log("남자")}
} else { 
    if ( 점수 >= 90 ) { 
        console.log("여자 우수")}
    else {
        console.log("여자")}
}
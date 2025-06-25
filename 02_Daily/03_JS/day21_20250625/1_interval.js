/*
[ interval ]
    1. 정의 : 시간적인 간격에 따라 특정 함수 실행
    2. 사용법   
        (1) setInterval( 함수명 , m sec)
            - 함수명 : () 소괄호 없이
            - m sec 
                1 msec = 10^-3 sec
                1 sec = 10^3 msec
                1min = 60 * 10^3 msec
        (2) clearInterval( interval 객체 )
            - 중지할 interval 객체를 대입
*/
            
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

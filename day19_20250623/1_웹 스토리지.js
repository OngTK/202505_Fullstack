/*
[웹스토리지]
    - 웹 브라우저 F12 > application tab > local/sesssion strorage
    - 도메인 별로 웹스토리지가 할당

    1. 종류
        (1) sessionStorage : 브라우저가 실행되는 동안에만 저장, 브라우저를 닫으면 데이터가 사라짐
            - 일회성 정보, 이전 페이지 기록
        (2) localStorage : 사용자가 직접 삭제하거나 브라우저 캐시, 쿠키 등을 청소하지 않는 한 영구 저장
            - 설정 정보, 팝업창(다시 보지 않기), 테마, 자동로그인 etc
    2. 사용법
        sessionStorage 객체
        localStorage 객체

        (1) 자료 대입
            sessionStorage.setItem( '속성명/key' , '값/value' ); 
        (2) 자료 호출
            sessionStorage.getItem ( '속성명/key' );
                속성이 존재하지 않으면, null / 존재하면 value를 반환
        (3) 자료 삭제
            sessionStorage.removeItem( '속성명/key' );
                속성만 삭제
            localStorage.clear(); 
                전체삭제
        * 속성명/key : only String
        * value : 리터럴 자료만 가능 / 객체, 배열은 불가능
         
    [JSON]
        자바스크립트 객체 문법의 형식
        JavaScript Object Notation
            - 자바객체를 문자열타입이지만 객체형식(모양)으로 표현한 것
            - 3 : 숫자타입, 숫자모양 vs "3" : 문자열타입, 숫자모양
            - { age : 40 } 객체타입, 객체모양 vs "{age:40}" 문자열타입, 객체모양
            - Storage, HTTP  : 객체지향 X, 문자열과 바이트만 전송,
                                따라서 [객체 > 문자열] >> [문자열 > 객체] 로의 타입변환이 필요

        1. 사용법
            (1) JSON.stringify (자료);  : 해당 자료를 문자열 타입으로 반환
            (2) JSON.parse(자료);       : 해당 자료를 JS 타입으로 반환

*/
//[1] 웹스토리지를 제어하는 객체
console.log( sessionStorage );   
console.log( localStorage );    // 현재 웹스토리지에 저장된 자료를 갖는 객체 반환

//[2] 웹스토리지에 자료 대입
sessionStorage.setItem( 'name' , '유재석' ); //( 속성명 , 값 )
localStorage.setItem('age' , 40);

//[3] 웹스토리지에서 자료 호출
console.log(sessionStorage.getItem('name'));
console.log(localStorage.getItem('age'));
console.log(localStorage.getItem('phone')); // 존재하지 않은 속성명 >> null

//[4] 웹스토리지의 자료 삭제
sessionStorage.removeItem('name');
console.log(sessionStorage);
localStorage.clear();
console.log(localStorage);

//[5] 웹스토리지에 JSON 객체 저장
// sessionStorage.setItem( 'm1', ['유재석', 40]);   // 잘못된 예 : []없이 '유재석',40 을 하나의 문자로 저장
sessionStorage.setItem( 'm1', JSON.stringify( ['유재석', 40] )); // []를 포함한 문자열로 저장
localStorage.setItem( 'm2', JSON.stringify( {name : '유재석', age : 40} ));

//[6] 웹스토리에서 JSON 객체 호출
// console.log(sessionStorage.getItem( 'm1' )); // 잘못된 예 :  []를 문자열로 반환
console.log(JSON.parse(sessionStorage.getItem( 'm1' )));

let data = localStorage.getItem('m2');
let jsonData = JSON.parse(data)
console.log( jsonData )
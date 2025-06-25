// [1] 객체 선언
{ }

// [2] 선언한 객체를 변수에 대입
const obj1 = {};
console.log( obj1 );

// [3] 객체 선언시 속성(properties) 구성
//      속성명과 자료를 한 쌍(entry)으로 하고, 쉼표로 구분하여 여러 쌍(entry)을 { } 로 감싼다.
//      속성명은 임의로 작성하되, 특수문자가 포함된 경우 text로 묶는다.
//      속성명은 자료를 식별하는 목적이므로 중복 불가
const obj2 = { 속성명1 : 10 , "속성명2" : "Hello"};
console.log( obj2 );

// [4] 객체 호출
console.log( obj2 );            // 변수명          : 전체 호출
console.log( obj2.속성명1 );     // 변수명.속성명    : 특정 속성의 자료 호출 / 접근·도트 연산자 >> 특정 위치로 이동
console.log( obj2['속성명2'] );  // 변수명['속성명'] : 속성명에 특수문자 포함 or 변수일 경우 

console.log( Object.keys( obj2 ) );      // Object.keys(변수명)    : 객체 내 모든 속성명(key)를 배열로 반환
console.log( Object.values( obj2 ) );    // Object.values(변수명)  : 객체 내 모든 자료(value)를 배열로 반환
console.log( Object.entries( obj2 ) );   // object.entries(변수명) : 갹체 내 모든 entry를 배열로 반환

// [5] 객체 내 속성 추가·삭제·수정
//          추가 : 변수명.속성명 = 자료 / 변수명['속성명'] = 자료
obj2.속성명3 = true;
console.log(obj2);
//          수정 : (동일)
obj2.속성명1 = 20;
console.log( obj2 );
//          삭제 : delete 변수명.속성명
delete obj2.속성명3 ; 
console.log( obj2) ; 

// [6] 객체 속성내 자료
//      변수 값, 리터럴 값, 객체, 배열, 함수 등 모든 자료 대입 가능
let var1 = 10;
const var2 = { 
    props1 : 3.14 , 
    props2 : var1 , 
    props3 : { } , 
    props4 : [] , 
    props5 : function(){} };

// [7] in 연산자
//      객체 내 특정한 속성이 있는지 확인
//      속성명 in 변수명 >> true or false 
console.log( 'props1' in var2 ) ; // true
console.log( 'props6' in var2 ) ; // false

// [8] 배열과 객체의 조합
//      공통점 : 여러 개의 자료를 하나의 자료로 묶는다.
//      차이점 : 배열-인덱스로 자료를 구분 vs 객체-속성명으로 자료 구분
//          동일한 자료의 의미를 가질 때는 배열, 서로 다른 의미의 자료를 가질 때는 객체

// ['콜라', 1000] >> 제품명과 가격이라는 서로 다른 의미 >> 배열보다는 객체를 권장.
const 제품 =  {'제품명' : '콜라' , '가격' : 1000 };

//{ {제품정보1} , {제품정보2} ... } >> 같은 제품 정보의 나열이므로 배열을 권장.
const 제품목록 = [ {'제품명' : '콜라' , '가격' : 1000} , {'제품명' : '사이다' , '가격' : 1500} ];

// + 반복문 : 변수가 가지는(참조하는) 정보를 찾아가기
// 제품목록(변수) >> 요소(배열) >> 속성값(객체)
for (let i = 0 ; i < 제품목록.length ; i++) {
    const product = 제품목록[i] ; //i번째의 객체
    console.log( product.제품명 );
    console.log( product['가격'] );
}
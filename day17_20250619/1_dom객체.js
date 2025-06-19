/*
객체 : 속성(Property)와 함수(Function)를 하나로 묶은 자료
    - 변수명.속성명   : 객체내 속성값 호출
    - 변수명.속성명() : 객체내 함수 호출
        console.log()    : consloe 객체 내의 log 함수 호출
        document.write() : document 객체 내의 write 함수 호출
[ dom 객체 ]
    dom 객체 : 
        - JS 내장 객체 
        1. 정의
            Document Object Model : 문서 객체 모델 
            HTML을 객체로 다루기 위한 내장 객체
        2. 내장 객체
            document
        3. 주요 속성
            (1) document.write('출력 내용')         : HTML에 출력하는 함수
            (2) document.querySelector('선택자')    : HTML에 지정한 선택자를 JS 객체로 반환하는 함수
                    * 선택자 : 마크업명 / .class명 / #ID명
            (3) document.querySelectorAll('선택자') : HTML에 지정한 선택자 모두를 JS 객체를 배열로 반환하는 함수
            (4) dom객체.innerHTML                   : 마크업 내 html을 호출하는 속성
                    <마크업> innerHTML <마크업>
            (5) dom객체.value                       : value 값을 JS 객체로 가져옴
                    <마크업 value=""> 
                    ex) input, select, textarea etc.
            (6) dom객체.style                       : 마크업 내 style CSS 요소 대입
            (7) dom객체.style.css속성명              : 마크업 내 styel CSS 요소 추가
            (8) dom객체.classList                   : 마크업 내 적용된 class들을 반환
                    dom객체.classList.add('class명')
                    dom객체.classList.remove('class명')
                    dom객체.classList.toggle('class명')   : 마크업 내 지정 클래서가 없으면 추가, 있으면 삭제
                    dom객체.classList.contains('class명') : 마크업 내 지정 클래스가 있는지 확인 > true/flase

*/
// [0]
console.log(document); // HTML 마크업 전체 

//[1] 
document.write('내장객체 함수 실행');

//[2]
const div = document.querySelector('div');  //div 마크업을 JS 객체로 반환/가져왔으므로 변수에 저장
console.log(div);

const box2 = document.querySelector('.box2');
console.log(box2);

const box3 = document.querySelector('#box3');
console.log(box3);

//[3]
const divArray = document.querySelectorAll('div')
console.log(divArray);

//[4]
const div2 = document.querySelector('div');
const html = div.innerHTML;
console.log(html);

//[5]
function func1() {
    // 1. 함수 실행 test
    console.log('---func1 exe----');

    // 2. input 마크업을 js dom객체로 가져오기
    const myInput = document.querySelector('.myInput');
    console.log(myInput);

    // 3. 가져온 JS dom객체 내 value 속성값 가져오기
    const text = myInput.value;
    console.log(text);
};

[]
//함수가 실행되면 innerHTML에 JS에서 작성한 text를 출력
function func2() {
    console.log('---func2 exe---');

    // title class의 inner에 'text'의 내용을 입력
    document.querySelector('.title').innerHTML = 'JS에서 작성한 내용';
};
//[6]
// CSS 작업하기
function func3() {
    console.log('---- func3 exe ----')
    const title2 = document.querySelector('.title2');

    // .style 속성
    title2.style = 'color : red; font-size : 8px;';

    //[8]
    title2.classList.toggle('myStyle')
};

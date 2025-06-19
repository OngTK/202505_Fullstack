/*예제 1: 요소 내용 변경하기======================================*/
// id가 'title'인 <h1> 요소의 내용을 'DOM 조작 성공!'으로 변경하시오.
// (1) 목표 요소     : #title
// (2) 사용할 내장 속성/메소드: .innerHTML
// (3) 처리할 내용   : 'DOM 조작 성공!' 텍스트로 교체

console.log(document.querySelector('#title').innerHTML)
document.querySelector('#title').innerHTML = 'DOM 조작 성공!';

/*예제 2: 사용자 입력값 가져와서 표시하기======================================*/
// id가 'usernameInput'인 <input>에 이름을 입력하고 
// '확인' 버튼(id: 'submitBtn')을 클릭하면,
// id가 'greeting'인 <p> 태그에 "안녕하세요, [입력된이름]님!"이라고 표시하시오.
// (1) 목표 요소     : #usernameInput, #submitBtn, #greeting
// (2) 사용할 내장 속성/메소드:  .value, .innerHTML
// (3) 처리할 내용   : 버튼 클릭 시 input의 value를 읽어와 p 태그에 삽입

function func2() {
    console.log('func2 exe');

    const userName = document.querySelector('#usernameInput').value;
    console.log(userName);

    document.querySelector('#greeting').innerHTML = `안녕하세요. ${userName} 님!`;
};

/*예제 3: 요소 스타일 동적으로 변경하기======================================*/
// '스타일 변경' 버튼(id: 'styleBtn')을 클릭하면,
// id가 'colorBox'인 <div>의 배경색을 'skyblue'로, 글자색을 'white'로 변경하시오.
// (1) 목표 요소     : #styleBtn, #colorBox
// (2) 사용할 내장 속성/메소드: .style
// (3) 처리할 내용   : 버튼 클릭 시 div의 배경색과 글자색 스타일 변경

function func3() {
    console.log('func4 exe');
    const colorBox = document.querySelector('#colorBox');
    colorBox.style = "color : white; background : skyblue";
};

/*예제 4: CSS 클래스 토글하기 (다크 모드 예시)======================================*/
// '테마 변경' 버튼(id: 'themeBtn')을 클릭할 때마다 
// <body> 태그에 'dark-mode' 클래스를 추가하거나 제거(토글)하시오.
// (1) 목표 요소     : body, #themeBtn
// (2) 사용할 내장 속성/메소드: .classList.toggle()

function func4() {
    console.log('func4 exe');
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');
};

/*예제 5: 특정 HTML 요소 제거하기======================================*/
// '박스 삭제' 버튼(id: 'removeBtn')을 클릭하면, 
// id가 'targetBox'인 <div> 요소를 문서에서 제거하시오.
// (1) 목표 요소     : #removeBtn, #targetBox
// (2) 사용할 내장 속성/메소드:  .remove()
// (3) 처리할 내용   : 버튼 클릭 시 #targetBox 요소를 DOM에서 제거

function func5() {
    console.log('func5 exe');
    const targetBox = document.querySelector('#targetBox');
    targetBox.remove();
};

/*예제 6: 여러 요소에 동일한 작업 반복하기======================================*/
// 클래스가 'item'인 모든 <p> 요소의 글자색을 'green'으로, 
// 글자 두께를 'bold'로 변경하시오.
// (1) 목표 요소     : .item (모든 요소)
// (2) 사용할 내장 속성/메소드: 
//      .querySelectorAll(), for...of 반복문, .style
// (3) 처리할 내용   : 모든 .item 요소를 순회하며 스타일 변경

const item = document.querySelectorAll('.item')
console.log(item);
for (let i = 0; i < item.length; i++) {
    console.log(item[i]);
    item[i].style = "color : green; font-weight:bold";
};

/*예제 7: 이미지 소스(src) 변경하기 , https://placehold.co/ ======================================*/
// '이미지 변경' 버튼(id: 'changeImgBtn')을 클릭하면,
// id가 'mainImage'인 <img> 요소의 src 속성을 
// 'https://placehold.co/600x400/red/white'로 변경하시오.
// (1) 목표 요소     : #changeImgBtn, #mainImage
// (2) 사용할 내장 속성/메소드: , .src
// (3) 처리할 내용   : 버튼 클릭 시 이미지의 src 속성 값을 변경

function func7() {
    console.log('func7 exe');
    document.querySelector('#mainImage').src = 'https://placehold.co/600x400/red/white';
};



/* 예제 8 : select 에서 선택한 option값 console 출력하기. ======================================*/
// (1) 목표 요소        : #foodSelect
// (2) 사용할 내장 속성/메소드 : .value
// (3) 처리할 내용      : select 요소의 값이 변경될 때마다 선택된 option의 value를 콘솔에 출력

function func8() {
    console.log('func8 exe');
    const foodSelect = document.querySelector('#foodSelect').value;
    console.log(foodSelect);
};

/* 예제 9 : input 에서 입력받은 값을 전역 배열에 저장하고 
배열 상태를 출력하기. ======================================*/
// (1) 목표 요소        : #itemInput, #addItemBtn, #arrayStatus
// (2) 사용할 내장 속성/메소드 : let (전역배열), .value, .push(), .textContent
// (3) 처리할 내용      : 버튼 클릭 시 input 값을 배열에 추가하고, 현재 배열의 상태를 div에 출력

let arrayStatus = [];

function func9() {
    console.log('fun9 exe');

    const itemInput = document.querySelector('#itemInput').value;
    arrayStatus.push(itemInput);
    console.log(arrayStatus);

    document.querySelector('#arrayStatus').textContent = `[${arrayStatus}]`;
};
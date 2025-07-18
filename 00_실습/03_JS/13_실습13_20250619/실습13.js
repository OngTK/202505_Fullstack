/*
[ 실습13 : 미니 전화번호부 페이지 ]

1. 목표
    - 사용자가 이름, 전화번호, 그리고 간단한 메모를 함께 저장하여 
    자신만의 상세한 연락처 목록을 만들고, 
    등록된 모든 연락처를 한눈에 볼 수 있는 전화번호부 웹 페이지를 만듭니다.
2. 화면 구성
    - 페이지는 사용자가 정보를 입력하는 **'연락처 등록 영역'**과 
    그 결과를 보여주는 **'연락처 목록 영역'**으로 명확히 구분되어야 합니다.
    - 연락처 등록 영역:
        - 이름 입력: 저장할 사람의 이름을 텍스트로 자유롭게 입력할 수 있어야 합니다. (예: "홍길동")
        - 전화번호 입력: 연락처의 전화번호를 숫자로 입력할 수 있어야 합니다 (예:010-1234-5678)
        - 메모 입력: 해당 연락처에 대한 추가 정보(소속, 관계 등)를 
                    텍스트로 입력할 수 있는 칸이 있어야 합니다. (예: "OO회사 부장")
        - 등록 버튼: 이름과 전화번호를 입력한 후, 목록에 추가하기 위한 "등록" 버튼이 있어야 합니다.

    - 연락처 목록 영역:
        - 등록된 모든 연락처 정보를 보여주는 표가 있어야 합니다.
            - 표는 "이름", "전화번호", "메모" 순서의 열로 구성되어야 합니다.
3. 핵심 기능
    - 초기 데이터 표시:
        - 사용자가 페이지에 처음 방문했을 때, 
        전화번호부 사용법을 쉽게 이해할 수 있도록 
        두 개의 예시 연락처가 목록 표에 기본적으로 표시되어 있어야 합니다.
    - 연락처 등록 기능:
        - 사용자가 '등록 영역'에 이름과 전화번호를 모두 입력하고 "등록" 버튼을 클릭하면, 
        해당 연락처가 '목록 영역' 표의 가장 아래쪽에 새로운 행으로 즉시 추가되어야 합니다.
        */

const contacts = [
    { 코드 : 1 ,이름: '홍길동', 전화번호: '010-5454-5454', 메모: '호부호형' },
    { 코드 : 2 ,이름: '신사임당', 전화번호: '010-5000-5000', 메모: '申師任堂' }
];

let lastIndex = contacts.length-1;
let contCode = contacts[lastIndex].코드 ;

function submit() {
    console.log('submit exe');

    const contName = document.querySelector('#contName');
    const name = contName.value;
    console.log(name);
    const contNumber = document.querySelector('#contNumber');
    const number = contNumber.value;
    console.log(number);
    const contMemo = document.querySelector('#contMemo');
    const memo = contMemo.value;
    console.log(memo);

    contCode++;

    const obj = { 코드 : contCode, 이름 : name, 전화번호 : number, 메모: memo};
    console.log(obj);

    contacts.push(obj);
    console.log(contacts);
    display();
};

display()

function display(){
    console.log(`display exe`);
    
    html = ``;

    for (let i = 0 ; i < contacts.length ; i++ ){
        const contact = contacts[i];
        html += `<tr>
            <td>${contacts[i].이름}</td>
            <td>${contacts[i].전화번호}</td>
            <td>${contacts[i].메모}</td>
        </tr>`;
    }
    document.querySelector('#contactList').innerHTML = html;
};
/*
[ 실습16 ] 웹 스토리지를 이용한 회원가입/로그인 페이지
1. 목표
    -사용자가 아이디와 비밀번호를 등록하고, 
    저장된 정보를 바탕으로 로그인 기능을 확인할 수 있는 기본 인증 페이지를 제작합니다. 
    -모든 회원 정보는 브라우저의 sessionStorage를 활용하여 관리합니다.

2. 화면 구성
    -페이지는 **'회원가입 영역'**과 '로그인 영역' 두 개의 <div>으로 명확히 구분되어야 합니다.
    -회원가입 영역:
        --아이디 입력: 
            가입할 아이디를 입력받는 <input> 필드가 있어야 합니다. (클래스명: signId)
        --비밀번호 입력: 
            가입할 비밀번호를 입력받는 <input> 필드가 있어야 합니다. (클래스명: signPw)
        --회원가입 버튼: 
            클릭 시 signup()를 호출하는 "회원가입" 버튼이 있어야 합니다.
    -로그인 영역:
        --아이디 입력: 
            로그인할 아이디를 입력받는 <input> 필드가 있어야 합니다. (클래스명: loginId)
        --비밀번호 입력: 
            로그인할 비밀번호를 입력받는 <input> 필드가 있어야 합니다. (클래스명: loginPw)
        --로그인 버튼: 
            클릭 시 login()를 호출하는 "로그인" 버튼이 있어야 합니다.

3. 데이터 관리
    -저장소: 
        모든 회원 정보는 브라우저의 **sessionStorage**를 사용하여 저장 및 관리되어야 합니다. 
        (브라우저 탭 종료 시 데이터 초기화)
    -데이터 구조: 
        회원 목록은 객체(Object)를 담는 배열(Array) 형태로 관리합니다.
    -각 회원 객체는 { 'no' : 회원번호 , 'id' : 아이디, 'pw' : 비밀번호 } 형태를 가집니다.
    -회원번호(no)는 등록 시마다 1씩 자동 증가해야 합니다.
    -이 배열 전체는 JSON.stringify()를 통해 문자열로 변환된 후, 
        sessionStorage에 'memberList'라는 키(key)로 저장되어야 합니다.

4. 핵심 기능 구현
    -signup() 구현:
        --입력된 아이디와 비밀번호를 입력받아 (memberList)배열에 
            새로 생성한 회원 객체를 추가(push)합니다.
        --회원번호는 현재 배열의 마지막 회원번호에 1을 더한 값으로 자동 부여합니다.
    -login() 구현:
        --입력된 아이디와 비밀번호를 입력받아 (memberList)배열 내의 
            어떤 회원 객체의 id, pw 값과 모두 일치하면, 
            "로그인 성공" 알림창을 띄우고 함수를 즉시 종료합니다.
        --일치하는 정보를 찾지 못하면, 
         "동일한 회원정보가 없습니다. 로그인실패" 알림창을 띄웁니다.
*/
//==============================
// const memberList = [
//     { 'no': 1001, 'id': 'admin1', 'pw': '1234' },
//     { 'no': 1002, 'id': 'admin2', 'pw': '1234' }
// ];

// console.log(memberList);

function signup() {
    // console.log('signup exe')
    const signId = document.querySelector('.signId');
    const signPw = document.querySelector('.signPw');
    const ID = signId.value;
    const PW = signPw.value;

    let no = 1; // 회원번호 초기값
    // membelist를 sessionStorage에서 가져옴 ☆★☆★☆★☆★☆★☆★
    let memberList = sessionStorage.getItem("memberList");
    if (memberList == null) {
        memberList = [];
    } else {
        memberList = JSON.parse(memberList)
        no = memberList[memberList.length - 1].no + 1;
    };

    // 

    const obj = { 'no': no, 'id': ID, 'pw': PW };
    // console.log(obj);

    memberList.push(obj);
    // console.log(memberList)

    sessionStorage.setItem("memberList", JSON.stringify(memberList))
    // 새로운 ID, PW가 push된 배열을 다시 storage에 입력
    console.log(sessionStorage)

    document.querySelector('.signId').value = '';
    document.querySelector('.signPw').value = '';

};

function login() {
    console.log('login exe')
    const loginId = document.querySelector('.loginId').value;
    const loginPw = document.querySelector('.loginPw').value;

    const memberList = JSON.parse(sessionStorage.getItem("memberList"));
    console.log(memberList);

    for (let i = 0; i < memberList.length; i++) {
        // console.log(memberList[i])
        if (memberList[i].id == loginId && memberList[i].pw == loginPw) {
            alert('로그인 성공')
            return;
        };
    };
    alert('동일한 회원정보가 없습니다. 로그인실패');
};

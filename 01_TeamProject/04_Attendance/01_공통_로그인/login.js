
function getMemberList() {
    let memberList = localStorage.getItem('memberList');

    if (memberList == null) {
        // localStorage에 없으면, 초기값인 배열을 반환할 수도 있음
        return [];
    } else {
        return JSON.parse(memberList);
    }
}

function testbtn() {
    const loginInput = document.querySelector('.login');
    const passwordInput = document.querySelector('.password');
    const login = loginInput.value;
    const pass = passwordInput.value;

    const members = getMemberList();

    // 숫자로 변환된 memberID와 비교
    const member = members.find(m => Number(m.memberID) === Number(login) && m.pwd === pass);

    if (!member) {
        alert('로그인 정보가 올바르지 않습니다.');
        return;
    } else if (member.Name === "admin") {
        alert('관리자 계정으로 로그인하였습니다.');
        location.href = '../11_admin_직원관리/test/11_member.html';    //관리자용
    } else {

        alert(`${member.Name}님, 어서오세요!`);

        if (login > 50000) {
            localStorage.setItem('login_memberID', JSON.stringify(login));
        };

        location.href = `../21_user_근태이력/attendMember.html`;  //일반 페이지
    }

}


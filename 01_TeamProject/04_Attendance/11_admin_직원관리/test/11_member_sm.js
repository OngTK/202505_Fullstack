MemberListView()

function MemberListView() {
    let tbody = document.querySelector('.tbody')
    let html = ``;    
    const MemberList = getMemberList()
    for (let i = 0; i <= MemberList.length - 1; i++) {
        let member = MemberList[i]
        html += `<tr>
                        <td scope="row">${member.memberID}</td>
                        <td>${member.Name}</td>
                        <td>${member.Birthday}</td>
                        <td>${member.departID}</td>
                        <td>${member.posiID}</td>
                        <td>${member.Call}</td>
                        <td>${member.Email}</td>
                        <td>
                        <button type="button" class="btn btn-primary btn-sm" onclick="editEmployee(${member.memberID}, this)">수정</button>
                        <button type="button" class="btn btn-danger btn-sm" onclick="deleteEmployee(${member.memberID}, this)">삭제</button>
                        </td>
                        </tr>`
    };
    tbody.innerHTML = html;
};

// 모달 내의 부서 선택 
let departSelect = document.querySelector('.departSelect')
const DepartmentList = getDepartmentList()
let html_depart = ``
for (let i = 1; i < DepartmentList.length; i++) {
    Department = DepartmentList[i]
    html_depart += `<option value=${Department.departID}>${Department.departName}</option>`
}
departSelect.innerHTML = html_depart

// 모달 내의 직급 선택
let posiSelect = document.querySelector('.posiSelect')
const PositionList = getPositionList()
let html_posi = ``
for (let i = 1; i < PositionList.length; i++) {
    position = PositionList[i]
    html_posi += `<option value=${position.posiID}>${position.posiName}</option>`
}
posiSelect.innerHTML = html_posi

// 신규직원 저장
function saveNewMember(){
    const MemberList = getMemberList()
    if (MemberList.length == 0) {
        memberID = 1
    } else (
        memberID = MemberList[MemberList.length - 1].memberID + 1
    )

    for (let i = 0 ; i < MemberList.length; i++){

    }
    // memberID	Name	Birthday	Call	Email	posiID	departID	pwd
}

// 삭제
function deleteMember(id, btn) {
    const index = memberList.findIndex(m => member.memberID == id);
    if (index == -1) return;

    memberList.splice(index, 1);
    setMemberList(memberList);
    renderMemberList();
}



// // 1. 초기 데이터 로드 & 다음 memberID 계산
// let memberList = getMemberList();
// let nextMemberID = memberList.length > 0 ? Math.max(...memberList.map(m => Number(m.memberID))) + 1 : 50001;

// // 2.렌더링 함수
// function renderMemberList() {
//     const tbody = document.querySelector('.tbody');
//     let html = '';

//     memberList.forEach(member => {
//         html += `
//         <tr>
//             <td>${member.memberID}</td>
//             <td>${member.Name}</td>
//             <td>${member.Birthday}</td>
//             <td>${member.departID}</td>
//             <td>${member.posiID}</td>
//             <td>${member.Call}</td>
//             <td>${member.Email}</td>
//             <td>
//                 <button class="btn btn-primary btn-sm" onclick="editMember(${member.memberID}, this)">수정</button>
//                 <button class="btn btn-danger btn-sm" onclick="deleteMember(${member.memberID}, this)">삭제</button>
//             </td>
//         </tr>
//         `;
//     });

//     tbody.innerHTML = html;
// }

// // 3. 신규 멤버 추가
// document.querySelector('.newmember').addEventListener('click', () => {
//     const newMember = {
//         memberID: nextMemberID++,
//         Name: '이름',
//         Birthday: '생년월일',
//         departID: '부서',
//         posiID: '직급',
//         Call: '연락처',
//         Email: '이메일'
//     };
//     memberList.push(newMember);
//     setMemberList(memberList);
//     renderMemberList();
// });

// // 4. 수정 모드
// function editMember(id, btn) {
//     const index = memberList.findIndex(m => m.memberID === id);
//     if (index == -1) return;

//     const member = memberList[index];
//     const tr = btn.closest('tr');

//     tr.innerHTML = `
//         <td>${member.memberID}</td>
//         <td><input value="${member.Name}"></td>
//         <td><input value="${member.Birthday}"></td>
//         <td><input value="${member.departID}"></td>
//         <td><input value="${member.posiID}"></td>
//         <td><input value="${member.Call}"></td>
//         <td><input value="${member.Email}"></td>
//         <td>
//         <button class="btn btn-success btn-sm" onclick="saveMember(${member.memberID}, this)">저장</button>
//         <button class="btn btn-secondary btn-sm" onclick="cancelEdit()">취소</button>
//         </td>
//     `;
// }

// // 5. 저장 모드
// function saveMember(id, btn) {
//     const index = memberList.findIndex(m => m.memberID === id);
//     if (index == -1) return;

//     const tr = btn.closest('tr');
//     const inputs = tr.querySelectorAll('input');

//     memberList[index] = {
//         memberID: id,
//         Name: inputs[0].value.trim(),
//         Birthday: inputs[1].value.trim(),
//         departID: inputs[2].value.trim(),
//         posiID: inputs[3].value.trim(),
//         Call: inputs[4].value.trim(),
//         Email: inputs[5].value.trim()
//     };

//     setMemberList(memberList);
//     renderMemberList();
// }

// // 6. 수정 취소
// function cancelEdit() {
//     renderMemberList();
// }



// // 8. 로컬스토리지 저장 및 불러오기 함수 (공통 함수로 따로 빼도 됨)
// function getMemberList() {
//     let list = localStorage.getItem('memberList');
//     return list ? JSON.parse(list) : [];
// }

// function setMemberList(list) {
//     localStorage.setItem('memberList', JSON.stringify(list));
// }

// // 9. 페이지 로딩시 초기 렌더링
// window.addEventListener('DOMContentLoaded', () => {
//     renderMemberList();
// });
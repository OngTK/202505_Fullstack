MemberListView()
// 1.3. 직급id <-> 직급 이름 변환 함수
function changePositionName(input) {
    const positionList = getPositionList();
    let posi = '';
    for (let i = 0; i < positionList.length; i++) {
        let position = positionList[i];
        if (position.posiID == input) {
            posi = position.posiName
        }
        else if (position.posiName == input) {
            posi = position.posiID
        };
    };
    return posi
};

// 2.3. 부서id <-> 부서 이름 변환 함수
function changeDepartName(input) {
    const departmentList = getDepartmentList()
    let dapart = '';
    for (let i = 0; i < departmentList.length; i++) {
        let department = departmentList[i];
        if (department.departID == input) {
            dapart = department.departName
        }
        else if (department.departName == input) {
            dapart = department.departID
        };
    };
    return dapart
};

// 사원 정보 조회
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
                        <td>${changeDepartName(member.departID)}</td>
                        <td>${changePositionName(member.posiID)}</td>
                        <td>${member.Call}</td>
                        <td>${member.Email}</td>
                        <td>
                        <button type="button" data-bs-toggle="modal" data-bs-target="#updateMemberModal" class="btn btn-primary btn-sm" onclick=updateViewMember(${member.memberID})>수정</button>
                        <button type="button" class="btn btn-danger btn-sm" onclick="deletMember(${member.memberID})">삭제</button>
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

// 신규사원 저장 ==========================================
function saveNewMember() {
    const MemberList = getMemberList()
    let memberID = 0;
    if (MemberList.length == 0) {
        memberID = 1;
    } else {
        memberID = MemberList[MemberList.length - 1].memberID + 1
    }
    const newName = document.querySelector('.modal-body1 > div:nth-child(2) input').value
    const newBirthday = document.querySelector('.modal-body1 > div:nth-child(3) input').value
    const newCall = document.querySelector('.modal-body1 > div:nth-child(4) input').value
    const newEmail = document.querySelector('.modal-body1 > div:nth-child(5) input').value
    const newdepartID = document.querySelector('.modal-body1 > div:nth-child(6) select').value
    const newposiID = document.querySelector('.modal-body1 > div:nth-child(7) select').value

    const newMember = {
        memberID: Number(memberID),
        Name: newName,
        Birthday: newBirthday,
        Call: newCall,
        Email: newEmail,
        posiID: Number(newposiID),
        departID: Number(newdepartID),
        pwd: "1234"
    }
    // console.log(newMember)

    alert("신규 사원 정보가 저장되었습니다.")
    MemberList.push(newMember)
    setMemberList(MemberList)
    MemberListView()
}

// 사원 삭제 ===============================
function deletMember(memberID) {
    const memberList = getMemberList()
    for (let i = 0; i < memberList.length; i++) {
        if (memberList[i].memberID == memberID) {
            memberList.splice(i, 1)
            alert("사원 정보가 삭제되었습니다.")
            setMemberList(memberList)
            MemberListView()
            return
        }
    }
}

// 사원 수정 - 1 정보 입력 =================================
function updateViewMember(memberID) {
    let html_updateMember = ``
    let content = document.querySelector(".Membermodal")
    // console.log(memberID)
    // console.log(content.innerHTML)

    const memberList = getMemberList()
    for (let i = 0; memberList.length; i++) {
        const member = memberList[i]
        if (member.memberID == memberID) {

            // 모달 내의 직급을 표시하기 위해
            let posiSelect = document.querySelector('.posiSelect')
            const PositionList = getPositionList()
            let html_posi = ``
            for (let i = 1; i < PositionList.length; i++) {
                position = PositionList[i]
                if (member.posiID == position.posiID) {
                    html_posi += `<option value=${position.posiID} selected>${position.posiName}</option>`
                } else {
                    html_posi += `<option value=${position.posiID} >${position.posiName}</option>`
                };
            };

            // 모달 내의 부서를 표시하기 위해
            let departSelect = document.querySelector('.departSelect')
            const DepartmentList = getDepartmentList()
            let html_depart = ``
            for (let i = 1; i < DepartmentList.length; i++) {
                Department = DepartmentList[i]
                if (member.departID == Department.departID) {
                    html_depart += `<option value=${Department.departID} selected>${Department.departName}</option>`
                } else {
                    html_depart += `<option value=${Department.departID}>${Department.departName}</option>`
                }
            }
            // selected : 그 옵션이 선택되어서 표시

            html_updateMember += `
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">사원 정보 수정</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body2">
                    <div>
                        <label for="recipient-name" class="col-form-label">사번</label> 
                        <input class="form-control" id="recipient-name"  type="number" value="${member.memberID}" disabled /> 
                    </div>
                    <div>
                        <label for="recipient-name" class="col-form-label">이름</label> 
                        <input class="form-control" id="recipient-name" type="text" value="${member.Name}"/>
                    </div>
                    <div>
                        <label for="recipient-name" class="col-form-label">생년월일</label> 
                        <input class="form-control" id="recipient-name" type="date"  value="${member.Birthday}"/>
                    </div>
                    <div>
                        <label for="recipient-name" class="col-form-label">연락처</label> 
                        <input class="form-control" id="recipient-name" type="text" value="${member.Call}"/>
                    </div>
                    <div>
                        <label for="recipient-name" class="col-form-label">이메일</label> 
                        <input class="form-control" id="recipient-name" type="text" value="${member.Email}"/>
                    </div>
                    <div>
                        <label for="recipient-name" class="col-form-label">부서</label> 
                        <select class="departSelect" class="form-control" id="recipient-name">${html_depart}</select>
                    </div>
                    <div>
                        <label for="recipient-name" class="col-form-label">직급</label> 
                        <select class="posiSelect" class="form-control" id="recipient-name">${html_posi}</select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
                    <button type="button" class="btn btn-primary" onclick="updateMember(${member.memberID})" data-bs-dismiss="modal">저장</button>
                </div>`

            // value="${member.departID}"
            //value="${member.posiID}"
            content.innerHTML = html_updateMember
            return;
        }
    }
}

// 사원 수정 - 2 정보 저장 =================================
function updateMember(memberID) {
    // console.log('updateMember exe')
    // console.log(memberID)

    const memberList = getMemberList()

    const reName = document.querySelector('.modal-body2 > div:nth-child(2) input').value
    const reBirthday = document.querySelector('.modal-body2 > div:nth-child(3) input').value
    const reCall = document.querySelector('.modal-body2 > div:nth-child(4) input').value
    const reEmail = document.querySelector('.modal-body2 > div:nth-child(5) input').value
    const redepartID = document.querySelector('.modal-body2 > div:nth-child(6) select').value
    const reposiID = document.querySelector('.modal-body2 > div:nth-child(7) select').value

    // console.log(reName,reBirthday,reCall,reEmail,redepartID,reposiID)

    for (let i = 0 ; i < memberList.length ; i++ ){
        let member = memberList[i]

        if (member.memberID == memberID){

            member.Name = reName
            member.Birthday = reBirthday
            member.Call = reCall
            member.Email = reEmail
            member.departID = Number(redepartID)
            member.posiID = Number(reposiID)

            alert("사원 정보가 수정되었습니다.")
            
            setMemberList(memberList)
            MemberListView()
            return;
        }
    }
    document.addEventListener('DOMContentLoaded', () => {
        const logoutBtn = document.querySelector('.btn btn-primary newMember');

        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
            alert('로그아웃 하시겠습니까?');
            });
        }
    });
}


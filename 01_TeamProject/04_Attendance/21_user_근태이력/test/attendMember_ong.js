
function getmemberList() {

    let memberList = localStorage.getItem('memberList');
    if (memberList == null) {
        memberList = [];
    } else {
        memberList = JSON.parse(memberList);
    }; return memberList;

}

function setmemberList(memberList) {
    localStorage.setItem('memberList', JSON.stringify(memberList))
}

usercode();
function usercode() {
    //가져오기
    const url = new URLSearchParams(location.search);
    const employee = url.get('memberID');
    let memberList = getmemberList();
    for (let i = 0; i <= memberList.length - 1; i++) {
        const member = memberList[i];
        if (member.memberID == employee) {
            document.querySelector('.employee').value = member.memberID;
            document.querySelector('.staffname').value = member.Name;
            document.querySelector('.birthdate').value = member.Birthday;
            document.querySelector('.position').value = changePositionName(member.posiID);
            document.querySelector('.post').value = changeDepartName(member.departID);
            document.querySelector('.email').value = member.Email;
            document.querySelector('.phonenum').value = member.Call;
            break;
        }
    }
    /*
    
    const birthdateInput = document.querySelector('.birthdate');
    const positionInput = document.querySelector('.position');
    const postInput = document.querySelector('.post');
    const emailInput = document.querySelector('.email');
    const phonenumInput = document.querySelector('.phonenum');

    const obj = {
        staffname: staffname,
        employee: Number(employee),
        birthdate: birthdate,
        position: position,
        post: Number(post),
        email: email,
        phonenum: Number(phonenum),
    };

    let memberList = getmemberList();

    // 초기
    const staffname = staffnameInput.value;
    const employee = employeeInput.value;
    const birthdate = birthdateInput.value;
    const position = positionInput.value;
    const post = postInput.value;
    const email = emailInput.value;
    const phonenum = phonenumInput.value;

    alert('일단 출근');
    memberList.push(obj);
    setmemberList(memberList);
    */
    attendMem();
}




function attendMem() {
    const url = new URLSearchParams(location.search);
    const employee = url.get('memberID');
    console.log(employee)

    const attendanceTable = document.querySelector('.attendanceTable');
    const attendaceList = getAttendaceList();
    let html = ``;

    for (let i = attendaceList.length - 1; i >= 0; i--) {
        const attendace = attendaceList[i];

        if (attendace.memberID == employee) {
            html += `<tr>
                                <td>${attendace.date}</td>
                                <td>${attendace.attentTime}</td>
                                <td>${attendace.leaveTime}</td>
                                <td>${lateness(attendace.attentTime)} ${absence(attendace.attentTime)}</td>
                            </tr>`
            // 로그인 기록 가져와야함 출퇴근해야하니  
        };
    }
    attendanceTable.innerHTML = html;
}




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

// 지각여부 판단 함수
function lateness(attentTime) {
    let lateness = ''
    if (attentTime > "09:10") {
        lateness = '지각'
    } else {
        lateness = ''
    }
    return lateness
};

// 결근여부 판단 함수
function absence(attentTime) {
    let absence = ''
    if (attentTime == '') {
        absence = "결근";
    }
    return absence
}
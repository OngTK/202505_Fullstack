let employee = JSON.parse(localStorage.getItem('login_memberID'))
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
    // const url = new URLSearchParams(location.search);
    // const employee = url.get('memberID');
    let memberList = getmemberList();
    for (let i = 0; i < memberList.length; i++) {
        const member = memberList[i];
        if (member.memberID == employee) {
        if (member.memberID == employee) {
            document.querySelector('.employee').value = member.memberID;
            document.querySelector('.staffname').value = member.Name;
            document.querySelector('.birthdate').value = member.Birthday;
            document.querySelector('.position').value = changePositionName(member.posiID);
            document.querySelector('.post').value = changeDepartName(member.departID);
            document.querySelector('.position').value = changePositionName(member.posiID);
            document.querySelector('.post').value = changeDepartName(member.departID);
            document.querySelector('.email').value = member.Email;
            document.querySelector('.phonenum').value = member.Call;
            document.querySelector('.phonenum').value = member.Call;
            break;
        }
    }
}}

attendMem();
function attendMem() {
    // const url = new URLSearchParams(location.search);
    // const employee = url.get('memberID');
    // console.log(employee)

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

function gotowork() {
    console.log('출근');
    // const url = new URLSearchParams(location.search);
    // const employee = Number(url.get('memberID'));
    console.log(employee)

    let year = new Date().getFullYear(); // 연도 구함
    let month = new Date().getMonth() + 1; // 달
    month = month < 10 ? `0${month}` : month; //한자리수면 0붙여서 10< 이런식
    let day = new Date().getDate(); // 일 반환
    day = day < 10 ? `0${day}` : day;    //한자리수면 0붙여서 10< 이런식
    let equals = `${year}-${month}-${day}`; // 달 12년-12-월-12일
    console.log(employee);

    // 시간 변수 정의
    let hour = new Date().getHours();        // '시' 반환
    hour = hour < 10 ? `0${hour}` : hour;
    let munute = new Date().getMinutes();    // '분' 반환
    munute = munute < 10 ? `0${munute}` : munute;
    let time = `${hour}:${munute}`;
    //console.log(time);
    // for문 돌려
    // memberID 일치하니? attendList.attenetTime == equal  and
    // 객체를 뽑아와서 
    // 정의된 시간변수를 객체에 집어 넣는다

    let attendaceList = getAttendaceList();
    for (let i = 0; i < attendaceList.length; i++) {
        let attendace = attendaceList[i];
        console.log(attendace.attentTime);

        if (employee == attendace.memberID && attendace.date == equals) {
            if (attendace.attentTime == "") {
                console.log(attendace);
                attendace.attentTime = time
                console.log(attendace);
                setAttendaceList(attendaceList);
                attendMem();
                alert('출근완료');
                return;
            } else {
                alert(`\n 이미 등록된 출근 정보가 있습니다. \n (※ 출근 정보 수정이 있을 경우 관리자에게 문의해주시기 바랍니다.)`)
            }
        }


    }
}

function leave() {
    console.log('퇴근');
    // const url = new URLSearchParams(location.search);
    // const employee = Number(url.get('memberID'));
    console.log(employee)

    let year = new Date().getFullYear(); // 연도 구함
    let month = new Date().getMonth() + 1; // 달
    month = month < 10 ? `0${month}` : month; //한자리수면 0붙여서 10< 이런식
    let day = new Date().getDate(); // 일 반환
    day = day < 10 ? `0${day}` : day;    //한자리수면 0붙여서 10< 이런식
    let equals = `${year}-${month}-${day}`; // 달 12년-12-월-12일
    console.log(employee);

    // 시간 변수 정의
    let hour = new Date().getHours();        // '시' 반환
    hour = hour < 10 ? `0${hour}` : hour;
    let munute = new Date().getMinutes();    // '분' 반환
    munute = munute < 10 ? `0${munute}` : munute;
    let time = `${hour}:${munute}`;
    //console.log(time);
    // for문 돌려
    // memberID 일치하니? attendList.attenetTime == equal  and
    // 객체를 뽑아와서 
    // 정의된 시간변수를 객체에 집어 넣는다

    let attendaceList = getAttendaceList();
    for (let i = 0; i < attendaceList.length; i++) {
        let attendace = attendaceList[i];
         console.log(attendace.leaveTime);

        if (employee == attendace.memberID && attendace.date == equals) {
            if (attendace.leaveTime == "") {
                console.log(attendace);
                attendace.leaveTime = time
                console.log(attendace);
                setAttendaceList(attendaceList);
                attendMem();
                alert('퇴근');
                return;
            } else {
                alert(`퇴근하셨었습니다.`);
            }
        }


    }
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
        lateness = `<span style="color : red">지각</span>`
    } else {
        lateness = ''
    }
    return lateness
};

// 결근여부 판단 함수
function absence(attentTime) {
    let absence = ''
    if (attentTime == '') {
        absence = `<span style="color : red">결근</span>`;
    }
    return absence
}
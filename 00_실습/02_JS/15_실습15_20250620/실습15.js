/*[ 실습15 - 인사 관리 대시보드 ] * 제출
1. 목표
    부서, 사원, 그리고 휴가 신청 정보를 
    하나의 웹 페이지에서 통합적으로 관리하는 대시보드를 제작합니다.
    사용자는 부서 등록/삭제/수정, 
    사원 등록/삭제/수정, 휴가 신청/취소 기능을 
    직관적으로 사용할 수 있어야 합니다.

2. 화면 구성
    페이지는 '부서 관리(왼쪽)', '사원 관리(가운데)', '휴가 관리(오른쪽)' 라는 
    3개의 명확한 컬럼으로 구성되어야 합니다.
    부서 관리 영역:
        부서 등록:  
            새로운 부서의 이름을 텍스트로 입력할 수 있는 입력창과 
            "추가" 버튼이 있어야 합니다.
        부서 목록:  
            등록된 모든 부서 정보를 보여주는 표(테이블)가 있어야 합니다.
            표는 "부서명"과 "관리" 열로 구성됩니다.
            각 부서 항목마다 해당 부서를 수정하고 삭제할 수 있는 버튼이 제공되어야 합니다.

    사원 관리 영역:
        사원 등록:
            사원의 이름과 직급을 입력하는 텍스트 필드가 있어야 합니다.
            등록된 부서 목록에서 소속될 부서를 선택할 수 있는 
            드롭다운 메뉴가 있어야 합니다.
            사원의 사진을 등록할 수 있는 파일 선택 버튼이 있어야 합니다.
        사원 목록:
            등록된 모든 사원 정보를 보여주는 표(테이블)가 있어야 합니다.
            표는 "사진", "이름", "부서", "직급", "관리" 순서의 열로 구성됩니다.
            각 사원 항목마다 해당 사원의 이름과 직급을 수정하고, 
            사원 정보를 삭제할 수 있는 버튼이 제공되어야 합니다.

    휴가 관리 영역:
        휴가 신청:
            등록된 사원 목록에서 휴가를 신청할 사원을 선택하는 드롭다운 메뉴가 있어야 합니다.
            휴가 시작일과 종료일을 선택할 수 있는 날짜 입력 필드가 있어야 합니다.
            휴가 사유를 텍스트로 간단히 기입할 수 있는 입력창이 있어야 합니다.
        휴가 신청 전체 목록:
            제출된 모든 휴가 신청 내역을 보여주는 목록이 있어야 합니다.
            각 항목에는 신청한 사원의 이름, 휴가 기간, 사유가 표시되어야 합니다.
            각 휴가 신청 항목마다 해당 신청을 취소할 수 있는 "신청취소" 버튼이 제공되어야 합니다.

3. 핵심 기능
    초기 데이터 표시:
        모든 데이터(부서, 사원, 휴가)는 웹 페이지가 실행되는 동안에만 
        유지되는 전역 배열을 통해 관리됩니다. 
        페이지를 새로고침하면 데이터는 초기 샘플 상태로 돌아갑니다.
        사용자가 처음 페이지에 접속했을 때, 
        시스템 사용법을 쉽게 파악할 수 있도록 
        부서, 사원, 휴가 신청에 대한 예시 데이터가 기본적으로 화면에 표시되어 있어야 합니다.

    부서 관리 기능:
        등록: "추가" 버튼 클릭 시, 
            입력된 부서가 부서 목록과 사원 등록의 부서 선택 메뉴에 즉시 반영되어야 합니다. 이미 존재하는 부서명은 등록되지 않아야 합니다.
        수정: "수정" 버튼 클릭 시, 
            prompt 대화상자가 나타나 새로운 부서명을 입력받고, 
            입력 완료 시 목록에 즉시 반영되어야 합니다.
        삭제: "삭제" 버튼 클릭 시, 해당 부서가 목록에서 제거되어야 합니다. 
            단, 해당 부서에 소속된 사원이 한 명이라도 있을 경우, 
            삭제할 수 없다는 경고 메시지를 표시해야 합니다.

    사원 관리 기능:
        등록: 
            사원 정보를 입력하고 "등록" 버튼 클릭 시, 
            사원 목록과 휴가 신청의 사원 선택 메뉴에 즉시 추가되어야 합니다. 
            사진을 첨부하면 해당 사진이, 첨부하지 않으면 기본 이미지가 표시되어야 합니다.
        수정: 
            "수정" 버튼 클릭 시, 
            prompt 대화상자를 통해 새로운 이름과 직책을 입력받아 
            해당 사원의 정보를 수정하고 목록을 즉시 갱신해야 합니다.
        삭제: 
            "삭제" 버튼 클릭 시, 
            해당 사원이 목록에서 제거되며, 
            관련된 모든 휴가 신청 기록도 함께 삭제되어야 합니다.

    휴가 관리 기능:
        신청: 
            휴가 정보를 입력하고 "신청" 버튼 클릭 시, 
            휴가 신청 목록에 즉시 추가되어야 합니다.
        취소: 
            "신청취소" 버튼 클릭 시, 
            해당 휴가 신청 내역이 목록에서 제거되어야 합니다.
*/

// 데이터 모델링
const departmentList = [
    { departmentCode: 1001, Partname: '경영지원' },
    { departmentCode: 1002, Partname: '그린융합' },
    { departmentCode: 1003, Partname: '컨설팅본부' },
    { departmentCode: 1004, Partname: '기획' },
    { departmentCode: 1005, Partname: '연구소' },
    { departmentCode: 1006, Partname: '개발' },
];

const positionList = [
    { positionCode: 3001, positionName: '사장' },
    { positionCode: 3002, positionName: '이사' },
    { positionCode: 3003, positionName: '부장' },
    { positionCode: 3004, positionName: '차장' },
    { positionCode: 3005, positionName: '과장' },
    { positionCode: 3006, positionName: '대리' },
    { positionCode: 3007, positionName: '주임' },
    { positionCode: 3008, positionName: '사원' }
];

const employeeList = [
    { IDCode: 5001, employeeName: '배두훈', departmentCode: 1001, positionCode: 3002, employeeImg: 'https://pbs.twimg.com/media/FutoAq5aYAAtdNx?format=jpg&name=small' },
    { IDCode: 5002, employeeName: '강형호', departmentCode: 1002, positionCode: 3005, employeeImg: 'https://pbs.twimg.com/media/FutoB7jaMAEEzpC?format=jpg&name=small' },
    { IDCode: 5003, employeeName: '조민규', departmentCode: 1004, positionCode: 3007, employeeImg: 'https://pbs.twimg.com/media/FutoB8GaMAAbk7X?format=jpg&name=small' },
    { IDCode: 5004, employeeName: '고우림', departmentCode: 1005, positionCode: 3008, employeeImg: 'https://pbs.twimg.com/media/FutoC52aUAAWOyn?format=jpg&name=small' },
    { IDCode: 5005, employeeName: '김주택', departmentCode: 1002, positionCode: 3001, employeeImg: 'https://www.librarycompany.co.kr/data/files/2024-07/1c55466cea3b3ce1b4931fb926f17e9d.jpg' },
    { IDCode: 5006, employeeName: '박강현', departmentCode: 1003, positionCode: 3004, employeeImg: 'https://i.namu.wiki/i/Wm9JqW0mbMpzAnVF8V90U2aaZkZXBO-3V4TJaNxcyUd9fB_BqULpuTblrG139dIYKirPGZ3Poc7Ns7Zr26DOi2Zg7Nhmag00SSV1Z_MZ8HWeN3sLwKx8MCWVlzz3iEiErr-b_9wAv2_lwApBZ4gGiQ.webp' },
    { IDCode: 5007, employeeName: '정필립', departmentCode: 1005, positionCode: 3003, employeeImg: 'https://i.namu.wiki/i/GxKFk0AFpEUJkgJTBqFAZm4U5bEsvRPgxyL4ZEj3s0zFONfYo80ETeFFn9FEgnKZ1am06A1zziMPbq9_g2xBAg.webp' },
    { IDCode: 5008, employeeName: '한태인', departmentCode: 1006, positionCode: 3006, employeeImg: 'https://i.namu.wiki/i/oE3s1z-f3iL5VQ3KzIhNTSgPVsI0vQ_yFAZDMVrVZQZvYaElUSyLtx87UiFl338_JpXCRDw1wUPBTFKZu9Z0gA.webp' }
];

const vacationList = [
    { vacationCode: 7001, IDCode: 5001, vacationstart: '2025-03-01', vacationEnd: '2025-03-02', vacationReason: '개인사정' },
    { vacationCode: 7002, IDCode: 5003, vacationstart: '2025-04-05', vacationEnd: '2024-04-07', vacationReason: '여행' },
    { vacationCode: 7003, IDCode: 5005, vacationstart: '2025-05-15', vacationEnd: '2025-05-18', vacationReason: '경사' },
    { vacationCode: 7004, IDCode: 5007, vacationstart: '2025-06-20', vacationEnd: '2025-06-20', vacationReason: '병원진료' }
];

// 1. 부서관리 ====================================
// 1.1 부서등록 영역
function departmentSubmit() {
    // console.log('departmentSubmit exe');

    const newDepartment = document.querySelector('#newDepartment');
    // console.log(newDepartment.value)

    if (newDepartment.value != '') {
        const obj = {
            departmentCode: MaxdepartmentCode(departmentList),
            Partname: newDepartment.value
        };
        departmentList.push(obj);
        console.log(departmentList);

        newDepartment.value = '';
    } else (
        alert(`[실패] 부서명을 입력하세요`)
    )

    departmentPrint();
    departmentSelect(); //부서명에 등록하면 사원관리-부서select에도 표시되도록
};

// department에서 가장 큰 pk값 찾기 +1
function MaxdepartmentCode(array) {
    let maxCode = 0;
    for (let i = 0; i < departmentList.length; i++) {
        if (departmentList[i].departmentCode > maxCode) {
            maxCode = departmentList[i].departmentCode;
        };
    };
    maxCode++;
    // console.log(maxCode)
    return maxCode;
};

// 1.2 부서목록 영역
// 1.2.1. 조회
departmentPrint()
function departmentPrint() {
    // console.log('departmentPrint exe')
    html = ``;

    for (let i = 0; i < departmentList.length; i++) {
        const department = departmentList[i];
        html += ` <tr>
                    <td> ${department.Partname}</td>
                    <td>
                        <button onclick="departmentEdit(${department.departmentCode})">수정</button>
                        <button onclick='departmentDelete(${department.departmentCode})'>삭제</button>
                    </td>
                </tr>`
    };
    document.querySelector('#departmentList').innerHTML = html;
};

// 1.2.2 수정
function departmentEdit(departmentCode) {
    // console.log('departmentEdit exe')
    // console.log(departmentCode)
    for (let i = 0; i < departmentList.length; i++) {
        if (departmentList[i].departmentCode == departmentCode) {
            // console.log(departmentCode)
            // console.log(departmentList[i].departmentCode);
            let newDepartmentName = prompt('수정한 부서명을 입력하세요.');
            departmentList[i].Partname = newDepartmentName;
            departmentPrint();
            departmentSelect();
            employeePrint();
        };
    };
};

// 1.2.3. 삭제
function departmentDelete(departmentCode) {
    // console.log('departmentDelete exe')
    console.log(departmentCode)
    let count = 0;
    for (let j = 0; j < employeeList.length; j++) {
        if (employeeList[j].departmentCode == departmentCode) {
            count++;
            console.log(count)
        };
    };
    if( count >= 1) {
        alert('[실패] 소속직원이 존재하여 삭제할 수 없습니다.')
        return;
    }

    for (let i = 0; i < departmentList.length; i++) {
        if (departmentList[i].departmentCode == departmentCode) {
            departmentList.splice(i, 1)
            departmentPrint();
        };
    };
}


// 2. 사원 관리 ====================================
// 2.1. 사원등록
// 2.1.1 부서 select 목록
departmentSelect();
function departmentSelect() {
    html = '<option value="" disabled selected >부서를 고르세요</option>'
    for (let i = 0; i < departmentList.length; i++) {
        const department = departmentList[i];

        html += `<option value="${department.departmentCode}">${department.Partname}</option>`
    };
    // console.log(html);
    document.querySelector('#departSelect').innerHTML = html;
};

// 2.1.2. 사원등록 
function newEmployee() {
    console.log('newEmployee exe')

    const newEmploName = document.querySelector('#newEmploName');
    const newEmploPosi = document.querySelector('#newEmploPosi');
    const departSelect = document.querySelector('#departSelect');
    const newEmploImg = document.querySelector('#newEmploimg');


    const obj = {
        IDCode: MaxEmployeeCode(employeeList),
        employeeName: newEmploName.value,
        departmentCode: Number(departSelect.value),
        positionCode: Number(scanPositiontoCode(newEmploPosi.value)),
        employeeImg: URL.createObjectURL(newEmploImg.files[0])
    };
    console.log(obj);
    employeeList.push(obj);
    console.log(employeeList);

    employeePrint();
    selectEmployee();
};

// employeeList에서 가장 큰 pk값 찾기 +1
function MaxEmployeeCode(array) {
    let maxCode = 0;
    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].IDCode > maxCode) {
            maxCode = employeeList[i].IDCode;
        };
    };
    maxCode++;
    // console.log(maxCode);
    return maxCode;
};

// 직급명으로 positioncode 찾기
function scanPositiontoCode(position) {
    // console.log('scanPositiontoCode exe');
    // console.log(position);
    for (let i = 0; i < positionList.length; i++) {
        if (positionList[i].positionName == position) {
            return positionList[i].positionCode;
        };
    };
};

// 2.2. 사원목록
//2.2.1. 사원목록 조회
employeePrint()
function employeePrint() {
    // console.log('employeelist exe');

    html = ``;
    for (let i = 0; i < employeeList.length; i++) {
        const employee = employeeList[i];

        html += `<tr>
                <td><img src="${employee.employeeImg}" style="height: 100px; width:80px; object-fit: cover;"></td>
                <td>${employee.employeeName}</td>
                <td> ${scanDepartment(employee.departmentCode)}</td>
                <td>${scanPosition(employee.positionCode)}</td>
                <td>
                    <button onclick="employeeEdit(${employee.IDCode})">수정</button>
                    <button onclick="employeeDelete(${employee.IDCode})">삭제</button>
                </td>
            </tr>`;
    };
    // console.log(html);
    document.querySelector('#employee').innerHTML = html;
};

// 2.2.1.1. 부서명 조회
function scanDepartment(departmentCode) {
    // console.log('scanDepartment exe');
    for (let i = 0; i < departmentList.length; i++) {
        if (departmentList[i].departmentCode == departmentCode) {
            return departmentList[i].Partname;
        };
    };
    return null;
};
// 2.2.1.1. 직급 조회
function scanPosition(positionCode) {
    // console.log('scanPosition exe');
    for (let i = 0; i < positionList.length; i++) {
        if (positionList[i].positionCode == positionCode) {
            return positionList[i].positionName;
        };
    };
    return null;
};

// 2.2.2. 수정
function employeeEdit(IDCode) {
    // console.log('employeeEdit exe')
    // console.log(IDCode)
    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].IDCode == IDCode) {
            // console.log(IDCode);
            // console.log(employeeList[i].IDCode);
            let newName = prompt('수정할 이름을 입력하세요.');
            let newPosition = prompt('수정 직급을 입력하세요.');
            employeeList[i].employeeName = newName;
            employeeList[i].positionCode = scanPositiontoCode(newPosition);
            // console.log(employeeList);
            employeePrint();
            selectEmployee();
        };
    };
};

// 2.2.3. 삭제
function employeeDelete(IDCode) {
    // console.log('employeeDelete exe')
    // console.log(IDCode)
    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].IDCode == IDCode) {
            employeeList.splice(i, 1);
            employeePrint();
            selectEmployee();
        };
    };
};

// 3. 휴가관리
// 3.1. 휴가신청 영역
// 3.1.1. 신청사원 select
selectEmployee();
function selectEmployee() {
    let html = `<option value="" disabled selected >휴가 신청 사원을 고르세요.</option>`;
    for (let i = 0; i < employeeList.length; i++) {
        html += `<option value="${employeeList[i].IDCode}">
                ${employeeList[i].employeeName}</option>`;
    };
    document.querySelector('#selectEmployee').innerHTML = html;
};

// 3.1.2. input > vactionList push
function newVacation() {
    // console.log('newVacation exe');

    const IDcode = Number(document.querySelector('#selectEmployee').value);
    const vacationStart = document.querySelector('#vacationStart').value;
    const vacationEnd = document.querySelector('#vacationEnd').value;
    const vacationReason = document.querySelector('#vacationReason').value;

    const obj = {
        vacationCode: MaxvacationCode(vacationList),
        IDCode: IDcode,
        vacationstart: vacationStart,
        vacationEnd: vacationEnd,
        vacationReason: vacationReason
    };
    // console.log(obj);

    vacationList.push(obj);
    vacationPrint();
};
// vacationList에서 가장 큰 pk값 찾기 +1
function MaxvacationCode(array) {
    let maxCode = 0;
    for (let i = 0; i < vacationList.length; i++) {
        if (vacationList[i].vacationCode > maxCode) {
            maxCode = vacationList[i].vacationCode;
        };
    };
    maxCode++;
    // console.log(maxCode);
    return maxCode;
};

// 3.2. 휴가 신청 전체 목록 영역

// 3.2.1. 조회
vacationPrint();
function vacationPrint() {
    // console.log('vacationPrint exe');
    let html = ``
    for (let i = 0; i < vacationList.length; i++) {
        let vacation = vacationList[i];
        // console.log(vacation);
        html += `<tr>
                    <td>${findEmployee(vacation.IDCode)}</td>
                    <td>${vacation.vacationstart}~${vacation.vacationEnd}</td>
                    <td>${vacation.vacationReason}</td>
                    <td>
                        <button onclick='vacationDelete(${vacation.vacationCode})'>신청취소</button>
                    </td>
                </tr>`;
    };
    // console.log(html);
    document.querySelector('#vacationTable').innerHTML = html;
};

function findEmployee(IDCode) {
    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].IDCode == IDCode) {
            return employeeList[i].employeeName;
        };
    };
};

// 3.2.2. 취소
function vacationDelete(vacationCode) {
    // console.log('vacationDelete exe')
    // console.log(vacationCode)
    for (let i = 0; i < vacationList.length; i++) {
        if (vacationList[i].vacationCode == vacationCode) {
            vacationList.splice(i, 1);
            vacationPrint();
        };
    };
};
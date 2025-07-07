//페이지네이션====================================================================================
// 한페이지에 표시할 행 수
const ContentPerPage = 30;
// 페이지 수 계산
function pageQTY() {
    const attendaceList = getAttendaceList()
    let pageQTY = attendaceList.length / ContentPerPage

    if (attendaceList.length % ContentPerPage == 0) {
        return pageQTY  // 근태이력/페이지 수의 나머지가 없으면 QTY를 그대로
    } else {
        // 근태이력/페이지 수의 나머지가 있으면 QTY에 +1
        pageQTY = (attendaceList.length - attendaceList.length % ContentPerPage) / ContentPerPage + 1;
        // console.log(pageQTY)
        return pageQTY;
    };
};

//페이지 나누기 함수
function divideContent() {
    const attendaceList = getAttendaceList()        // 근태이력 불러오기
    let pageqty = pageQTY()                         // page 수 불러오기
    let pageContent = [];                           // page 당 콘탠츠 30개를 저장하기 위한 배열
    const sortedList = [...attendaceList].sort((a, b) => b.attendID - a.attendID);
    /*
    1. [...attendaceList] — 배열 복사
        -   ...attendaceList : 기존 배열을 복사하여 새로운 배열을 만듦
        -   sort() :  원본 배열을 변경
        -   원본 데이터를 보존하고 싶기 때문에 복사본을 만든 뒤 정렬
    2. .sort((a, b) => b.attendID - a.attendID) — 정렬 기준 정의
        -   sort() : 두 요소를 비교해서 순서를 정하는 함수 
        -   (a, b) => b.attendID - a.attendID : attendID를 기준으로 내림차순 정렬
    */

    for (let i = 0; i < sortedList.length; i += ContentPerPage) {
        const pageNum = Math.floor(i / ContentPerPage) + 1        //Math.floor 소수값이 존재할 때 소수값을 버리는 함수
        const pageItems = sortedList.slice(i, i + ContentPerPage) // 30개씩 자르기
        const pageObj = {};                                       // [{page num : [30개 씩]}, {page num : [30개 씩]}, ....]
        pageObj[pageNum] = pageItems
        pageContent.push(pageObj);
    };
    return pageContent;
};

//표 하단 페이지 버튼
pageNumber() //출처: 부트스트랩-페이지네이션!!
function pageNumber() {
    let pagination = document.querySelector('.pagination')
    let html = ``
    let url = new URLSearchParams(location.search);
    let page = Number(url.get('page'))

    let pageDown = page - 1;
    let pageUp = page + 1;

    let pageqty = pageQTY()
    html += `<li class="page-item">
                <a class="page-link" href="12_attendAdmin.html?page=${pageDown}" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>`
    for (let i = 1; i <= pageqty; i++) {
        html += `<li class="page-item"><a class="page-link" href="12_attendAdmin.html?page=${i}">${i}</a></li>`
    }
    html += `<li class="page-item">
                <a class="page-link" href="12_attendAdmin.html?page=${pageUp}" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>`

    pagination.innerHTML = html
}

//근태이력 조회====================================================================================

AttendaceListView()
// js가 실행되면 근태이력 AttendaceList view 실행
function AttendaceListView() {
    // console.log('AttendaceListView exe')
    memberInfo();
    const pageContent = divideContent()

    let tbody = document.querySelector('.tbody')
    let html = ``;

    //Query String
    let url = new URLSearchParams(location.search);
    let page = url.get('page')
    let content = Object.values(pageContent[page - 1])
    // Object.values: pagecontent가 {pagenum : [{},{},{}... 30개]}로 구성되어 있으므로 이중에 객체30개만 추출

    for (let i = 0; i < content.length; i++) {
        let attendaceListperPage = content[i]
        // console.log(attendaceListperPage)

        for (let j = 0; j < attendaceListperPage.length; j++) {
            let attendace = attendaceListperPage[j]
            // console.log(attendace)
            html += `<tr>
                    <td scope="row">${attendace.memberID}</td>`
            let member = memberInfo(attendace.memberID)             // memberInfo : 사번을 매개변수로 하여 사원정보를 객체로 반환
            // console.log(member)
            html += `<td>${member.Name}</td>
                        <td>${changeDepartName(member.departID)}</td>  
                        <td>${changePositionName(member.posiID)}</td>
                        <td>${attendace.date}</td>
                        <td>${attendace.attentTime}</td>
                        <td>${attendace.leaveTime}</td>
                        <td style='color : red; font-weight:500'>${lateness(attendace.attentTime)}</td>
                        <td style='color : red; font-weight:500'>${absence(attendace.attentTime)}</td>
                        <td>
                            <button type="button" class="btn btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="AttendaceViewModal(${attendace.attendID})">수정</button>
                        </td>
                    </tr>`
            // changeDepartName(member.departID) : 부서ID를 기반으로 부서명을 가져오는 함수
            // changePositionName(member.posiID) : 직급ID를 기반으로 직급명 가져오는 함수 
            // lateness(출근시간) : 출근시간을 기반으로 지각여부를 판단하는 함수
            // absence(출근시간) : 출근시간이 없다면 결근으로 판단하는 함수
        };
    };
    tbody.innerHTML = html;
};

//근태이력 조회 관련 기타 함수====================================================================================
// 사번을 매개변수로 하여, 이름, 부서, 직급을 조회하는 함수
function memberInfo(memberID) {
    // console.log('memberInfo exe')
    const memberList = getMemberList()
    // console.log(memberList)        
    for (let i = 0; i < memberList.length; i++) {
        let member = memberList[i]
        // console.log(member)
        if (member.memberID == memberID) {
            // console.log(member)
            return member
        }
    }
}

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

// 모달====================================================================================
// 근태이력 수정 > 모달에 정보 표시
function AttendaceViewModal(attendID) {
    let html = ``;
    const attendaceList = getAttendaceList()
    for (let i = attendaceList.length - 1; i >= 0; i--) {
        let attendace = attendaceList[i]
        if (attendace.attendID == attendID) {
            let member = memberInfo(attendace.memberID);
            html += `<div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">근태이력 수정</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div>  
                     <label for="recipient-name" class="col-form-label">사번</label>
                     <input type="number" value="${member.memberID}" class="form-control" id="recipient-name" disabled/> </div> 
                    <div>  
                     <label for="recipient-name" class="col-form-label">이름</label>
                    <input type="text" value="${member.Name}" class="form-control" id="recipient-name" disabled/></div> 
                    <div>  
                     <label for="recipient-name" class="col-form-label">부서</label>
                    <input type="text" value="${changeDepartName(member.departID)}" class="form-control" id="recipient-name" disabled/></div>
                    <div>  
                     <label for="recipient-name" class="col-form-label">직급</label>
                    <input type="text" value="${changePositionName(member.posiID)}"class="form-control" id="recipient-name"  disabled/></div>
                    <div>  
                     <label for="recipient-name" class="col-form-label">날짜</label>
                    <input type="date" value="${attendace.date}"class="form-control" id="recipient-name"  disabled/></div>
                    <div>  
                     <label for="recipient-name" class="col-form-label">출근시간</label>
                        <input type="time" value="${attendace.attentTime}" class="form-control" id="recipient-name" />
                    </div>
                    <div>
                     <label for="recipient-name" class="col-form-label">퇴근시간</label>
                        <input type="time" value="${attendace.leaveTime}" class="form-control" id="recipient-name"/>
                        <button type="button" class="btn btn-primary reset-button" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;" onclick=valueReset(${attendID})>시간 초기화</button>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
                    <button type="button" class="btn btn-primary " onclick="AttendaceUpdate(${attendID})" data-bs-dismiss="modal">저장</button>
                </div>`
            document.querySelector(".modal-content").innerHTML = html
        }
    }
}

// 모달 - 근태 이력 수정 저장
function AttendaceUpdate(attendID) {
    const newAttentTime = document.querySelector(".modal-body > div:nth-child(6) >input").value
    const newLeaveTime = document.querySelector(".modal-body > div:nth-child(7) >input").value
    console.log(attendID)

    if (newAttentTime > "09:10") {
        alert("수정하시는 출근시간이 09:10 이후이므로 지각처리됩니다.")
    }

    if (newAttentTime == '' && newLeaveTime == '') {
        alert("출근시간과 퇴근시간이 공란입니다. 이 경우, 결근 처리 됩니다.")
    }

    const attendaceList = getAttendaceList()
    for (let i = attendaceList.length - 1; i >= 0; i--) {
        let attendace = attendaceList[i]
        if (attendace.attendID == attendID) {
            attendace.attentTime = newAttentTime
            attendace.leaveTime = newLeaveTime
            attendaceList[i] = attendace
            setAttendaceList(attendaceList)
            AttendaceListView()
            return;
        };
    };
};

// 모달 내 출근/퇴근 시간 초기화 버튼
function valueReset(attendID) {
    document.querySelector('.modal-body > div:nth-child(6) > input').value = ''
    document.querySelector('.modal-body > div:nth-child(7) > input').value = ''
}
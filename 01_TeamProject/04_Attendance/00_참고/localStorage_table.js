// 공통 table 및 공통 function 정의

// 1. 직급 리스트 =======================================
const positionList = [
    { posiID: 10000, posiName: "admin" },
    { posiID: 10001, posiName: "사장" },
    { posiID: 10002, posiName: "부사장" },
    { posiID: 10003, posiName: "이사" },
    { posiID: 10004, posiName: "부장" },
    { posiID: 10005, posiName: "차장" },
    { posiID: 10006, posiName: "과장" },
    { posiID: 10007, posiName: "대리" },
    { posiID: 10008, posiName: "주임" },
    { posiID: 10009, posiName: "사원" }
];

// 1.1. get 직급 리스트 
function getPositionList() {
    let positionList = localStorage.getItem('positionList')

    if (positionList == null) {
        positionList = [];
    } else {
        positionList = JSON.parse(positionList);
    };
    return positionList;
};

// 1.2. set 직급 리스트
function setPositionList(positionList) {
    localStorage.setItem('positionList', JSON.stringify(positionList));
};

// 1.3. 직급id <-> 직급 이름 변환 함수
function changePositionName() {
    let input = document.querySelector("#test1input").value
    let html = ``
    for (let i = 0; i < positionList.length; i++) {
        let position = positionList[i];
        if (position.posiID == input) {
            html += `${position.posiName}`
        }
        else if (position.posiName == input) {
            html += `${position.posiID}`
        };
    };
    document.querySelector('#test1result').innerHTML = html
}; // 이걸 응용하라는 의미로 이걸 그대로 가져다 쓰면 당연히 에러남 -옹-

// 2. 부서 리스트 =======================================
const departmentList = [
    { departID: 30000, departName: "admin" },
    { departID: 30001, departName: "전략기획부" },
    { departID: 30002, departName: "총무·경리부" },
    { departID: 30003, departName: "생산부" },
    { departID: 30004, departName: "영업부" },
    { departID: 30005, departName: "개발부" }
];

// 2.1. get 부서 리스트 
function getDepartmentList() {
    let departmentList = localStorage.getItem('departmentList')
    if (departmentList == null) {
        departmentList = [];
    } else {
        departmentList = JSON.parse(departmentList);
    };
    return departmentList;
};

// 2.2. set 부서 리스트
function setDepartmentList(departmentList) {
    localStorage.setItem('departmentList', JSON.stringify(departmentList));
};

// 2.3. 부서id <-> 부서 이름 변환 함수
function changeDepartName() {
    let input = document.querySelector("#test2input").value
    let html = ``
    for (let i = 0; i < departmentList.length; i++) {
        let department = departmentList[i];
        if (department.departID == input) {
            html += `${department.departName}`
        }
        else if (department.departName == input) {
            html += `${department.departID}`
        };
    };
    document.querySelector('#test2result').innerHTML = html
}; // 이걸 응용하라는 의미로 이걸 그대로 가져다 쓰면 당연히 에러남 -옹-

// 3. 휴일 리스트 =======================================
const holidayList = [
    { holidayDate: '2025-05-05', week: 2, note: '어린이날' },
    { holidayDate: '2025-05-06', week: 3, note: '대체 휴일' },
    { holidayDate: '2025-06-03', week: 3, note: '대통령 선거' },
    { holidayDate: '2025-06-06', week: 6, note: '현충일' },
    { holidayDate: '2025-08-15', week: 6, note: '광복절' },
    { holidayDate: '2025-10-03', week: 6, note: '개천절' },
    { holidayDate: '2025-10-06', week: 2, note: '추석 연휴' },
    { holidayDate: '2025-10-07', week: 3, note: '추석 연휴' },
    { holidayDate: '2025-10-08', week: 4, note: '대체 공휴일' },
    { holidayDate: '2025-10-09', week: 5, note: '한글날' },
    { holidayDate: '2025-12-25', week: 5, note: '성탄절' }
];

// 3.1. get 휴일 리스트 
function getHolidayList() {
    let holidayList = localStorage.getItem('holidayList')

    if (holidayList == null) {
        holidayList = [];
    } else {
        holidayList = JSON.parse(holidayList);
    };
    return holidayList;
};

// 3.2. set 휴일 리스트
function setHolidayList(holidayList) {
    localStorage.setItem('holidayList', JSON.stringify(holidayList));
};
// 3.2. set 휴일 리스트

// 4. 직원 리스트  =======================================

const memberList = [
    { memberID: 50000, Name: 'admin', Birthday: '2020-03-01', Call: '010-0000-0000', Email: 'exam@example.com', posiID: 10050, departID: 30050, pwd: 'qwer1234' },
    { memberID: 50001, Name: '김지훈', Birthday: '1986-03-14', Call: '010-2453-6874', Email: 'jh.kim@example.com', posiID: 10003, departID: 30004, pwd: 'a' },
    { memberID: 50002, Name: '이수연', Birthday: '1990-07-22', Call: '010-3384-2091', Email: 'sy.lee@example.com', posiID: 10006, departID: 30001, pwd: '50002a30001' },
    { memberID: 50003, Name: '박민준', Birthday: '1984-01-11', Call: '010-7732-1125', Email: 'mj.park@example.com', posiID: 10001, departID: 30001, pwd: '50003a30001' },
    { memberID: 50004, Name: '정예린', Birthday: '1993-09-30', Call: '010-4556-9881', Email: 'yr.jung@example.com', posiID: 10009, departID: 30003, pwd: '50004a30003' },
    { memberID: 50005, Name: '최유진', Birthday: '1988-12-05', Call: '010-6721-3359', Email: 'yj.choi@example.com', posiID: 10004, departID: 30002, pwd: '50005a30002' },
    { memberID: 50006, Name: '김도현', Birthday: '1995-04-16', Call: '010-3021-8772', Email: 'dh.kim@example.com', posiID: 10007, departID: 30005, pwd: '50006a30005' },
    { memberID: 50007, Name: '윤서영', Birthday: '1992-06-01', Call: '010-5902-4887', Email: 'sy.yoon@example.com', posiID: 10008, departID: 30003, pwd: '50007a30003' },
    { memberID: 50008, Name: '한지훈', Birthday: '1985-10-28', Call: '010-8210-1345', Email: 'jh.han@example.com', posiID: 10002, departID: 30001, pwd: '50008a30001' },
    { memberID: 50009, Name: '서민재', Birthday: '1991-11-09', Call: '010-4123-9832', Email: 'mj.seo@example.com', posiID: 10005, departID: 30002, pwd: '50009a30002' },
    { memberID: 50010, Name: '오세영', Birthday: '1994-02-25', Call: '010-7432-6870', Email: 'sy.oh@example.com', posiID: 10009, departID: 30004, pwd: '50010a30004' },
    { memberID: 50011, Name: '배정우', Birthday: '1989-08-13', Call: '010-9340-6289', Email: 'jw.bae@example.com', posiID: 10004, departID: 30001, pwd: '50011a30001' },
    { memberID: 50012, Name: '임하늘', Birthday: '1996-05-19', Call: '010-2673-7451', Email: 'hn.lim@example.com', posiID: 10009, departID: 30002, pwd: '50012a30002' },
    { memberID: 50013, Name: '문가영', Birthday: '1993-10-03', Call: '010-3876-1183', Email: 'gy.moon@example.com', posiID: 10007, departID: 30004, pwd: '50013a30004' },
    { memberID: 50014, Name: '조현우', Birthday: '1987-07-07', Call: '010-1459-7833', Email: 'hw.cho@example.com', posiID: 10008, departID: 30005, pwd: '50014a30005' },
    { memberID: 50015, Name: '홍지민', Birthday: '1992-01-31', Call: '010-6128-3955', Email: 'jm.hong@example.com', posiID: 10006, departID: 30001, pwd: '50015a30001' }
]

// 4.1. get 직원 리스트 
function getMemberList() {
    let memberList = localStorage.getItem('memberList')

    if (memberList == null) {
        memberList = [];
    } else {
        memberList = JSON.parse(memberList);
    };
    return memberList;
};

// 4.2. set 직원 리스트
function setMemberList(memberList) {
    localStorage.setItem('memberList', JSON.stringify(memberList));
};

// 4.3. 직원id <-> 직원 이름 변환 함수
function changeMemberName() {
    let input = document.querySelector("#test3input").value
    let html = ``
    for (let i = 0; i < memberList.length; i++) {
        let member = memberList[i];
        if (member.memberID == input) {
            html += `${member.Name}`
        }
        else if (member.Name == input) {
            html += `${member.memberID}`
        };
    };
    document.querySelector('#test3result').innerHTML = html
}; // 이걸 응용하라는 의미로 이걸 그대로 가져다 쓰면 당연히 에러남 -옹-


// 5. 근태 리스트  =======================================
const attendaceList = [
    { attendID: 100001, memberID: 50001, date: '2025-05-01', attentTime: '08:32', leaveTime: '18:19' },
    { attendID: 100002, memberID: 50002, date: '2025-05-01', attentTime: '08:32', leaveTime: '18:21' },
    { attendID: 100003, memberID: 50003, date: '2025-05-01', attentTime: '08:51', leaveTime: '18:05' },
    { attendID: 100004, memberID: 50004, date: '2025-05-01', attentTime: '08:52', leaveTime: '18:01' },
    { attendID: 100005, memberID: 50005, date: '2025-05-01', attentTime: '09:05', leaveTime: '18:29' },
    { attendID: 100006, memberID: 50006, date: '2025-05-01', attentTime: '08:37', leaveTime: '18:03' },
    { attendID: 100007, memberID: 50007, date: '2025-05-01', attentTime: '08:55', leaveTime: '18:19' },  
    { attendID: 100008, memberID: 50008, date: '2025-05-01', attentTime: '08:57', leaveTime: '18:10' },
    { attendID: 100009, memberID: 50009, date: '2025-05-01', attentTime: '08:37', leaveTime: '18:29' },
    { attendID: 100010, memberID: 50010, date: '2025-05-01', attentTime: '08:37', leaveTime: '18:25' },
    { attendID: 100011, memberID: 50011, date: '2025-05-01', attentTime: '09:27', leaveTime: '18:05' },
    { attendID: 100012, memberID: 50012, date: '2025-05-01', attentTime: '08:45', leaveTime: '18:10' },
    { attendID: 100013, memberID: 50013, date: '2025-05-01', attentTime: '08:44', leaveTime: '18:11' },
    { attendID: 100014, memberID: 50014, date: '2025-05-01', attentTime: '08:49', leaveTime: '18:18' },
    { attendID: 100015, memberID: 50015, date: '2025-05-01', attentTime: '08:51', leaveTime: '18:09' },
    { attendID: 100016, memberID: 50001, date: '2025-05-02', attentTime: '08:55', leaveTime: '18:29' },
    { attendID: 100017, memberID: 50002, date: '2025-05-02', attentTime: '08:56', leaveTime: '18:05' },
    { attendID: 100018, memberID: 50003, date: '2025-05-02', attentTime: '08:34', leaveTime: '18:00' },
    { attendID: 100019, memberID: 50004, date: '2025-05-02', attentTime: '09:10', leaveTime: '18:02' },
    { attendID: 100020, memberID: 50005, date: '2025-05-02', attentTime: '08:57', leaveTime: '18:04' },
    { attendID: 100021, memberID: 50006, date: '2025-05-02', attentTime: '08:49', leaveTime: '18:24' },
    { attendID: 100022, memberID: 50007, date: '2025-05-02', attentTime: '08:33', leaveTime: '18:00' },
    { attendID: 100023, memberID: 50008, date: '2025-05-02', attentTime: '08:56', leaveTime: '18:01' },
    { attendID: 100024, memberID: 50009, date: '2025-05-02', attentTime: '08:41', leaveTime: '18:03' },
    { attendID: 100025, memberID: 50010, date: '2025-05-02', attentTime: '08:41', leaveTime: '18:17' },
    { attendID: 100026, memberID: 50011, date: '2025-05-02', attentTime: '08:54', leaveTime: '18:08' },
    { attendID: 100027, memberID: 50012, date: '2025-05-02', attentTime: '08:40', leaveTime: '18:17' },
    { attendID: 100028, memberID: 50013, date: '2025-05-02', attentTime: '08:31', leaveTime: '18:26' },
    { attendID: 100029, memberID: 50014, date: '2025-05-02', attentTime: '08:43', leaveTime: '18:17' },
    { attendID: 100030, memberID: 50015, date: '2025-05-02', attentTime: '08:39', leaveTime: '18:02' },
    { attendID: 100031, memberID: 50001, date: '2025-05-07', attentTime: '08:39', leaveTime: '18:04' },
    { attendID: 100032, memberID: 50002, date: '2025-05-07', attentTime: '08:59', leaveTime: '18:27' },
    { attendID: 100033, memberID: 50003, date: '2025-05-07', attentTime: '08:55', leaveTime: '18:12' },
    { attendID: 100034, memberID: 50004, date: '2025-05-07', attentTime: '08:49', leaveTime: '18:24' },
    { attendID: 100035, memberID: 50005, date: '2025-05-07', attentTime: '08:36', leaveTime: '18:16' },
    { attendID: 100036, memberID: 50006, date: '2025-05-07', attentTime: '08:50', leaveTime: '18:05' },
    { attendID: 100037, memberID: 50007, date: '2025-05-07', attentTime: '08:55', leaveTime: '18:17' },
    { attendID: 100038, memberID: 50008, date: '2025-05-07', attentTime: '08:38', leaveTime: '18:16' },
    { attendID: 100039, memberID: 50009, date: '2025-05-07', attentTime: '08:37', leaveTime: '18:06' },
    { attendID: 100040, memberID: 50010, date: '2025-05-07', attentTime: '08:36', leaveTime: '18:15' },
    { attendID: 100041, memberID: 50011, date: '2025-05-07', attentTime: '08:44', leaveTime: '18:13' },
    { attendID: 100042, memberID: 50012, date: '2025-05-07', attentTime: '08:56', leaveTime: '18:25' },
    { attendID: 100043, memberID: 50013, date: '2025-05-07', attentTime: '08:53', leaveTime: '18:30' },
    { attendID: 100044, memberID: 50014, date: '2025-05-07', attentTime: '08:58', leaveTime: '18:05' },
    { attendID: 100045, memberID: 50015, date: '2025-05-07', attentTime: '08:59', leaveTime: '18:11' },
    { attendID: 100046, memberID: 50001, date: '2025-05-08', attentTime: '08:37', leaveTime: '18:20' },
    { attendID: 100047, memberID: 50002, date: '2025-05-08', attentTime: '08:32', leaveTime: '18:15' },
    { attendID: 100048, memberID: 50003, date: '2025-05-08', attentTime: '08:46', leaveTime: '18:25' },
    { attendID: 100049, memberID: 50004, date: '2025-05-08', attentTime: '08:38', leaveTime: '18:06' },
    { attendID: 100050, memberID: 50005, date: '2025-05-08', attentTime: '08:35', leaveTime: '18:04' },
    { attendID: 100051, memberID: 50006, date: '2025-05-08', attentTime: '09:15', leaveTime: '18:08' },
    { attendID: 100052, memberID: 50007, date: '2025-05-08', attentTime: '08:56', leaveTime: '18:10' },
    { attendID: 100053, memberID: 50008, date: '2025-05-08', attentTime: '08:35', leaveTime: '18:05' },
    { attendID: 100054, memberID: 50009, date: '2025-05-08', attentTime: '08:39', leaveTime: '18:25' },
    { attendID: 100055, memberID: 50010, date: '2025-05-08', attentTime: '08:43', leaveTime: '18:15' },
    { attendID: 100056, memberID: 50011, date: '2025-05-08', attentTime: '08:37', leaveTime: '18:30' },
    { attendID: 100057, memberID: 50012, date: '2025-05-08', attentTime: '08:40', leaveTime: '18:20' },
    { attendID: 100058, memberID: 50013, date: '2025-05-08', attentTime: '08:36', leaveTime: '18:17' },
    { attendID: 100059, memberID: 50014, date: '2025-05-08', attentTime: '08:37', leaveTime: '18:14' },
    { attendID: 100060, memberID: 50015, date: '2025-05-08', attentTime: '08:38', leaveTime: '18:10' },
    { attendID: 100061, memberID: 50001, date: '2025-05-09', attentTime: '08:57', leaveTime: '18:29' },
    { attendID: 100062, memberID: 50002, date: '2025-05-09', attentTime: '08:36', leaveTime: '18:10' },
    { attendID: 100063, memberID: 50003, date: '2025-05-09', attentTime: '08:35', leaveTime: '18:12' },
    { attendID: 100064, memberID: 50004, date: '2025-05-09', attentTime: '08:55', leaveTime: '18:16' },
    { attendID: 100065, memberID: 50005, date: '2025-05-09', attentTime: '08:36', leaveTime: '18:14' },
    { attendID: 100066, memberID: 50006, date: '2025-05-09', attentTime: '08:40', leaveTime: '18:28' },
    { attendID: 100067, memberID: 50007, date: '2025-05-09', attentTime: '08:47', leaveTime: '18:00' },
    { attendID: 100068, memberID: 50008, date: '2025-05-09', attentTime: '08:44', leaveTime: '18:19' },
    { attendID: 100069, memberID: 50009, date: '2025-05-09', attentTime: '08:39', leaveTime: '18:07' },
    { attendID: 100070, memberID: 50010, date: '2025-05-09', attentTime: '08:42', leaveTime: '18:27' },
    { attendID: 100071, memberID: 50011, date: '2025-05-09', attentTime: '08:31', leaveTime: '18:00' },
    { attendID: 100072, memberID: 50012, date: '2025-05-09', attentTime: '08:37', leaveTime: '18:18' },
    { attendID: 100073, memberID: 50013, date: '2025-05-09', attentTime: '08:43', leaveTime: '18:04' },
    { attendID: 100074, memberID: 50014, date: '2025-05-09', attentTime: '08:34', leaveTime: '18:12' },
    { attendID: 100075, memberID: 50015, date: '2025-05-09', attentTime: '08:50', leaveTime: '18:08' },
    { attendID: 100076, memberID: 50001, date: '2025-05-12', attentTime: '08:47', leaveTime: '18:23' },
    { attendID: 100077, memberID: 50002, date: '2025-05-12', attentTime: '08:42', leaveTime: '18:26' },
    { attendID: 100078, memberID: 50003, date: '2025-05-12', attentTime: '08:56', leaveTime: '18:05' },
    { attendID: 100079, memberID: 50004, date: '2025-05-12', attentTime: '08:38', leaveTime: '18:30' },
    { attendID: 100080, memberID: 50005, date: '2025-05-12', attentTime: '08:48', leaveTime: '18:22' },
    { attendID: 100081, memberID: 50006, date: '2025-05-12', attentTime: '08:48', leaveTime: '18:28' },
    { attendID: 100082, memberID: 50007, date: '2025-05-12', attentTime: '08:53', leaveTime: '18:22' },
    { attendID: 100083, memberID: 50008, date: '2025-05-12', attentTime: '09:00', leaveTime: '18:25' },
    { attendID: 100084, memberID: 50009, date: '2025-05-12', attentTime: '08:47', leaveTime: '18:27' },
    { attendID: 100085, memberID: 50010, date: '2025-05-12', attentTime: '08:36', leaveTime: '18:24' },
    { attendID: 100086, memberID: 50011, date: '2025-05-12', attentTime: '08:57', leaveTime: '18:16' },
    { attendID: 100087, memberID: 50012, date: '2025-05-12', attentTime: '08:54', leaveTime: '18:05' },
    { attendID: 100088, memberID: 50013, date: '2025-05-12', attentTime: '08:40', leaveTime: '18:06' },
    { attendID: 100089, memberID: 50014, date: '2025-05-12', attentTime: '08:31', leaveTime: '18:30' },
    { attendID: 100090, memberID: 50015, date: '2025-05-12', attentTime: '08:49', leaveTime: '18:23' },
    { attendID: 100091, memberID: 50001, date: '2025-05-13', attentTime: '08:58', leaveTime: '18:15' },
    { attendID: 100092, memberID: 50002, date: '2025-05-13', attentTime: '08:42', leaveTime: '18:16' },
    { attendID: 100093, memberID: 50003, date: '2025-05-13', attentTime: '08:38', leaveTime: '18:27' },
    { attendID: 100094, memberID: 50004, date: '2025-05-13', attentTime: '08:36', leaveTime: '18:09' },
    { attendID: 100095, memberID: 50005, date: '2025-05-13', attentTime: '08:55', leaveTime: '18:20' },
    { attendID: 100096, memberID: 50006, date: '2025-05-13', attentTime: '08:41', leaveTime: '18:06' },
    { attendID: 100097, memberID: 50007, date: '2025-05-13', attentTime: '08:36', leaveTime: '18:26' },
    { attendID: 100098, memberID: 50008, date: '2025-05-13', attentTime: '08:51', leaveTime: '18:27' },
    { attendID: 100099, memberID: 50009, date: '2025-05-13', attentTime: '08:52', leaveTime: '18:19' },
    { attendID: 100100, memberID: 50010, date: '2025-05-13', attentTime: '08:36', leaveTime: '18:06' },
    { attendID: 100101, memberID: 50011, date: '2025-05-13', attentTime: '08:43', leaveTime: '18:09' },
    { attendID: 100102, memberID: 50012, date: '2025-05-13', attentTime: '08:39', leaveTime: '18:10' },
    { attendID: 100103, memberID: 50013, date: '2025-05-13', attentTime: '08:52', leaveTime: '18:25' },
    { attendID: 100104, memberID: 50014, date: '2025-05-13', attentTime: '08:50', leaveTime: '18:28' },
    { attendID: 100105, memberID: 50015, date: '2025-05-13', attentTime: '08:45', leaveTime: '18:18' },
    { attendID: 100106, memberID: 50001, date: '2025-05-14', attentTime: '08:58', leaveTime: '18:24' },
    { attendID: 100107, memberID: 50002, date: '2025-05-14', attentTime: '08:39', leaveTime: '18:19' },
    { attendID: 100108, memberID: 50003, date: '2025-05-14', attentTime: '08:37', leaveTime: '18:18' },
    { attendID: 100109, memberID: 50004, date: '2025-05-14', attentTime: '08:39', leaveTime: '18:16' },
    { attendID: 100110, memberID: 50005, date: '2025-05-14', attentTime: '08:37', leaveTime: '18:30' },
    { attendID: 100111, memberID: 50006, date: '2025-05-14', attentTime: '08:50', leaveTime: '18:03' },
    { attendID: 100112, memberID: 50007, date: '2025-05-14', attentTime: '08:42', leaveTime: '18:02' },
    { attendID: 100113, memberID: 50008, date: '2025-05-14', attentTime: '08:57', leaveTime: '18:25' },
    { attendID: 100114, memberID: 50009, date: '2025-05-14', attentTime: '08:49', leaveTime: '18:27' },
    { attendID: 100115, memberID: 50010, date: '2025-05-14', attentTime: '08:41', leaveTime: '18:20' },
    { attendID: 100116, memberID: 50011, date: '2025-05-14', attentTime: '09:07', leaveTime: '18:13' },
    { attendID: 100117, memberID: 50012, date: '2025-05-14', attentTime: '08:55', leaveTime: '18:10' },
    { attendID: 100118, memberID: 50013, date: '2025-05-14', attentTime: '08:49', leaveTime: '18:18' },
    { attendID: 100119, memberID: 50014, date: '2025-05-14', attentTime: '08:36', leaveTime: '18:10' },
    { attendID: 100120, memberID: 50015, date: '2025-05-14', attentTime: '08:35', leaveTime: '18:06' },
    { attendID: 100121, memberID: 50001, date: '2025-05-15', attentTime: '08:37', leaveTime: '18:20' },
    { attendID: 100122, memberID: 50002, date: '2025-05-15', attentTime: '08:53', leaveTime: '18:26' },
    { attendID: 100123, memberID: 50003, date: '2025-05-15', attentTime: '08:39', leaveTime: '18:06' },
    { attendID: 100124, memberID: 50004, date: '2025-05-15', attentTime: '08:56', leaveTime: '18:07' },
    { attendID: 100125, memberID: 50005, date: '2025-05-15', attentTime: '08:59', leaveTime: '18:02' },
    { attendID: 100126, memberID: 50006, date: '2025-05-15', attentTime: '08:58', leaveTime: '18:29' },
    { attendID: 100127, memberID: 50007, date: '2025-05-15', attentTime: '08:31', leaveTime: '18:22' },
    { attendID: 100128, memberID: 50008, date: '2025-05-15', attentTime: '08:46', leaveTime: '18:19' },
    { attendID: 100129, memberID: 50009, date: '2025-05-15', attentTime: '08:38', leaveTime: '18:22' },
    { attendID: 100130, memberID: 50010, date: '2025-05-15', attentTime: '08:48', leaveTime: '18:19' },
    { attendID: 100131, memberID: 50011, date: '2025-05-15', attentTime: '08:58', leaveTime: '18:17' },
    { attendID: 100132, memberID: 50012, date: '2025-05-15', attentTime: '08:43', leaveTime: '18:03' },
    { attendID: 100133, memberID: 50013, date: '2025-05-15', attentTime: '08:54', leaveTime: '18:23' },
    { attendID: 100134, memberID: 50014, date: '2025-05-15', attentTime: '08:43', leaveTime: '18:30' },
    { attendID: 100135, memberID: 50015, date: '2025-05-15', attentTime: '08:41', leaveTime: '18:23' },
    { attendID: 100136, memberID: 50001, date: '2025-05-16', attentTime: '08:46', leaveTime: '18:18' },
    { attendID: 100137, memberID: 50002, date: '2025-05-16', attentTime: '08:36', leaveTime: '18:10' },
    { attendID: 100138, memberID: 50003, date: '2025-05-16', attentTime: '08:46', leaveTime: '18:21' },
    { attendID: 100139, memberID: 50004, date: '2025-05-16', attentTime: '08:38', leaveTime: '18:21' },
    { attendID: 100140, memberID: 50005, date: '2025-05-16', attentTime: '08:57', leaveTime: '18:10' },
    { attendID: 100141, memberID: 50006, date: '2025-05-16', attentTime: '08:34', leaveTime: '18:23' },
    { attendID: 100142, memberID: 50007, date: '2025-05-16', attentTime: '08:31', leaveTime: '18:05' },
    { attendID: 100143, memberID: 50008, date: '2025-05-16', attentTime: '08:56', leaveTime: '18:25' },
    { attendID: 100144, memberID: 50009, date: '2025-05-16', attentTime: '08:40', leaveTime: '18:11' },
    { attendID: 100145, memberID: 50010, date: '2025-05-16', attentTime: '08:59', leaveTime: '18:16' },
    { attendID: 100146, memberID: 50011, date: '2025-05-16', attentTime: '08:33', leaveTime: '18:17' },
    { attendID: 100147, memberID: 50012, date: '2025-05-16', attentTime: '08:54', leaveTime: '18:29' },
    { attendID: 100148, memberID: 50013, date: '2025-05-16', attentTime: '08:48', leaveTime: '18:13' },
    { attendID: 100149, memberID: 50014, date: '2025-05-16', attentTime: '08:43', leaveTime: '18:22' },
    { attendID: 100150, memberID: 50015, date: '2025-05-16', attentTime: '08:37', leaveTime: '18:30' },
    { attendID: 100151, memberID: 50001, date: '2025-05-19', attentTime: '08:52', leaveTime: '18:05' },
    { attendID: 100152, memberID: 50002, date: '2025-05-19', attentTime: '08:48', leaveTime: '18:20' },
    { attendID: 100153, memberID: 50003, date: '2025-05-19', attentTime: '08:56', leaveTime: '18:23' },
    { attendID: 100154, memberID: 50004, date: '2025-05-19', attentTime: '08:38', leaveTime: '18:10' },
    { attendID: 100155, memberID: 50005, date: '2025-05-19', attentTime: '08:38', leaveTime: '18:29' },
    { attendID: 100156, memberID: 50006, date: '2025-05-19', attentTime: '08:42', leaveTime: '18:08' },
    { attendID: 100157, memberID: 50007, date: '2025-05-19', attentTime: '08:30', leaveTime: '18:17' },
    { attendID: 100158, memberID: 50008, date: '2025-05-19', attentTime: '08:56', leaveTime: '18:01' },
    { attendID: 100159, memberID: 50009, date: '2025-05-19', attentTime: '09:05', leaveTime: '18:27' },
    { attendID: 100160, memberID: 50010, date: '2025-05-19', attentTime: '08:46', leaveTime: '18:22' },
    { attendID: 100161, memberID: 50011, date: '2025-05-19', attentTime: '08:33', leaveTime: '18:17' },
    { attendID: 100162, memberID: 50012, date: '2025-05-19', attentTime: '08:48', leaveTime: '18:08' },
    { attendID: 100163, memberID: 50013, date: '2025-05-19', attentTime: '08:32', leaveTime: '18:00' },
    { attendID: 100164, memberID: 50014, date: '2025-05-19', attentTime: '08:46', leaveTime: '18:09' },
    { attendID: 100165, memberID: 50015, date: '2025-05-19', attentTime: '08:36', leaveTime: '18:23' },
    { attendID: 100166, memberID: 50001, date: '2025-05-20', attentTime: '08:50', leaveTime: '18:07' },
    { attendID: 100167, memberID: 50002, date: '2025-05-20', attentTime: '08:36', leaveTime: '18:04' },
    { attendID: 100168, memberID: 50003, date: '2025-05-20', attentTime: '08:38', leaveTime: '18:01' },
    { attendID: 100169, memberID: 50004, date: '2025-05-20', attentTime: '08:53', leaveTime: '18:08' },
    { attendID: 100170, memberID: 50005, date: '2025-05-20', attentTime: '08:33', leaveTime: '18:18' },
    { attendID: 100171, memberID: 50006, date: '2025-05-20', attentTime: '08:38', leaveTime: '18:30' },
    { attendID: 100172, memberID: 50007, date: '2025-05-20', attentTime: '08:35', leaveTime: '18:19' },
    { attendID: 100173, memberID: 50008, date: '2025-05-20', attentTime: '08:56', leaveTime: '18:18' },
    { attendID: 100174, memberID: 50009, date: '2025-05-20', attentTime: '08:45', leaveTime: '18:08' },
    { attendID: 100175, memberID: 50010, date: '2025-05-20', attentTime: '08:43', leaveTime: '18:30' },
    { attendID: 100176, memberID: 50011, date: '2025-05-20', attentTime: '08:51', leaveTime: '18:13' },
    { attendID: 100177, memberID: 50012, date: '2025-05-20', attentTime: '08:32', leaveTime: '18:15' },
    { attendID: 100178, memberID: 50013, date: '2025-05-20', attentTime: '08:58', leaveTime: '18:16' },
    { attendID: 100179, memberID: 50014, date: '2025-05-20', attentTime: '08:44', leaveTime: '18:13' },
    { attendID: 100180, memberID: 50015, date: '2025-05-20', attentTime: '08:54', leaveTime: '18:29' },
    { attendID: 100181, memberID: 50001, date: '2025-05-21', attentTime: '08:55', leaveTime: '18:14' },
    { attendID: 100182, memberID: 50002, date: '2025-05-21', attentTime: '08:38', leaveTime: '18:03' },
    { attendID: 100183, memberID: 50003, date: '2025-05-21', attentTime: '08:48', leaveTime: '18:24' },
    { attendID: 100184, memberID: 50004, date: '2025-05-21', attentTime: '08:59', leaveTime: '18:29' },
    { attendID: 100185, memberID: 50005, date: '2025-05-21', attentTime: '08:43', leaveTime: '18:21' },
    { attendID: 100186, memberID: 50006, date: '2025-05-21', attentTime: '08:38', leaveTime: '18:01' },
    { attendID: 100187, memberID: 50007, date: '2025-05-21', attentTime: '08:55', leaveTime: '18:26' },
    { attendID: 100188, memberID: 50008, date: '2025-05-21', attentTime: '08:45', leaveTime: '18:09' },
    { attendID: 100189, memberID: 50009, date: '2025-05-21', attentTime: '08:46', leaveTime: '18:04' },
    { attendID: 100190, memberID: 50010, date: '2025-05-21', attentTime: '08:46', leaveTime: '18:07' },
    { attendID: 100191, memberID: 50011, date: '2025-05-21', attentTime: '08:54', leaveTime: '18:07' },
    { attendID: 100192, memberID: 50012, date: '2025-05-21', attentTime: '08:40', leaveTime: '18:11' },
    { attendID: 100193, memberID: 50013, date: '2025-05-21', attentTime: '08:41', leaveTime: '18:01' },
    { attendID: 100194, memberID: 50014, date: '2025-05-21', attentTime: '08:49', leaveTime: '18:26' },
    { attendID: 100195, memberID: 50015, date: '2025-05-21', attentTime: '08:40', leaveTime: '18:27' },
    { attendID: 100196, memberID: 50001, date: '2025-05-22', attentTime: '08:39', leaveTime: '18:01' },
    { attendID: 100197, memberID: 50002, date: '2025-05-22', attentTime: '08:30', leaveTime: '18:04' },
    { attendID: 100198, memberID: 50003, date: '2025-05-22', attentTime: '08:45', leaveTime: '18:03' },
    { attendID: 100199, memberID: 50004, date: '2025-05-22', attentTime: '09:22', leaveTime: '18:28' },
    { attendID: 100200, memberID: 50005, date: '2025-05-22', attentTime: '09:12', leaveTime: '18:07' },
    { attendID: 100201, memberID: 50006, date: '2025-05-22', attentTime: '08:49', leaveTime: '18:12' },
    { attendID: 100202, memberID: 50007, date: '2025-05-22', attentTime: '08:51', leaveTime: '18:29' },
    { attendID: 100203, memberID: 50008, date: '2025-05-22', attentTime: '08:56', leaveTime: '18:07' },
    { attendID: 100204, memberID: 50009, date: '2025-05-22', attentTime: '08:32', leaveTime: '18:11' },
    { attendID: 100205, memberID: 50010, date: '2025-05-22', attentTime: '08:39', leaveTime: '18:28' },
    { attendID: 100206, memberID: 50011, date: '2025-05-22', attentTime: '08:58', leaveTime: '18:22' },
    { attendID: 100207, memberID: 50012, date: '2025-05-22', attentTime: '08:34', leaveTime: '18:17' },
    { attendID: 100208, memberID: 50013, date: '2025-05-22', attentTime: '08:44', leaveTime: '18:10' },
    { attendID: 100209, memberID: 50015, date: '2025-05-22', attentTime: '08:51', leaveTime: '18:25' },
    { attendID: 100210, memberID: 50001, date: '2025-05-23', attentTime: '08:40', leaveTime: '18:10' },
    { attendID: 100211, memberID: 50002, date: '2025-05-23', attentTime: '08:35', leaveTime: '18:26' },
    { attendID: 100212, memberID: 50003, date: '2025-05-23', attentTime: '08:31', leaveTime: '18:10' },
    { attendID: 100213, memberID: 50004, date: '2025-05-23', attentTime: '08:51', leaveTime: '18:25' },
    { attendID: 100214, memberID: 50005, date: '2025-05-23', attentTime: '08:55', leaveTime: '18:04' },
    { attendID: 100215, memberID: 50006, date: '2025-05-23', attentTime: '08:53', leaveTime: '18:06' },
    { attendID: 100216, memberID: 50007, date: '2025-05-23', attentTime: '08:54', leaveTime: '18:05' },
    { attendID: 100217, memberID: 50008, date: '2025-05-23', attentTime: '08:43', leaveTime: '18:23' },
    { attendID: 100218, memberID: 50009, date: '2025-05-23', attentTime: '08:42', leaveTime: '18:23' },
    { attendID: 100219, memberID: 50010, date: '2025-05-23', attentTime: '08:55', leaveTime: '18:06' },
    { attendID: 100220, memberID: 50011, date: '2025-05-23', attentTime: '08:35', leaveTime: '18:13' },
    { attendID: 100221, memberID: 50012, date: '2025-05-23', attentTime: '08:58', leaveTime: '18:05' },
    { attendID: 100222, memberID: 50013, date: '2025-05-23', attentTime: '08:44', leaveTime: '18:23' },
    { attendID: 100223, memberID: 50014, date: '2025-05-23', attentTime: '08:33', leaveTime: '18:20' },
    { attendID: 100224, memberID: 50015, date: '2025-05-23', attentTime: '08:42', leaveTime: '18:16' },
    { attendID: 100225, memberID: 50001, date: '2025-05-26', attentTime: '08:54', leaveTime: '18:11' },
    { attendID: 100226, memberID: 50002, date: '2025-05-26', attentTime: '08:53', leaveTime: '18:19' },
    { attendID: 100227, memberID: 50003, date: '2025-05-26', attentTime: '08:37', leaveTime: '18:09' },
    { attendID: 100228, memberID: 50004, date: '2025-05-26', attentTime: '08:44', leaveTime: '18:28' },
    { attendID: 100229, memberID: 50005, date: '2025-05-26', attentTime: '08:47', leaveTime: '18:19' },
    { attendID: 100230, memberID: 50006, date: '2025-05-26', attentTime: '09:13', leaveTime: '18:22' },
    { attendID: 100231, memberID: 50007, date: '2025-05-26', attentTime: '09:04', leaveTime: '18:16' },
    { attendID: 100232, memberID: 50008, date: '2025-05-26', attentTime: '09:22', leaveTime: '18:12' },
    { attendID: 100233, memberID: 50009, date: '2025-05-26', attentTime: '08:59', leaveTime: '18:22' },
    { attendID: 100234, memberID: 50010, date: '2025-05-26', attentTime: '08:44', leaveTime: '18:06' },
    { attendID: 100235, memberID: 50011, date: '2025-05-26', attentTime: '08:32', leaveTime: '18:22' },
    { attendID: 100236, memberID: 50012, date: '2025-05-26', attentTime: '08:41', leaveTime: '18:09' },
    { attendID: 100237, memberID: 50013, date: '2025-05-26', attentTime: '08:53', leaveTime: '18:01' },
    { attendID: 100238, memberID: 50014, date: '2025-05-26', attentTime: '08:45', leaveTime: '18:12' },
    { attendID: 100239, memberID: 50015, date: '2025-05-26', attentTime: '08:49', leaveTime: '18:12' },
    { attendID: 100240, memberID: 50001, date: '2025-05-27', attentTime: '08:47', leaveTime: '18:11' },
    { attendID: 100241, memberID: 50002, date: '2025-05-27', attentTime: '08:53', leaveTime: '18:26' },
    { attendID: 100242, memberID: 50003, date: '2025-05-27', attentTime: '08:32', leaveTime: '18:23' },
    { attendID: 100243, memberID: 50004, date: '2025-05-27', attentTime: '08:59', leaveTime: '18:04' },
    { attendID: 100244, memberID: 50005, date: '2025-05-27', attentTime: '08:36', leaveTime: '18:14' },
    { attendID: 100245, memberID: 50006, date: '2025-05-27', attentTime: '08:52', leaveTime: '18:00' },
    { attendID: 100246, memberID: 50007, date: '2025-05-27', attentTime: '08:38', leaveTime: '18:00' },
    { attendID: 100247, memberID: 50008, date: '2025-05-27', attentTime: '08:51', leaveTime: '18:22' },
    { attendID: 100248, memberID: 50009, date: '2025-05-27', attentTime: '08:41', leaveTime: '18:04' },
    { attendID: 100249, memberID: 50011, date: '2025-05-27', attentTime: '08:49', leaveTime: '18:19' },
    { attendID: 100250, memberID: 50012, date: '2025-05-27', attentTime: '09:26', leaveTime: '18:22' },
    { attendID: 100251, memberID: 50013, date: '2025-05-27', attentTime: '08:48', leaveTime: '18:05' },
    { attendID: 100252, memberID: 50014, date: '2025-05-27', attentTime: '08:59', leaveTime: '18:00' },
    { attendID: 100253, memberID: 50015, date: '2025-05-27', attentTime: '08:36', leaveTime: '18:25' },
    { attendID: 100254, memberID: 50001, date: '2025-05-28', attentTime: '08:34', leaveTime: '18:24' },
    { attendID: 100255, memberID: 50002, date: '2025-05-28', attentTime: '08:52', leaveTime: '18:19' },
    { attendID: 100256, memberID: 50003, date: '2025-05-28', attentTime: '08:38', leaveTime: '18:00' },
    { attendID: 100257, memberID: 50004, date: '2025-05-28', attentTime: '08:46', leaveTime: '18:09' },
    { attendID: 100258, memberID: 50005, date: '2025-05-28', attentTime: '08:31', leaveTime: '18:09' },
    { attendID: 100259, memberID: 50006, date: '2025-05-28', attentTime: '08:58', leaveTime: '18:13' },
    { attendID: 100260, memberID: 50007, date: '2025-05-28', attentTime: '08:39', leaveTime: '18:27' },
    { attendID: 100261, memberID: 50008, date: '2025-05-28', attentTime: '08:55', leaveTime: '18:28' },
    { attendID: 100262, memberID: 50009, date: '2025-05-28', attentTime: '08:38', leaveTime: '18:10' },
    { attendID: 100263, memberID: 50010, date: '2025-05-28', attentTime: '08:55', leaveTime: '18:00' },
    { attendID: 100264, memberID: 50011, date: '2025-05-28', attentTime: '08:37', leaveTime: '18:18' },
    { attendID: 100265, memberID: 50012, date: '2025-05-28', attentTime: '08:38', leaveTime: '18:24' },
    { attendID: 100266, memberID: 50013, date: '2025-05-28', attentTime: '08:45', leaveTime: '18:08' },
    { attendID: 100267, memberID: 50014, date: '2025-05-28', attentTime: '08:58', leaveTime: '18:18' },
    { attendID: 100268, memberID: 50015, date: '2025-05-28', attentTime: '08:45', leaveTime: '18:14' },
    { attendID: 100269, memberID: 50001, date: '2025-05-29', attentTime: '08:42', leaveTime: '18:11' },
    { attendID: 100270, memberID: 50002, date: '2025-05-29', attentTime: '08:45', leaveTime: '18:13' },
    { attendID: 100271, memberID: 50003, date: '2025-05-29', attentTime: '08:35', leaveTime: '18:15' },
    { attendID: 100272, memberID: 50004, date: '2025-05-29', attentTime: '08:50', leaveTime: '18:17' },
    { attendID: 100273, memberID: 50005, date: '2025-05-29', attentTime: '08:48', leaveTime: '18:16' },
    { attendID: 100274, memberID: 50006, date: '2025-05-29', attentTime: '08:37', leaveTime: '18:03' },
    { attendID: 100275, memberID: 50007, date: '2025-05-29', attentTime: '08:30', leaveTime: '18:12' },
    { attendID: 100276, memberID: 50008, date: '2025-05-29', attentTime: '08:47', leaveTime: '18:11' },
    { attendID: 100277, memberID: 50009, date: '2025-05-29', attentTime: '08:45', leaveTime: '18:08' },
    { attendID: 100278, memberID: 50010, date: '2025-05-29', attentTime: '08:48', leaveTime: '18:11' },
    { attendID: 100279, memberID: 50011, date: '2025-05-29', attentTime: '08:42', leaveTime: '18:16' },
    { attendID: 100280, memberID: 50012, date: '2025-05-29', attentTime: '08:48', leaveTime: '18:28' },
    { attendID: 100281, memberID: 50013, date: '2025-05-29', attentTime: '09:01', leaveTime: '18:27' },
    { attendID: 100282, memberID: 50014, date: '2025-05-29', attentTime: '08:36', leaveTime: '18:22' },
    { attendID: 100283, memberID: 50015, date: '2025-05-29', attentTime: '08:47', leaveTime: '18:00' },
    { attendID: 100284, memberID: 50001, date: '2025-05-30', attentTime: '08:50', leaveTime: '18:00' },
    { attendID: 100285, memberID: 50002, date: '2025-05-30', attentTime: '08:30', leaveTime: '18:30' },
    { attendID: 100286, memberID: 50003, date: '2025-05-30', attentTime: '08:59', leaveTime: '18:22' },
    { attendID: 100287, memberID: 50004, date: '2025-05-30', attentTime: '08:45', leaveTime: '18:04' },
    { attendID: 100288, memberID: 50005, date: '2025-05-30', attentTime: '08:57', leaveTime: '18:09' },
    { attendID: 100289, memberID: 50006, date: '2025-05-30', attentTime: '08:31', leaveTime: '18:15' },
    { attendID: 100290, memberID: 50008, date: '2025-05-30', attentTime: '08:32', leaveTime: '18:17' },
    { attendID: 100291, memberID: 50009, date: '2025-05-30', attentTime: '08:58', leaveTime: '18:06' },
    { attendID: 100292, memberID: 50010, date: '2025-05-30', attentTime: '08:36', leaveTime: '18:28' },
    { attendID: 100293, memberID: 50011, date: '2025-05-30', attentTime: '08:30', leaveTime: '18:17' },
    { attendID: 100294, memberID: 50012, date: '2025-05-30', attentTime: '08:47', leaveTime: '18:10' },
    { attendID: 100295, memberID: 50013, date: '2025-05-30', attentTime: '08:49', leaveTime: '18:08' },
    { attendID: 100296, memberID: 50014, date: '2025-05-30', attentTime: '08:36', leaveTime: '18:13' },
    { attendID: 100297, memberID: 50015, date: '2025-05-30', attentTime: '08:37', leaveTime: '18:24' },
    { attendID: 100298, memberID: 50001, date: '2025-06-01', attentTime: '08:53', leaveTime: '18:15' },
    { attendID: 100299, memberID: 50002, date: '2025-06-01', attentTime: '08:53', leaveTime: '18:28' },
    { attendID: 100300, memberID: 50003, date: '2025-06-01', attentTime: '08:42', leaveTime: '18:24' },
    { attendID: 100301, memberID: 50004, date: '2025-06-01', attentTime: '08:30', leaveTime: '18:06' },
    { attendID: 100302, memberID: 50005, date: '2025-06-01', attentTime: '08:43', leaveTime: '18:33' },
    { attendID: 100303, memberID: 50006, date: '2025-06-01', attentTime: '09:29', leaveTime: '18:20' },
    { attendID: 100304, memberID: 50007, date: '2025-06-01', attentTime: '08:32', leaveTime: '18:03' },
    { attendID: 100305, memberID: 50008, date: '2025-06-01', attentTime: '08:36', leaveTime: '18:01' },
    { attendID: 100306, memberID: 50009, date: '2025-06-01', attentTime: '08:42', leaveTime: '18:21' },
    { attendID: 100307, memberID: 50010, date: '2025-06-01', attentTime: '08:46', leaveTime: '18:02' },
    { attendID: 100308, memberID: 50011, date: '2025-06-01', attentTime: '08:59', leaveTime: '18:26' },
    { attendID: 100309, memberID: 50012, date: '2025-06-01', attentTime: '08:50', leaveTime: '18:06' },
    { attendID: 100310, memberID: 50013, date: '2025-06-01', attentTime: '08:39', leaveTime: '18:29' },
    { attendID: 100311, memberID: 50014, date: '2025-06-01', attentTime: '08:47', leaveTime: '18:01' },
    { attendID: 100312, memberID: 50015, date: '2025-06-01', attentTime: '08:47', leaveTime: '18:26' },
    { attendID: 100313, memberID: 50001, date: '2025-06-02', attentTime: '08:35', leaveTime: '18:19' },
    { attendID: 100314, memberID: 50002, date: '2025-06-02', attentTime: '08:41', leaveTime: '18:11' },
    { attendID: 100315, memberID: 50003, date: '2025-06-02', attentTime: '08:53', leaveTime: '18:34' },
    { attendID: 100316, memberID: 50004, date: '2025-06-02', attentTime: '08:30', leaveTime: '18:21' },
    { attendID: 100317, memberID: 50005, date: '2025-06-02', attentTime: '08:30', leaveTime: '18:08' },
    { attendID: 100318, memberID: 50006, date: '2025-06-02', attentTime: '08:41', leaveTime: '18:31' },
    { attendID: 100319, memberID: 50007, date: '2025-06-02', attentTime: '08:37', leaveTime: '18:45' },
    { attendID: 100320, memberID: 50008, date: '2025-06-02', attentTime: '08:46', leaveTime: '18:30' },
    { attendID: 100321, memberID: 50009, date: '2025-06-02', attentTime: '08:45', leaveTime: '18:01' },
    { attendID: 100322, memberID: 50010, date: '2025-06-02', attentTime: '08:52', leaveTime: '18:32' },
    { attendID: 100323, memberID: 50011, date: '2025-06-02', attentTime: '08:47', leaveTime: '18:34' },
    { attendID: 100324, memberID: 50012, date: '2025-06-02', attentTime: '08:45', leaveTime: '18:16' },
    { attendID: 100325, memberID: 50013, date: '2025-06-02', attentTime: '08:50', leaveTime: '18:28' },
    { attendID: 100326, memberID: 50014, date: '2025-06-02', attentTime: '08:57', leaveTime: '18:08' },
    { attendID: 100327, memberID: 50015, date: '2025-06-02', attentTime: '08:41', leaveTime: '18:00' },
    { attendID: 100328, memberID: 50001, date: '2025-06-04', attentTime: '08:39', leaveTime: '18:22' },
    { attendID: 100329, memberID: 50002, date: '2025-06-04', attentTime: '08:40', leaveTime: '18:05' },
    { attendID: 100330, memberID: 50003, date: '2025-06-04', attentTime: '08:49', leaveTime: '18:06' },
    { attendID: 100331, memberID: 50004, date: '2025-06-04', attentTime: '08:32', leaveTime: '18:02' },
    { attendID: 100332, memberID: 50005, date: '2025-06-04', attentTime: '08:30', leaveTime: '18:26' },
    { attendID: 100333, memberID: 50006, date: '2025-06-04', attentTime: '08:57', leaveTime: '18:40' },
    { attendID: 100334, memberID: 50007, date: '2025-06-04', attentTime: '08:50', leaveTime: '18:23' },
    { attendID: 100335, memberID: 50008, date: '2025-06-04', attentTime: '08:52', leaveTime: '18:22' },
    { attendID: 100336, memberID: 50009, date: '2025-06-04', attentTime: '08:58', leaveTime: '18:26' },
    { attendID: 100337, memberID: 50010, date: '2025-06-04', attentTime: '08:41', leaveTime: '18:26' },
    { attendID: 100338, memberID: 50011, date: '2025-06-04', attentTime: '08:30', leaveTime: '18:33' },
    { attendID: 100339, memberID: 50012, date: '2025-06-04', attentTime: '08:49', leaveTime: '18:03' },
    { attendID: 100340, memberID: 50013, date: '2025-06-04', attentTime: '08:48', leaveTime: '18:26' },
    { attendID: 100341, memberID: 50014, date: '2025-06-04', attentTime: '08:44', leaveTime: '18:43' },
    { attendID: 100342, memberID: 50015, date: '2025-06-04', attentTime: '08:53', leaveTime: '18:05' },
    { attendID: 100343, memberID: 50001, date: '2025-06-05', attentTime: '08:31', leaveTime: '18:42' },
    { attendID: 100344, memberID: 50002, date: '2025-06-05', attentTime: '08:40', leaveTime: '18:07' },
    { attendID: 100345, memberID: 50003, date: '2025-06-05', attentTime: '08:46', leaveTime: '18:22' },
    { attendID: 100346, memberID: 50004, date: '2025-06-05', attentTime: '08:53', leaveTime: '18:28' },
    { attendID: 100347, memberID: 50005, date: '2025-06-05', attentTime: '08:42', leaveTime: '18:32' },
    { attendID: 100348, memberID: 50006, date: '2025-06-05', attentTime: '08:59', leaveTime: '18:31' },
    { attendID: 100349, memberID: 50007, date: '2025-06-05', attentTime: '08:30', leaveTime: '18:25' },
    { attendID: 100350, memberID: 50008, date: '2025-06-05', attentTime: '08:36', leaveTime: '18:13' },
    { attendID: 100351, memberID: 50009, date: '2025-06-05', attentTime: '08:59', leaveTime: '18:20' },
    { attendID: 100352, memberID: 50010, date: '2025-06-05', attentTime: '08:50', leaveTime: '18:17' },
    { attendID: 100353, memberID: 50011, date: '2025-06-05', attentTime: '08:37', leaveTime: '18:01' },
    { attendID: 100354, memberID: 50012, date: '2025-06-05', attentTime: '08:52', leaveTime: '18:14' },
    { attendID: 100355, memberID: 50013, date: '2025-06-05', attentTime: '08:46', leaveTime: '18:02' },
    { attendID: 100356, memberID: 50014, date: '2025-06-05', attentTime: '08:56', leaveTime: '18:42' },
    { attendID: 100357, memberID: 50015, date: '2025-06-05', attentTime: '08:39', leaveTime: '18:04' },
    { attendID: 100358, memberID: 50001, date: '2025-06-09', attentTime: '08:42', leaveTime: '18:17' },
    { attendID: 100359, memberID: 50002, date: '2025-06-09', attentTime: '08:31', leaveTime: '18:04' },
    { attendID: 100360, memberID: 50003, date: '2025-06-09', attentTime: '08:49', leaveTime: '18:27' },
    { attendID: 100361, memberID: 50004, date: '2025-06-09', attentTime: '08:32', leaveTime: '18:37' },
    { attendID: 100362, memberID: 50005, date: '2025-06-09', attentTime: '08:34', leaveTime: '18:15' },
    { attendID: 100363, memberID: 50006, date: '2025-06-09', attentTime: '08:54', leaveTime: '18:03' },
    { attendID: 100364, memberID: 50007, date: '2025-06-09', attentTime: '08:58', leaveTime: '18:33' },
    { attendID: 100365, memberID: 50008, date: '2025-06-09', attentTime: '08:53', leaveTime: '18:36' },
    { attendID: 100366, memberID: 50009, date: '2025-06-09', attentTime: '08:59', leaveTime: '18:37' },
    { attendID: 100367, memberID: 50010, date: '2025-06-09', attentTime: '08:50', leaveTime: '18:33' },
    { attendID: 100368, memberID: 50011, date: '2025-06-09', attentTime: '08:55', leaveTime: '18:42' },
    { attendID: 100369, memberID: 50012, date: '2025-06-09', attentTime: '08:37', leaveTime: '18:39' },
    { attendID: 100370, memberID: 50013, date: '2025-06-09', attentTime: '09:03', leaveTime: '18:15' },
    { attendID: 100371, memberID: 50014, date: '2025-06-09', attentTime: '08:53', leaveTime: '18:08' },
    { attendID: 100372, memberID: 50015, date: '2025-06-09', attentTime: '08:59', leaveTime: '18:43' },
    { attendID: 100373, memberID: 50001, date: '2025-06-10', attentTime: '08:32', leaveTime: '18:37' },
    { attendID: 100374, memberID: 50002, date: '2025-06-10', attentTime: '08:51', leaveTime: '18:40' },
    { attendID: 100375, memberID: 50003, date: '2025-06-10', attentTime: '08:44', leaveTime: '18:21' },
    { attendID: 100376, memberID: 50004, date: '2025-06-10', attentTime: '08:43', leaveTime: '18:08' },
    { attendID: 100377, memberID: 50005, date: '2025-06-10', attentTime: '08:37', leaveTime: '18:17' },
    { attendID: 100378, memberID: 50006, date: '2025-06-10', attentTime: '08:57', leaveTime: '18:00' },
    { attendID: 100379, memberID: 50007, date: '2025-06-10', attentTime: '08:49', leaveTime: '18:00' },
    { attendID: 100380, memberID: 50008, date: '2025-06-10', attentTime: '08:59', leaveTime: '18:22' },
    { attendID: 100381, memberID: 50009, date: '2025-06-10', attentTime: '08:56', leaveTime: '18:20' },
    { attendID: 100382, memberID: 50010, date: '2025-06-10', attentTime: '08:55', leaveTime: '18:01' },
    { attendID: 100383, memberID: 50011, date: '2025-06-10', attentTime: '09:29', leaveTime: '18:33' },
    { attendID: 100384, memberID: 50013, date: '2025-06-10', attentTime: '08:31', leaveTime: '18:04' },
    { attendID: 100385, memberID: 50014, date: '2025-06-10', attentTime: '08:41', leaveTime: '18:02' },
    { attendID: 100386, memberID: 50015, date: '2025-06-10', attentTime: '08:59', leaveTime: '18:22' },
    { attendID: 100387, memberID: 50001, date: '2025-06-11', attentTime: '08:47', leaveTime: '18:30' },
    { attendID: 100388, memberID: 50002, date: '2025-06-11', attentTime: '08:56', leaveTime: '18:04' },
    { attendID: 100389, memberID: 50003, date: '2025-06-11', attentTime: '08:52', leaveTime: '18:11' },
    { attendID: 100390, memberID: 50004, date: '2025-06-11', attentTime: '08:39', leaveTime: '18:25' },
    { attendID: 100391, memberID: 50005, date: '2025-06-11', attentTime: '08:50', leaveTime: '18:35' },
    { attendID: 100392, memberID: 50006, date: '2025-06-11', attentTime: '08:41', leaveTime: '18:37' },
    { attendID: 100393, memberID: 50007, date: '2025-06-11', attentTime: '08:55', leaveTime: '18:10' },
    { attendID: 100394, memberID: 50008, date: '2025-06-11', attentTime: '08:30', leaveTime: '18:31' },
    { attendID: 100395, memberID: 50009, date: '2025-06-11', attentTime: '08:49', leaveTime: '18:39' },
    { attendID: 100396, memberID: 50010, date: '2025-06-11', attentTime: '08:40', leaveTime: '18:24' },
    { attendID: 100397, memberID: 50011, date: '2025-06-11', attentTime: '08:52', leaveTime: '18:02' },
    { attendID: 100398, memberID: 50012, date: '2025-06-11', attentTime: '08:51', leaveTime: '18:24' },
    { attendID: 100399, memberID: 50013, date: '2025-06-11', attentTime: '08:40', leaveTime: '18:38' },
    { attendID: 100400, memberID: 50014, date: '2025-06-11', attentTime: '08:52', leaveTime: '18:09' },
    { attendID: 100401, memberID: 50015, date: '2025-06-11', attentTime: '08:35', leaveTime: '18:08' },
    { attendID: 100402, memberID: 50001, date: '2025-06-12', attentTime: '08:59', leaveTime: '18:12' },
    { attendID: 100403, memberID: 50002, date: '2025-06-12', attentTime: '08:35', leaveTime: '18:01' },
    { attendID: 100404, memberID: 50003, date: '2025-06-12', attentTime: '08:48', leaveTime: '18:35' },
    { attendID: 100405, memberID: 50004, date: '2025-06-12', attentTime: '08:39', leaveTime: '18:28' },
    { attendID: 100406, memberID: 50005, date: '2025-06-12', attentTime: '08:43', leaveTime: '18:16' },
    { attendID: 100407, memberID: 50006, date: '2025-06-12', attentTime: '08:36', leaveTime: '18:36' },
    { attendID: 100408, memberID: 50007, date: '2025-06-12', attentTime: '08:31', leaveTime: '18:08' },
    { attendID: 100409, memberID: 50008, date: '2025-06-12', attentTime: '08:39', leaveTime: '18:07' },
    { attendID: 100410, memberID: 50009, date: '2025-06-12', attentTime: '08:49', leaveTime: '18:45' },
    { attendID: 100411, memberID: 50010, date: '2025-06-12', attentTime: '08:36', leaveTime: '18:17' },
    { attendID: 100412, memberID: 50011, date: '2025-06-12', attentTime: '08:53', leaveTime: '18:32' },
    { attendID: 100413, memberID: 50012, date: '2025-06-12', attentTime: '08:50', leaveTime: '18:34' },
    { attendID: 100414, memberID: 50013, date: '2025-06-12', attentTime: '08:53', leaveTime: '18:12' },
    { attendID: 100415, memberID: 50014, date: '2025-06-12', attentTime: '08:47', leaveTime: '18:41' },
    { attendID: 100416, memberID: 50015, date: '2025-06-12', attentTime: '08:35', leaveTime: '18:08' },
    { attendID: 100417, memberID: 50001, date: '2025-06-13', attentTime: '08:50', leaveTime: '18:06' },
    { attendID: 100418, memberID: 50002, date: '2025-06-13', attentTime: '08:30', leaveTime: '18:17' },
    { attendID: 100419, memberID: 50003, date: '2025-06-13', attentTime: '08:55', leaveTime: '18:26' },
    { attendID: 100420, memberID: 50004, date: '2025-06-13', attentTime: '08:30', leaveTime: '18:20' },
    { attendID: 100421, memberID: 50005, date: '2025-06-13', attentTime: '08:57', leaveTime: '18:13' },
    { attendID: 100422, memberID: 50006, date: '2025-06-13', attentTime: '09:25', leaveTime: '18:15' },
    { attendID: 100423, memberID: 50007, date: '2025-06-13', attentTime: '08:50', leaveTime: '18:20' },
    { attendID: 100424, memberID: 50008, date: '2025-06-13', attentTime: '08:38', leaveTime: '18:27' },
    { attendID: 100425, memberID: 50009, date: '2025-06-13', attentTime: '08:30', leaveTime: '18:17' },
    { attendID: 100426, memberID: 50010, date: '2025-06-13', attentTime: '08:49', leaveTime: '18:43' },
    { attendID: 100427, memberID: 50011, date: '2025-06-13', attentTime: '08:56', leaveTime: '18:45' },
    { attendID: 100428, memberID: 50013, date: '2025-06-13', attentTime: '08:46', leaveTime: '18:32' },
    { attendID: 100429, memberID: 50014, date: '2025-06-13', attentTime: '08:55', leaveTime: '18:19' },
    { attendID: 100430, memberID: 50015, date: '2025-06-13', attentTime: '08:32', leaveTime: '18:25' },
    { attendID: 100431, memberID: 50001, date: '2025-06-16', attentTime: '08:59', leaveTime: '18:00' },
    { attendID: 100432, memberID: 50002, date: '2025-06-16', attentTime: '08:59', leaveTime: '18:05' },
    { attendID: 100433, memberID: 50003, date: '2025-06-16', attentTime: '08:57', leaveTime: '18:06' },
    { attendID: 100434, memberID: 50004, date: '2025-06-16', attentTime: '08:44', leaveTime: '18:06' },
    { attendID: 100435, memberID: 50005, date: '2025-06-16', attentTime: '08:37', leaveTime: '18:13' },
    { attendID: 100436, memberID: 50006, date: '2025-06-16', attentTime: '08:31', leaveTime: '18:15' },
    { attendID: 100437, memberID: 50007, date: '2025-06-16', attentTime: '08:39', leaveTime: '18:13' },
    { attendID: 100438, memberID: 50008, date: '2025-06-16', attentTime: '08:34', leaveTime: '18:16' },
    { attendID: 100439, memberID: 50009, date: '2025-06-16', attentTime: '08:51', leaveTime: '18:36' },
    { attendID: 100440, memberID: 50010, date: '2025-06-16', attentTime: '08:41', leaveTime: '18:40' },
    { attendID: 100441, memberID: 50011, date: '2025-06-16', attentTime: '08:44', leaveTime: '18:41' },
    { attendID: 100442, memberID: 50012, date: '2025-06-16', attentTime: '08:30', leaveTime: '18:45' },
    { attendID: 100443, memberID: 50013, date: '2025-06-16', attentTime: '08:57', leaveTime: '18:30' },
    { attendID: 100444, memberID: 50014, date: '2025-06-16', attentTime: '08:47', leaveTime: '18:14' },
    { attendID: 100445, memberID: 50015, date: '2025-06-16', attentTime: '08:44', leaveTime: '18:14' },
    { attendID: 100446, memberID: 50001, date: '2025-06-17', attentTime: '08:47', leaveTime: '18:22' },
    { attendID: 100447, memberID: 50002, date: '2025-06-17', attentTime: '08:53', leaveTime: '18:35' },
    { attendID: 100448, memberID: 50003, date: '2025-06-17', attentTime: '08:30', leaveTime: '18:33' },
    { attendID: 100449, memberID: 50004, date: '2025-06-17', attentTime: '08:56', leaveTime: '18:37' },
    { attendID: 100450, memberID: 50005, date: '2025-06-17', attentTime: '08:35', leaveTime: '18:32' },
    { attendID: 100451, memberID: 50006, date: '2025-06-17', attentTime: '08:59', leaveTime: '18:34' },
    { attendID: 100452, memberID: 50007, date: '2025-06-17', attentTime: '08:59', leaveTime: '18:44' },
    { attendID: 100453, memberID: 50008, date: '2025-06-17', attentTime: '08:40', leaveTime: '18:13' },
    { attendID: 100454, memberID: 50009, date: '2025-06-17', attentTime: '08:50', leaveTime: '18:02' },
    { attendID: 100455, memberID: 50010, date: '2025-06-17', attentTime: '08:42', leaveTime: '18:04' },
    { attendID: 100456, memberID: 50011, date: '2025-06-17', attentTime: '08:43', leaveTime: '18:09' },
    { attendID: 100457, memberID: 50012, date: '2025-06-17', attentTime: '08:48', leaveTime: '18:32' },
    { attendID: 100458, memberID: 50013, date: '2025-06-17', attentTime: '08:59', leaveTime: '18:43' },
    { attendID: 100459, memberID: 50014, date: '2025-06-17', attentTime: '08:53', leaveTime: '18:05' },
    { attendID: 100460, memberID: 50015, date: '2025-06-17', attentTime: '08:51', leaveTime: '18:13' },
    { attendID: 100461, memberID: 50001, date: '2025-06-18', attentTime: '09:02', leaveTime: '18:22' },
    { attendID: 100462, memberID: 50002, date: '2025-06-18', attentTime: '08:53', leaveTime: '18:30' },
    { attendID: 100463, memberID: 50003, date: '2025-06-18', attentTime: '08:56', leaveTime: '18:25' },
    { attendID: 100464, memberID: 50004, date: '2025-06-18', attentTime: '08:47', leaveTime: '18:22' },
    { attendID: 100465, memberID: 50005, date: '2025-06-18', attentTime: '08:54', leaveTime: '18:36' },
    { attendID: 100466, memberID: 50006, date: '2025-06-18', attentTime: '08:34', leaveTime: '18:03' },
    { attendID: 100467, memberID: 50007, date: '2025-06-18', attentTime: '08:55', leaveTime: '18:02' },
    { attendID: 100468, memberID: 50008, date: '2025-06-18', attentTime: '08:47', leaveTime: '18:07' },
    { attendID: 100469, memberID: 50009, date: '2025-06-18', attentTime: '08:51', leaveTime: '18:32' },
    { attendID: 100470, memberID: 50010, date: '2025-06-18', attentTime: '08:40', leaveTime: '18:20' },
    { attendID: 100471, memberID: 50011, date: '2025-06-18', attentTime: '08:38', leaveTime: '18:36' },
    { attendID: 100472, memberID: 50012, date: '2025-06-18', attentTime: '08:48', leaveTime: '18:00' },
    { attendID: 100473, memberID: 50013, date: '2025-06-18', attentTime: '08:58', leaveTime: '18:40' },
    { attendID: 100474, memberID: 50014, date: '2025-06-18', attentTime: '08:58', leaveTime: '18:44' },
    { attendID: 100475, memberID: 50015, date: '2025-06-18', attentTime: '08:48', leaveTime: '18:37' },
    { attendID: 100476, memberID: 50001, date: '2025-06-19', attentTime: '08:59', leaveTime: '18:06' },
    { attendID: 100477, memberID: 50002, date: '2025-06-19', attentTime: '08:36', leaveTime: '18:27' },
    { attendID: 100478, memberID: 50003, date: '2025-06-19', attentTime: '08:49', leaveTime: '18:15' },
    { attendID: 100479, memberID: 50004, date: '2025-06-19', attentTime: '08:42', leaveTime: '18:04' },
    { attendID: 100480, memberID: 50005, date: '2025-06-19', attentTime: '08:51', leaveTime: '18:06' },
    { attendID: 100481, memberID: 50006, date: '2025-06-19', attentTime: '08:57', leaveTime: '18:08' },
    { attendID: 100482, memberID: 50007, date: '2025-06-19', attentTime: '08:47', leaveTime: '18:29' },
    { attendID: 100483, memberID: 50008, date: '2025-06-19', attentTime: '08:58', leaveTime: '18:12' },
    { attendID: 100484, memberID: 50009, date: '2025-06-19', attentTime: '08:40', leaveTime: '18:29' },
    { attendID: 100485, memberID: 50010, date: '2025-06-19', attentTime: '08:32', leaveTime: '18:20' },
    { attendID: 100486, memberID: 50011, date: '2025-06-19', attentTime: '08:58', leaveTime: '18:36' },
    { attendID: 100487, memberID: 50012, date: '2025-06-19', attentTime: '08:50', leaveTime: '18:37' },
    { attendID: 100488, memberID: 50013, date: '2025-06-19', attentTime: '09:10', leaveTime: '18:17' },
    { attendID: 100489, memberID: 50014, date: '2025-06-19', attentTime: '08:32', leaveTime: '18:35' },
    { attendID: 100490, memberID: 50015, date: '2025-06-19', attentTime: '08:43', leaveTime: '18:42' },
    { attendID: 100491, memberID: 50001, date: '2025-06-20', attentTime: '08:35', leaveTime: '18:12' },
    { attendID: 100492, memberID: 50002, date: '2025-06-20', attentTime: '08:30', leaveTime: '18:32' },
    { attendID: 100493, memberID: 50003, date: '2025-06-20', attentTime: '08:36', leaveTime: '18:26' },
    { attendID: 100494, memberID: 50004, date: '2025-06-20', attentTime: '08:50', leaveTime: '18:20' },
    { attendID: 100495, memberID: 50005, date: '2025-06-20', attentTime: '08:49', leaveTime: '18:11' },
    { attendID: 100496, memberID: 50006, date: '2025-06-20', attentTime: '08:53', leaveTime: '18:36' },
    { attendID: 100497, memberID: 50007, date: '2025-06-20', attentTime: '08:59', leaveTime: '18:26' },
    { attendID: 100498, memberID: 50008, date: '2025-06-20', attentTime: '08:47', leaveTime: '18:31' },
    { attendID: 100499, memberID: 50009, date: '2025-06-20', attentTime: '08:44', leaveTime: '18:15' },
    { attendID: 100500, memberID: 50010, date: '2025-06-20', attentTime: '08:47', leaveTime: '18:31' },
    { attendID: 100501, memberID: 50011, date: '2025-06-20', attentTime: '08:43', leaveTime: '18:18' },
    { attendID: 100502, memberID: 50012, date: '2025-06-20', attentTime: '08:45', leaveTime: '18:30' },
    { attendID: 100503, memberID: 50013, date: '2025-06-20', attentTime: '08:53', leaveTime: '18:34' },
    { attendID: 100504, memberID: 50014, date: '2025-06-20', attentTime: '08:59', leaveTime: '18:03' },
    { attendID: 100505, memberID: 50015, date: '2025-06-20', attentTime: '08:32', leaveTime: '18:11' },
    { attendID: 100506, memberID: 50001, date: '2025-06-23', attentTime: '08:41', leaveTime: '18:01' },
    { attendID: 100507, memberID: 50002, date: '2025-06-23', attentTime: '08:57', leaveTime: '18:32' },
    { attendID: 100508, memberID: 50003, date: '2025-06-23', attentTime: '08:41', leaveTime: '18:00' },
    { attendID: 100509, memberID: 50004, date: '2025-06-23', attentTime: '08:48', leaveTime: '18:34' },
    { attendID: 100510, memberID: 50005, date: '2025-06-23', attentTime: '08:56', leaveTime: '18:12' },
    { attendID: 100511, memberID: 50006, date: '2025-06-23', attentTime: '08:54', leaveTime: '18:19' },
    { attendID: 100512, memberID: 50007, date: '2025-06-23', attentTime: '08:31', leaveTime: '18:00' },
    { attendID: 100513, memberID: 50008, date: '2025-06-23', attentTime: '08:46', leaveTime: '18:20' },
    { attendID: 100514, memberID: 50009, date: '2025-06-23', attentTime: '08:46', leaveTime: '18:21' },
    { attendID: 100515, memberID: 50010, date: '2025-06-23', attentTime: '08:44', leaveTime: '18:00' },
    { attendID: 100516, memberID: 50011, date: '2025-06-23', attentTime: '08:31', leaveTime: '18:43' },
    { attendID: 100517, memberID: 50012, date: '2025-06-23', attentTime: '08:45', leaveTime: '18:24' },
    { attendID: 100518, memberID: 50013, date: '2025-06-23', attentTime: '08:37', leaveTime: '18:26' },
    { attendID: 100519, memberID: 50014, date: '2025-06-23', attentTime: '08:47', leaveTime: '18:17' },
    { attendID: 100520, memberID: 50015, date: '2025-06-23', attentTime: '08:43', leaveTime: '18:35' },
    { attendID: 100521, memberID: 50001, date: '2025-06-24', attentTime: '08:40', leaveTime: '18:45' },
    { attendID: 100522, memberID: 50002, date: '2025-06-24', attentTime: '08:56', leaveTime: '18:34' },
    { attendID: 100523, memberID: 50003, date: '2025-06-24', attentTime: '08:40', leaveTime: '18:10' },
    { attendID: 100524, memberID: 50004, date: '2025-06-24', attentTime: '08:36', leaveTime: '18:10' },
    { attendID: 100525, memberID: 50005, date: '2025-06-24', attentTime: '08:42', leaveTime: '18:43' },
    { attendID: 100526, memberID: 50006, date: '2025-06-24', attentTime: '08:38', leaveTime: '18:10' },
    { attendID: 100527, memberID: 50007, date: '2025-06-24', attentTime: '08:33', leaveTime: '18:18' },
    { attendID: 100528, memberID: 50008, date: '2025-06-24', attentTime: '08:34', leaveTime: '18:31' },
    { attendID: 100529, memberID: 50009, date: '2025-06-24', attentTime: '08:40', leaveTime: '18:38' },
    { attendID: 100530, memberID: 50010, date: '2025-06-24', attentTime: '08:33', leaveTime: '18:43' },
    { attendID: 100531, memberID: 50011, date: '2025-06-24', attentTime: '08:33', leaveTime: '18:04' },
    { attendID: 100532, memberID: 50012, date: '2025-06-24', attentTime: '08:35', leaveTime: '18:36' },
    { attendID: 100533, memberID: 50013, date: '2025-06-24', attentTime: '08:48', leaveTime: '18:07' },
    { attendID: 100534, memberID: 50014, date: '2025-06-24', attentTime: '08:30', leaveTime: '18:20' },
    { attendID: 100535, memberID: 50015, date: '2025-06-24', attentTime: '08:35', leaveTime: '18:30' },
    { attendID: 100536, memberID: 50001, date: '2025-06-25', attentTime: '08:31', leaveTime: '18:28' },
    { attendID: 100537, memberID: 50002, date: '2025-06-25', attentTime: '08:37', leaveTime: '18:25' },
    { attendID: 100538, memberID: 50003, date: '2025-06-25', attentTime: '08:52', leaveTime: '18:05' },
    { attendID: 100539, memberID: 50004, date: '2025-06-25', attentTime: '08:59', leaveTime: '18:03' },
    { attendID: 100540, memberID: 50005, date: '2025-06-25', attentTime: '08:51', leaveTime: '18:02' },
    { attendID: 100541, memberID: 50006, date: '2025-06-25', attentTime: '08:46', leaveTime: '18:11' },
    { attendID: 100542, memberID: 50007, date: '2025-06-25', attentTime: '09:14', leaveTime: '18:44' },
    { attendID: 100543, memberID: 50008, date: '2025-06-25', attentTime: '08:36', leaveTime: '18:09' },
    { attendID: 100544, memberID: 50009, date: '2025-06-25', attentTime: '08:56', leaveTime: '18:24' },
    { attendID: 100545, memberID: 50010, date: '2025-06-25', attentTime: '08:36', leaveTime: '18:18' },
    { attendID: 100546, memberID: 50011, date: '2025-06-25', attentTime: '08:40', leaveTime: '18:42' },
    { attendID: 100547, memberID: 50012, date: '2025-06-25', attentTime: '08:40', leaveTime: '18:22' },
    { attendID: 100548, memberID: 50013, date: '2025-06-25', attentTime: '08:55', leaveTime: '18:21' },
    { attendID: 100549, memberID: 50014, date: '2025-06-25', attentTime: '08:46', leaveTime: '18:12' },
    { attendID: 100550, memberID: 50015, date: '2025-06-25', attentTime: '08:53', leaveTime: '18:24' },
    { attendID: 100551, memberID: 50001, date: '2025-06-26', attentTime: '08:43', leaveTime: '18:23' },
    { attendID: 100552, memberID: 50002, date: '2025-06-26', attentTime: '08:43', leaveTime: '18:07' },
    { attendID: 100553, memberID: 50003, date: '2025-06-26', attentTime: '08:33', leaveTime: '18:30' },
    { attendID: 100554, memberID: 50004, date: '2025-06-26', attentTime: '08:52', leaveTime: '18:33' },
    { attendID: 100555, memberID: 50005, date: '2025-06-26', attentTime: '08:39', leaveTime: '18:34' },
    { attendID: 100556, memberID: 50006, date: '2025-06-26', attentTime: '08:34', leaveTime: '18:42' },
    { attendID: 100557, memberID: 50007, date: '2025-06-26', attentTime: '08:46', leaveTime: '18:20' },
    { attendID: 100558, memberID: 50008, date: '2025-06-26', attentTime: '08:42', leaveTime: '18:11' },
    { attendID: 100559, memberID: 50009, date: '2025-06-26', attentTime: '08:59', leaveTime: '18:35' },
    { attendID: 100560, memberID: 50010, date: '2025-06-26', attentTime: '09:18', leaveTime: '18:23' },
    { attendID: 100561, memberID: 50011, date: '2025-06-26', attentTime: '09:29', leaveTime: '18:24' },
    { attendID: 100562, memberID: 50012, date: '2025-06-26', attentTime: '08:35', leaveTime: '18:37' },
    { attendID: 100563, memberID: 50013, date: '2025-06-26', attentTime: '08:45', leaveTime: '18:43' },
    { attendID: 100564, memberID: 50014, date: '2025-06-26', attentTime: '09:01', leaveTime: '18:10' },
    { attendID: 100565, memberID: 50015, date: '2025-06-26', attentTime: '08:51', leaveTime: '18:42' },
    { attendID: 100566, memberID: 50001, date: '2025-06-27', attentTime: '08:39', leaveTime: '18:16' },
    { attendID: 100567, memberID: 50002, date: '2025-06-27', attentTime: '08:47', leaveTime: '18:34' },
    { attendID: 100568, memberID: 50003, date: '2025-06-27', attentTime: '08:54', leaveTime: '18:45' },
    { attendID: 100569, memberID: 50004, date: '2025-06-27', attentTime: '08:38', leaveTime: '18:21' },
    { attendID: 100570, memberID: 50005, date: '2025-06-27', attentTime: '08:36', leaveTime: '18:14' },
    { attendID: 100571, memberID: 50006, date: '2025-06-27', attentTime: '08:42', leaveTime: '18:02' },
    { attendID: 100572, memberID: 50007, date: '2025-06-27', attentTime: '08:47', leaveTime: '18:38' },
    { attendID: 100573, memberID: 50008, date: '2025-06-27', attentTime: '08:36', leaveTime: '18:03' },
    { attendID: 100574, memberID: 50009, date: '2025-06-27', attentTime: '08:40', leaveTime: '18:40' },
    { attendID: 100575, memberID: 50010, date: '2025-06-27', attentTime: '08:35', leaveTime: '18:15' },
    { attendID: 100576, memberID: 50011, date: '2025-06-27', attentTime: '08:55', leaveTime: '18:43' },
    { attendID: 100577, memberID: 50012, date: '2025-06-27', attentTime: '08:50', leaveTime: '18:00' },
    { attendID: 100578, memberID: 50013, date: '2025-06-27', attentTime: '08:33', leaveTime: '18:20' },
    { attendID: 100579, memberID: 50014, date: '2025-06-27', attentTime: '08:49', leaveTime: '18:03' },
    { attendID: 100580, memberID: 50015, date: '2025-06-27', attentTime: '08:53', leaveTime: '18:39' },
    { attendID: 100581, memberID: 50001, date: '2025-06-30', attentTime: '08:48', leaveTime: '18:23' },
    { attendID: 100582, memberID: 50002, date: '2025-06-30', attentTime: '08:36', leaveTime: '18:12' },
    { attendID: 100583, memberID: 50003, date: '2025-06-30', attentTime: '08:49', leaveTime: '18:32' },
    { attendID: 100584, memberID: 50004, date: '2025-06-30', attentTime: '08:58', leaveTime: '18:35' },
    { attendID: 100585, memberID: 50005, date: '2025-06-30', attentTime: '08:46', leaveTime: '18:41' },
    { attendID: 100586, memberID: 50006, date: '2025-06-30', attentTime: '08:38', leaveTime: '18:32' },
    { attendID: 100587, memberID: 50007, date: '2025-06-30', attentTime: '08:33', leaveTime: '18:09' },
    { attendID: 100588, memberID: 50008, date: '2025-06-30', attentTime: '08:46', leaveTime: '18:29' },
    { attendID: 100589, memberID: 50009, date: '2025-06-30', attentTime: '08:52', leaveTime: '18:36' },
    { attendID: 100590, memberID: 50010, date: '2025-06-30', attentTime: '08:44', leaveTime: '18:22' },
    { attendID: 100591, memberID: 50011, date: '2025-06-30', attentTime: '08:40', leaveTime: '18:39' },
    { attendID: 100592, memberID: 50012, date: '2025-06-30', attentTime: '09:25', leaveTime: '18:10' },
    { attendID: 100593, memberID: 50013, date: '2025-06-30', attentTime: '08:33', leaveTime: '18:07' },
    { attendID: 100594, memberID: 50014, date: '2025-06-30', attentTime: '', leaveTime: '' },
    { attendID: 100595, memberID: 50015, date: '2025-06-30', attentTime: '08:56', leaveTime: '18:36' },
    { attendID: 100596, memberID: 50001, date: '2025-07-01', attentTime: '08:48', leaveTime: '18:01' },
    { attendID: 100597, memberID: 50002, date: '2025-07-01', attentTime: '08:38', leaveTime: '18:24' },
    { attendID: 100598, memberID: 50003, date: '2025-07-01', attentTime: '08:42', leaveTime: '18:27' },
    { attendID: 100599, memberID: 50004, date: '2025-07-01', attentTime: '08:56', leaveTime: '18:14' },
    { attendID: 100600, memberID: 50005, date: '2025-07-01', attentTime: '08:33', leaveTime: '18:05' },
    { attendID: 100601, memberID: 50006, date: '2025-07-01', attentTime: '08:49', leaveTime: '18:06' },
    { attendID: 100602, memberID: 50007, date: '2025-07-01', attentTime: '08:41', leaveTime: '18:16' },
    { attendID: 100603, memberID: 50008, date: '2025-07-01', attentTime: '08:48', leaveTime: '18:03' },
    { attendID: 100604, memberID: 50009, date: '2025-07-01', attentTime: '08:42', leaveTime: '18:22' },
    { attendID: 100605, memberID: 50010, date: '2025-07-01', attentTime: '08:45', leaveTime: '18:08' },
    { attendID: 100606, memberID: 50011, date: '2025-07-01', attentTime: '08:30', leaveTime: '18:13' },
    { attendID: 100607, memberID: 50012, date: '2025-07-01', attentTime: '08:58', leaveTime: '18:19' },
    { attendID: 100608, memberID: 50013, date: '2025-07-01', attentTime: '08:35', leaveTime: '18:07' },
    { attendID: 100609, memberID: 50014, date: '2025-07-01', attentTime: '08:38', leaveTime: '18:04' },
    { attendID: 100610, memberID: 50015, date: '2025-07-01', attentTime: '08:44', leaveTime: '18:01' },
    { attendID: 100611, memberID: 50001, date: '2025-07-02', attentTime: '08:36', leaveTime: '18:02' },
    { attendID: 100612, memberID: 50002, date: '2025-07-02', attentTime: '08:57', leaveTime: '18:30' },
    { attendID: 100613, memberID: 50003, date: '2025-07-02', attentTime: '08:46', leaveTime: '18:13' },
    { attendID: 100614, memberID: 50004, date: '2025-07-02', attentTime: '08:31', leaveTime: '18:11' },
    { attendID: 100615, memberID: 50005, date: '2025-07-02', attentTime: '08:47', leaveTime: '18:09' },
    { attendID: 100616, memberID: 50006, date: '2025-07-02', attentTime: '08:35', leaveTime: '18:26' },
    { attendID: 100617, memberID: 50007, date: '2025-07-02', attentTime: '08:53', leaveTime: '18:06' },
    { attendID: 100618, memberID: 50008, date: '2025-07-02', attentTime: '08:47', leaveTime: '18:16' },
    { attendID: 100619, memberID: 50009, date: '2025-07-02', attentTime: '08:50', leaveTime: '18:11' },
    { attendID: 100620, memberID: 50010, date: '2025-07-02', attentTime: '08:45', leaveTime: '18:26' },
    { attendID: 100621, memberID: 50011, date: '2025-07-02', attentTime: '08:33', leaveTime: '18:23' },
    { attendID: 100622, memberID: 50012, date: '2025-07-02', attentTime: '08:48', leaveTime: '18:22' },
    { attendID: 100623, memberID: 50013, date: '2025-07-02', attentTime: '08:43', leaveTime: '18:18' },
    { attendID: 100624, memberID: 50014, date: '2025-07-02', attentTime: '08:44', leaveTime: '18:09' },
    { attendID: 100625, memberID: 50015, date: '2025-07-02', attentTime: '08:44', leaveTime: '18:08' },
    { attendID: 100626, memberID: 50001, date: '2025-07-03', attentTime: '08:42', leaveTime: '18:09' },
    { attendID: 100627, memberID: 50002, date: '2025-07-03', attentTime: '08:42', leaveTime: '18:10' },
    { attendID: 100628, memberID: 50003, date: '2025-07-03', attentTime: '08:41', leaveTime: '18:22' },
    { attendID: 100629, memberID: 50004, date: '2025-07-03', attentTime: '08:37', leaveTime: '18:09' },
    { attendID: 100630, memberID: 50005, date: '2025-07-03', attentTime: '08:52', leaveTime: '18:18' },
    { attendID: 100631, memberID: 50006, date: '2025-07-03', attentTime: '08:56', leaveTime: '18:20' },
    { attendID: 100632, memberID: 50007, date: '2025-07-03', attentTime: '08:44', leaveTime: '18:02' },
    { attendID: 100633, memberID: 50008, date: '2025-07-03', attentTime: '08:44', leaveTime: '18:01' },
    { attendID: 100634, memberID: 50009, date: '2025-07-03', attentTime: '08:55', leaveTime: '18:28' },
    { attendID: 100635, memberID: 50010, date: '2025-07-03', attentTime: '08:58', leaveTime: '18:18' },
    { attendID: 100636, memberID: 50011, date: '2025-07-03', attentTime: '08:46', leaveTime: '18:24' },
    { attendID: 100637, memberID: 50012, date: '2025-07-03', attentTime: '08:37', leaveTime: '18:15' },
    { attendID: 100638, memberID: 50013, date: '2025-07-03', attentTime: '08:54', leaveTime: '18:03' },
    { attendID: 100639, memberID: 50014, date: '2025-07-03', attentTime: '08:42', leaveTime: '18:16' },
    { attendID: 100640, memberID: 50015, date: '2025-07-03', attentTime: '08:42', leaveTime: '18:20' }
]

// 5.1. get 근태 리스트 
function getAttendaceList() {
    let attendaceList = localStorage.getItem('attendaceList')

    if (attendaceList == null) {
        attendaceList = [];
    } else {
        attendaceList = JSON.parse(attendaceList);
    };
    return attendaceList;
};

// 5.2. set 근태 리스트
function setAttendaceList(attendaceList) {
    localStorage.setItem('attendaceList', JSON.stringify(attendaceList));
};


// 로그아웃
function logout() {
    alert("로그아웃 되었습니다.")
    location.href="../01_공통_로그인/login.html"
    localStorage.setItem('login_memberID', JSON.stringify(""));
}
//  allListRequest()
function allListRequest() {
setPositionList(positionList)
setDepartmentList(departmentList)
setHolidayList(holidayList)
setMemberList(memberList)
setAttendaceList(attendaceList)
}
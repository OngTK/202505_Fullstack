const attendanceList = [
    { attendID: 100001, memberID: 50001, date: '2025-05-01', attentTime: '08:32', leaveTime: '18:19' }, 
    { attendID: 100002, memberID: 50002, date: '2025-05-01', attentTime: '08:32', leaveTime: '18:21' }
];

// 자정에 자동으로 출석 기록을 추가하는 함수
function generateAttendanceRecords() {
    const currentDate = new Date().toISOString().split('T')[0]; // 현재 날짜를 'YYYY-MM-DD' 형식으로 추출
    let maxAttendID = Math.max(...attendanceList.map(record => record.attendID)); // 가장 큰 attendID 값 추출

    // 직원별로 새로운 출석 기록을 추가
    for (let memberID = 50001; memberID <= 50015; memberID++) {
        const lastRecord = attendanceList.filter(record => record.memberID === memberID).pop(); // 해당 직원의 마지막 출석 기록 찾기

        // 마지막 출석 기록이 존재하면, 그 후에 새로운 출석 기록을 추가
        if (lastRecord) {
            maxAttendID++;
            attendanceList.push({
                attendID: maxAttendID,
                memberID: memberID,
                date: currentDate,
                attentTime: '',  // 출근 시간은 빈 값으로 설정
                leaveTime: ''    // 퇴근 시간은 빈 값으로 설정
            });
        }
    }

    console.log(attendanceList); // 생성된 출석 기록 확인
}

// 자정을 기준으로 매일 자동 실행될 수 있도록 설정
function scheduleDailyAttendanceUpdate() {
    const now = new Date();
    const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
    const timeToMidnight = nextMidnight - now;

    setTimeout(() => {
        generateAttendanceRecords(); // 자정에 자동으로 출석 기록 생성
        scheduleDailyAttendanceUpdate(); // 다시 다음 자정을 기다리도록 스케줄
    }, timeToMidnight);
}

// 첫 실행 (스크립트가 실행될 때 한번 실행)
scheduleDailyAttendanceUpdate();


// 현재 연도와 월 초기 설정
let currentYear = 2025;
let currentMonth = 6; // 6월부터 시작


// 공휴일 및 일정 데이터 정의
let contentArray = [
  { cno: 1, content: '어린이날,부처님오신날', date: '2025-5-5', color: 'red' },
  { cno: 2, content: '대체휴일', date: '2025-5-6', color: 'red' },
  { cno: 3, content: '제21대 대통령선거', date: '2025-6-3', color: 'red' },
  { cno: 4, content: '현충일', date: '2025-6-6', color: 'red' },
  { cno: 5, content: '광복절', date: '2025-8-15', color: 'red' },
  { cno: 6, content: '추석연휴', date: '2025-10-3', color: 'red' },
  { cno: 7, content: '추석연휴', date: '2025-10-6', color: 'red' },
  { cno: 8, content: '추석연휴', date: '2025-10-7', color: 'red' },
  { cno: 9, content: '대체 공휴일', date: '2025-10-8', color: 'red' },
  { cno: 10, content: '한글날', date: '2025-10-9', color: 'red' },
  { cno: 11, content: '성탄절', date: '2025-12-25', color: 'red' }
];


// 달력 렌더링 함수
function calPrint() {
  // 상단 월/년 텍스트 갱신
  const h6 = document.getElementById('monthText');
  h6.textContent = `${currentYear}년 ${currentMonth.toString().padStart(2, '0')}월`;
  const calBottom = document.getElementById('calBottom');
  
  // 요일 헤더 표시 (일~토)
  let html = `
    <div class="week sunday">일</div><div class="week">월</div><div class="week">화</div>
    <div class="week">수</div><div class="week">목</div><div class="week">금</div><div class="week thuday">토</div>`;

  // 해당 월의 첫째 날 요일 (0=일요일, ..., 6=토요일)
  const firstDay = new Date(currentYear, currentMonth -1, 1).getDay();

  // 해당 월의 마지막 날짜 계산
  const lastDate = new Date(currentYear, currentMonth, 0).getDate();

  // 빈 셀 채우기 (달력의 첫 주 시작 요일 맞추기)
  for (let i = 0; i < firstDay; i++) html += `<div></div>`;

  // 출근/지각 데이터 가져오기
  const monthlyData = getMonthlyData(currentYear, currentMonth);
  const 출근 = monthlyData.출근;
  const 지각 = monthlyData.지각;

  // 날짜별 셀 생성
  for (let day = 1; day <= lastDate; day++) {
    const dateStr = `${currentYear}-${currentMonth}-${day}`;
    const weekDay = new Date(currentYear, currentMonth - 1, day).getDay(); // 요일 (0~6)

    let dayContent = '';
    let isHoliday = false;

    // contentArray에서 해당 날짜가 공휴일인지 확인
    for (let plan of contentArray) {
      if (plan.date === dateStr) {
        isHoliday = true;
        dayContent += `<span style="color:${plan.color}; font-size:1.0em; font-weight:bold">${plan.content}</span>`;
        break;
      }
    }

    // 평일 + 공휴일이 아닐 경우만 출근/지각 정보 표시
    if (weekDay !== 0 && weekDay !== 6 && !isHoliday) {
      const 출근값 = 출근[day - 1] ?? 0;
      const 지각값 = 지각[day - 1] ?? 0;

      dayContent += `<div class="attendance" style="color:black">출근: <span style="font-size:15px;font-weight:700; color:#104862">${출근값}</span> 명</div>`;
      dayContent += `<div class="attendance" style="color:black">지각: <span style="font-size:15px;font-weight:700; color:#104862"">${지각값}</span> 명</div>`;
    }

    // 최종적으로 셀을 달력에 추가
    html += `<div class='dayEdit'>${day}<br>${dayContent}</div>`;
  }

  // HTML 삽입하여 달력 표시
  calBottom.innerHTML = html;
}


// 출근/지각 데이터 생성 함수
function getMonthlyData(year, month) {
  // 해당 월의 날짜 수 계산
  const daysInMonth = new Date(year, month, 0).getDate();

  // 출근/지각 배열 초기화
  const 출근 = Array(daysInMonth).fill(0);
  const 지각 = Array(daysInMonth).fill(0);

  // 출근기록 데이터 가져오기
   const storedData = localStorage.getItem('attendaceList');

  // 로컬스토리지에 데이터 없으면 0으로 채운 값 반환
  if (!storedData) {
    return { 출근, 지각 };
  }

  const attendList =JSON.parse(storedData);

  // 기록 하나하나 순회
  for (let record of attendList) {
    const recordDate = new Date(record.date);
    const recordYear = recordDate.getFullYear();
    const recordMonth = recordDate.getMonth() + 1;
    const recordDay = recordDate.getDate();

    // 현재 월/연도와 일치하는 데이터만 처리
    if (recordYear === year && recordMonth === month) {
      const weekDay = recordDate.getDay();
      if (weekDay === 0 || weekDay === 6) continue; // 주말은 건너뜀

      // 9시 이전이면 출근, 이후면 지각
      if (record.attentTime <= "09:10") {
        출근[recordDay - 1]++;
      } else {
        지각[recordDay - 1]++;
      }
    }
  }

  // 계산된 출근/지각 데이터 반환
  return { 출근, 지각 };
}


// Chart.js 초기 차트 설정
const ctx = document.getElementById('myChart');
let myChart = new Chart(ctx, {
  type: 'line', // 선형 차트
  data: {
    labels: [],     // 날짜 (1, 2, 3, ..., 30 등)
    datasets: []    // 출근/지각 데이터셋
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true // y축은 0부터 시작
      }
    }
  }
});


// 월 변경 함수 (이전/다음 클릭 시 실행)
function monthChange(direction) {

  // direction이 1이면 다음 달, -1이면 이전 달
  currentMonth += direction;

  // 월 단위 넘침 처리
  if (currentMonth < 1) {
    currentMonth = 12;
    currentYear--;
  } else if (currentMonth > 12) {
    currentMonth = 1;
    currentYear++;
  }

  // 달력 다시 출력
  calPrint();

  // 차트 데이터 갱신
  const days = new Date(currentYear, currentMonth, 0).getDate();
  const newData = getMonthlyData(currentYear, currentMonth);

  // 차트 x축: 날짜, y축: 출근/지각
  myChart.data.labels = Array.from({ length: days }, (_, i) => (i + 1).toString());
  myChart.data.datasets = [
    { label: '출근', data: newData.출근, borderColor: '#4f81bd', fill: false },
    { label: '지각', data: newData.지각, borderColor: '#ff7e79', fill: false }
  ];
  myChart.update();
}


// 초기 로딩 시 실행

window.onload = () => {
  calPrint();       // 달력 표시
  monthChange(0);   // 차트 초기화
};


// 출근 기록 배열 반환 함수 (전역 데이터 사용)

function getAttendaceList() {
  return attendaceList; // 아래 전역 데이터 참조
}

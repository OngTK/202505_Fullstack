/* [ 실습12 : 미니 가계부 페이지 ]
1. 목표
   - 사용자가 자신의 수입/지출 내역을 날짜, 항목, 금액으로 기록하고, 
    등록된 모든 내역을 한눈에 볼 수 있는 간단한 가계부 웹 페이지를 만듭니다.

   2. 화면 구성
   - 페이지는 사용자가 정보를 입력하는 **'등록 영역'**과 
    그 결과를 보여주는 **'목록 영역'**으로 명확히 구분되어야 합니다.
   - 등록 영역:
      - 날짜 선택: 사용자가 내역의 날짜를 달력에서 직접 선택할 수 있어야 합니다.
      - 항목 입력: 사용자가 지출 또는 수입 항목의 내용을 텍스트로 자유롭게 입력할 수 있어야 합니다. 
                (예: "점심 식사", "교통비")
      - 금액 입력: 사용자가 금액을 숫자로 입력할 수 있어야 합니다.
      - 등록 버튼: 위 세 가지 정보를 입력한 후, 목록에 추가하기 위한 "등록" 버튼이 있어야 합니다.
   - 목록 영역:
      -등록된 모든 가계부 내역을 보여주는 표가 있어야 합니다.
      - 표는 "날짜", "항목", "금액" 순서의 열로 구성되어야 합니다.

3. 핵심 기능
   - 초기 데이터 표시:
      - 사용자가 페이지에 처음 방문했을 때, 
        가계부 사용법을 쉽게 이해할 수 있도록 두 개의 예시 내역이 목록 표에 기본적으로 표시되어 있어야 합니다.
   - 내역 등록 기능:
      - 사용자가 '등록 영역'에 날짜, 항목, 금액을 모두 입력하고 "등록" 버튼을 클릭하면, 
      해당 내역이 '목록 영역' 표의 가장 아래쪽에 새로운 행으로 즉시 추가되어야 합니다.
   - 금액 자동 서식:
      - '목록 영역'에 표시되는 모든 금액은 사용자의 가독성을 위해 
         천 단위마다 쉼표(,)가 자동으로 표시되어야 합니다. 
         (예: 4500이 입력되면 "4,500"으로 보여야 함)
      - 힌트] 변수명.toLocaleString() : 숫자를 세 자리마다 콤마(,)로 구분해주는 유용한 함수*/

/* 작업순서 정하기
    1. HTML/CSS 화면구성
    2. 데이터 모델링 >> 데이터베이스 설계
        const table = [ {코드 : 1 , 날짜: '2025-06-19', 항목 : '식비', 금액 : 20000}]
    3. 함수(기능) 설계 >> API 설계
        (1) 등록
            등록 클릭 > 입력받은 3가지 정보 저장
            함수명   : 등록함수
            매개변수 : X
            반환값   : X
            로직    : input으로부터 입력 받은 값 가져오기
                     입력값 3개를 객체로 묶기
                     객체를 배열에 push
            실행조건 : [등록] onclick
        (2) 조회
            함수명   : 전체조회함수 
            매개변수 : X
            반환값   : X
            로직    : 특정한 table(html)에 배열내 모든 정보를 html형식으로 출력
            실행조건 : 페이지가 열렸을 때(최초)
                      [등록] 성공 시              
    4. 로직
    5. 화면-기능 연동
*/

const 가계부목록 = [
    { 코드: 1, 날짜: '2025-06-18', 항목명: '택시', 금액: 5800 },
    { 코드: 2, 날짜: '2025-06-19', 항목명: '식비', 금액: 20000 }
];

function 등록함수() {
    console.log('등록함수 exe');

    const dateInput = document.querySelector('#dateInput');
    console.log(dateInput);
    const contentInput = document.querySelector('#contentInput');
    console.log(contentInput);
    const moneyInput = document.querySelector('#moneyInput');
    console.log(moneyInput);

    const date = dateInput.value;
    console.log(date);
    const content = contentInput.value;
    console.log(content);
    const money = moneyInput.value;
    console.log(money);

    const obj = {코드 : 가계부목록.length+1 , 날짜 : date , 항목명 : content , 금액 : money};
    console.log(obj);

    가계부목록.push(obj);
    console.log(가계부목록);

    전체조회함수();
};

function 전체조회함수(){
    console.log('전체조회함수 exe');

    let html = ``;
    for(let i = 0 ; i < 가계부목록.length ; i++) {
        let 목록 = 가계부목록[i]
        html += `
        <tr>
            <td>${목록.날짜}</td>
            <td>${목록.항목명}</td>
            <td>${목록.금액.toLocaleString() }</td>
        </tr> `
    };
    console.log(html)

    const contentbody = document.querySelector('#contentbody')
    console.log(contentbody)
    contentbody.innerHTML = html
};


/*[실습14: 제품 관리 페이지]====================
1. 목표
    사용자가 카테고리, 제품명, 가격, 이미지를 포함한 제품 정보를 등록하고, 
    등록된 모든 제품을 표 형태로 한눈에 확인하며 관리할 수 있는 웹 페이지를 제작합니다.
2. 화면 구성
    페이지는 사용자가 정보를 입력하는 **'제품 등록 영역'**과 
    등록된 결과를 보여주는 **'제품 목록 영역'**으로 명확히 구분되어야 합니다.
    제품 등록 영역 (<div id="header">):
        카테고리 선택: 
            미리 정의된 카테고리 목록에서 제품의 분류를 선택할 수 있는 
            드롭다운 메뉴가 있어야 합니다. (예: '음료', '과자')
        제품명 입력: 
            등록할 제품의 이름을 텍스트로 입력할 수 있어야 합니다. (예: "코카콜라")
        제품 가격 입력: 
            제품의 가격을 숫자로 입력할 수 있어야 합니다. (예: 1000)
        제품 이미지 입력: 
            제품의 사진을 사용자의 컴퓨터에서 파일 형태로 선택하여 
            첨부할 수 있어야 합니다.
        등록 버튼: 
            모든 정보를 입력한 후, 
            목록에 제품을 추가하기 위한 "등록" 버튼이 있어야 합니다.
    제품 목록 영역 (<div id="main">):
        등록된 모든 제품 정보를 보여주는 표(테이블)가 있어야 합니다.
        표는 "이미지", "카테고리명", "상품명", "가격", "등록일", "비고" 순서의 열로 구성되어야 합니다.
        각 제품 항목(행)마다 해당 제품을 관리할 수 있는 "삭제" 버튼과 "수정" 버튼이 포함되어야 합니다.

3. 핵심 기능
    초기 데이터 표시:
        사용자가 페이지에 처음 방문했을 때, 
        카테고리 선택 메뉴에는 두 개의 예시 카테고리('음료', '과자')가 
        기본적으로 표시되어 있어야 합니다.
        제품 목록 표에는 사용법을 쉽게 이해할 수 있도록 
        네 개의 예시 제품이 기본적으로 표시되어 있어야 합니다.

    제품 등록 기능:
        사용자가 '등록 영역'에 카테고리, 제품명, 가격을 모두 입력하고 
        "등록" 버튼을 클릭하면, 
        해당 제품이 '목록 영역' 표에 새로운 행으로 즉시 추가되어야 합니다.
        제품 등록 시, 등록 날짜는 현재 날짜로 자동 기록되어야 합니다.
        첨부된 이미지는 목록의 '이미지' 열에 표시되어야 하며, 
        이미지를 첨부하지 않은 경우 기본 이미지가 대신 표시되어야 합니다.

    제품 관리 기능:
        삭제: 
            각 제품의 "삭제" 버튼을 클릭하면 
            해당 제품이 목록에서 즉시 제거되어야 합니다.
        수정: 
            "수정" 버튼을 클릭하면, 
            prompt 창을 통해 새로운 제품명과 가격을 입력받아 
            해당 제품의 정보를 수정하고 목록을 즉시 갱신해야 합니다.
*/

// [ 작업 순서 ] 
// 1. front / 화면 스케치(프로토타입)
// 2. front / HTML, CSS
// 3. back / 데이터 모델링

// 카테고리 목록
const categoryList = [
    { cno: 1, cname: '음료류' },
    { cno: 2, cname: '과자류' }
];
let currentCno = 2;

// 제품 목록
const productList = [
    { pno: 1, cno: 1, pname: '코카콜라', pprice: 1000, pimg: 'https://placehold.co/100x100', pdate: '2025-06-17' },
    { pno: 2, cno: 2, pname: '새우깡', pprice: 1200, pimg: 'https://placehold.co/100x100', pdate: '2025-06-18' },
    { pno: 3, cno: 1, pname: '칠성사이다', pprice: 900, pimg: 'https://placehold.co/100x100', pdate: '2025-06-19' }
];
let currentPno = 3;

console.log(categoryList);
console.log(productList);

// 4. back / 기능(함수) 설계
//      카테고리 목록 / 등록 / 출력 / 수정 / 삭제
// 5. back / 구현/로직
// 6. back / test


// categoryList > select 출력 함수
categryPrint();
function categryPrint() {
    console.log('categoryInput exe');

    const categoryInput = document.querySelector('#categoryInput');

    let html = `<option value="" disabled selected > 카테고리 선택하세요. </option>`;
    for (let i = 0; i < categoryList.length; i++) {
        const category = categoryList[i];
        html += `<option value="${category.cno}"> ${category.cname} </option>`;
    };
    categoryInput.innerHTML = html;
};

// 제품 등록 함수
function submit() {
    console.log('submit exe');

    const pnameInput = document.querySelector('#pnameInput');
    const pname = pnameInput.value;
    // console.log(pname);
    const ppriceInput = document.querySelector('#ppriceInput');
    const pprice = ppriceInput.value;
    // console.log(pprice);
    const pimgInput = document.querySelector('#pimgInput');
    const pimg = pimgInput.files[0];
    //files[0] 첨부파일의 첫번째 파일 객체를 가져옴
    // console.log(pimg);

    const categoryInput = document.querySelector('#categoryInput');
    const cno = categoryInput.value;
    // console.log(cno);

    //유효성 검사
    if (cno == '' || pname == '' || pprice == '') {
        alert('비어있는 항목이 있습니다.[실패]');
        return;
    };

    //현재 날짜 구하기 ☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★
    let year = new Date().getFullYear() // 현재 연도 반환함수
    let month = new Date().getMonth() + 1 // 1월이 0부터 시작하므로 +1 필수
    month = month > 9 ? month : `0${month}` // 1~9월 일 경우 앞에 0이 표시되어 보이게
    let day = new Date().getDate()        // getDay(요일 1~7), getDate(OO일)
    let pdate = `${year}-${month}-${day}`
    // console.log(pdate)☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★

    const obj = {
        pno: ++currentPno,
        cno: Number(cno),
        pname: pname,
        pprice: Number(pprice),
        pimg: pimg ? URL.createObjectURL(pimg) : 'https://placehold.co/100x100', //URL.createObjectURL:url생성  
        pdate: pdate
    };
    // console.log(obj);

    productList.push(obj);
    console.log(productList);

    productPrint()

    // etc input 초기화, 등록 성공 Alert
    categoryInput.value = ''
    pnameInput.value = ''
    ppriceInput.value = ''
    alert('성공')
};

// 제품 출력 함수
productPrint();
function productPrint() {
    // console.log('display exe')
    let html = ``
    for (let i = 0; i < productList.length; i++) {
        const product = productList[i];
        // console.log(product)

        // 카티고리명 가져오기
        let cname = '';
        for (let j = 0; j < categoryList.length; j++) {
            const category = categoryList[j];
            if (product.cno == categoryList[j].cno) {
                cname = categoryList[j].cname;
            };
        };

        html += `<tr>    
                    <td> <img src="${product.pimg} " /></td>   
                    <th> ${cname} </td>   
                    <td> ${product.pname} </td> 
                    <td> ${product.pprice.toLocaleString()} </td>             
                    <td> ${product.pdate} </td>       
                    <td> 
                        <button class="btnDelete" onclick="productDelete(${product.pno})"> 삭제 </button> 
                        <button class="btnEdit" onclick="productEdit(${product.pno})"> 수정 </button> 
                    </td> 
                </tr>`;
    };
    // console.log(html)

    // tbody에 id/class 부여 하지 않아도 >로 상하위 경로로 작성~
    document.querySelector('#main > table > tbody').innerHTML = html;
};

// 삭제 함수
function productDelete(pno) {
    console.log('productDelete exe')
    console.log(pno)

    for (let i = 0; i < productList.length; i++) {
        if (productList[i].pno == pno) {
            productList.splice(i, 1);
            alert('제품 삭제 [성공]')
            break;
        };
    };
    productPrint() //삭제 후 조회 필요
    // console.log(productList)
};

// 수정 함수
function productEdit(pno) {
    console.log('productEdit exe')
    console.log(pno)

    for (let i = 0; i < productList.length; i++) {
        if (productList[i].pno == pno) {
            const changeName = prompt("수정할 상품명");
            const changePrice = Number(prompt("수정 가격"));
            // console.log(changeName)
            // console.log(changePrice)

            productList[i].pname = changeName;
            productList[i].pprice = changePrice;
            
            alert('제품 수정 [성공]')
        };
    };

    productPrint() //수정 후 조회 필요

};




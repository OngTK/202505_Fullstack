const productList = [
    { pid: 1, pname: '콜라', pprice: '1200', pdesc: '시원한 탄산음료', pimg: 'https://placehold.co/100x100' },
    { pid: 2, pname: '사이다', pprice: '1400', pdesc: '칠성에서 만든 음료', pimg: 'https://placehold.co/100x100' },
    { pid: 3, pname: '환타', pprice: '1500', pdesc: '오렌지맛 탄산음료', pimg: 'https://placehold.co/100x100' }
];

// const inventoryList = [
//     { invid: 1, pid: 1, pInout: '입고', pqty: 10, preason: 'OOOOOO', pdate: '2025-06-22' },
//     { invid: 2, pid: 2, pInout: '출고', pqty: 20, preason: 'OOOOOO', pdate: '2025-06-23' },
//     { invid: 3, pid: 3, pInout: '입고', pqty: 30, preason: 'OOOOOO', pdate: '2025-06-24' }
// ];

//produc============================
// 2.1. 제품 등록
function regProduct() {
    const pimgInput = document.querySelector('#pimgInput');
    const pnameInput = document.querySelector('#pnameInput');
    const ppriceInput = document.querySelector('#ppriceInput');
    const pdescInput = document.querySelector('#pdescInput');

    let pid = 1;
    const pimg = pimgInput.files[0];
    const pname = pnameInput.value;
    const pprice = ppriceInput.value;
    const pdesc = pdescInput.value;

    if (pname == '' || pprice == '') {
        alert('제품명 또는 제품가격이 비어있습니다.');
        console.log("제품 등록 실패: 비어있는 필드가 있음");
        return;
    }

    let productList = localStorage.getItem('productList');
    if (productList == null || productList == "[]") {
        productList = [];
    } else  {
        productList = JSON.parse(productList);
        pid = productList[productList.length-1].pid + 1;
    }

    const obj = {
        pid: pid,
        pname: pname,
        pprice: pprice,
        pdesc: pdesc,
        pimg: pimg?URL.createObjectURL(pimg):'https://placehold.co/100x100'
    }
    productList.push(obj);

    localStorage.setItem('productList', JSON.stringify(productList));
    console.log("제품 등록 성공");
    pnameInput.value = '';
    ppriceInput.value = '';
    pdescInput.value = '';
    alert('제품이 등록되었습니다.');
    viewProduct();
    viewPid();
} // 제품 등록
// 2.2. 제품 삭제
function delProduct(pid) {
    let productList = localStorage.getItem('productList');
    if (productList == null) {
        productList = [];
    } else {
        productList = JSON.parse(productList);
    }

    for(let i=0; i<=productList.length-1; i++) {
        if (productList[i].pid == pid) {
            productList.splice(i, 1);
            localStorage.setItem('productList', JSON.stringify(productList))
            console.log("제품 삭제 성공");
            alert('제품이 삭제되었습니다.');
            viewProduct();
            viewPid();
            return;
        }
    }
    alert('존재하지 않는 제품입니다.');
    console.log('제품 삭제 실패: 존재하지 않는 제품');
    viewPid();
} // 제품 삭제

// 2.3 . 제품 조회
viewProduct();
function viewProduct() {
    console.log(`viewProduct exe`)
    let html = ``;

    let productList = localStorage.getItem('productList');
    if (productList == null) {
        productList = [];
    } else {
        productList = JSON.parse(productList);
    }

    for (let i = 0; i < productList.length; i++) {
        let product = productList[i];

        html += ` <tr>
                    <td><img src="${product.pimg}" /></td>
                    <td>${product.pname}</td>
                    <td>${product.pprice}</td>
                    <td>${product.pdesc}</td>
                    <td><button onclick='delProduct(${product.pid})'>삭제</button></td>
                </tr>`
    };

    document.querySelector('#productList').innerHTML = html
} // 전체 제품 조회

// 제품ID 조회
viewPid()
function viewPid() {
    let productList = localStorage.getItem('productList');
    if (productList == null) {
        productList = [];
    } else {
        productList = JSON.parse(productList);
    }

    let html = `<option disabled selected>이름 선택</option>`;
    for (let i = 0; i < productList.length; i++) {
        html += ` <option> ${productList[i].pid}</option>`
    };
     document.querySelector('#pidInput').innerHTML = html;
};

//inventory============================

// 4.1. 재고 입고
function inputInv() {
    const pidInput = document.querySelector('#pidInput');
    const pInoutInput = document.querySelector('#pInoutInput');
    const pqtyInput = document.querySelector('#pqtyInput');
    const preasonInput = document.querySelector('#preasonInput');

    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    month = month < 9 ? `0${month}` : month;
    let day = new Date().getDate();
    day = day < 9 ? `0${day}` : day;

    let invid = 1;
    let pid = pidInput.value;
    const pInout = pInoutInput.value;
    const pqty = pqtyInput.value;
    const preason = preasonInput.value;
    let pdate = `${year}-${month}-${day}`;

    let inventoryList = localStorage.getItem('inventoryList');
    if (inventoryList == null) {
        inventoryList = [];
    } else {
        inventoryList = JSON.parse(inventoryList);
        invid = inventoryList[inventoryList.length - 1].invid + 1;
    }

    const obj = {
        invid: invid,
        pid: Number(pid),
        pInout: pInout,
        pqty: Number(pqty),
        preason: preason,
        pdate: pdate
    }
    inventoryList.push(obj);

    localStorage.setItem('inventoryList', JSON.stringify(inventoryList));
    console.log("재고 등록 성공");
    pqtyInput.value = '';
    preasonInput.value = '';
    alert('재고 로그가 등록되었습니다.');
    viewInv();
} // 재고 입고

// 4.2. 전체 재고 로그 조회
viewInv()
function viewInv() {
    // console.log(`viewInv exe`)

    let inventoryList = localStorage.getItem("inventoryList")
    console.log(inventoryList)
    if (inventoryList == null) {
        inventoryList = [];
    } else {
        inventoryList = JSON.parse(inventoryList)
    };

    if (inventoryList.length < 1) {
        alert('[주의] 표시할 재고 로그가 없습니다.')
     };

    let html = ``;
    for (let i = 0; i < inventoryList.length; i++) {
        let inventory = inventoryList[i];

        html += ` <tr>
                    <td>${inventory.pid}</td>
                    <td>${inventory.pInout}</td>
                    <td>${inventory.pqty}</td>
                    <td>${inventory.preason}</td>
                    <td><button onclick='modInv(${inventory.invid})'>입출사유변경</button></td>
                </tr>`
    };
    document.querySelector('#logList').innerHTML = html;
} // 전체 재고 로그 조회


// 4.3. 재고 내역 수정
function modInv(invid) {
    
    let inventoryList = JSON.parse(localStorage.getItem("inventoryList"))
    if (inventoryList)


    for (let i = 0; i <= inventoryList.length - 1; i++) {
        if (inventoryList[i].invid == invid) {
            const reason = prompt("새로운 입출사유를 입력해주세요:");
            if (reason == '') {
                alert('입출사유가 입력되지 않았습니다.');
                console.log("재고 수정 실패: 비어있는 필드가 있음");
                return;
            }

            inventoryList[i].preason = reason;
            localStorage.setItem('inventoryList', JSON.stringify(inventoryList));
            alert('입출사유가 수정되었습니다.');
            console.log("재고 수정 성공");
            viewInv();
            return;
        }
    }
} // 재고 내역 수정 





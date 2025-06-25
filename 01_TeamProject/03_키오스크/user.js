/* const productList = [
    { pid: 1, pname: '콜라', pprice: '1200', pdesc:	'시원한 탄산음료', pimg: 'https://placehold.co/100x100' },
    { pid: 2, pname: '사이다', pprice: '1400', pdesc: '칠성에서 만든 음료', pimg: 'https://placehold.co/100x100' },
    { pid: 3, pname: '환타', pprice: '1500', pdesc:	'오렌지맛 탄산음료', pimg: 'https://placehold.co/100x100' }
]

const cartList = [
    { pid: 1, cid: 1, pname: '콜라', pprice: '1200', pdesc:	'시원한 탄산음료', pimg: 'https://placehold.co/100x100' }
] */

let currentCid = 0;

viewProduct();
function viewProduct() {
    let html = ``;
    let productList = getProduct();

    for (let i = 0; i < productList.length; i++) {
        let product = productList[i];

        html += ` <tr>
                    <td><img src="${product.pimg}" onclick='addProduct(${product.pid})'/></td>
                    <td>${product.pname}</td>
                    <td>${product.pprice}</td>
                    <td>${product.pdesc}</td>
                </tr>`
    };

    document.querySelector('#productList').innerHTML = html
} // 모든 제품 전체 조회

function addProduct(pid) {
    let productList = getProduct();
    
    for (let i=0; i<=productList.length-1; i++) {
        if (productList[i].pid == pid) {
            const pid = productList[i].pid;
            let cid = currentCid;
            const pimg = productList[i].pimg;
            const pname = productList[i].pname;
            const pprice = productList[i].pprice;
            const pdesc = productList[i].pdesc;

            const obj = {
                pid: pid,
                cid: ++currentCid,
                pimg: pimg,
                pname: pname,
                pprice: pprice,
                pdesc: pdesc
            }

            let cartList = getCart();
            cartList.push(obj);

            let totalPrice = getPrice();
            totalPrice += Number(pprice);

            localStorage.setItem('cartList', JSON.stringify(cartList));
            localStorage.setItem('totalPrice', totalPrice);
            console.log("장바구니 담기 성공");
            alert('제품이 장바구니에 추가되었습니다.');
            viewProduct();
            viewCart();
        }
    }
} // 제품 이미지 클릭 시 장바구니에 등록

viewCart();
function viewCart() {
    let htmlBody = ``;
    let cartList = getCart();
    let totalPrice = getPrice();

    for (let i = 0; i < cartList.length; i++) {
        let cart = cartList[i];

        htmlBody += `<tr>
                        <td><img src="${cart.pimg}" /></td>
                        <td>${cart.pname}</td>
                        <td>${cart.pprice}</td>
                        <td>${cart.pdesc}</td>
                        <td><button onclick="delCart(${cart.cid})">삭제</button></td>
                    </tr>`
    };

    document.querySelector('#cartList').innerHTML = htmlBody;

    const cartPrice = document.querySelector('#cartPrice');
    let htmlFoot = `<tr>
                        <td colspan="4">총 가격: <span>${totalPrice}</span>원</td>
                        <td><button onclick="">결제하기</button></td>
                    </tr>`
    cartPrice.innerHTML = htmlFoot;
} // 장바구니 전체 조회

function delCart(cid) {
    let cartList = getCart();

    for (let i=0; i<=cartList.length-1; i++) {
        if (cartList[i].cid == cid) {
            let totalPrice = getPrice();
            totalPrice -= Number(cartList[i].pprice);
            localStorage.setItem('totalPrice', totalPrice);
            
            cartList.splice(i, 1);
            localStorage.setItem('cartList', JSON.stringify(cartList));

            currentCid--;
            console.log("제품 삭제 성공");
            alert('장바구니에서 제품이 삭제되었습니다.');
            viewCart();
            return;
        }
    }
    alert('존재하지 않는 제품입니다.');
    console.log('제품 삭제 실패: 존재하지 않는 제품');
} // 장바구니 내 특정 제품 삭제

function getProduct() {
    let productList = localStorage.getItem('productList');
    if (productList == null) {
        productList = [];
    } else {
        productList = JSON.parse(productList);
    }
    return productList;
}

function getCart() {
    let cartList = localStorage.getItem('cartList');
    if (cartList == null) {
        cartList = [];
    } else {
        cartList = JSON.parse(cartList);
    }
    return cartList;
}

function getPrice() {
    let totalPrice = localStorage.getItem('totalPrice');
    if (totalPrice == null) {
        totalPrice = 0;
    } else {
        totalPrice = JSON.parse(totalPrice);
    }
    return totalPrice;
}
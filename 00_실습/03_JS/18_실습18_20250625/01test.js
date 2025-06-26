function getProductsList() {
    let productList = localStorage.getItem('productList');

    if (productList == null) {
        productList = [];
    } else {
        productList = JSON.parse(productList);
    }
    return productList;
}

function setProductsList(productList) {
    localStorage.setItem('productList', JSON.stringify(productList))
}

//===========crud

//c
function productAdd() {
    const pnameInput = document.querySelector('pnameInput')
    const ppriceInput = document.querySelector('ppriceInput')
    const pcontentInput = document.querySelector('pcontentInput')
    const pimgInput = document.querySelector('pimgInput')

    const pname = pnameInput.value
    const pprice = ppriceInput.value
    const pcontent = pcontentInput.value
    const pimg = pimgInput.files[0]

    const productList = getProductsList();

    let pid = 0;
    if (productList.length == 0) {
        pid = 1
    } else (
        pid = productList(productList.length - 1).pid + 1
    )
    const obj = {
        pid: pid,
        pname: pname,
        pprice: Number(pprice),
        pcontent: pcontent,
        pimg: pimg ? URL.createObjectURL(pimg) : '#'
    }

    productList.push(obj)

    pnameInput.value = ''
    ppriceInput.value = ''
    pcontentInput.value = ''

    alert('제품 등록 완료')
    setProductsList(productList)
    productPrint()
}

function productPrint() {
    const prductbody = document.querySelector('#tbody')

    let productList = getProductsList()

    let html = ``

    for (let i = 0; i < productList.length; i++) {
        const product = productList[i]
        html += `<tr>
                     <td> <img src="${product.pimg}" /> </td>
                     <td> ${product.pname} </td>
                     <td> ${product.pprice.toLocaleString()} </td>
                     <td> ${product.pcontent} </td>
                     <td> <button class="btnDelete" onclick="productDelete(${product.pcode})"> 삭제 </button> </td>
                 </tr>`;

    };

    prductbody.innerHTML = html
};

function productDel(){
    let productList = getProductsList();

    for (let i =0 ; i < productList.length ; i++) {
        if (productList[i].pid == pid) {
            productList.splice(i,1)
            alert("삭제완료")
            setProductsList(productList)
            productPrint()
            return;
        }
    }
    alert('오류 삭제하려는 제품을 찾지 못했습니다.')
}
function getprodcutList() {
    let productList = localStorage.getItem('productList')
    if (productList == null) {
        productList = []
    } else {
        productList = JSON.parse(productList)
    }
    return productList
};

function setproductList(productList) {
    localStorage.setItem('productList', JSON.stringify(productList))
}

//c
function productAdd() {
    console.log('productAdd exe')

    const pnameInput = document.querySelector('#pnameInput')
    const ppriceInput = document.querySelector('#ppriceInput')
    const pcontentInput = document.querySelector('#pcontentInput')
    const pimgInput = document.querySelector('#pimgInput')

    const pname = pnameInput.value
    const pprice = ppriceInput.value
    const pcontent = pcontentInput.value
    const pimg = pimgInput.files[0]

    const productList = getprodcutList()
    console.log(productList)
    pid = 0;
    if (productList.length == 0) {
        pid = 1
    } else (
        pid = productList[productList.length - 1].pid + 1
    )
    console.log(pname)
    console.log(pprice)
    console.log(pcontent)
    console.log(pimg)
    console.log(pid)
    const obj = {
        pid: pid,
        pname: pname,
        pprice: Number(pprice),
        pcontent: pcontent,
        pimg: pimg ? URL.createObjectURL(pimg) : '#'
    }
    console.log(obj)

    productList.push(obj)
    alert('등록 성공')
    setproductList(productList)
    console.log(productList)
    productPrint()
}

productPrint()
function productPrint() {
    console.log('productPrint exe')

    const productList = getprodcutList()
    console.log(productList)
    const tbody = document.querySelector('#tbody')
    console.log(tbody)
    let html = ''

    for (let i = 0; i < productList.length; i++) {
        const product = productList[i]

        html += `<tr>
                    <td><img src="${product.pimg}"</td>
                    <td>${product.pname}</td>
                    <td>${product.pprice}</td>
                    <td>${product.pcontent}</td>
                    <td><button onclick="productDelete(${product.pid})">삭제</button></td>
                </tr>`
    }
    tbody.innerHTML = html;
}

function productDelete(pid) {
    const productList = getprodcutList()

    for (let i = 0; i < productList.length; i++){
        if(productList[i].pid = pid){
            productList.splice(i, 1)
            setproductList(productList)            
            alert('삭제성공')
            productPrint()
            return

        }
    }
    alert("삭제실패")
}
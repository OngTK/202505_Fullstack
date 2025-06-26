function getproductList() {
    let productList = localStorage.getItem('productList')

    if (productList == null) {
        productList = []
    } else {
        productList = JSON.parse(productList)
    }
    return productList
}

function setproductList(productList) {
    localStorage.setItem('productList', JSON.stringify(productList))
}

//c
function productAdd() {
    console.log('productAdd')
    const productList = getproductList()
    console.log(productList)

    const pnameInput = document.querySelector('#pnameInput')
    const ppriceInput = document.querySelector('#ppriceInput')
    const pcontentInput = document.querySelector('#pcontentInput')
    const pimgInput = document.querySelector('#pimgInput')

    const pname = pnameInput.value;
    const pprice = ppriceInput.value;
    const pcontent = pcontentInput.value;
    const pimg = pimgInput.files[0];

    let pid = 0;
    if (productList.length == 0) {
        pid = 1
    } else {
        pid = productList[productList.length - 1].pid + 1
    }

    const obj = {
        pid: pid,
        pname: pname,
        pprice: pprice,
        pcontent: pcontent,
        pimg: pimg ? URL.createObjectURL(pimg) : '#'
    }

    productList.push(obj)
    console.log(productList)

    setproductList(productList)
    alert('등록성공')
    productPrint()
}

//r
productPrint()
function productPrint() {
    console.log("productPrint()")

    const productList = getproductList()

    html = ``;

    let tbody = document.querySelector('#tbody')

    for (let i = 0; i < productList.length; i++) {
        const product = productList[i]

        html += `<tr>
                        <td><img src="${product.pimg}"/></td>
                        <td>${product.pname}</td>
                        <td>${product.pprice}</td>
                        <td>${product.pcontent}</td>
                        <td><button onclick="productDelete(${product.pid})">삭제</button></td>
                    </tr>`
    }

    tbody.innerHTML = html
}

//d
function productDelete(pid) {
    const productList = getproductList()

    for (let i = 0; i < productList.length; i++) {
        if (pid == productList[i].pid) {
            productList.splice(i, 1)
            console.log(productList)
            setproductList(productList);
            productPrint()
            alert('삭제성공')
            return

        }
    }
    alert('삭제실패')
}




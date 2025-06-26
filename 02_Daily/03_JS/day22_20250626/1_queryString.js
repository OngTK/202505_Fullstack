/*
[쿼리스트링, Query String]
    1. 정의 : URL 상에 매개변수를 사용
    2. 형태
        URL?변수명=값
        페이지 이동(요청)간의 데이터를 전달하기 위해 사용
    3. 사용법
        (1) 이동방법
            html : <a href='이동경로?변수명=값&변수명=값'>
            js : location.href='이동경로?변수명=값&변수명=값'
        (2) URL 상의 매개변수를 가져오는 방법
            [1] new URLSearchParams(location.search).get(URL상의 변수명);
                : 현재 URL 경로를 반환하는 객체
            [2] let url = new URLSearchParams(location.search)
                let 변수명 = url.get('변수명')
*/

//[1]
let url = new URLSearchParams(location.search);
console.log(url);

//[2]
let param = url.get('param');
console.log(param);

//[3]
let url3 = new URLSearchParams(location.search);
let pcode = url3.get('pcode')
console.log(pcode)

let page = url3.get('page')
console.log(page)

//[4] JS에서 페이지를 요청하는 방법
function 이동함수(){
    location.href='1_queryString.html?sort=1&code=8';
}
let url4 = new URLSearchParams(location.search)
let sort = url4.get('sort')
console.log(sort)
let code = url4.get('code')
console.log(code)
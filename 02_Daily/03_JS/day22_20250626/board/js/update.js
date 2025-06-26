getBoard()
function getBoard() {
    //게시물 URL·no 가져오기 
    const url = new URLSearchParams(location.search);
    const selectNo = url.get('no');

    //localStorage에서 boardList를 가져옴
    let boardList = localStorage.getItem('boardList');
    if (boardList == null) {
        boardList = [];
    } else {
        boardList = JSON.parse(boardList);
    }

    // boardList 내에서 board no가 URL no와 같은 경우를 찾아,
    // 일치할 경우 제목, 내용 마크업에 해당 내용을 대입
    for (let i = 0; i < boardList.length; i++) {
        const obj = boardList[i];
        if (obj.no == selectNo) {
            document.querySelector('#titleInput').value = obj.title;
            document.querySelector('#contentInput').innerHTML = obj.content;

            return;
        };
    };
};

function boardUpdate() {
    //게시물 URL·no 가져오기 
    const url = new URLSearchParams(location.search);
    const selectNo = url.get('no');

    // 게시물의 수정된 제목, 내용, 비밀번호를 가져옴
    const titleInput = document.querySelector('#titleInput');
    const contentInput = document.querySelector('#contentInput');
    const pwdInput = document.querySelector('#pwdInput');

    const title = titleInput.value;
    const content = contentInput.value;
    const pwd = pwdInput.value;

    //수정된 게시물 객체 생성
    const obj = { no: selectNo , title, content, pwd }

    //localStorage에서 boardList를 가져옴
    let boardList = localStorage.getItem("boardList")
    if (boardList == null) {
        boardList = [];
    } else {
        boardList = JSON.parse(boardList);
    }

    // 게시물의 no와 수정 객체의 no가 같을 경우,
    // 해당 객체를 replace
    for(let i = 0 ; i < boardList.length ; i++){
        const board = boardList[i]
        if(board.no == obj.no){
            boardList[i] = obj
        }
    }

    //localstorage에 저장
    localStorage.setItem("boardList", JSON.stringify(boardList))

    alert('[성공] 게시물 수정 완료')
    
    location.href = 'list.html'
}
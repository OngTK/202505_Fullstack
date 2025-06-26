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
    // 일치할 경우 제목, 내용 html에 해당 내용을 대입
    for (let i = 0; i < boardList.length; i++) {
        const obj = boardList[i];
        if (obj.no == selectNo) {
            document.querySelector('#title').innerHTML = obj.title;
            document.querySelector('#content').innerHTML = obj.content;
            return;
        };
    };
};

function boardDelete() {
    //게시물 URL·no 가져오기 
    const url = new URLSearchParams(location.search);
    const selectNo = url.get('no');

    //localStorage에서 boardList를 가져옴
    let boardList = localStorage.getItem('boardList')
    if (boardList == null) {
        boardList = [];
    } else {
        boardList = JSON.parse(boardList);
    };

    // 사용자에게 비밀번호 받기
    const pwd = prompt('비밀번호');

    // URL no와 게시물No가 같은 게시물을 찾기
    // 사용자에게 받은 pwd가 해당 게시물의 pwd와 같은지 확인
    // 두 pwd가 일치한다면 다음을 수행 (삭제, 저장, 알림, 리스트로 이동)
    for (let i = 0; i < boardList.length; i++) {
        const obj = boardList[i];
        if (obj.no == selectNo) {
            if (obj.pwd == pwd) {
                boardList.splice(i, 1);
                localStorage.setItem("boardList", JSON.stringify(boardList));
                alert('[성공] 삭제 완료되었습니다.');
                location.href = 'list.html';
            }
            else {
                alert('[실패] 비밀번호를 확인하세요.');
                return;
            };
        };
    };
};

// 수정으로 이동
function boardUpdateview(){
    //게시물 URL·no 가져오기 
    const url = new URLSearchParams(location.search);
    const selectNo = url.get('no');

    //localStorage에서 boardList를 가져옴
    let boardList = localStorage.getItem('boardList')
    if (boardList == null) {
        boardList = [];
    } else {
        boardList = JSON.parse(boardList);
    };

    // 사용자에게 비밀번호 받기
    const pwd = prompt('비밀번호');

    // URL no와 게시물No가 같은 게시물을 찾기
    // 사용자에게 받은 pwd가 해당 게시물의 pwd와 같은지 확인
    // 두 pwd가 일치한다면 다음을 수행 (삭제, 저장, 알림, 수정으로 이동)
    for (let i = 0; i < boardList.length; i++) {
        const obj = boardList[i];
        if (obj.no == selectNo) {
            if (obj.pwd == pwd) {
                location.href = `update.html?no=${selectNo}`;
            }
            else {
                alert('[실패] 비밀번호를 확인하세요.');
                return;
            };
        };
    };    
};
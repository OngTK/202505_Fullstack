boardPrint()
function boardPrint(){

    const boardTbody = document.querySelector('#tbody')
    
    let boardList = localStorage.getItem('boardList')
    if (boardList == null) {
        boardList = [];
    } else {
        boardList = JSON.parse(boardList);
    }

    let html = ``
    for (let i = 0 ; i < boardList.length ; i++){
        let board = boardList[i]
        html += `<tr>
            <td>${board.no}</td>
            <td><a href='view.html?no=${board.no}'>${board.title}</a></td>
        <tr>`
    }

    boardTbody.innerHTML = html;
}
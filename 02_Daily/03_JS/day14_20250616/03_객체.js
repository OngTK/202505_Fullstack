/* 게시판 만들기
1. 저장할 자료 조사
    회사명, 
    (게시물) 작성일, 제목, 글쓴이, 조회수, 내용 
    (댓글) 내용, 작성자, 작성일

2. 자료들을 분리 (상하관계 / 계층관계)
    (1) 회사명-게시물    1:N
    (2) 게시물-댓글      1:N

3. 각 분리된 정보들을 객체화
    종목 = { code : '005930' , name : '삼성잔자' }
    게시물 = { nid : '1' , title : '제목' , writer : '글쓴이' , view : 5 , content : '내용', date : '2025-06-16' }
    댓글 = { rid : '1' , content : "내용" , writer : 작성자 , date : '2025-06-16' }

4. 분리된 정보들을 연관 = 참조키!!
    종목 = { code : '005930' ...}
    게시물 = { code : '005930' , nid : '1'  ...}
    댓글 = { nid : '1' , rid : '1' ...}
*/

/* [ 실습7 요구사항]
키오스크 주문 시스템을 위한 설계하는 임무를 맡았습니다.
이 카페는 고객이 키오스크를 통해 직접 음료와 디저트를 주문하고 결제하는 시스템을 도입하고자 합니다.
카페의 운영 방침과 키오스크의 기능 요구사항은 다음과 같습니다.

메뉴 구성: 메뉴는 "커피", "티", "베이커리" 와 같은 카테고리로 명확하게 구분됩니다.
제품 정보: 각 제품은 이름, 가격, 그리고 키오스크에 표시될 이미지 정보를 가집니다. 
            때때로 특정 메뉴가 품절될 수 있어, 판매 가능 여부를 관리해야 합니다.
주문 방식: 고객은 한 번의 주문에 여러 종류의 제품을 담을 수 있습니다. 
            예를 들어, 아이스 아메리카노 2잔과 소금빵 1개를 함께 주문할 수 있습니다.
주문 기록: 모든 주문은 고유한 주문 번호와 함께 주문 시간, 최종 결제 금액이 기록되어야 합니다.
가격 변동: 제품의 가격은 향후 변동될 수 있습니다. 
            따라서 주문 내역을 조회할 때는, 가격이 오르거나 내리더라도 주문 당시의 가격을 기준으로 표시할 수 있어야 합니다.

작업
    1. 스프레드 시트에 테이블 작성
    2. JS로 객체화

    https://docs.google.com/spreadsheets/d/1-0HXHV_1V_XhsvsPiUyVKtvFxDIQhJ4k3mPR45rMmhs/edit?usp=sharing
*/




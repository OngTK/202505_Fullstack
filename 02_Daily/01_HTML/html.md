# HTML 시작

## HTML 정의

    1. Hyper(이동) Text Markup Language
        이동이 가능한 문자들을 제공하는 마크업 언어
    2. Markup : 구조화된 표식 
    3. 언어
        - 마크업 언어 : 텍스트 앞·뒤에 마크하는 언어
    4. 주석 : 메모(번역되지 않는 구역) 
        <!-- 내용물 -->

## MarkUp

    HTML 언어를 만든 회사에서 미리 정의한 규칙
   
    1. \<마크> 대상 </마크>
   
    2. <마크업명/>
        ex. <img/>
   
    3. 각 마크업들은 서로 다른 속성(본질의 특징)을 갖는다.
        <마크업명 속성명="값"> </마크업>
        HTML은 프로그래밍 언어 X >> 마크업 언어 >> REACT (JS기반 프로그래밍)

## MarkUp의 종류

1. \<HTML> : HTML 모든 마크업들을 전체를 감싼 마크업
2. \<head> : HTML 문서의 옵션정보 마크업을 감싼 마크업
    1. \<title> : 페이지 제목
    2. \<link href="css파일경로" real="stylesheet"> : HTML 문서의 CSS 포함
    3. \<script scr="JS파일경로"> : HTML 문서의 JS 포함 
3. \<body> : HTML 문서의 본문
4. \<h1> ~ \<h6> : 제목(Head) 마크업, 글자 크기/굵게/구역 의미
5. \<p> : 문단(Paragrath) 마크업
6. \<br/> : 줄 바꿈(break rule)
7.  \<hr/> : 구분, 가로 선 (horiztontal rule)

```HTML
<html> <!--HTML 문서의 시작을 알리는 마크업, 검색엔진, 최적화에 필요-->
    <head> <!--HTML 문서의 다양한 옵션 정보를 감싼 마크업-->
        <meta charset='utf-8'> <!--인코딩/번역방법: UTF-8(한글)-->
        <meta http-equiv='X-UA-Compatible' content='IE=edge'> <!--HTML 문서의 디바이스 설정, 생략가능-->
        <title>Page Title</title> <!--문서의 제목, Tab에 표시되는 페이지 명-->
        <meta name='viewport' content='width=device-width, initial-scale=1'> <!--viewport : 반응형 디바이스 설정, 안쓰면 생략 가능-->
            <link rel='stylesheet' type='text/css' media='screen' href='main.css'> <!--CSS파일을 첨부, href에 css의 경로 연결-->
        <script src='main.js'></script> <!-- JS 파일 첨부-->
    </head> <!--head 마크업 끝-->
    <body> <!--본문-->
        
        <!-- 4. 제목 마크업 -->
        <h1> 안녕하세요1 </h1>
        <h2> 안녕하세요2 </h2>
        <h3> 안녕하세요3 </h3>
        <h4> 안녕하세요4 </h4>
        <h5> 안녕하세요5 </h5>
        <h6> 안녕하세요6 </h6>
        <!--  <h7> 안녕하세요7 </h7> 없음  -->

        <!-- 5. 문단 마크업  -->
        <p> 문단1 마크업 </p>
        <p> 문단2 마크업 </p>

        <!-- 6. 줄바꿈 마크업 -->
        줄바꿈에 엔터는 적용되지 않음<br/>
        줄바꿈<br/>
        줄바꿈<br/>

        <!-- 7. 가로 구분선 마크업 -->
        구분선<hr/>내용과 내용사이 구분선
        
    </body> <!--본문 끝-->
</html>
```

 8.  \<ol> : order list, 순서(번호)있는 목록
 9.  \<ul> : unorder list, 순서(번호)없는 목록
 10. \<li> : list item, ol or ul 마크업 내의 항목

```html
<ul> <!--unoredr list : 순서없는 목록-->
    <li> 1일차 </li> <!-- list itme : 목록의 항목-->
    <li> 2일차 </li> 
    <li> 3일차 </li>
</ul>

<ol> <!--order list : 순서(번호)가 있는 목록-->
    <li> 1일차 </li> 
    <li> 2일차 </li> 
    <li> 3일차 </li>        
</ol>
```

 11.  \<a> : html/페이지 이동

     <a href="이동 경로"> 텍스트 </a>
     <a href="경로" target="_blank"> 텍스트 </a> : 새 창/탭 열기

 12.  \<img /> : 이미지 마크업
 13.  \<audio> \</audio> : 오디오 마크업
 14.  \<video> \</video> : 비디오 마크업
     
    * 15~17 공통 속성 : src= "파일경로"
    * 16~17 공통 속성
         controls="controls" : 컨트롤러 제공
         autoplay="autoplay" : 자동실행, 정책상 차단
         muted = "muted" : 음소거, autoplay+muted : 비디오 자동실행 가능

``` html
    <img src="./img.jpg"/>
    <!-- ※ 로컬 경로로 불러올 경우 서버에서는 이미지 확인 불가-->

    <audio src="./Auido.mp3" controls="controls" autoplay="autoplay" muted="muted"></audio> 
    <video src="./video.mp4" controls="controls" autoplay="autoplay" muted="muted"></video>
```

 15.  \<input /> : 입력 상자
   
    [ 주요 속성명 ]
     (1) type        : 입력 방법
             "text"          : 문자입력
             "password"      : 비밀번호, 가려진 문자
             "file"          : 첨부파일, multiple : 다중선택
             "radio"         : 단일 선택의 선택상자, name 속성값이 동일
             "checkbox"      : 복수 선택의 선택상자
             "number"        : 오로지 숫자만 입력
             "date"          : 날짜 선택
             "datetime-local": 날짜+시간 선택
             "month"         : 월 선택 
             "time"          : 시간 선택
             "week"          : 주 선택
             "range"         : 범위 스크롤
             "submit"        : 폼 전송
             "reset"         : 폼 초기화
             "button"        : 일반 버튼 vs \<button type="button">\</button>
     (2) name        : 동일한 마크업 간의 식별 이름
     (3) value       : 입력상자 데이터
     (4) disabled    : 비활성화
     (5) readonly    : 수정불가능
     (6) maxlength   : 최대 글자수 제한
     (7) autofocus   : 지정한 입력 상자의 포커스
     (8) placeholder : 입력상자의 가이드 텍스트

``` html
        <input type="text" value="유재석" disabled="disabled"/> <br /> 
        <!-- 입력 상자 생성 / disabled => 수정불가 + 비활성화-->
        비밀번호 : <input type="password" placeholder="비밀번호를 입력해주세요." maxlength="5"/> <br />
        텍스트2 : <input type="text" value="국민MC" readonly="readonly" autofocus="autofocus"/> <br /> 
        <!-- 입력 상자 생성 / readonly => 수정불가 + 활성화 / autofocus => 페이지 접근 시 해당 위치에 포커스-->
        단일 첨부파일 : <input type="file"/> <br />
        복수 첨부파일 : <input type="file" multiple="multiple" /> <br />
        숫자 : <input type="number" /> <br />
        날짜 : <input type="date" /> <br />
        날짜/시간 : <input type="datetime-local" /> <br />
        시간 : <input type="time" /> <br />
        월 : <input type="month" /> <br />
        주 : <input type="week" /> <br />
        스크롤 : <input type="range" /> <br />
        원형 체크박스(단일 선택) : 
        <input type="radio" name="동의여부"/> 예 
        <input type="radio" name="동의여부"/> 아니오 <br />
        사각 체크박스(복수 선택) : 
        <input type="checkbox"name = "가입경로"/> 뉴스
        <input type="checkbox"name = "가입경로"/> 검색 <br />
        전송버튼 : <input type="submit"/> <br /> <!--폼전송, 추후 자바서버(백엔드)에 전송-->
        리셋버튼 : <input type="reset"/> <br />
        일반버튼1 : <input type="button"/> <br /> <!--자바스크립트의 함수(이벤트)를 연동하여 사용-->
```

 16. \<button>\</button> : 버튼 마크업, 추후 자바스크립트의 함수 연동
 17. \<select>\</select> : 목록 상자

    <option>선택1</option>
    <option>선택2</option>
    와 같이 option 마크업을 select 안에 기입하여 목록을 만들 수 있음

 18. \<textarea>\</textarea> : 긴 텍스트를 받을 수 있음
``` html
        일반버튼2 : <button type="button">일반버튼2</button>

        <br/>목록상자
        <select>
            <option> 네이버 </option>
            <option> 카카오 </option>
            <option> 구글</option>
        </select>

        <br/>긴 텍스트
        <textarea cols="30" rows="5"></textarea>
```

 19.  \<table>\</table> 전체 표를 깜산 마크업

    <tr></tr> : 가로, 행
        <th></th> : 테이블 제목(열/세로) 셀
        <td></td> : 테이블 데이터(열/세로) 칸
    속성
        border="1" : 테이블 테두리
        style="border-collapse : collapse;" : 이중 테두리를 한 줄 테두리로 변경
        rowspan : 행병합
        colspan : 열병합

```html
    <table border="1" style="border-collapse: collapse;">
        <thead>
            <tr> <!-- table row 행 추가-->
                <th> <!-- table head 열 추가-->
                    제목 1  
                </th>
                <th>
                    제목 2
                </th>
            </tr> 
        </thead>
        <tbody>
            <tr>
                <td><!--table data : 내용/셀 추가-->
                    데이터 1
                </td>
                <td>
                    데이터 2
                </td>
            </tr>
            <tr>
                <td colspan="2">데이터 3</td> <!--colspan : 열병합-->
            </tr>
            <tr>
                <td rowspan="2"> 데이터4 </td> <!--rowspan : 행병합-->
                <td> 데이터5 </td>
            </tr>
            <tr>
                <td> 데이터6 </td>
            </tr>
        </tbody>
    </table>
```


# CSS 시작

##  CSS 정의
Cascading style sheets 스타일시트

    1. 위에서 아래로 꾸미기 시트를 덮는다.
    2. 주로 HTML언어를 꾸미는 목적으로 사용
    3. HTML종속
    4. 주석
        // : 한줄 주석
        /* 내용 */ : 여러줄 주석

## CSS 적용 방법
### CSS 구조
<span style="font-weight:bold; font-size:20px">선택자{ 속성명:값; }</span>


### 식별자. 선택자
CSS 속성을 적용할 대상을 구분

    1. *        : 와일드카드, 전체 선택

    2. 마크업명  : 마크업 선택자
    
    3. .class   : 클래스 선택자 >> 복수
    
    4.#아이디    : 아이디 선택자 >> 단일
        * 만일 속성이 중복일 때 우선순위
            (style 속성)> #id > .class > 마크업 > *
            그 외 중복일 때는 코드 작성순으로 마지막 코드의 속성이 적용
            관례적, 최대한 클래스를 활용 > 특정 부분만 ID 선택자 사용
            
    5. 다중선택자 : 여러 개 선택자를 한번에 적용 
            A선택자, B선택자 { 속성명:값; }
    
    6. 자식(하위) 선택자 : >
            부모 선택자 > 자식선택자{}
    
    7. 자손 선택자 : 띄어쓰기
            부모 선택자" "자손선택자{}
    
    8. 형제 선택자 : 자식 선택자가 다수일 때,
            부모선택자 자손선택자명 : nth-child(순번)
            :nth-of-type(odd){} 홀수 열 
            :nth-of-type(even){} 짝수 열  
    
    9. 속성 선택자 : 선택자가 지정된 속성명을 가질 때 사용
            선택자[HTML속성명]

### 마크업에 CSS 직접 적용
<span style="font-weight:bold; font-size:20px">마크업 sytle="속성명:값; 속성명:값;</span>

```html
<span style="font-weight:bold; font-size:20px">마크업 sytle="속성명:값; 속성명:값;</span>
```

### html-head에서 style 적용
```html
<head> 
    <style>
        식별자{ 
            속성명:값; 
            속성명:값;
        }
    </style>
</head>

<head> 
    <style>
        .class { 
            font-weight:bold; 
            font-size:20px;
        }
    </style>
</head>

```

### html에 CSS 파일 연결
1. HTML에서 CSS 확장자 파일 불러오기 
2. CSS 파일내에서 style 정의
```html
<!-- html -->
<head> 
    <link href="CSS파일경로" rel="stylesheet" />
</head>
```
```CSS
// CSS

식별자 { 속성명:값; 속성명:값; }

.class { 
font-weight:bold; 
font-size:20px;
}
``` 

## CSS 텍스트 속성
### 기본 CSS 속성
| 속성명 | 설명 |
|---|---|
|font-family|글꼴_현재 컴퓨터 내 글꼴만 사용가능 <br/> 외부 글꼴 활용을 원할 경우,<br/> 글꼴 제공 홈페이지에서 적용을 위한 import를 가져와야 함|
|font-size| 글자크기|
|font-style|normal / italic(기울기)|
|font-weight|진하기, 100~900, bold, bolder |
|color|글꼴 색상<br/> 1. 색상명 color:green; <br/> 2. RGB color:rgb(100, 255, 100) ; <br/>  3. 핵스코드 color: #000000; <br/> 4. RGBA : a에 불투명도를 적용 |
|word-spacing|어간|
|letter-spacing|자간|
|line-height|줄 간격, 단위%|
|text-align|정렬 / left, right, center |
|text-decoration|선 / overline, underline, line-through|
|text-shadow|그림자  <br>10px -10px 5px black ; <br> x축(좌>우) y축(상>하) 흐림정도 색상|
|border|선형태 px color <br> solid 1px black (순서 상관X)|
|border-radius|모서리 둥글게|
|box-shadow |그림자|
|width|가로 크기|
|height|세로 크기|
|padding|안 여백|
|margin|바깥 여백<br>margin: 0 auto ; 바깥 여백을 이용한 가로 정렬|
|display|inline<br>  한 줄에 해당 구역 포함 : span, a<br> - inline으로는 구역 사이즈를 적용할 수 없음<br>- height 적용 X (겹쳐짐)<br> - margin, padding : 좌우만 적용 / 상하 적용 X<br>block<br>- 한 줄 차지 구역 : div h p ul il ol<br>inline-block<br>- 한 줄에 해당 구역을 차지 : input button img*<br>none<br>- 표시 안 함<br>flex<br>- 하위 요소들의 배치방법 제시|
|box-sizing|content-box<br>- 구역 크기를 컨텍츠 기준으로 함<br>- box width 500 + padding 10 >> 520으로 패딩까지 포함해서 크기가 증가<br>border-box<br>- 더 많이 사용<br>- 구역 크기를 컨텐츠+안쪽여백 기준으로 함|
|overflow|1. visible; 내용이 넘쳐도 그냥 보여줌(default) <br>    2. hidden; 내용이 넘치면 자름<br>   3. scroll; 내용의 양과 무관하게 항상 스크롤을 표시<br>    4. auto; 내용이 넘치면 스크롤바 표시<br><br>    overflow-x: hidden; >> x축 스크롤바 표시 유무 <br>    overflow-y: scroll; >> y축 스크롤바 표시 유무<br>|


### flex 속성
| 속성명 | 설명 |
|---|---|
|flex-wrap|nowrap(default)<br> - 하위요소(box) 크기 > 부모요소(flex) 크기 => 하위요소의 크기를 자동 조절 <br> wrap <br> -하위요소(box) 크기 > 부모요소(flex) 크기 <br> => 하위요소의 크기를 보존하면서 자동 줄바꿈 <br> wrap-reverse<br> -요소를 역순으로 배치|
|flex-directio|row(default)<br>- 가로배치 <br>column- 세로배치, 일반적으로 많이 사용하지 않음 |
|justify-content|가로 정렬<br><br> flex-start(default) <br> - 왼쪽 정렬 <br> flex-end <br>- 오른쪽 정렬<br> center <br>- 가운데 정렬 <br> space-between <br> - 양 끝 빈틈 없이 균등 정렬<br> space-around<br> - 양 끝 50% 여백 후 균등 정렬<br> space-evenly<br>- 양 끝 100% 여백 후 균등 정렬  <br>|
|align-items|세로 정렬<br><br>stretch(default) <br>-하위 요소에 width/height 중 고정크기가 없다면, 자동으로 부모 요소의 width/height를 가져감<br> center <br>-세로 가운데 정렬 <br> flex-start <br>-상단 정렬<br> flex-end <br>-하단 정렬|


### position 속성
| 속성명 | 설명 |
|---|---|
|relative|상대 위치, 본래 지정된 구역에서 시작<br><위치속성><br>- top : 기존 위치에서 상(-), 하(+)로 px 단위로 이동<br>- bottom<br>- left : 기존위치에서 좌(-), 우(+)로 px 단위로 이동<br>- right|
|absolute|절대위치<br>- 부모(상위) 요소의 위치를 시작점으로 하여 이동<br>※ 상위 요소 중 가장 가까운 relative 상위 요소 기준으로 배치|
|static|정적(default) 코드 작성 순으로 배치<br>- 위치속성(top/left/bottom/right) 사용 불가|
|fixed|고정위치<br>- 디바이스(화면)에 위치 고정*/<br> ex. 팝업 광고창|
|sticky|해당 요소가 화면에서 벗어났을 때(스크롤)부터 위치 고정<br>ex. 상단 메뉴 고정|
|z-index|position 사용에 따라 화면에 겹치는 경우 발생 시<br>- z-index의 값이 클수록 위에 표시<br>- 최대 9999|

## 가상 클래스 
" 선택자 : 가상클래스명 { 속성명: 속성값 ;} "
### 가상 클래스 종류
- hover : 해당 선택자의 마우스를 올렸을 때, CSS를 적용 (이용多)
- visited : 해당 링크에 방문한 적이 있을 때, ...
- active : 해당 선택자에 마우스를 클릭했을 때, ...
###  가상 요소 
- 선택자::가상요소명 {content : '가상요소';}
- 가상 요소 종류
   1. ::before 
   2. ::after
- '장식용 이미지' or '기호' 등을 삽입할 때 사용

### 이미지 CSS 관련
| 속성명 | 설명 |
|---|---|
|object-fit|1. fill; 비율 무시하고 구역요소 채움(default)<br>    2. contain; 비율 유지하고 구역안에 모두 표시, 원본 이미지 사이즈에 따라 공백 발생<br>    3. cover; 비율 유지하고 요소 채움, 비율에 따라 일부 잘림이 발생<br>    4. none; 원본 사이즈 그대로, 이미지 중앙의 박스 사이즈만큼만 보임|
|object-positon|이미지의 위치 이동<br>    cover로 이미지의 잘린 영역이 있을 때 이동시키는 방법<br>    object-fit: cover;<br>    object-position: left/right/top/bottom; <br><br>contain으로 구역 내 공백이 있을 때 이동시키는 방법<br>    object-fit: contain;<br>    object-position: left/right/top/bottom ;|
|rgba|투명도가 포함된 색상<br>background-color: rgba(red, greed, blue, alpha(투명도 0~1));|
|background-repeat|if 빈공간이 발생하면 repeat해서 채움<br> 1. repeat; (default) <br>2. no-repeat; 반복안함|
|background-attachment : fixed|배경이 그대로 있는 상태로 스크롤해서 볼 수 있게 <br> 페러랙스 효과|

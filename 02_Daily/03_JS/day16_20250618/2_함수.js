//[1] 매개변수 X, 반환값 X 
function func1() {
    console.log('fun1 exe');
};

//[2] 매개변수 O, 반환값 X      ex) console.log
function func2(x, y) {
    console.log(`fun2 exe ${x + y}`);
};

//[3] 매개변수 O, 반환값O       ex) prompt()
function func3(x, y) {
    console.log(`func3 exe`);
    let result = x + y;
    return result;
};

//[4] 매개변수 X, 반환값O
function func4() {
    console.log(`func4 exe`);
    return '대한민국';
};

//[5]
func1();
func2(1, 3);
func3(1, 5);              //반환값이 result로 있지만, 여기서는 반환값을 변수에 담지는 않았음
let a = func3(1, 5);
console.log(a)
func4();
let b = func4();
console.log(b);

//[6] 지역변수
//      특정한 {} 안에서 선언된 변수는 선언된 영역 밖에서는 호출/사용 불가

let 전연변수 = '대한민국';
if (true) {
    let 지역변수1 = '인천광역시';
    console.log(전연변수);
    console.log(지역변수1);
    for (let i = 0; i < 1; i++) {
        let 지역변수2 = '부평구'
        console.log(전연변수);
        console.log(지역변수1);
        console.log(지역변수2);
    };
    // console.log(지역변수2); // Uncaught , for 안에서 선언된 지역변수이므로 for 밖으로 나올 수 없음
};
// console.log(지역변수1); // Uncaught , if 안에서 선언된 지역변수이므로 for 밖으로 나올 수 없음
// console.log(지역변수2); // Uncaught , if > for 안에서 선언된 지역변수이므로 for 밖으로 나올 수 없음

//[7] 생각해보기!
// 상황 : 이름을 입력받아 배열 저장.
// 이름 : 지역 or 전역 ?? >> 지역
// 배열 : 지역 or 전역 ?? >> 전역

let nameList = [];
// let name = prompt('이름 : ');
// nameList.push(name);

function nameAdd(){
    let name = prompt('이름 : ');
    nameList.push(name);
}
// nameAdd();
// nameAdd();
console.log(nameList)
// 변수 개수는 ? 1개 : nameList

//[8] HTML 마크업-이벤트 속성
function 이벤트함수(){
    console.log('[[클릭]]');
}

// 1. JS에서 함수 실행
이벤트함수()

// 2. HTML에서 실행
// <마크업 onclick='함수명()'> 버튼 </마크업>
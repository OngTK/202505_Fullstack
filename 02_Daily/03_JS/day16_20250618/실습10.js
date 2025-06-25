/* [ 실습 10_학생별 수강 과목 및 성적표 대시보드 만들기 ]
 * 요구 사항
    1. 데이터 모델링 : 배열과 객체를 활용하여 샘플데이터로 구성하시오.
        (1) 아래 각 정보는 필수로 합니다. 
        - 학생정보 : 학번(*), 이름 , 전공 
        - 과목정보 : 과목코드(*) , 과목명 , 교수자명 
        - 수강신청내역정보 : 수강신청내역코드(*) , 학번(**) , 과목코드(**) , 성적 
        (2) 각 정보별 샘플(임의)데이터는 3개 이상씩 하여 배열 또는 객체를 선언 합니다.
    2. 구현 로직
    3. 최종 결과물 예시
        * 웹페이지에 다음과 같은 형식으로 각 유저의 정보가 표시되어야 합니다.
        * 단  HTML 와 CSS 구성/코드 는 달라도 됩니다. 
*/
/*
const 학생정보 = [
    {학번 : 1, 이름 : '김철수' , 전공 : '컴퓨터공학과' },
    {학번 : 2, 이름 : '이영희', 전공 : '인공지능학과'},
    {학번 : 3, 이름 : '박지성', 전공 : '데이터사이언스학과'}
];
const 과목정보 = [
    {과목코드 : 1, 과목명 : '웹 프로그래밍 기초', 교수자명 : '이교수'},
    {과목코드 : 2, 과목명 : '머신러닝 입문', 교수자명 : '최교수'},
    {과목코드 : 3, 과목명 : '데이터 시각화', 교수자명 : '박교수0'}
];
const 수강신청내역정보 = [
    {수강신청내역코드 : 1, 학번 : 1, 과목코드 : 1, 성적 : 'A+'},
    {수강신청내역코드 : 2, 학번 : 1, 과목코드 : 2, 성적 : 'B'},
    {수강신청내역코드 : 3, 학번 : 2, 과목코드 : 2, 성적 : 'A'},
    {수강신청내역코드 : 4, 학번 : 2, 과목코드 : 3, 성적 : 'F'},
    {수강신청내역코드 : 5, 학번 : 3, 과목코드 : 1, 성적 : 'C+'}
];

html = `<h1>학생별 성적 대시보드</h1>`

for (let i = 0 ; i < 학생정보.length; i++ ) {
    let 학생 = 학생정보[i];
    html += `<hr/> <h3>${학생.이름} (${학생.전공})</h3>`;
    
    for(let j = 0 ; j < 수강신청내역정보.length; j++) {
        let 수강신청정보 = 수강신청내역정보[j];
    
        if (학생.학번 == 수강신청정보.학번) {
            
            for(let z = 0 ; z < 과목정보.length ; z++ ){
                let 과목 = 과목정보[z];
                
                let 이수여부 = '';
                if(수강신청정보.성적 == 'F') {
                    이수여부 = `<span style="color:red; font-weight:bold">Fail</span>`
                } else {
                    이수여부 = `<span style="color:blue; font-weight:bold">Pass</span>`
                }

                if(과목.과목코드 == 수강신청정보.과목코드) {
                    html += `<div style = "font-weight : bold;">${과목.과목명}<span style = "font-weight : 400;">(${과목.교수자명})</span> </div>
                        <ul>
                            <li>성적 : ${수강신청정보.성적}</li>
                            <li>이수 여부 : ${이수여부}</li>
                        </ul>`
                }
                
            }
        }
    }
}

document.write(html)
*/

// 1. 데이터 모델링
const students = [
    { studentId: 2024001, name: "김철수", major: "컴퓨터공학과" },
    { studentId: 2024002, name: "이영희", major: "인공지능학과" },
    { studentId: 2024003, name: "박지성", major: "데이터사이언스학과" }
];
const courses = [
    { courseId: "CS101", courseName: "웹 프로그래밍 기초", professorName: "이교수" },
    { courseId: "AI202", courseName: "머신러닝 입문", professorName: "최교수" },
    { courseId: "DS303", courseName: "데이터 시각화", professorName: "박교수" }
];
const enrollments = [
    { enrollmentId: 1, studentId: 2024001, courseId: "CS101", grade: "A+" },
    { enrollmentId: 2, studentId: 2024001, courseId: "AI202", grade: "B" },
    { enrollmentId: 3, studentId: 2024002, courseId: "AI202", grade: "A" },
    { enrollmentId: 4, studentId: 2024002, courseId: "DS303", grade: "F" },
    { enrollmentId: 5, studentId: 2024003, courseId: "CS101", grade: "C+" }
];

// 2. 로직

html = `<h1>학생별 성적 대시보드</h1>`

// 2.1. 학생명·전공 출력
for( let i = 0 ; i < students.length ; i++ ) {
    const student = students[i]
    html += `<hr/><h3>${student.name} (${student.major})</h3>`

    // 2.2. 강의명·교수명 출력
    for( let j = 0 ; j < enrollments.length ; j++) {
        const enrollment = enrollments[j]

        if(student.studentId == enrollment.studentId) {
            for (let z = 0 ; z < courses.length ; z++) {
                const course = courses[z];
                if (course.courseId == enrollment.courseId) {
                    html += `<h4>${course.courseName} (${course.professorName}) </h4>
                            <h5> 성적 : ${enrollment.grade} </h5>
                            <h5> 이수여부 : ${enrollment.grade == 'F' ? 'Fail' : 'Pass'} </h5>`
                }
            }
        };
    };
};

document.write(html)
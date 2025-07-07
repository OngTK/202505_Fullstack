//===================chart
    const ctx = document.querySelector('#myChart');
    
    let currentYear = 2025;
    let currentMonth = 12;

    function GetDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }
    // console.log(year) // calendar.js에 정의되어있음
    // console.log(month)

    function getMonthlyData(year, month) {
        const daysInMonth = GetDaysInMonth(year, month);

        if (month === 5) {
            const 출근Pattern = [5, 10, 3, 8, 2, 15, 20];
            const 지각Pattern = [2, 4, 6, 1, 0, 3, 2];
            return {
                출근: Array.from({ length: daysInMonth }, (_, i) => 출근Pattern[i % 출근Pattern.length]),
                지각: Array.from({ length: daysInMonth }, (_, i) => 지각Pattern[i % 지각Pattern.length])
            };
        } else if (month === 6) {
            const 출근Pattern = [20, 18, 22, 25, 27];
            const 지각Pattern = [0, 1, 2, 1, 0];
            return {
                출근: Array.from({ length: daysInMonth }, (_, i) => 출근Pattern[i % 출근Pattern.length]),
                지각: Array.from({ length: daysInMonth }, (_, i) => 지각Pattern[i % 지각Pattern.length])
            };
        } else {
            return {
                출근: Array.from({ length: daysInMonth }, () => Math.floor(Math.random() * 30)),
                지각: Array.from({ length: daysInMonth }, () => Math.floor(Math.random() * 10))
            };
        }
    }

    const daysInInitialMonth = GetDaysInMonth(currentYear, currentMonth);
    const labels = [];
    for (let i = 1; i <= daysInInitialMonth; i++) {
        labels.push(i.toString());
    }
    const initialData = getMonthlyData(currentYear, currentMonth);

    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                { label: '출근', data: initialData.출근, borderColor: '#83CBEB', fill: false },
                { label: '지각', data: initialData.지각, borderColor: '#F2CFEE', fill: false }
            ]
        },
        options: {
            scales: {
                y: { beginAtZero: true }
            }
        }
    });

    function monthChange(direction) {
        // console.log('monthChange called', direction);
        const monthText = document.querySelector('#calTop h6');
        let [yearStr, monthStr] = monthText.textContent.trim().split(' ').filter(Boolean);
        currentYear = parseInt(yearStr.replace('년', ''));
        currentMonth = parseInt(monthStr.replace('월', ''));

        currentMonth += direction;
        if (currentMonth < 1) {
            currentMonth = 12;
            currentYear--;
        } else if (currentMonth > 12) {
            currentMonth = 1;
            currentYear++;
        }

        monthText.textContent = `${currentYear}년 ${currentMonth.toString().padStart(2, '0')}월`;
        console.log('변경 후 currentYear:', currentYear, 'currentMonth:', currentMonth);


        const daysInMonth = GetDaysInMonth(currentYear, currentMonth);
        console.log('daysInMonth:', daysInMonth);

        const newData = getMonthlyData(currentYear, currentMonth);
        console.log('newData:', newData);

        myChart.data.labels = [];
        for (let i = 1; i <= daysInMonth; i++) {
            myChart.data.labels.push(i.toString());
        }

        myChart.data.datasets[0].data = newData.출근.slice(0, daysInMonth);
        myChart.data.datasets[1].data = newData.지각.slice(0, daysInMonth);

        

        GetDaysInMonth(currentYear, currentMonth)
        getMonthlyData(currentYear, currentMonth)
        myChart.update();
    }


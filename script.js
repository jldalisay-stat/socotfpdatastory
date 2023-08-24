
document.addEventListener("DOMContentLoaded", function() {
    var ctx1 = document.getElementById('chart1').getContext('2d');
    var chart1 = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'],
            datasets: [{
                label: '',
                data: [34, 35.19, 34.66, 36.01],
                backgroundColor: 'transparent',
                borderColor: 'white',
                borderWidth: 2,
                pointBackgroundColor: 'white'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 10,
                        max: 50,
                        callback: function(value) {
                            return value + "%";
                        }
                    }
                }
            }
        }
    });

    var ctx2 = document.getElementById('chart2').getContext('2d');
    var chart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'],
            datasets: [{
                label: 'Projected Growth',
                data: [34, 35.19, 34.66, 36.01, 37],
                backgroundColor: 'transparent',
                borderColor: ['white', 'white', 'white', 'white', 'red'],
                borderWidth: 2,
                pointBackgroundColor: ['white', 'white', 'white', 'white', 'red'],
                borderDash: [0, 0, 0, 0, 5, 5]
            },
            {
                label: 'Regional Target',
                data: [36.70, 37.60, 38.50, 40.30, 41.20],
                backgroundColor: 'transparent',
                borderColor: 'green',
                borderWidth: 2,
                pointBackgroundColor: 'green'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 10,
                        max: 50,
                        callback: function(value) {
                            return value + "%";
                        }
                    }
                }
            }
        }
    });
});

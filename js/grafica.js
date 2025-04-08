// Manipula del DOM para crear la tabla
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('mostrarGrafica').getContext('2d');
    
    // Datos para mostrar y crear la gráfica e darle los estilos
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2,5', '5,0', '7,5', '10,0', '12,5', '15,0', '17,5', '20,0'],
            datasets: [
                {
                    label: 'Mano de obra',
                    data: [5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    tension: 0.1,
                    fill: true
                },
                {
                    label: 'Herramientas',
                    data: [2500, 5000, 7500, 10000, 12500, 15000, 17500, 20000],
                    borderColor: 'rgba(153, 102, 255, 1)',
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    tension: 0.1,
                    fill: true
                },
                {
                    label: 'TOTAL',
                    data: [7500, 15000, 22500, 30000, 37500, 45000, 52500, 60000],
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    tension: 0.1,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Frecuencia de Servicios',
                    font: {
                        size: 16
                    }
                },
                legend: {
                    position: 'top',
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Costo (s)'
                    },
                    ticks: {
                        stepSize: 5000,
                        callback: function(value) {
                            return value.toLocaleString();
                        }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Reparación de un gabinete'
                    }
                }
            }
        }
    });
});
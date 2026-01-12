
// @ts-ignore
declare const Chart: any;
// @ts-ignore
declare const html2canvas: any;

// 1. Initial Setup
const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
}

// 2. Bar Chart (Reklama vs PR)
const barChartCanvas = document.getElementById('barChart') as HTMLCanvasElement;
const ctxBar = barChartCanvas?.getContext('2d');
if (ctxBar) {
    new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['Qisqa muddat', 'Uzoq muddat'],
            datasets: [
                {
                    label: 'Reklama (%)',
                    data: [85, 45],
                    backgroundColor: '#f43f5e',
                    borderRadius: 6,
                },
                {
                    label: 'PR (%)',
                    data: [65, 90],
                    backgroundColor: '#3b82f6',
                    borderRadius: 6,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'top' } },
            scales: { y: { beginAtZero: true, max: 100 } }
        }
    });
}

// 3. Line Chart (Ishonch va Loyaqlik)
const lineChartCanvas = document.getElementById('lineChart') as HTMLCanvasElement;
const ctxLine = lineChartCanvas?.getContext('2d');
if (ctxLine) {
    new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: ['Boshlanish', '1 oy', '3 oy', '6 oy'],
            datasets: [
                {
                    label: 'Ishonch',
                    data: [40, 60, 75, 90],
                    borderColor: '#10b981',
                    backgroundColor: '#10b981',
                    tension: 0.3,
                    borderWidth: 4,
                    pointRadius: 6,
                },
                {
                    label: 'Loyaqlik',
                    data: [30, 55, 70, 88],
                    borderColor: '#6366f1',
                    backgroundColor: '#6366f1',
                    tension: 0.3,
                    borderWidth: 4,
                    pointRadius: 6,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: true, max: 100 } }
        }
    });
}

// 4. Pie Chart (Auditoriya Reaksiyasi)
const pieChartCanvas = document.getElementById('pieChart') as HTMLCanvasElement;
const ctxPie = pieChartCanvas?.getContext('2d');
if (ctxPie) {
    new Chart(ctxPie, {
        type: 'doughnut',
        data: {
            labels: ['Ijobiy', 'Neytral', 'Salbiy'],
            datasets: [{
                data: [70, 20, 10],
                backgroundColor: ['#10b981', '#f59e0b', '#ef4444'],
                borderWidth: 0,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: { legend: { position: 'bottom' } }
        }
    });
}

// 5. Export Function
(window as any).downloadAsImage = async function() {
    const btn = document.getElementById('downloadBtn') as HTMLButtonElement;
    const btnText = document.getElementById('btnText');
    const content = document.getElementById('main-content');

    if (!btn || !content || !btnText) return;

    btn.disabled = true;
    const originalText = btnText.textContent;
    btnText.textContent = "Tayyorlanmoqda...";

    setTimeout(async () => {
        try {
            const canvas = await html2canvas(content, {
                scale: 2,
                useCORS: true,
                backgroundColor: '#f8fafc',
            });
            const link = document.createElement('a');
            link.download = 'emperor-analytics.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        } catch (err) {
            console.error(err);
            alert("Xatolik yuz berdi");
        } finally {
            btn.disabled = false;
            btnText.textContent = originalText;
        }
    }, 100);
};

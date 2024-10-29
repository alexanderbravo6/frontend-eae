'use client'
import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

function NivelDesempenioPie() {
    const chartRef = useRef(null);

    useEffect(() => {
        // Clean up previous chart if it exists
        if (chartRef.current?.chart) {
            chartRef.current.chart.destroy();
        }

        // Create a new chart instance
        const newChart = new Chart(chartRef.current, {
            type: 'doughnut',
            data: {
                labels: ['En Proceso', 'Satisfactorio'],
                datasets: [{
                    label: 'Nivel de desempeño',
                    data: [73.53, 26.47],
                    backgroundColor: [
                        '#00b8b8',
                        '#ff6016'
                    ],
                    borderColor: [
                        '#00b8b8',
                        '#ff6016'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                borderWidth: 4,
                borderRadius: 2,
                hoverBorderWidth: 0,
                plugins: {
                    legend: {
                        position: 'top'
                    },
                    title: {
                        display: false,
                    },
                    datalabels: {
                        color: 'white',
                        font: {
                            weight: 'bold',
                            size: 14,

                        },
                        align: 'center',
                        formatter: (value, context) => {
                            if (context.dataset.data[context.dataIndex] != 0) {

                                return (context.dataset.data[context.dataIndex]).toFixed(0) + '%';
                            } else {
                                return "";
                            }
                        }
                    },

                }
            }
        });

        // Store the chart instance in the ref
        chartRef.current.chart = newChart;
    }, []);

    return (
        <section className="">
            <canvas ref={chartRef} />
        </section>
    );
}

export default NivelDesempenioPie;
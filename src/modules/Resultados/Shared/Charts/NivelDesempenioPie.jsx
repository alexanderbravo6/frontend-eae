'use client'
import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

function NivelDesempenioPie({ data }) {
    const chartRef = useRef(null);
    const labels = data?.map(item => item.nivel);
    const values = data?.map(item => item.porcentaje);
    const palette = data?.length > 2 ? ['#ff144f', '#ff6016', '#00b8b8'] : [ '#ff6016', '#00b8b8'];

    useEffect(() => {
        // Clean up previous chart if it exists
        if (chartRef.current?.chart) {
            chartRef.current.chart.destroy();
        }

        // Create a new chart instance
        const newChart = new Chart(chartRef.current, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Nivel de desempeño',
                    data: values,
                    backgroundColor: palette,
                    borderColor: palette,
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
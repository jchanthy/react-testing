import React, {Component, createRef, useEffect} from 'react';
import Chart from 'chart.js';

const ChartComponent = ({data, width, height}) => {
    const canvasRef = React.createRef();
    useEffect(() => {
        const ctx = canvasRef.current;
        new Chart(ctx, {
            type: "line",
            data: {
                labels: data.map(d => d.x),
                datasets: [{
                    label: "Max. Temperature",
                    data: data.map(d => d.y),
                    background: "rgba(255, 99, 132, 0.2)",
                    borderColor: "rgba(255, 99, 132, 1)",
                    borderWidth: 1,
                }]
            },
            options: {
                scales: {
                    yAxes: [{ticks: {beginAtZero: false}}],
                }
            }
        })
    }, []);
    return (
        <canvas id="chart-canvas" width={width} height={height} ref={canvasRef} />
    );
}

export default ChartComponent;

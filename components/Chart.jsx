import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = ({ dataPoints }) => {
    const options = {
        animationEnabled: true,
        toolTip: {
            enabled: false,  // Hide tooltip on hover
        },
        // title: {
        //           text: "Nuclear Electricity Generation in US"
        // },
        axisY: {
            // title: "Net Generation (in Billion kWh)",
            // suffix: " kWh",
            gridThickness: 1,
            lineColor: "transparent",
            tickColor: "transparent",
            gridColor: "#D3D3D3",
            labelFormatter: () => '',  // Hide Y-axis labels
        },
        axisX: {
            labelFontColor: "lightgray",
            valueFormatString: "YYYY",
            gridThickness: 0,
        },
        data: [{
            type: "splineArea",
            xValueFormatString: "YYYY",
            yValueFormatString: "#,##0.## bn kW⋅h",
            dataPoints: dataPoints,
            color: "#1565c0",
            fillOpacity: 0.1,
            markerType: "none",
            lineThickness: 2,
        }],
    };

    return (
        <div>
            <CanvasJSChart options={options} />
        </div>
    );
};

export default Chart;


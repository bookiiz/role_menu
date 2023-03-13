import React,{ useRef }  from "react";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

import { getElementAtEvent, Pie } from 'react-chartjs-2';


ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
)
function DataAnalytics() {

    const data = {
        labels: ['reset(ad)','change(ad)','unlock(ad)','Reset(sap)','Change(sap)','unlock(sap)'],
        datasets: [
            {
                label: 'point',
                data: [10,5,6,7,8,9],
                borderColor: 'black',
                backgroundColor: [
                    '#FFCCFF',
                    '#99CCFF',
                    '#FFFFCC',
                    '#CC33FF',
                    '#33FFFF',
                    '#FA8072'

                ],
                hoverOffset: 4
            }
        ]
    };
    const options = {

    };

    const chartRef = useRef();
    const onClick = (event) => {
        console.log(getElementAtEvent())
    }

    return(
        <div className="DataAnalytics">
            <h1>DataAnalytics</h1>
            <div style={ {
                padding: '60px',
                width: '800px',
                } }>
                <Pie 
                    data={data}
                    options= {options}
                    onClick = {onClick}
                    ref = {chartRef}
                ></Pie>
            </div>
        </div>
    );
}

export default Chart
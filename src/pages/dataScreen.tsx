import * as echarts from 'echarts';

import { useEffect, useState } from 'react';
import xinjin from '../../public/geoJson.json';

import './dataScreen.less';


const data = (function () {
    let res = [];
    let len = 12;
    while (len--) {
      res.push(Math.round(Math.random() * 1000));
    }
    return res;
  })();
const DataScreen = () => {
    useEffect(() => {
        const mapDiv = document.querySelector('#chart');
        const charts = echarts.init(mapDiv as HTMLDivElement);
        charts.setOption<echarts.EChartsOption>({
            xAxis: {
                // splitArea: {
                //     show: true
                // },
                type: 'category',
                data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
            },
            yAxis: {
                type: 'value',
                name: '销售量',
                splitLine: {
                    show: true
                }
            },
            series: [
                {
                    name: '电视',
                    type: 'line',
                    data: data
                },
                {
                    name: '电视',
                    type: 'bar',
                    data: data
                }
            ]
        })
    }, []);

    return <div>
        <div id="chart"></div>
    </div>;
}

export default DataScreen;
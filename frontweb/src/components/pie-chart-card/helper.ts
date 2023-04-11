import { ApexOptions } from 'apexcharts';
import { formatPercent } from '../../utils/formatters';

export const buildPieChartConfig = (labels: string[] = [], name: string) => {
    return {
        labels,
        noData: {
            text: 'Sem resultados',
            align: 'center',
            verticalAlign: 'middle',
            offsetX: 0,
            offsetY: 0,
            style: {
                color: '#FFF',
                fontSize: '18px',
                fontFamily: 'Roboto, sans-serif'
            }
        },
        colors: ['#3e82f7', '#04d182', '#ffc107', '#ff6b72'],
        legend: {
            show: true,
            floating: false,
            position: 'bottom',
            offsetY: 0,
            labels: {
                colors: ['#b4bed2']
            },
            fontFamily: 'Roboto, sans-serif',
            fontSize: '18px',
            itemMargin: { vertical: 5 }
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return formatPercent(val)
            }
        },
        plotOptions: {
            pie: {
                size: 400,
                donut: {
                    size: '55%',
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            offsetY: 10,
                            formatter: function () {
                                return name;
                            }
                        },
                        total: {
                            show: true,
                            showAlways: true,
                            fontSize: '24px',
                            color: '#ABB1C0',
                            fontFamily: 'Roboto, sans-serif',
                            formatter: function () {
                                return '';
                            }
                        }
                    }
                }
            }
        },
        chart: {
            height: '400px',
            animations: {
                enabled: false,
                easing: 'easeinout',
                speed: 800,
                animateGradually: {
                    enabled: true,
                    delay: 150
                },
                dynamicAnimation: {
                    enabled: true,
                    speed: 350
                }
            }
        }
    } as ApexOptions;
};

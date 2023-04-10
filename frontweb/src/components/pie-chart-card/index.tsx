import { buildPieChartConfig } from './helper';
import './styles.css';
import ReactApexChart from 'react-apexcharts';

type Props = {
    labels?: string[];
    name?: string;
    series?: number[];
};

function PieChartCard({ labels = [], name = '', series = [] }: Props) {
    return (
        <div className="pie-chart-card">
            <ReactApexChart
                options={buildPieChartConfig(labels, name)}
                type="donut"
                width="320"
                height="320"
                series={series}
            />
        </div>
    );
}

export default PieChartCard;

import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import { FilterData, PieChartConfig, SalesByGender } from './types';
import PieChartCard from './components/pie-chart-card';
import { buildFilterParams, makeRequest } from './utils/request';
import { buildSalesByStoreChart } from './helpers';
import { formatPrice } from './utils/formatters';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();
  const [salesByGender, setSalesByGender] = useState<PieChartConfig>();

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);
  //const data = useMemo(() => buildSalesByStoreChart(salesByGender), [SalesByGender]);

  useEffect(() => {
    makeRequest
      .get<SalesByGender[]>('/sales/by-gender', { params })
      .then((response) => {
        const newSalesByGender = buildSalesByStoreChart(response.data);
        setSalesByGender(newSalesByGender);
      })
      .catch(() => {
        console.error('Error to fetch sales by store');
      });
  }, [params]);

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <div className="app-filter-container">
          <Filter onFilterChange={onFilterChange} />
        </div>
        <div className="app-sales-container ">
          <div className="app-sales-sum">
            <span className="app-sales-sum-value">{salesByGender?.sum && (formatPrice(salesByGender?.sum))}</span>
            <span className="app-sales-sum-title">Total de vendas</span>
          </div>
          {salesByGender?.labels && (<PieChartCard key={params.storeId} labels={salesByGender?.labels} series={salesByGender?.series} />)}
        </div>
      </div>
    </>
  );
}

export default App;

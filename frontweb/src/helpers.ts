import { Gender, SalesByGender } from "./types";
import { formatPercent } from "./utils/formatters";

const formatGender = (gender: Gender) => {
    const textByGender = {
        MALE: 'Masculino',
        FEMALE: 'Feminino',
        OTHER: 'Outros'
    };
    return textByGender[gender];
};


export const buildSalesByStoreChart = (sales: SalesByGender[]) => {
    const labels = sales.map((sale) => formatGender(sale.gender));
    let series = sales.map((sale) => sale.sum);
    const sum = series.reduce((pv, cv) => {
        return pv + cv;
    })
    series = series.map((serie) => {
        return (Number(serie) / sum) * 100;
    });
    return {
        labels,
        series,
        sum
    };
};





export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type FilterData = {
  store: Store;
};

export type Store = {
  id: string;
  name: string;
};

export type SalesByGender = {
  gender: Gender;
  sum: number;
}

export type PieChartConfig = {
  labels: string[];
  series: number[];
  sum: number;
};

import axios from 'axios';
import { FilterData } from '../types';
import { formatDateToServer } from './formatters';

const baseURL = 'http://localhost:8080';

export const makeRequest = axios.create({
  baseURL
});

export const buildFilterParams = (
  filterData?: FilterData,
) => {
  return {
    storeId: filterData?.store.id,
  };
};



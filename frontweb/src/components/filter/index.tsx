import './styles.css';
import 'flatpickr/dist/themes/material_green.css';
import FlatPicker from 'react-flatpickr';
import { Portuguese } from 'flatpickr/dist/l10n/pt';
import flatpickrlib from 'flatpickr';
import React, { useEffect, useMemo, useState } from 'react';
import { FilterData, Store } from '../../types';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { buildFilterParams, makeRequest } from '../../utils/request';

flatpickrlib.localize(Portuguese);
let storesData: Store[];

type Props = {
  onFilterChange: (filter: FilterData) => void;
};


function Filter({ onFilterChange }: Props) {
  const [selectStores, setSelectStores] = useState<Store[]>([]);

  const { control } = useForm<FilterData>();


  //const [filterData, setFilterData] = useState<FilterData>();
  //const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest({ url: '/stores' }).then((response) => {
      storesData = response.data;
      setSelectStores(response.data);
    });
  }, []);

  const handleChangeStore = (store: Store) => {
    onFilterChange({ store });
  };

  return (
    <div className="filter-container">
      <Controller
        name="store"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={selectStores}
            isClearable
            placeholder="Selecione a Loja..."
            classNamePrefix="store-filter-select"
            onChange={(value) => handleChangeStore(value as Store)}
            getOptionLabel={(store: Store) => store.name}
            getOptionValue={(store: Store) => String(store.id)}
          />
        )}
      />
    </div>
  );
}

export default Filter;

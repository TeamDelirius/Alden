import React, { useState } from 'react';
import { Grid, MenuItem, Select } from '@mui/material';
import InputField from '../FormsUI/TextField/index';
import SelectField from '../FormsUI/Select/index';
import PortCodes from '../../data/portCode';

const RecordDE10 = ({  }) => {
    const sortedList = (a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      return 0;
    };
    PortCodes.sort(sortedList);
    const portCodes = PortCodes.map((item, index) => {
      return (
        <MenuItem key={index} value={item.code} id={item.id}>
          {item.name}
        </MenuItem>
      );
    });
    
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <SelectField
            name = "bond_type_code"
            label = "Bond Type Code"
            >
              <MenuItem value = "B">Basic Bond</MenuItem>

            </SelectField>
        </Grid>
        <Grid item xs={2}>
          <InputField name="bond_type_code" label=" " />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            name = "bond_designation_type_card"
            label = "Bond Designation Type Card"
            >
              <MenuItem value = "8">Continuous Transactions</MenuItem>
              <MenuItem value = "9">Single Transaction</MenuItem>

            </SelectField>
        </Grid>
        <Grid item xs={2}>
          <InputField name="bond_designation_type_card" label=" " />
        </Grid>
        <Grid item xs={6}>
          <InputField name="surety_company_code" label="Surety Company Code" />
        </Grid>
        <Grid item xs={6}>
          <InputField name="stb_amount" label="STB Amount" />
        </Grid>
        <Grid item xs={6}>
          <InputField name="stb_producer_account_number" label="STB Producer Account Number" />
        </Grid>

        
        {/*
        <Grid item xs={6}>
          <InputField name="example_input" label="Example Input Field" />
        </Grid>
        
        <Grid item xs={6}>
          <SelectField
            name = "example_drop_box"
            label = "Example Drop Box"
            >
              <MenuItem value = "None">None</MenuItem>
              <MenuItem value = "Option 1">1</MenuItem>
              <MenuItem value = "Option 2">2</MenuItem>
              <MenuItem value = "Option 3">3</MenuItem>
            </SelectField>
        </Grid>
        */}
        
      </Grid>
    </>
  );
};

export default RecordDE10;

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
        <Grid item xs={6}>
          <InputField name="entry_number" label="Entry Number" />
        </Grid>
        <Grid item xs={6}>
          <InputField name="duty_paid_to_fg_in_lc" label="Duty Paid to FG in LC" />
        </Grid>
        <Grid item xs={6}>
          <InputField name="exchange_rate" label="Exchange Rate" />
        </Grid>
        <Grid item xs={6}>
          <InputField name="entry_date" label="Entry Date" />
        </Grid>
        <Grid item xs={6}>
          <InputField name="tarrif_1" label="Tarrif Number 1" />
        </Grid>
        <Grid item xs={6}>
          <InputField name="tarrif_2" label="Tarrif Number 2" />
        </Grid>
        <Grid item xs={6}>
          <InputField name="tarrif_3" label="Tarrif Number 3" />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            name = "country_of_export"
            label = "Country of Export"
            >
              <MenuItem value = "None"> </MenuItem>
            </SelectField>
        </Grid>
        <Grid item xs={2}>
          <InputField name="country_of_export" label=" " />
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

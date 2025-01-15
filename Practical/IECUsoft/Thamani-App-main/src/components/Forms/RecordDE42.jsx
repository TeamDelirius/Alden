import React, { useState } from 'react';
import { Grid, MenuItem, Select } from '@mui/material';
import InputField from '../FormsUI/TextField/index';
import SelectField from '../FormsUI/Select/index';
import Materials from '../../data/materials';

const RecordDE10 = ({  }) => {
    const sortedList = (a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      return 0;
    };
    Materials.sort(sortedList);
    const materials = Materials.map((item, index) => {
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
          <InputField name="quantity" label="Quantity" />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            name = "unit_of_measurement"
            label = "Unit of Measurement"
            >
              {materials}
            </SelectField>
        </Grid>
        <Grid item xs={2}>
          <InputField name="unit_of_measurement" label=" " />
        </Grid>
        <Grid item xs={6}>
          <InputField name="allowed_quantity" label="Allowed Quantity" />
        </Grid>
        <Grid item xs={6}>
          <InputField name="entered_value_unit" label="Entered (goods) Value/Unit" />
        </Grid>
        <Grid item xs={6}>
          <InputField name="substituted_value_per_unit" label="Substituted Value Per Unit" />
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

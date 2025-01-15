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
          <InputField name="mtim_01" label="MTIM 01" />
        </Grid>
        <Grid item xs={4}>
          <InputField name="mtim_02" label="MTIM 02" />
        </Grid>
        <Grid item xs={4}>
          <InputField name="mtim_03" label="MTIM 03" />
        </Grid>
        <Grid item xs={4}>
          <InputField name="mtim_04" label="MTIM 04" />
        </Grid>
        <Grid item xs={4}>
          <InputField name="mtim_05" label="MTIM 05" />
        </Grid>
        <Grid item xs={4}>
          <InputField name="mtim_06" label="MTIM 06" />
        </Grid>
        <Grid item xs={4}>
          <InputField name="mtim_07" label="MTIM 07" />
        </Grid>
        <Grid item xs={4}>
          <InputField name="mtim_08" label="MTIM 08" />
        </Grid>
        <Grid item xs={4}>
          <InputField name="mtim_09" label="MTIM 09" />
        </Grid>
        <Grid item xs={4}>
          <InputField name="mtim_10" label="MTIM 10" />
        </Grid>
        <Grid item xs={4}>
          <InputField name="mtim_11" label="MTIM 11" />
        </Grid>
        <Grid item xs={4}>
          <InputField name="mtim_12" label="MTIM 12" />
        </Grid>
        <Grid item xs={4}>
          <InputField name="mtim_13" label="MTIM 13" />
        </Grid>
        <Grid item xs={4}>
          <InputField name="mtim_14" label="MTIM 14" />
        </Grid>
        <Grid item xs={4}>
          <InputField name="mtim_15" label="MTIM 15" />
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

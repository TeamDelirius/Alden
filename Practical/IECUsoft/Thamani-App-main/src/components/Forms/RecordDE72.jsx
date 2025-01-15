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
          <InputField name="itin_01" label="ITIN 01" />
        </Grid>
        <Grid item xs={4}>
          <InputField name="itin_02" label="ITIN 02" />
        </Grid>
        <Grid item xs={4}>
          <InputField name="itin_03" label="ITIN 03" />
        </Grid>
        <Grid item xs={4}>
          <InputField name="itin_04" label="ITIN 04" />
        </Grid>
        <Grid item xs={4}>
          <InputField name="itin_05" label="ITIN 05" />
        </Grid>
        <Grid item xs={4}>
          <InputField name="itin_06" label="ITIN 06" />
        </Grid>
        <Grid item xs={4}>
          <InputField name="itin_07" label="ITIN 07" />
        </Grid>
        <Grid item xs={4}>
          <InputField name="itin_08" label="ITIN 08" />
        </Grid>
        <Grid item xs={4}>
          <InputField name="itin_09" label="ITIN 09" />
        </Grid>
        <Grid item xs={4}>
          <InputField name="itin_10" label="ITIN 10" />
        </Grid>
        <Grid item xs={4}>
          <InputField name="itin_11" label="ITIN 11" />
        </Grid>
        <Grid item xs={4}>
          <InputField name="itin_12" label="ITIN 12" />
        </Grid>
        <Grid item xs={4}>
          <InputField name="itin_13" label="ITIN 13" />
        </Grid>
        <Grid item xs={4}>
          <InputField name="itin_14" label="ITIN 14" />
        </Grid>
        <Grid item xs={4}>
          <InputField name="itin_15" label="ITIN 15" />
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

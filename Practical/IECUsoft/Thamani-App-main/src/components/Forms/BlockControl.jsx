import React, { useState } from 'react';
import { Grid, MenuItem, Select } from '@mui/material';
import InputField from '../FormsUI/TextField/index';
import SelectField from '../FormsUI/Select/index';
import PortCodes from '../../data/portCode';

const FormTwo = ({  }) => {
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
            name="depart_port_code"
            label="Processing Departure Port"
          >
            {portCodes}
          </SelectField>
        </Grid>
        <Grid item xs={4}>
          <InputField
            name="depart_port_code"
            label="Processing Departure Port ID"
          />
        </Grid>
        <Grid item xs={4}>
          <InputField disabled={true} name="app_id_code" label="Application Identifier Code" />
        </Grid>
        <Grid item xs={12}>
          <InputField name="filter_code" label="Filter Code" />
        </Grid>
        <Grid item xs={8}>
          <SelectField
            name="remote_depart_port_code"
            label="Remote Departure Port"
          >
            {portCodes}
          </SelectField>
        </Grid>
        <Grid item xs={8}>
          <SelectField
            name="City"
            label="City"
          >
            <MenuItem value="5301">Chicago</MenuItem>
            <MenuItem value="2809">Huston</MenuItem>
            <MenuItem value="1001">New York</MenuItem>
            <MenuItem value="2809">San Francisco</MenuItem>
            
          </SelectField>
        </Grid>
        <Grid item xs={4}>
          <InputField
            name="City"
            label="Port ID"
          />
        </Grid>
        <Grid item xs={4}>
          <InputField
            name="remote_depart_port_code"
            label="Remote Departure Port ID"
          />
        </Grid>
        <Grid item xs={8}>
        <InputField
            name="Text_1"
            label="ID"
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            name="processing_filer_office_code"
            label="Processing Filer Office Code"
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            name="remote_preparer_filter_code"
            label="Remote Preparer Filer Code"
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            name="remote_preparer_office_code"
            label="Remote Preparer Office Code"
          />
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

export default FormTwo;

import React, { useState } from 'react';
import { Grid, MenuItem, Select } from '@mui/material';
import InputField from '../FormsUI/TextField/index';
import SelectField from '../FormsUI/Select/index';
import PortCodes from '../../data/portCode';
import Calendar from 'react-calendar'

function MyApp() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

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
            name = "action_indicator"
            label = "Action Indicator"
            >
              <MenuItem value = "None"> </MenuItem>
            </SelectField>
        </Grid>
        <Grid item xs={2}>
          <InputField name="action_indicator" label=" " />
        </Grid>
        <Grid item xs={6}>
          <InputField name="import_manufacture_rn" label="Import Manufacture RN" />
        </Grid>
        <Grid item xs={6}>
          <InputField name="hts_number" label="HTS Number" />
        </Grid>
        <Grid item xs={6}>
          <InputField name="quantity" label="Quantity" />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            name = "unit_of_measure"
            label = "Unit of Measurement"
            >
              <MenuItem value = "None"> </MenuItem>
            </SelectField>
        </Grid>
        <Grid item xs={2}>
          <InputField name="unit_of_measure" label=" " />
        </Grid>
        
        <Grid item xs={6}>
          <InputField name="production_date" label="Production Date" />
        </Grid>
        
        <Grid item xs={6}>
          <InputField name="factory_location" label="Factory Location" />
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

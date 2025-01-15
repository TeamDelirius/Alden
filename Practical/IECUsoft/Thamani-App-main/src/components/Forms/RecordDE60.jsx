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
            name = "export_destroy_indicator"
            label = "Export/Destroy Indicator"
            >
              <MenuItem value = "None"> </MenuItem>
            </SelectField>
        </Grid>
        <Grid item xs={2}>
          <InputField name="import_destroy_indicator" label=" " />
        </Grid>
        <Grid item xs={6}>
          <InputField name="hts_num" label="HTS Number" />
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
          <InputField name="import_export_destroy_date" label="Import/Export Destroy Date" />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            name = "notice_of_intent_indicator"
            label = "Notice of Intent Indicator"
            >
              <MenuItem value = "None"> </MenuItem>
            </SelectField>
        </Grid>
        <Grid item xs={2}>
          <InputField name="notice_of_intent_indicator" label=" " />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            name = "waiver_to_dc_rights"
            label = "Waiver to DC Rights"
            >
              <MenuItem value = "None"> </MenuItem>
            </SelectField>
        </Grid>
        <Grid item xs={2}>
          <InputField name="waiver_to_dc_rights" label=" " />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            name = "country_of_utl_destination"
            label = "Country of UTL Destination"
            >
              <MenuItem value = "None"> </MenuItem>
            </SelectField>
        </Grid>
        <Grid item xs={2}>
          <InputField name="country_of_utl_destination" label=" " />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            name = "bol_indicator"
            label = "BOL Indicator"
            >
              <MenuItem value = "None"> </MenuItem>
            </SelectField>
        </Grid>
        <Grid item xs={2}>
          <InputField name="bol_indicator" label=" " />
        </Grid>
        <Grid item xs={6}>
          <InputField name="bol_carrier_code" label="BOL Carrier Code" />
        </Grid>
        <Grid item xs={6}>
          <InputField name="name_of_exporter_destroyer" label="Name of Exporter/Destroyer" />
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

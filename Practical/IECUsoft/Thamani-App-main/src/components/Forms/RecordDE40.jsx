import React, { useState } from 'react';
import { Grid, MenuItem, Select } from '@mui/material';
import InputField from '../FormsUI/TextField/index';
import SelectField from '../FormsUI/Select/index';
import PortCodes from '../../data/portCode';
import 'react-datepicker/dist/react-datepicker.css';
import TextField from '@mui/material/TextField';

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
              <MenuItem value = "D">Destroyed</MenuItem>
              <MenuItem value = "L">Laden as Supplies</MenuItem>
              <MenuItem value = "M">Mail Shipment</MenuItem>
              <MenuItem value = "G">Government Mail</MenuItem>
              <MenuItem value = "V">Vessels or Aircraft</MenuItem>
              <MenuItem value = "E">Exported</MenuItem>
              <MenuItem value = "X">Manufactured</MenuItem>
              <MenuItem value = "T">Manu. + scripts or Trans only</MenuItem>
              <MenuItem value = "F"> </MenuItem>

            </SelectField>
        </Grid>
        <Grid item xs={2}>
          <InputField name="action_indicator" label=" " />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            name = "drawback_accounting_mc"
            label = "Drawback Accounting MC"
            >
              <MenuItem value = "00">No accounting method</MenuItem>
              <MenuItem value = "01">Identification not based on accounting method</MenuItem>
              <MenuItem value = "02">First-in, first-out method</MenuItem>
              <MenuItem value = "03">Last-in, first-out method</MenuItem>
              <MenuItem value = "04">Ordinary low-to-high method</MenuItem>
              <MenuItem value = "05">Low-to-high method with established average inventory turn-over period</MenuItem>
              <MenuItem value = "06">Low-to-high blanket method</MenuItem>
              <MenuItem value = "07">Average method</MenuItem>
              <MenuItem value = "08">Other approved accounting method</MenuItem>

            </SelectField>
        </Grid>
        <Grid item xs={2}>
          <InputField name="drawback_accounting_mc" label=" " />
        </Grid>
        <Grid item xs={6}>
          <InputField name="entry_filer_code" label="Entry Filer Code" />
        </Grid>
        <Grid item xs={6}>
          <InputField name="entry_number" label="Entry Number" />
        </Grid>
        <Grid item xs={6}>
          <InputField name="manufacture_ruling_number" label="Manufacture Ruling #" />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            name = "drawback_ec_of_delivery"
            label = "Drawback EC of Delivery"
            >
              <MenuItem value = "None"> </MenuItem>

            </SelectField>
        </Grid>
        <Grid item xs={2}>
          <InputField name="drawback_ec_of_delivery" label=" " />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            name = "basis_of_claim"
            label = "Basis of Claim"
            >
              <MenuItem value = " ">None</MenuItem>
              <MenuItem value = "01">Used in</MenuItem>
              <MenuItem value = "02">Used in less Valuable Waste</MenuItem>
              <MenuItem value = "03">Relative Value</MenuItem>
              <MenuItem value = "04">Appearing in</MenuItem>
              <MenuItem value = "05">Used in / used in less valuable waste</MenuItem>
              <MenuItem value = "06">Used in / relative value</MenuItem>
              <MenuItem value = "07">Used in less valuable waste / relative value</MenuItem>
              <MenuItem value = "08">Used in / used in less valuable waste / relative value</MenuItem>
            </SelectField>
        </Grid>
        <Grid item xs={2}>
          <InputField name="basis_of_claim" label=" " />
        </Grid>
        <Grid item xs={6}>
          <TextField
          id="manufacture_date_received"
          label="Manufacture Date Received"
          type="date"
          defaultValue="2017-05-24"
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        </Grid>
        <Grid item xs={6}>
          <InputField name="manufacture_date_used" label="Manufacture Date Used" />
        </Grid>
        <Grid item xs={6}>
          <InputField name="cbp_es_line_number" label="CBP ES Line Number" />
        </Grid>
        <Grid item xs={6}>
          <InputField name="itin" label="ITIN" />
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

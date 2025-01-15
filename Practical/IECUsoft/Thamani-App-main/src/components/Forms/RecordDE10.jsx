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
            name = "filing_action_request_code"
            label = "Filing Action Request Code"
            >
              <MenuItem value = "None">None</MenuItem>
              <MenuItem value = "A">Add a Drawback Entry Summary</MenuItem>
              <MenuItem value = "R">Full Replacement of Drawback Entry Summary</MenuItem>
            </SelectField>
        </Grid>
        <Grid item xs={2}>
          <InputField name="claim_number" label=" " />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            name = "drawback_filing_port"
            label = "Filing Port"
            >
              <MenuItem value = "None">None</MenuItem>
              <MenuItem value = "5301">Chicago</MenuItem>
              <MenuItem value = "2809">Houston</MenuItem>
              <MenuItem value = "1001">New York</MenuItem>
              <MenuItem value = "2809">San Francisco</MenuItem>
            </SelectField>
        </Grid>
        <Grid item xs={2}>
          <InputField name="claim_number" label=" " />
        </Grid>
        <Grid item xs={6}>
          <InputField name="claim_number" label="Drawback Claim Number" />
        </Grid>
        <Grid item xs={6}>
          <InputField name="entry_filer_code" label="Entry FIler Code" />
        </Grid>
        <Grid item xs={2}>
          <InputField name="drawback_provision" label=" " />
        </Grid>
        <Grid item xs={2}>
          <InputField name="drawback_provision" label=" " />
        </Grid>
        <Grid item xs={2}>
          <InputField name="drawback_provision" label=" " />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            name = "electronic_signature"
            label = "Electronic Signature"
            >
              <MenuItem value = " ">None</MenuItem>
              <MenuItem value = "X">Filer’s Electronic Signature</MenuItem>      
            </SelectField>
        </Grid>
        <Grid item xs={2}>
          <InputField name="electronic_signature" label=" " />
        </Grid>
        <Grid item xs={6}>
          <InputField name="claimant_id" label="Claimant ID" />
        </Grid>
        <Grid item xs={6}>
          <InputField name="notify_party" label="Designated Notify Party" />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            name = "bond_waiver_indicator"
            label = "Bond Waiver Indicator"
            >
              <MenuItem value = " ">None</MenuItem>
              <MenuItem value = "X">Filer’s Electronic Signature</MenuItem>      
            </SelectField>
        </Grid>
        <Grid item xs={2}>
          <InputField name="bond_waiver_indicator" label="Bond Waiver Indicator" />
        </Grid>

        <Grid item xs={4}>
          <SelectField
            name = "bond_waiver_reason_code"
            label = "Bond Waiver Reason Code"
            >
              <MenuItem value = "None">None</MenuItem>
              <MenuItem value = "995">Supplemental Duty Bills on Vessel Repair Entries</MenuItem>
              <MenuItem value = "996">Fines, Penalty, or Liquidated Damage Bills</MenuItem>
              <MenuItem value = "997">All Other Contingent Bills</MenuItem>
              <MenuItem value = "998">Bills Secured, Other than Surety</MenuItem>
              <MenuItem value = "999">No Surety, Unsecured Bills</MenuItem>
            </SelectField>
        </Grid>
        <Grid item xs={2}>
          <InputField name="bond_waiver_reason_code" label="Bond Waiver Reason Code" />
        </Grid>  
        <Grid item xs={4}>
          <SelectField
            name = "one_time_waiver"
            label = "One Time Waiver Indicator"
            >
              <MenuItem value = " ">None</MenuItem>
              <MenuItem value = "Y">Yes</MenuItem>      
            </SelectField>
        </Grid>
        <Grid item xs={2}>
          <InputField name="one_time_waiver" label="One Time Waiver Indicatoricator" />
        </Grid>

        <Grid item xs={4}>
          <SelectField
            name = "waiver_prior_notice"
            label = "Waivor Prior Notice"
            >
              <MenuItem value = " ">None</MenuItem>
              <MenuItem value = "Y">Yes</MenuItem>      
            </SelectField>
        </Grid>
        <Grid item xs={2}>
          <InputField name="waiver_prior_notice" label="Waivor Prior Notice" />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            name = "commerical_interchangeability_indicator"
            label = "Commercial Interchangeability Indicator"
            >
              <MenuItem value = "None">None</MenuItem>
              <MenuItem value = "0">Claim-by-Claim</MenuItem>
              <MenuItem value = "1">Non-Binding Ruling</MenuItem>
              <MenuItem value = "2">Binding Ruling approved by CBP HQ</MenuItem>
              <MenuItem value = "3">CID Pending</MenuItem>
            </SelectField>
        </Grid>
        <Grid item xs={2}>
          <InputField name="commerical_interchangeability_indicator" label="Commercial Interchangeability Indicator" />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            name = "accelerated_payment_request"
            label = "Accelerated Payment Request"
            >
              <MenuItem value = "None">None</MenuItem>
              <MenuItem value = "Y">Requesting Accelerated Payment and Bond is Required</MenuItem>

            </SelectField>
        </Grid>
        <Grid item xs={2}>
          <InputField name="accelerated_payment_request" label="Accelerated Payment Request" />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            name = "electronic_petroleum_certification"
            label = "Electronic Petroleum Certification"
            >
              <MenuItem value = " ">None</MenuItem>
              <MenuItem value = "X">Filer’s Electronic Signature</MenuItem>      
            </SelectField>
        </Grid>
        <Grid item xs={2}>
          <InputField name="electronic_petroleum_certification" label="Electronic Petroleum Certification" />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            name = "electronic_manufacturing_petroleum_certifcation"
            label = "Electronic Manufacturing Petroleum Certification"
            >
              <MenuItem value = " ">None</MenuItem>
              <MenuItem value = "X">Filer’s Electronic Signature</MenuItem>      
            </SelectField>
        </Grid>
        <Grid item xs={2}>
          <InputField name="electronic_manufacturing_petroleum_certifcation" label="Electronic Manufacturing Petroleum Certification" />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            name = "nafta_drawback_claim_indicator"
            label = "NAFTA Drawback Claim Indicator"
            >
              <MenuItem value = " ">None</MenuItem>
              <MenuItem value = "X">Filer’s Electronic Signature</MenuItem>      
            </SelectField>
        </Grid>
        <Grid item xs={2}>
          <InputField name="nafta_drawback_claim_indicator" label="NAFTA Drawback Claim Indicator" />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            name = "oil_spill_tax_certification"
            label = "Oil Spill Tax Certification"
            >
              <MenuItem value = " ">None</MenuItem>
              <MenuItem value = "X">Filer’s Electronic Signature</MenuItem>      
            </SelectField>
        </Grid>
        <Grid item xs={2}>
          <InputField name="oil_spill_tax_certification" label="Oil Spill Tax Certification" />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            name = "substituted_unused_wine_certification"
            label = "Substituted Unused Wine Certification"
            >
              <MenuItem value = " ">None</MenuItem>
              <MenuItem value = "X">Filer’s Electronic Signature</MenuItem>      
            </SelectField>
        </Grid>
        <Grid item xs={2}>
          <InputField name="substituted_unused_wine_certification" label="Substituted Unused Wine Certification" />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            name = "bill_of_material_formula_certification"
            label = "Bill of Material/Formula Certification"
            >
              <MenuItem value = " ">None</MenuItem>
              <MenuItem value = "X">Filer’s Electronic Signature</MenuItem>      
            </SelectField>
        </Grid>
        <Grid item xs={2}>
          <InputField name="bill_of_material_formula_certification" label="Bill of Material/Formula Certification" />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            name = "usmca_drawback_claim_indicator"
            label = "USMCA Drawback Claim Indicator"
            >
              <MenuItem value = " ">None</MenuItem>
              <MenuItem value = "X">Filer’s Electronic Signature</MenuItem>      
            </SelectField>
        </Grid>
        <Grid item xs={2}>
          <InputField name="usmca_drawback_claim_indicator" label="USMCA Drawback Claim Indicator" />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            name = "retail_sales_substitution"
            label = "Retail Sales Substitution"
            >
              <MenuItem value = " ">None</MenuItem>
              <MenuItem value = "X">Filer’s Electronic Signature</MenuItem>      
            </SelectField>
        </Grid>
        <Grid item xs={2}>
          <InputField name="retail_sales_substitution" label="Retail Sales Substitution" />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            name = "certification_for_valuation_of_destroy_merchandise"
            label = "Certification for Valuation of Destroy Merchandise"
            >
              <MenuItem value = " ">None</MenuItem>
              <MenuItem value = "X">Filer’s Electronic Signature</MenuItem>      
            </SelectField>
        </Grid>
        <Grid item xs={2}>
          <InputField name="certification_for_valuation_of_destroy_merchandise" label="Certification for Valuation of Destroy Merchandise" />
        </Grid>
        <Grid item xs={6}>
          <InputField name= "broker_reference_number" label="Broker Reference Number" />
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

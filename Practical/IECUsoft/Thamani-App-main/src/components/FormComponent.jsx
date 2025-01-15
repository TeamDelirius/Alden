import React, { useState, useEffect } from 'react';
import {
  Button,
  Card,
  Container,
  Grid,
  Box,
  Paper,
  TextField,
} from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';

import FormOne from './Forms/Identifier';
import FormTwo from './Forms/BlockControl';

// Main Forms
import RecordDE10 from './Forms/RecordDE10';
import RecordDE31 from './Forms/RecordDE31';
import RecordDE40 from './Forms/RecordDE40';
import RecordDE41 from './Forms/RecordDE41';
import RecordDE42 from './Forms/RecordDE42';
import RecordDE43 from './Forms/RecordDE43';
import RecordDE50 from './Forms/RecordDE50';
import RecordDE51 from './Forms/RecordDE51';
import RecordDE52 from './Forms/RecordDE52';
import RecordDE53 from './Forms/RecordDE53';
import RecordDE60 from './Forms/RecordDE60';
import RecordDE61 from './Forms/RecordDE61';
import RecordDE62 from './Forms/RecordDE62';
import RecordDE63 from './Forms/RecordDE63';
import RecordDE64 from './Forms/RecordDE64';
import RecordDE70 from './Forms/RecordDE70';
import RecordDE71 from './Forms/RecordDE71';
import RecordDE72 from './Forms/RecordDE72';
import RecordDE73 from './Forms/RecordDE73';
import RecordDE90 from './Forms/RecordDE90';



import MultiStepForm, { FormStep } from './MultiStepForm';



const FormComponent = () => {
    const [applicationIDCode, setApplicationIDCode] = useState('');

    useEffect(() => {
        const sessionApplicationIDCode = sessionStorage.getItem('applicationIDCode');
        if (sessionApplicationIDCode !== null) {
            setApplicationIDCode(JSON.parse(sessionApplicationIDCode));
        }
    })

    useEffect(() => {
        window.sessionStorage.setItem('applicationIDCode', JSON.stringify(applicationIDCode));
    }, [applicationIDCode]);

    const INITIAL_FROM_STATE = {
      app_id_code_box1: '',
      app_id_code: '',
      depart_port_code: '',
      filter_code: '',
      remote_depart_port_code: '',
      processing_filer_office_code: '',
      remote_preparer_filter_code: '',
      remote_preparer_office_code: '',
      app_id_code_new: '',
      City: '',
      // RecordDE10
      bond_waiver_indicator: '',
      bond_waiver_reason_code: '',
      
    };

  return (
    <>
      <MultiStepForm
        initialValues={{ ...INITIAL_FROM_STATE }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <FormStep
          stepName="Application Identifier"
          onSubmit={() => console.log('Step1 onSubmit')}
          validationSchema={Yup.object({
            app_id_code_box1: Yup.string().required('Required'),
            app_id_code: Yup.string().required('Required'),
          })}
        >
          <FormOne />
        </FormStep>
        <FormStep
          stepName="Block Control"
          onSubmit={() => console.log('Step1 onSubmit')}
          validationSchema={Yup.object({
            depart_port_code: Yup.string().required('Port Code is required'),
            filter_code: Yup.string()
            .min(3, 'Too Short!')
            .max(3, 'Too Long!')
            .matches(/^[aA-zZ\s]+$/, "Numbers only")
            .required('Required'),
            processing_filer_office_code: Yup.string(),
            remote_preparer_filter_code: Yup.string().required(
              'Remote Preparer Filter Code is required'
            ),
            remote_preparer_office_code: Yup.string(),
          })}
        >
          <FormTwo />


          </FormStep>
        <FormStep
          stepName="Drawback"
          onSubmit={() => console.log('Step1 onSubmit')}
          validationSchema={Yup.object({

          })}
        >
          <RecordDE10 />
        </FormStep>
        <FormStep
          stepName="Bond Details"
          onSubmit={() => console.log('Step1 onSubmit')}
          validationSchema={Yup.object({

          })}
        >
          <RecordDE31 />
        </FormStep>
        <FormStep
          stepName="Import Details"
          onSubmit={() => console.log('Step1 onSubmit')}
          validationSchema={Yup.object({

          })}
        >
          <RecordDE40 />
        </FormStep>
        <FormStep
          stepName="Import Classifications"
          onSubmit={() => console.log('Step1 onSubmit')}
          validationSchema={Yup.object({

          })}
        >
          <RecordDE41 />
        </FormStep>
        <FormStep
          stepName= "Import Quantity/UOM"
          onSubmit={() => console.log('Step1 onSubmit')}
          validationSchema={Yup.object({

          })}
        >
          <RecordDE42 />
        </FormStep>
        <FormStep
          stepName="Import Revenue Claimed"
          onSubmit={() => console.log('Step1 onSubmit')}
          validationSchema={Yup.object({

          })}
        >
          <RecordDE43 />
        </FormStep>
        <FormStep
          stepName="Production Article"
          onSubmit={() => console.log('Step1 onSubmit')}
          validationSchema={Yup.object({

          })}
        >
          <RecordDE50 />
        </FormStep>
        <FormStep
          stepName="Produced Description"
          onSubmit={() => console.log('Step1 onSubmit')}
          validationSchema={Yup.object({

          })}
        >
          <RecordDE51 />
        </FormStep>
        <FormStep
          stepName="Link Import to MPA "
          onSubmit={() => console.log('Step1 onSubmit')}
          validationSchema={Yup.object({

          })}
        >
          <RecordDE52 />
        </FormStep>
        <FormStep
          stepName="Link MPA to SMA"
          onSubmit={() => console.log('Step1 onSubmit')}
          validationSchema={Yup.object({

          })}
        >
          <RecordDE53 />
        </FormStep>
        <FormStep
          stepName="Export/Destroy Articles"
          onSubmit={() => console.log('Step1 onSubmit')}
          validationSchema={Yup.object({

          })}
        >
          <RecordDE60 />
        </FormStep>
        <FormStep
          stepName="Export/Destroy Description"
          onSubmit={() => console.log('Step1 onSubmit')}
          validationSchema={Yup.object({

          })}
        >
          <RecordDE61 />
        </FormStep>
        <FormStep
          stepName="Notice of Intent"
          onSubmit={() => console.log('Step1 onSubmit')}
          validationSchema={Yup.object({

          })}
        >
          <RecordDE62 />
        </FormStep>
        <FormStep
          stepName="Examination/Witness Record"
          onSubmit={() => console.log('Step1 onSubmit')}
          validationSchema={Yup.object({

          })}
        >
          <RecordDE63 />
        </FormStep>
        <FormStep
          stepName="NAFTA Coding Group"
          onSubmit={() => console.log('Step1 onSubmit')}
          validationSchema={Yup.object({

          })}
        >
          <RecordDE64 />
        </FormStep>
        <FormStep
          stepName="Export/Destroy Articles"
          onSubmit={() => console.log('Step1 onSubmit')}
          validationSchema={Yup.object({

          })}
        >
          <RecordDE70 />
        </FormStep>
        <FormStep
          stepName="Export/Destroy Description"
          onSubmit={() => console.log('Step1 onSubmit')}
          validationSchema={Yup.object({

          })}
        >
          <RecordDE71 />
        </FormStep>
        <FormStep
          stepName="Link E/D to Import Articles"
          onSubmit={() => console.log('Step1 onSubmit')}
          validationSchema={Yup.object({

          })}
        >
          <RecordDE72 />
        </FormStep>
        <FormStep
          stepName="Link E/D to MPA"
          onSubmit={() => console.log('Step1 onSubmit')}
          validationSchema={Yup.object({

          })}
        >
          <RecordDE73 />
        </FormStep>
        <FormStep

          stepName="Revenue Totals"
          onSubmit={() => console.log('Step1 onSubmit')}
          validationSchema={Yup.object({

          })}
        >
          <RecordDE90 />
        </FormStep>
      </MultiStepForm>
    </>
  );
};

export default FormComponent;

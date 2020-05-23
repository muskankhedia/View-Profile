import React, { FC } from 'react';

import { Card, CardContent, FormControl, InputLabel, Input, FormHelperText, Paper, Grid, FormControlLabel, Checkbox, FormLabel, RadioGroup, Radio, FormGroup, Select, MenuItem } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { Form, Field } from 'react-final-form';

interface Values{
    firstName: string;
    lastName: string;
    email: string;
}

const onSubmit = async (values: any) => {
    const sleep = (ms: any) => new Promise(resolve => setTimeout(resolve, ms));
    await sleep(300);
    console.log("Form Data: ", values)
  };

const CreateProfile: FC<{Values}> = () => {
  return (
    <Form 
    onSubmit={onSubmit}
    initialValues={{ employed: true, stooge: 'larry' }}
    render={({ handleSubmit, values }) => (
      <form onSubmit={handleSubmit}>
        <Paper style={{ padding: 16 }}>
          <Grid container alignItems="flex-start" spacing={2}>
            <Grid item xs={6}>
              <Field
                fullWidth
                required
                name="firstName"
                component={TextField}
                type="text"
                label="First Name"
              />
            </Grid>
            <Grid item xs={6}>
              <Field
                fullWidth
                required
                name="lastName"
                component={TextField}
                type="text"
                label="Last Name"
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="email"
                fullWidth
                required
                component={TextField}
                type="email"
                label="Email"
              />
            </Grid>
            <Grid item style={{ marginTop: 16 }}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <pre>{JSON.stringify(values, 0, 2)}</pre>
      </form>
    
    )}
    />
  )};

export default CreateProfile;
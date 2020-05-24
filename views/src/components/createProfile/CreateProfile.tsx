import React, { FC } from 'react';

import { Card, CardContent, Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const CreateProfile: FC<{}> = () => {
  return (
    <Card>
      <CardContent>
        <Container>
          <h3>Create Profile</h3>
          <hr />
          <form noValidate autoComplete="off" style={{ margin: '1%' }}>
            <div style={{ fontWeight: 'bold', margin: '1% 0% 0% 1%' }}>
              General
            </div>
            <TextField id="standard-basic" label="First name" fullWidth={true} variant="outlined" style={{ margin: '1%' }} />
            <TextField id="standard-basic" label="Last name" fullWidth={true} variant="outlined" style={{ margin: '1%' }}/>
            <TextField id="standard-basic" label="Company" fullWidth={true}  variant="outlined" style={{ margin: '1%' }}/>
            <TextField id="standard-basic" label="Status" fullWidth={true} variant="outlined"  style={{ margin: '1%' }}/>
            <TextField id="standard-basic" label="Youtube link" fullWidth={true}  variant="outlined" style={{ margin: '1%' }}/>
            <TextField id="standard-basic" label="Github link" fullWidth={true}  variant="outlined" style={{ margin: '1%' }}/>
            <div style={{ fontWeight: 'bold', margin: '1% 0% 0% 1%' }}>
              Education
            </div>
            <TextField id="standard-basic" label="Course" fullWidth={true}  variant="outlined" style={{ margin: '1%' }}/>
            <TextField id="standard-basic" label="University name" fullWidth={true} variant="outlined"  style={{ margin: '1%' }}/>
            <TextField id="standard-basic" label="City" fullWidth={true}  variant="outlined" style={{ margin: '1%' }}/>
            <TextField id="standard-basic" label="Remarks" fullWidth={true}  variant="outlined" style={{ margin: '1%' }}/>

            <div style={{ fontWeight: 'bold', margin: '1% 0% 0% 1%' }}>
              Experience (company-1)
            </div>
            <TextField id="standard-basic" label="Company name" fullWidth={true}  variant="outlined" style={{ margin: '1%' }}/>
            <TextField id="standard-basic" label="Position" fullWidth={true} variant="outlined"  style={{ margin: '1%' }}/>
            <TextField id="standard-basic" label="Duration" fullWidth={true}  variant="outlined" style={{ margin: '1%' }}/>
            <TextField id="standard-basic" label="Description" fullWidth={true}  variant="outlined" style={{ margin: '1%' }}/>
            <div style={{ fontWeight: 'bold', margin: '1% 0% 0% 1%' }}>
              Experience (company-2)
            </div>
            <TextField id="standard-basic" label="Company name" fullWidth={true}  variant="outlined" style={{ margin: '1%' }}/>
            <TextField id="standard-basic" label="Position" fullWidth={true} variant="outlined"  style={{ margin: '1%' }}/>
            <TextField id="standard-basic" label="Duration" fullWidth={true}  variant="outlined" style={{ margin: '1%' }}/>
            <TextField id="standard-basic" label="Description" fullWidth={true}  variant="outlined" style={{ margin: '1%' }}/>
            <hr/>
            <Button variant="contained" color="primary">Submit</Button>
            &nbsp;&nbsp;&nbsp;
            <Link to="/profiles" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="secondary">Cancel</Button>
            </Link>
          </form>
        </Container>
      </CardContent>
    </Card>
  );
};

export default CreateProfile;
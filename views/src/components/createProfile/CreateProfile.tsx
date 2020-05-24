import React, { FC, useState } from 'react';

import { Card, CardContent, Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { HOST } from '../../utils/utils';

const CreateProfile: FC<{}> = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    company:'',
    status: '',
    youtubeLink: '',
    githubLink: '',
    course: '',
    universityName: '',
    city: '',
    remarks: '',
    companyName1: '',
    position1: '',
    duration1: '',
    description1: '',
    companyName2: '',
    position2: '',
    duration2: '',
    description2: '',
  });

  const submit = () => {
    console.warn(formState);
    fetch(`${HOST}/createProfile`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        firstName: formState.firstName,
        lastName: formState.lastName,
        company: formState.company,
        status: formState.status,
        youtubeLink: formState.youtubeLink,
        githubLink: formState.githubLink,
        course: formState.course,
        universityName: formState.universityName,
        city: formState.city,
        remoarks: formState.remarks,
        company1: formState.companyName1,
        position1: formState.position1,
        duration1: formState.duration1,
        description1: formState.description1,
        company2: formState.companyName2,
        position2: formState.position2,
        duration2: formState.duration2,
        description2: formState.description2,
      })
    })
    .then(res => res.json())
    .then(res => {
      console.warn(res)
    })
  };

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
            <TextField id="standard-basic" label="First name" fullWidth={true} onChange={(e) => setFormState({ ...formState, firstName: e.target.value })} variant="outlined" style={{ margin: '1%' }} />
            <TextField id="standard-basic" label="Last name" fullWidth={true} onChange={(e) => setFormState({ ...formState, lastName: e.target.value })} variant="outlined" style={{ margin: '1%' }}/>
            <TextField id="standard-basic" label="Company" fullWidth={true}  onChange={(e) => setFormState({ ...formState, company: e.target.value })} variant="outlined" style={{ margin: '1%' }}/>
            <TextField id="standard-basic" label="Status" fullWidth={true} onChange={(e) => setFormState({ ...formState, status: e.target.value })} variant="outlined"  style={{ margin: '1%' }}/>
            <TextField id="standard-basic" label="Youtube link" fullWidth={true} onChange={(e) => setFormState({ ...formState, youtubeLink: e.target.value })} variant="outlined" style={{ margin: '1%' }}/>
            <TextField id="standard-basic" label="Github link" fullWidth={true} onChange={(e) => setFormState({ ...formState, githubLink: e.target.value })} variant="outlined" style={{ margin: '1%' }}/>
            <div style={{ fontWeight: 'bold', margin: '1% 0% 0% 1%' }}>
              Education
            </div>
            <TextField id="standard-basic" label="Course" fullWidth={true} onChange={(e) => setFormState({ ...formState, course: e.target.value })} variant="outlined" style={{ margin: '1%' }}/>
            <TextField id="standard-basic" label="University name" fullWidth={true} onChange={(e) => setFormState({ ...formState, universityName: e.target.value })} variant="outlined"  style={{ margin: '1%' }}/>
            <TextField id="standard-basic" label="City" fullWidth={true} onChange={(e) => setFormState({ ...formState, city: e.target.value })} variant="outlined" style={{ margin: '1%' }}/>
            <TextField id="standard-basic" label="Remarks" fullWidth={true} onChange={(e) => setFormState({ ...formState, remarks: e.target.value })} variant="outlined" style={{ margin: '1%' }}/>

            <div style={{ fontWeight: 'bold', margin: '1% 0% 0% 1%' }}>
              Experience (company-1)
            </div>
            <TextField id="standard-basic" label="Company name" fullWidth={true} onChange={(e) => setFormState({ ...formState, companyName1: e.target.value })} variant="outlined" style={{ margin: '1%' }}/>
            <TextField id="standard-basic" label="Position" fullWidth={true} onChange={(e) => setFormState({ ...formState, position1: e.target.value })} variant="outlined"  style={{ margin: '1%' }}/>
            <TextField id="standard-basic" label="Duration" fullWidth={true} onChange={(e) => setFormState({ ...formState, duration1: e.target.value })} variant="outlined" style={{ margin: '1%' }}/>
            <TextField id="standard-basic" label="Description" fullWidth={true} onChange={(e) => setFormState({ ...formState, description1: e.target.value })} variant="outlined" style={{ margin: '1%' }}/>
            <div style={{ fontWeight: 'bold', margin: '1% 0% 0% 1%' }}>
              Experience (company-2)
            </div>
            <TextField id="standard-basic" label="Company name" fullWidth={true} onChange={(e) => setFormState({ ...formState, companyName2: e.target.value })} variant="outlined" style={{ margin: '1%' }}/>
            <TextField id="standard-basic" label="Position" fullWidth={true} onChange={(e) => setFormState({ ...formState, position2: e.target.value })} variant="outlined"  style={{ margin: '1%' }}/>
            <TextField id="standard-basic" label="Duration" fullWidth={true} onChange={(e) => setFormState({ ...formState, duration2: e.target.value })} variant="outlined" style={{ margin: '1%' }}/>
            <TextField id="standard-basic" label="Description" fullWidth={true} onChange={(e) => setFormState({ ...formState, description2: e.target.value })} variant="outlined" style={{ margin: '1%' }}/>
            <hr/>
            <Button variant="contained" color="primary" onClick={() => submit()}>Submit</Button>
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
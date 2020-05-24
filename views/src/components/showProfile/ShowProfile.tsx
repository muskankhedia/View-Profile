import React, { FC, useState } from 'react';

import { Card, CardContent } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

interface ShowProfileProps {
  firstName: string;
  lastName: string;
  company: string;
  status: string;
  youtubeLink: string;
  githubLink: string;
  course: string;
  university: string;
  city: string;
  
}

const ShowProfile: FC<{}> = () => {
  
    const [profileData, setProfileData] = useState({});
    fetch('https://view-profile-app.herokuapp.com/')

    return (
    <Card style={{ margin: '20vh 30vh 50vh 30vh', flexGrow: 1, textAlign: 'center' }}>
      <CardContent>
        <AppBar position="static">
          <Typography variant="h4" style={{ padding: '2%' }}>
            Login
          </Typography>
        </AppBar>
        <div style={{ margin: '5%' }}>
          <TextField id="outlined-basic" label="Username" type="text" variant="outlined" style={{ width: '80vh', marginBottom: '5%' }} />
          <TextField id="outlined-basic" label="Password" type="password" variant="outlined" style={{ width: '80vh' }} />
        </div>
        <Link to="/profiles" replace>
        <Button variant="contained" color="primary" onClick={() => updateLogin(true)} >Login</Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ShowProfile;
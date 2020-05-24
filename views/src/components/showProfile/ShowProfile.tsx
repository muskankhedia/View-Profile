import React, { FC, useState } from 'react';

import { Card, CardContent } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { HOST } from '../../utils/utils';

const ShowProfile: FC<{}> = () => {
  
    const [profileData, setProfileData] = useState();
    fetch(`${HOST}/profile/1`)
    .then(res => res.json())
    .then(res => {
        console.log("res: ",res);
        setProfileData(res);
        console.log("profileDAta: ", profileData);
    })
    if (!profileData) {
      return null
    } else {
      return (
        <Card style={{ margin: '20vh 30vh 50vh 30vh', flexGrow: 1, textAlign: 'center' }}>
          <CardContent>
            <div>Name: {profileData}</div>
          </CardContent>
        </Card>
      )
    }
};

export default ShowProfile;
import React, { FC, useState, useEffect } from 'react';

import { Card, CardContent, Typography } from '@material-ui/core';
import { HOST } from '../../utils/utils';

const ShowProfile: FC<{}> = () => {
    const pid = document.URL.substring(document.URL.lastIndexOf('/')+1);
    console.log("pid: ", pid)
    const [profileData, setProfileData] = useState<any>({
      id: '',
      name: ''
    });
    useEffect(() => {
      async function fetchData(url: string) {
        const r = await fetch(url);
        const inJSON = (await r.json()) as any;
        console.warn(inJSON)
        setProfileData(inJSON.rows);
      }
      fetchData(`${HOST}/profile/1`)
    }, [])

    return (
      <Card style={{ margin: '20vh 30vh 50vh 30vh', flexGrow: 1, textAlign: 'center' }}>
        <CardContent>
          <Typography variant="h1" component="h2"> General</Typography>
          {/* <div>First Name: {profileData.firstName}</div>
          <div>Last Name: {profileData.lastName}</div>
          <div>Company: {profileData.company}</div>
          <div>Status: {profileData.status}</div>
          <div>Github Link: {profileData.githubLink}</div>
          <div>Youtube Link: {profileData.youtubeLink}</div>

          <Typography variant="h1" component="h2"> Education </Typography>
          <div>Course: {profileData.course}</div>
          <div>University Name: {profileData.universityName}</div>
          <div>City: {profileData.city}</div>
          <div>Remarks: {profileData.remarks}</div>

          <Typography variant="h1" component="h2"> Experience(company-1) </Typography>
          <div>Company Name: {profileData.company1}</div>
          <div>Position: {profileData.position1}</div>
          <div>Duration: {profileData.duration1}</div>
          <div>Description: {profileData.description1}</div>

          <Typography variant="h1" component="h2"> Experience(company-2) </Typography>
          <div>Company Name: {profileData.company2}</div>
          <div>Position: {profileData.position2}</div>
          <div>Duration: {profileData.duration2}</div>
          <div>Description: {profileData.description2}</div> */}

        </CardContent>
      </Card>
    )
};

export default ShowProfile;
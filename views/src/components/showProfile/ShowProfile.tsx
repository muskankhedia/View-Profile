import React, { FC, useState, useEffect } from 'react';

import { Card, CardContent } from '@material-ui/core';
import { HOST } from '../../utils/utils';

interface ShowProfileProps {
  pId: string
}

const ShowProfile: FC<ShowProfileProps> = ({pId}) => {
  
    console.log("pid: ", pId)
    const [profileData, setProfileData] = useState<any>({
      id: '',
      name: ''
    });
    useEffect(() => {
      async function fetchData(url: string) {
        const r = await fetch(url);
        const inJSON = (await r.json()) as any;
        console.warn(inJSON)
        setProfileData(inJSON.row);
      }
      fetchData(`${HOST}/profile/1`)
    }, [])

    return (
      <Card style={{ margin: '20vh 30vh 50vh 30vh', flexGrow: 1, textAlign: 'center' }}>
        <CardContent>
          <div>Name: {profileData.name}</div>
        </CardContent>
      </Card>
    )
};

export default ShowProfile;
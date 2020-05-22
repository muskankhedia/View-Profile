import React, { FC } from 'react';

import { Card, CardContent } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Login: FC<{}> = () => {
  return (
    <Card style={{ margin: '20vh 50vh 50vh 50vh', flexGrow: 1, textAlign: 'center' }}>
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
        <Button variant="contained" color="primary">Login</Button>

      </CardContent>
    </Card>
  );
};

export default Login;
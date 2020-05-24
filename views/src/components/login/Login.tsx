import React, { FC, useState } from 'react';

import { Card, CardContent } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from "react-router-dom";
import { HOST } from '../../utils/utils';

interface LoginProps {
  updateLogin(status: boolean): void;
}

const Login: FC<LoginProps> = ({ updateLogin }) => {
  const history = useHistory();
  const [formState, setFormState] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState(false)
  const submit = () => {
    console.warn(formState);
    fetch(`${HOST}/login`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: formState.username,
        password: formState.password
      })
    })
    .then(res => res.json())
    .then(res => {
      console.warn(res)
      if (res.message == 'LoggedIn') {
        setError(false)
        updateLogin(true)
        history.push("/profiles");
      } else{
        setError(true)
      }
    })
  };
  return (
    <Card style={{ margin: '20vh 30vh 50vh 30vh', flexGrow: 1, textAlign: 'center' }}>
      <CardContent>
        <AppBar position="static">
          <Typography variant="h4" style={{ padding: '2%' }}>
            Login
          </Typography>
        </AppBar>
        <div style={{ margin: '5%' }}>
          <TextField id="outlined-basic" label="Username" error={error} type="text" variant="outlined" style={{ width: '80vh', marginBottom: '5%' }} onChange={(e) => setFormState({ ...formState, username: e.target.value })} />
          <TextField id="outlined-basic" label="Password" error={error} type="password" variant="outlined" style={{ width: '80vh' }} onChange={(e) => setFormState({ ...formState, password: e.target.value })} />
        </div>
        <Button variant="contained" color="primary" onClick={() => submit()} >Login</Button>
      </CardContent>
    </Card>
  );
};

export default Login;

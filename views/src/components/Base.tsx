import React, { FC, useState } from 'react';
import Navigator from '../Navigator';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from "react-router-dom";
import { CLIENT } from '../utils/utils';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontWeight: 'bold'
    },
  }),
);

const Base: FC<{}> = () => {
  const history = useHistory();
  const classes = useStyles();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const updateLogin = (status: boolean) => {
    setIsLoggedIn(status);
  };
  const profiles = () => {
    window.location.href = `${CLIENT}/#/profiles`;
  };
  const createProfile = () => {
    window.location.href = `${CLIENT}/#/createProfile`;
  };
  const resetLogin = (status: boolean) => {
    setIsLoggedIn(status);
    window.location.href = `${CLIENT}/#/login`;
  }
  return (
    <div>
      <header>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            View-Profile
          </Typography>
          {isLoggedIn ? (
            <>
              <Button color="inherit" onClick={() => createProfile()}>Create Profile</Button>
              <Button color="inherit" onClick={() => profiles()}>Profiles</Button>
              <Button color="inherit" onClick={() => resetLogin(false)} >Logout</Button>
            </>
          ): null}
          
        </Toolbar>
      </AppBar>
      </header>
      <Container style={{ marginTop: '10vh' }}>
        <main>
          <Navigator updateLogin={updateLogin} />
        </main>
      </Container>
    </div>
  );
};

export default Base;
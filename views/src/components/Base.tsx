import React, { FC, useState } from 'react';
import Navigator from '../Navigator';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';

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
  const classes = useStyles();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const updateLogin = (status: boolean) => {
    setIsLoggedIn(status);
  };
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
              <Button color="inherit">Create Profile</Button>
              <Button color="inherit">Profiles</Button>
              <Button color="inherit">Logout</Button>
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
import React, { FC } from 'react';
import Navigator from '../Navigator';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

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
  return (
    <div>
      <header>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            View-Profile
          </Typography>
        </Toolbar>
      </AppBar>
      </header>
      <Container style={{ marginTop: '10vh' }}>
        <main>
          <Navigator />
        </main>
      </Container>
    </div>
  );
};

export default Base;
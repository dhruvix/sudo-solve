import React from 'react';
import './App.css';
import Board from './Board';
import { Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function App() {

  const [open, setOpen] = React.useState(false);
  const [mail, setmail] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function github(){
    window.location.href = "https://github.com/dhruvix";
  }

  function linkedin(){
    window.location.href = "https://www.linkedin.com/in/dhruva-narayan-482a70195/";
  }

  function email(){
    setmail(true);
    setOpen(false);
  }

  function handleClosemail(){
    setmail(false);
  }

  return (
    <div className="App">
    <div className="appthing">
      <div className="namebox">
      <Typography color='secondary' variant='h2' style={{marginLeft:'40px'}}>
        Sudoku solver 2e
      </Typography>
      <IconButton onClick={handleClickOpen} color="secondary">
        <ChatBubbleOutlineOutlinedIcon />
      </IconButton>
      </div>
      <div className="board">
        <Board />
      </div>
    </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Contact Me</DialogTitle>
        <DialogActions>
          <IconButton onClick={github} color="primary">
            <GitHubIcon />
          </IconButton>
          <IconButton onClick={email} color="secondary">
            <ContactMailIcon />
          </IconButton>
          <IconButton onClick={linkedin} color="primary">
            <LinkedInIcon />
          </IconButton>
        </DialogActions>
      </Dialog>

      <Dialog
        open={mail}
        onClose={handleClosemail}>
        <DialogTitle>dhruvix7@gmail.com</DialogTitle>
      </Dialog>
    </div>
  );
}

export default App;

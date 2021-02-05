import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import {makeStyles, Theme} from "@material-ui/core";
import Draggable from 'react-draggable';

const useStyles = makeStyles((theme: Theme) => ({
    backDrop: {
      //backdropFilter: "blur(3px)",
      backgroundColor:'rgba(0,0,0,0)'
    },
  }));

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function TimeSeriesDialog(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
      open: false
  });

  const handleClickOpen = () => {
    setState({ ...state, open: true})
  };

  const handleClose = () => {
    setState({ ...state, open: false})
  };

  return (
    <div>
      <Dialog
        open={props.open}
        BackdropProps={{
            classes: {
              root: classes.backDrop,
            },
        }}
        onClose={handleClose}
        PaperComponent={PaperComponent}
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          {props.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          {props.desctiption}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
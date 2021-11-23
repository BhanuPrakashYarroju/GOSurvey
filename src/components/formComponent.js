import React, { useState } from "react";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles'
import { Button, Container, Stack, Typography } from '@mui/material';
import AddField from "./AddField";
import TextField from '@mui/material/TextField';
import { connect } from 'react-redux'
import { storeQuestions } from "../Questions/actions/questionAction";
import { Preview } from "./Preview";
import { Link } from 'react-router-dom';
// import * as React from 'react';
import PropTypes from 'prop-types';
//import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MyComponent from './Share';
import { CSVLink } from 'react-csv';
import{useEffect} from 'react'





const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  
  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };
  
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };

const useStyles = makeStyles(({ theme }) => ({

    contanr: {
        backgroundColor: '#f5f7fa',
        margin: '20px',
        padding: "10px"
    }

}));


function FormComponent(props) {
    const classes = useStyles()
    const [questionList, setQuestionList] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [formTitle,setFormTitle]=useState("");
    const [formDesc,setFormDesc]=useState("");
    const addQuestionComponent = () => {
        setQuestionList([...questionList, questionList.length]);
    }
    const handleSubmit = () => {
        props.storeQuestions(props.questions)
        console.log(props.questions)
    }
    const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };

    return (
        <div>

            <Container className={classes.contanr} >
                <Grid container >
                    <Grid item xs={9} >

                        <TextField
                            id="filled-textarea"
                            placeholder="Untitled form"
                            multiline

                        />

                        <hr align="left" width="600px"/>

                        <TextField 
                            id="FormDescription"
                            label="Description"
                            placeholder="Enter description for form"
                            multiline
                            sx={{ width: '600px' }}

                            variant="standard"
                        />
                        <br />
                        <br />
                        {questionList.map((id) => { return <AddField key={id} num={id} /> })}
                    </Grid>

                    <Grid item xs={3}>
                        <Paper elevation={0} style={{ backgroundColor: '#f5f7fa' }}>
                            <Stack>

                                <h4 style={{ textAlign: 'center' }}>Toolbar</h4>
                                <Button variant="contained" color="primary" style={{ margin: '6px' }} onClick={addQuestionComponent}>Add Question</Button>
                                <Button variant="outlined" style={{  color:"green",backgroundColor: 'white', margin: '6px' }} onClick={handleSubmit}>Save Form</Button>
                                <Button variant="outlined"  style={{backgroundColor: 'white',color:"#000000", margin: '6px', }}>Reset Form</Button>

                                <Button variant="outlined" style={{  color:"green",backgroundColor: 'white', margin: '6px' }}>Send Form</Button>
                                <Button variant="outlined" color="primary" style={{ backgroundColor: 'white', margin: '6px' }} component={Link} to="../Preview"> Preview</Button>
                                {/* <Button variant="outlined" color="secondary" style={{ backgroundColor: 'white', margin: '6px' }} component={Link} to="../Sharelink"> Sharelink</Button> */}
                                <Button variant="outlined"  style={{color:"green", backgroundColor: 'white', margin: '6px' }} onClick={handleClickOpen}>
        Share Link
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Copy link
        </BootstrapDialogTitle>
        <DialogContent dividers>
      <MyComponent/>
        </DialogContent>
        
      </BootstrapDialog>
                               
                                                            </Stack>

                        </Paper>
                    </Grid>
                </Grid>

            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        questions: state.questions,
    };
};

export default connect(mapStateToProps, { storeQuestions })(FormComponent);
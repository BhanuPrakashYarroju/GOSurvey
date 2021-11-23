import React from 'react'
import formimg from './images/Accessible-Forms.png'
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Typography } from '@mui/material';
//import './home.css';
import { makeStyles } from '@mui/styles';
import Footer from './Footer';

const useStyles = makeStyles({
      img: {
        width:"100%",
        height:"100%"
      
          }
  });
const Home = () => {
    const classes= useStyles();
    return (
        <>
        <div>
            <Grid container direction="row" alignItems="center" justifyItems="center">
                <Grid item xs={5} textAlign="center">
                    <Typography variant="h4" component="div">
                        GOSurvey
                    </Typography><br />
                    <Typography variant="h6" component="div">
                        Its all about forms!
                    </Typography><br />
                    <Button variant="contained" startIcon={<AddCircleIcon />} component={Link} to="/Login">Start creating forms</Button>
                </Grid>
                <Grid item xs={7} alignItems="center">
                    <img src={formimg} className={classes.img}/>
                </Grid>
            </Grid>
        </div >
       
        </>
    )
}
export default Home
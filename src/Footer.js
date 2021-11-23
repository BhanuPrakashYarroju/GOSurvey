import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Container } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@mui/styles"
import { width } from '@mui/system';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        position:"fixed",
        width:"100%",
        bottom:0,
        
    },
    appbar: {
        alignItems: 'center',
    },
    typography: {
        flexGrow: 1,
        textAlign: 'center',

    }
});

export default function Footer() {
    const classes = useStyles();
    return (

        <div className={classes.root}>
            <AppBar position="static" color="primary" className={classes.appbar}>
                <Container maxWidth="md">
                    <Toolbar>
                        <Typography variant="body2" color="inherit" textAlign='center' className={classes.typography}>
                            ©️ 2021 GOSurvey
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}
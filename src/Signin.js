// import { Paper } from '@mui/material'
import React,{useState} from 'react'
import {  Avatar, Button, Grid,Paper, TextField, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Link} from 'react-router-dom'

const Signin=()=>{
    const paperStyle={
        padding:20,
        height:"60vh",
        width:280,
        margin:"50px auto"
    }
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [cpassword,setCpassword]=useState('');
    const [email,setEmail]=useState('');
    const avatarStyle={backgroundColor:"#2979ff"}
    const buttonStyle={margin:"20px auto"}
    const data1={
       
        email:email,
        username:username,
       password:password
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const url="http://localhost:4000/Login"; 
     console.log(username)
        console.log(password)
        console.log(email);
        console.log(cpassword);
        console.log(url)
        if(password===cpassword){
        fetch(url,{
            method:"POST",
           
            body:JSON.stringify(data1),
             headers:{
                 'Content-Type':'application/json'
             }
        }).then(res=>res.json()).then(data=>{
                     const dataArr=[];
                     dataArr.push(data1)
                alert("Sucessfully registered");
                window.location.href="./"
                }
                    )
       
    }
    

else{
    alert("Both password and Confrim should be Same")
}
    }
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2>Sign in </h2>
                </Grid>
                {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
                <form onSubmit={handleSubmit}>
                <TextField label="Username" placeholder="Enter Username" 
                   onChange={(e)=>setUsername(e.target.value)} id="username" variant="standard" fullWidth required/><br/>
                <TextField label="Email" placeholder="Enter Email"
                 onChange={(e)=>setEmail(e.target.value)} id="email" variant="standard" fullWidth required/><br/>
                <TextField label="Password" placeholder="Enter password" 
                onChange={(e)=>setPassword(e.target.value)}
                 id="password" variant="standard" type="password" fullWidth required/>
                <TextField label="Confirm password"
                 onChange={(e)=>setCpassword(e.target.value)} placeholder="Re-Enter Password" id="cpassword" variant="standard" type="password" fullWidth required/>
                <br/>
                <Button type="submit" color="primary" variant="contained" 
                 fullWidth style={buttonStyle}>Signin</Button>

                <Typography> Already have an account?
                    <Link  to="../Login">
                        Login
                    </Link>
                    </Typography>
            </form>
            </Paper>
        </Grid>
    )
}
export default Signin
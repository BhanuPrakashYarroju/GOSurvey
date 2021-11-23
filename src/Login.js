// import { Paper } from '@mui/material'
import React, { useState } from 'react'
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Link } from 'react-router-dom'
//import { Construction, PasswordRounded } from '@mui/icons-material'
const Login = () => {
    const paperStyle = {
        padding: 20,
        height: "60vh",
        width: 280,
        margin: "50px auto"
    }
    //var temp = true;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const avatarStyle = { backgroundColor: "#2979ff" }
    const buttonStyle = { margin: "20px auto" }
    const handleSubmit = (e) => {
        e.preventDefault()
        const url = "http://localhost:4000/Login";
        console.log(username)
        console.log(password)
        console.log(url)
        fetch(url).then(res => res.json()).then(data => {
            console.log(data[0].username)
         var flag=false;
                for (let i = 0; i < data.length; i++) {
                    if (data[i].username === username && data[i].password === password) {
                        flag=true;
                        break;
                    }
                    
                    // else{
                    //     alert("login failed")
                    //     break;
                    //  }
                }
                if(!flag){
                    alert("login failed")
                   
                }
                else{
               

                     window.location.href="./Form"
                }



                // else{
                //     alert("login failed")

                // }
            

        })
    }


    return (
        <Grid>
            <Paper elevation={10} style={paperStyle} >
                <Grid align="center">
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Login </h2>
                </Grid>
                {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
                <form onSubmit={handleSubmit}>
                    <TextField label="username" placeholder="Enter Username"
                        onChange={(e) => setUsername(e.target.value)}
                        id="username" name="username" variant="standard" fullWidth required /><br />
                    <TextField label="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password" name="password" id="password" variant="standard" type="password" fullWidth required />
                    <br />
                    <Button type="submit" name="submit"
                        color="primary" variant="contained" fullWidth style={buttonStyle}>Login</Button>

                    <Typography> Don't have an account?
                        <Link to="/Signin">
                            Sign up
                        </Link>

                    </Typography>
                    {/* <Typography component={Link} to="/Signin"> Sign up
                    {/* <Link to="./Signin">
                        Sign up
                    </Link> */}
                    {/* </Typography> */}
                </form>
            </Paper>
        </Grid>
    )
}
export default Login
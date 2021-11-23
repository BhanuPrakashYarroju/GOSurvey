import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import { connect } from 'react-redux';
import { post_question } from '../Questions/actions/questionAction';
import { resolvePath } from 'react-router';

function Textfield(props){
    const [questionResponse,setQuestionResponse] = useState({
     
        type:"TextField",
        question:"",
        answer:""   
    });
    // const handleChange = (e) => {
    //      setQuestionResponse( {...questionResponse,e.target.name: e.target.value });
    //  };
    const handleSubmit = () =>{
        console.log(questionResponse)
        props.post_question(questionResponse)
        console.log(props.questions)
    }
    const deleteData=(e)=>
    {
    // e.preventDefault()
    // const url="http://localhost:4000/Login"; 
    // fetch(url,{
    //     method:"DELETE",
       
       
    //      headers:{
    //          'Content-Type':'application/json'
    //      }
    // }).then(res=>res.json()).then(data=>{
                
    //         alert("deleted");
    //         window.location.href="./"
    //         }
    //             )
    console.log("delete clicked")
    window.location.href="./Form"
    


        }
    
    return (
        <div>
            <Card sx={{ maxWidth: 600 }}>
        

                    <CardContent>
                    <Typography color="text.secondary">Question {props.num + 1}</Typography>
                    <br/>
                        <TextField
                            onChange={(e)=>{setQuestionResponse({...questionResponse,question : e.target.value} )}}
                            //onChange={handleChange}
                            id="Question"
                            label="Question"
                            name="question"
                            placeholder="type your question here"
                            multiline
                            fullWidth
                            
                            variant="filled"
                            value={questionResponse.question}
                        />
                        <br /> <br />
                        <TextField
                            //onChange={(e)=>{setAnswer(e.target.value)} }
                            onChange={(e)=>{setQuestionResponse({...questionResponse,answer : e.target.value} )}}
                            //onChange={handleChange}
                            id="Answer"
                            label="text"
                            placeholder="type your answer here"
                            name="answer"
                            multiline
                            fullWidth
                            disabled
                            variant="filled"
                            value={questionResponse.answer}
                        />
                        <Divider orientation="vertical" flexItem>
                        </Divider>
                        <br />
                        <Button variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={deleteData}>
                            Delete
                        </Button>
                        &nbsp;
                        <Button variant="outlined"  startIcon={<SaveIcon />}  onClick={handleSubmit}>
                            Save
                        </Button>
                    </CardContent>
        
            </Card>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      questions: state.questions,
    };
};
export default connect(mapStateToProps,{post_question})(Textfield)
import { React, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';

import DeleteIcon from '@mui/icons-material/Delete';
import { connect } from 'react-redux';
import { post_question } from '../Questions/actions/questionAction';
import { TextField } from '@mui/material';
function CheckboxField(props) {
    const [checked, setChecked] = useState(false);
    const [questionResponse, setQuestionResponse] = useState({
        id: props.num,
        type: "Checkbox",
        question: "",
        answer: false
    });
    // const handleChange = (event) => {
    //     setChecked(event.target.checked)
    // }
    const handleSubmit = () => {
        console.log(questionResponse)
        props.post_question(questionResponse)
        console.log(props.questions)
    }
    return (
        <div>
            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                    <Typography color="text.secondary">Question {props.num + 1}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        <Checkbox
                            checked={questionResponse.answer}
                          //  onChange={handleChange}
                            onChange={(e) => { setQuestionResponse({ ...questionResponse, answer: e.target.checked }) }}
                            name="answer"
                        />
                        <TextField id="checkboxLabel"
                            variant="standard"
                            placeholder="Label"
                            onChange={(e) => { setQuestionResponse({ ...questionResponse, question: e.target.value }) }}
                            name="question"
                            
                            value={questionResponse.question}
                        />

                    </Typography>

                    <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
                        Delete
                    </Button>
                    <Button variant="outlined" startIcon={<SaveIcon />} onClick={handleSubmit}>
                        Save
                    </Button>
                </CardContent>
            </Card>

        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        questions: state.questions,
    };
};

export default connect(mapStateToProps, { post_question })(CheckboxField);

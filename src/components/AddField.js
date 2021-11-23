import React, { useEffect, useState } from "react";
import CheckboxField from "./checkbox";
import  Textfield  from "./TextFieldComponent";

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';

function AddField(props) {
   
    const [selected, setSelected] = useState("");
    const show = () => {

        if (selected == "checkbox") {
            return <CheckboxField num={props.num}/>
        } else if (selected == "textField") {
            return <Textfield num={props.num}/>
        } else {
            return (
                <div></div>
            )
        }
    }
    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="questionType">Add Field</InputLabel>

            <Select
                labelId="questionType"
                id="questionType"
                value={selected}
                onChange={(e) => { setSelected(e.target.value) }}
                autoWidth
                label="Add Field"
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={"checkbox"} >Checkbox</MenuItem>
                <MenuItem value={"textField"}>Text Field</MenuItem>

            </Select>
            </FormControl>
         
            <div>
                {show()}
            </div>

        </div>
    )
}

export default AddField;
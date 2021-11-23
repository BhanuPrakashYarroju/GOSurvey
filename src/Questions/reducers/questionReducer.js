import { GET_QUESTIONS, POST_QUESTION, STORE_QUESTION } from '../actions/questionType';
import axios from 'axios';
const initialState = {
    questions: []
}

export const questionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_QUESTIONS: return {
            state
        }
        case POST_QUESTION: return {
            ...state,
            questions: [...state.questions, action.payload]
        }

default : return state;
       
    }
}


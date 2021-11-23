import { GET_QUESTIONS, POST_QUESTION, STORE_QUESTION } from './questionType'
import axios from'axios';
export const get_questions = () => {
    return {
        type: GET_QUESTIONS,
        payload: []
    }
}

export const post_question = (ques) => {
    return {
        type: POST_QUESTION,
        payload: ques
    }
}
export const store_question = (questions) => {
    return {
        type: STORE_QUESTION,
        payload: questions
    }
}
export const storeQuestions = (questions) => async dispatch => {
    try {
        const res = await axios.post('http://localhost:4000/Form', questions)
        // history.push('/dashboard')
    } catch (error) {
        console.log(error)
        // dispatch({
        //     type: GET_ERRORS,
        //     payload: error.response.data
        // })

    }

}



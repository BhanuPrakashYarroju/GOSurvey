import React,{useState, useEffect} from 'react'
import axios from 'axios'
export const Preview = () => {
    const [question,setQuestion]=useState([]);
    useEffect(() => {
            getData();
          }, [])
          async function getData(){
            const url = "http://localhost:4000/Form"
         const res = await fetch(url);
         const data = await res.json()
         console.log(data)
          setQuestion(data)
          }

        function display(question){
            
            for(let i=0;i<question.length;i++){
                <h4>{question[i][0].question}</h4>
            }
          
        }
        //   const getTraining = async () => {
        //     let url = 'http://localhost:3000/Trainings/' + x;
        //     const res = await fetch(url);
        //     training = await res.json()
        //     //console.log(training)
        //     populate(training, "Table")
        
        
        
        

    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [items, setItems] = useState([]);
    // useEffect(() => {
    //     getData();
    //   }, [])
    //   async function getData(){
    //    await  fetch("http://localhost:4000/Form")
    //     .then(res => res.json())
    //     .then(
    //       (result) => {
    //           console.log(result)
    //         setIsLoaded(true);
    //         setItems(result);
    //       },
        
    //       (error) => {
    //         setIsLoaded(true);
    //         setError(error);
    //       }
    //     )
    //   }

    
    //  const url = "http://localhost:4000/Form"
    // const res = await axios.get('http://localhost:4000/Form')
    // const res =  fetch(url);
    //  res.json()

    return (
        <div>
            <h3>Preview</h3>
            {
                 display(question)
            }
               
            

        </div>
    )
}

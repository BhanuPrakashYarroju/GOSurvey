
import './App.css';
import Login from './Login';
import Signin from './Signin';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import  Home from './Home';
import FormComponent from './components/formComponent';
import {Provider} from 'react-redux';
import store from './Questions/store'
import { Preview } from './components/Preview';
import CustomizedDialogs from './components/Sharelink';
import MyComponent from './components/Share';
function App() {
  return (
    <Provider store={store}>   
       <>
    
      <BrowserRouter>
        <div className="App">
          {/* <Login /> */}   
          <Header/>
          <Footer/>
          {/* <CustomizedDialogs/> */}
        {/* <Home/> */}
          {/* <Footer/>        */}
          <Routes>   
          <Route  path="/Header" element={<Header/>} />       
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Login" element={<Login />} />  
            <Route path="/" element={<Home/>} /> 
            <Route path="/Footer" element={<Footer/>} /> 
            <Route path="/Form" element={<FormComponent/>} />
            <Route path="/Preview" element={<Preview/>} />
           
          </Routes>
          
        </div>
      </BrowserRouter>
    </>
    </Provider>

  );
}

export default App;

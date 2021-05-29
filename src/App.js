import React, {useState,useEffect} from 'react';
import './App.css';
import {GoogleLogin} from "react-google-login";
import {GoogleLogout} from 'react-google-login';
import LoginGithub from 'react-login-github';
// import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';


var responseGoogle=(response)=>{
    console.log(response);
};

//Github 

// const onSuccess = response => console.log(response);
// const onFailure = response => console.error(response);


const responseFacebook = (response) => {
    console.log(response);
  }

var logout=()=>{
    console.log("Logged out succesfully");
};

function App() {

    
   const [initialData, setInitialData] = useState([{}])
   useEffect(()=> {
       fetch('/api').then(
           response => response.json()
        ).then(data => setInitialData(data))
    //    ).then(data => console.log(data))
   },[]);


    return (
        <div className="App">
        
        <h1>{initialData.title}</h1>

        <GoogleLogin
        clientId="709342652468-q70g39ndsui4iuclht5eeatfhl9nqngn.apps.googleusercontent.com"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        />
       

        <GoogleLogout
        buttonText="Logout"
        onLogoutSuccess={logout}

        />
         

        {/* <LoginGithub 
        clientId="b860a1e2fed2d9e47918"
        onSuccess={onSuccess}
        onFailure={onFailure}/> */}

        <FacebookLogin
            appId="536039370890034"
            // autoLoad={true}
            // fields="name,email,picture"
            // onClick={componentClicked}
            callback={responseFacebook} />

</div>

        
    );  
}

export default App;
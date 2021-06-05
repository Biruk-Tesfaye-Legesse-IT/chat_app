import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom";
import Messenger from './components/Messenger';
import Landing from './components/LandingPage'
function App() {

    return (
        // <div>
        //     {/* <Messenger /> */}
        //     <Landing />
            
            
        // </div>

        <Router>
            <Switch>
                <Route exact path="/" component={Landing}/>
                <Route 
                    exact 
                    path="/chat" 
                    component={() => <Messenger  userID={true} authorized={true} />}
                    />
                
            </Switch>
        </Router>

        
    );  
}

export default App;
import React, {useState, useEffect, useCallback} from 'react';


import './App.css';
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom";
// import Messenger from './components/Messenger';
import Chat from './components/Chat';
import Landing from './components/LandingPage'
import SettingsModal from './components/SettingsModal';
function App() {

    const [showModal, setShowModal] = useState(true);

    const openModal = () => {
      setShowModal(prev => !prev);
    };

    return (


    

        <Router>
            <Switch>
                <Route exact path="/" component={Landing}/>
                <Route 
                    exact 
                    path="/chat" 
                    component={() => <Chat userID={true} authorized={true} />}
                    />
                
            </Switch>
        </Router>

        
    );  
}

export default App;
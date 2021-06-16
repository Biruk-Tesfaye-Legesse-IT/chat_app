import React, {useState, useEffect, useCallback} from 'react';
import ConversationList from '../ConversationList';
import MessageList from '../MessageList';
import './Messenger.css';
import styled from 'styled-components';
import {Redirect} from "react-router-dom"
import SettingsModal from '../SettingsModal';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;


export default function Messenger({authorized, userID, onClick}) {

  const [showModal, setShowModal] = useState(true);

  const openModal = () => {
    setShowModal(prev => !prev);
  };
  // console.log("Authorized:", authorized);
  // console.log("UserID:", userID);
  //   if (!authorized){
      
  //     return <Redirect to="/"/>;
  //   }

    

 
    return (
      <div className="messenger">
        {/* <Toolbar
          title="Messenger"
          leftItems={[
            <ToolbarButton key="cog" icon="ion-ios-cog" />
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
          ]}
        /> */}

        {/* <Toolbar
          title="Conversation Title"
          rightItems={[
            <ToolbarButton key="info" icon="ion-ios-information-circle-outline" />,
            <ToolbarButton key="video" icon="ion-ios-videocam" />,
            <ToolbarButton key="phone" icon="ion-ios-call" />
          ]}
        /> */}


        
    

          <div className="scrollable sidebar">
            
            <ConversationList onClick={onClick}/>
            
          </div>
    
          <div className="scrollable content">
          {/* <SettingsModal showModal={showModal} setShowModal={setShowModal}/>  */}
            <MessageList />
          </div>
          
    

        <div>
        
        </div>

      
       




      </div>
    );
}
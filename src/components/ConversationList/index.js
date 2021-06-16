import React, {useState, useEffect, useCallback} from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import axios from 'axios';
import Modal from '../SettingsModal';
import './ConversationList.css';


export default function ConversationList(props) {
  const [conversations, setConversations] = useState([]);

  const getConversations = useCallback(() => {
    axios.get('https://randomuser.me/api/?results=20').then(response => {
     
        let newConversations = response.data.results.map(result => { 
          return {
            photo: result.picture.large,
            name: `${result.name.first} ${result.name.last}`,
            text: 'Hello world! This is a long message that needs to be truncated.'
          };
        });
        setConversations([...conversations, ...newConversations])
    });
  },[conversations])

  useEffect(() => {
    getConversations()
  },[])

  
  

    return (
      <div className="conversation-list">
        <Toolbar
          title="Messenger"
          // leftItems={[
          //   <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
          // ]}
          rightItems={[
          
            <ToolbarButton onClick = {props.onClick} key="cog" icon="ion-ios-cog" /> 
            
          ]}
        />
        <ConversationSearch />
        {
          conversations.map(conversation =>
            <ConversationListItem
              key={conversation.name}
              data={conversation}
            />
          )
        }
      </div>
    );
}











// export default function ConversationList(props) {
//   const [conversations, setConversations] = useState([]);

//   const getConversations = useCallback(() => {
//     axios.get('https://randomuser.me/api/?results=20').then(response => {
     
//         let newConversations = response.data.results.map(result => { 
//           return {
//             photo: result.picture.large,
//             name: `${result.name.first} ${result.name.last}`,
//             text: 'Hello world! This is a long message that needs to be truncated.'
//           };
//         });
//         setConversations([...conversations, ...newConversations])
//     });
//   },[conversations])

//   useEffect(() => {
//     getConversations()
//   },[])

 

//     return (
//       <div className="conversation-list">
//         <Toolbar
//           title="Messenger"
//           // leftItems={[
//           //   <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
//           // ]}
//           rightItems={[
          
//             <ToolbarButton key="cog" icon="ion-ios-cog" />
//           ]}
//         />
//         <ConversationSearch />
//         {
//           conversations.map(conversation =>
//             <ConversationListItem
//               key={conversation.name}
//               data={conversation}
//             />
//           )
//         }
//       </div>
//     );
// }
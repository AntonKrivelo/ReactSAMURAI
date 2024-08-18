let ADD_MESSAGE = 'ADD-MESSAGE';



let initialState = {
  messagesData: [
    {message: "Hi!", id: 1},
    {message: "How are you?", id: 2},
    {message: "Thank you", id: 3},
    {message: "Hello", id: 4},
    {message: "My friend", id: 5},
  ],
  dialogsData: [
    {name: "Anton", id: 1},
    {name: "Nikolays", id: 2},
    {name: "Viktoria", id: 3},
    {name: "Sveta", id: 4},
    {name: "Andrey", id: 5},
    {name: "Sergey", id: 6},
  ]

}


const dialogsReducer = (state = initialState, action) => {
    
    if (action.type === ADD_MESSAGE) {
        let newMessage = {
          id: 8,
          message: action.newMessageText,
        };
        
        let stateCopy = {...state};
        stateCopy.messagesData.push(newMessage); 
        return stateCopy;

  } 
    return state;
};


export default dialogsReducer;
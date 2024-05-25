let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    postsData: [
        {message:"hello my friends, my name is Anton", counter: 18, id:1},
        {message:"hi, how are you?", counter: 20, id:2},
        {message:"hi, how are you?", counter: 20, id:3},
        ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    debugger;
    if(action.type === ADD_POST) {
        let newPost = {
        id: 6,
        message: state.newPostText,
        counter: 0,
    }
        state.postsData.push(newPost);
        state.newPostText = '';
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;
    }
    return state;
}

export default profileReducer;
let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let SET_USER_PROFILE = 'SET-USER-PROFILE';



let initialState = {
    postsData: [
        {message:"hello my friends, my name is Anton", counter: 18, id:1},
        {message:"hi, how are you?", counter: 20, id:2},
        {message:"hi, how are you?", counter: 20, id:3},
        ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {

    if(action.type === ADD_POST) {
        let newPost = {
        id: 6,
        message: state.newPostText,
        counter: 0,
    }
        let stateCopy = {...state};
        stateCopy.postsData = [...state.postsData];
        stateCopy.postsData.push(newPost);
        stateCopy.newPostText = '';
        return stateCopy;

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        let stateCopy = {...state};
        stateCopy.newPostText = action.newText;
        return stateCopy;
   
    } else if (action.type === SET_USER_PROFILE) {
        let stateCopy = {...state};
        stateCopy.profile = action.profile
        return stateCopy;
    }

    return state;
}


export const setUserProfile = (profile) => {
    return  {type: SET_USER_PROFILE, profile}
  }





export default profileReducer;



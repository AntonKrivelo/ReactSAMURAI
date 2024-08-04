import { getProfile, getStatusApi, updateStatusApi } from "../../api/api";

let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let SET_USER_PROFILE = 'SET-USER-PROFILE';
//status
let SET_STATUS = 'SET-STATUS';
//status


let initialState = {
    postsData: [
        {message:"hello my friends, my name is Anton", counter: 18, id:1},
        {message:"hi, how are you?", counter: 20, id:2},
        {message:"hi, how are you?", counter: 20, id:3},
        ],
    newPostText: '',
    profile: null,
    //status
    status: ""
    //status
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
    //status
    else if (action.type === SET_STATUS) {
        let stateCopy = {...state};
        stateCopy.status = action.status;
        return stateCopy;
    //status
    }
    return state;
}


//status
export const setStatus = (status) => {
    return {type: SET_STATUS, status}
}
//status

export const setUserProfile = (profile) => {
    return  {type: SET_USER_PROFILE, profile}
}


//status thuNK-a
export const getStatus = (userId) => {
    return(dispatch) => {
        getStatusApi(userId)
            .then(response => {
                dispatch(setStatus(response.data));
            }
        );
    }
}

export const updateStatus = (status) => {
    return(dispatch) => {
        updateStatusApi(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            }
        );
    }
}
//status THUNK-a


export const getUserProfile = (userId) => {
    return(dispatch) => {
        getProfile(userId)
            .then(response => {
            dispatch(setUserProfile(response.data));
    });
    }
}


//   export const profileUser = (userId) => {
//     return (dispatch) => {
//       dispatch(followingInProgress(true, id));
//       unfollow(id)
//           .then(response => {
//               if(response.data.resultCode == 0) {
//               dispatch(unfollowSuccess(id))
//           }
//           dispatch(followingInProgress(false, id));
//       })
//     }
//   }



export default profileReducer;



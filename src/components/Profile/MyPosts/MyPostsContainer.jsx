import { addPostActionCreator, updateNewPostTextActionCreator } from "../../redux/store";
import StoreContext from "../../redux/storeContext";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
   
    // let state = props.store.getState();

    return (
    <StoreContext.Consumer> 
        {
        (store) => {
            let state = store.getState();

            let addPost = () => {
                store.dispatch(addPostActionCreator());    
            };
        
            let onPostChange = (text) => {
                let action = updateNewPostTextActionCreator(text);
                store.dispatch(action);
            };
        
  return    <MyPosts 
            updateNewPostText={onPostChange} 
            addPost={addPost} 
            postsData={store.getState().profilePage.postsData} 
            newPostText={store.getState().profilePage.newPostText} />}
        }
    </StoreContext.Consumer>
    )
}
export default MyPostsContainer;
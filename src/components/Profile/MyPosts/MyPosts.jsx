import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postElements = props.postsData.map(p => <Post message={p.message} counter={p.counter} id={p.id} />);

    let newPostElement = React.createRef(); 

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
            <div className={classes.myPosts}>
                <div className={classes.posts}>My posts:</div> 
                <div className={classes.forms}>
                    <textarea value={props.newPostText} onChange={onPostChange} ref={newPostElement} className={classes.textArea}  />
                    <button onClick={onAddPost} className={classes.button}>add Post</button>
                </div> 
                    {postElements}
            </div>  
    );
}






export default MyPosts;
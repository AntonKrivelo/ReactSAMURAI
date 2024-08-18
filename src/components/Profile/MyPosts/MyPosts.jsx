import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";

const MyPosts = (props) => {

    let postElements = props.postsData.map(p => <Post message={p.message} counter={p.counter} id={p.id} />);

    let addPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
            <div className={classes.myPosts}>
                    <PostReduxForm onSubmit={addPost} />
                    {postElements}
            </div>  
    );
}

const myPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.posts}>My posts:</div> 
                    <div>
                        <Field component="textarea" name="newPostText" placeholder="Enter your post" />
                    </div>
                    <div>
                        <button className={classes.button}>add Post</button> 
                    </div>
                    
        </form>
                
    )
}

const PostReduxForm = reduxForm({form: 'postForm'}) (myPostForm)

export default MyPosts;
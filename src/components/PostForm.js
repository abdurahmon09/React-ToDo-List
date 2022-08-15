import React, {useState} from 'react';
import MyButton from './UI/Button/MyButton';
import MyInput from './UI/input/MyInput';

function PostForm({createPost}) {
    const [post, setPost] = useState({title:'', stack: ''})
    const addPost = (e) => {
        e.preventDefault()
  
        const newPost = {
            ...post,
            id: Date.now()
        }
        createPost(newPost)
        setPost({title: '', stack: ''})
        
      }

    return (
      <>
      <h3 className="text-center">Create Your first post</h3>
      <form>
        <MyInput 
        type="text"
        placeholder="Programming Language"
        className="form-control"
        value={post.title}
        onChange={e => setPost({...post, title: e.target.value})}
        />
        <MyInput 
        type="text"
        placeholder="Enter your favourite stack"
        className="form-control my-3"
        value={post.stack}
        onChange={e => setPost({...post, stack: e.target.value})}
        />
        <MyButton onClick={addPost} className="btn btn-primary w-100">
          Add post
        </MyButton>
      </form>
      </>
        
    );
}

export default PostForm;
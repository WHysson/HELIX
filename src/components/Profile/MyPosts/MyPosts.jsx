import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';

function MyPosts () {
    return (
        <div className={style.content}>
          <textarea name="post" id="textarea" cols="30" rows="3"></textarea>
          <button>Add post</button>
          <button>Remove post</button>

          <Post message="Hello World" likes="1"></Post>
          <Post message="I'm from America" likes="45"></Post>
        </div>
    )
}

export default MyPosts
import React from 'react';
import style from './Post.module.css'

function Post (props) {
    return (
      <div className={style.item}>
        <div>
          <img src="https://w0.pngwave.com/png/799/987/computer-icons-avatar-social-media-blog-font-awesome-avatar-png-clip-art.png" alt="ava" />
        </div>
        <div><p>{props.message}</p> <span>{props.likes}</span></div>
      </div>
    )
}

export default Post
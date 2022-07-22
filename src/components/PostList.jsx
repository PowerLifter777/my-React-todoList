import React from "react";
import '../styles/App.css';
import PostControlls from './UI/postControls/PostControlls';


const PostList = ({ callback_remove, callback_color, callback_decor, ...props }) => {

    return (
        <div className="post__container">
            <ul className="post__list">
                {props.posts.map((post, ind) =>
                    <li key={post.id} >
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div
                                id={post.id}
                                className={`postBody ${!post.compleated ? 'postBody_focus' : ''}`}
                                style={
                                    !post.compleated
                                        ?
                                        { boxShadow: '3px 3px 3px' + post.color, textDecoration: 'none', textShadow: '#545454 3px 3px 10px' }
                                        :
                                        { boxShadow: '3px 3px 3px' + post.color, textDecoration: 'line-through', color: "#a0a0a0" }}
                                // onClick={(e) => e.target.id === post.id? setStyle("line-through") : setStyle("line-through")}
                                onClick={(e) => callback_decor(e.target)}
                            >
                                {ind + 1}. {post.text}
                            </div>
                            <PostControlls
                                post={post}
                                callback_remove={callback_remove}
                                callback_color={callback_color}
                            />
                        </div>
                        <hr />
                    </li>
                )}
            </ul>
        </div>
    )
}

export default PostList;
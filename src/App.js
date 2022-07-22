import { useState } from 'react';
import Header from './components/Header';
import PostList from './components/PostList';
import './styles/App.css';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, text: "ddfdfdf", color: '#dedeca', compleated: false },
    { id: 2, text: "ddhghfghhuidf", color: '#dedeca', compleated: false },
    { id: 3, text: "dfghgkjkdf", color: '#dedeca', compleated: false }
  ]);

  const removePost = (post) => {
    if (post.color !== '#dedeca') {
      setPosts(posts.map(el => el = el.id === post.id ? { ...el, color: '#dedeca' } : el));
    } else {
      setPosts(posts.filter(el => el.id !== post.id));
    }
  };
 
  const createPost = (inputValue) => {
    const newPost = {
      id: Date.now(), 
      text: inputValue, 
      color: "#dedeca", 
      compleated: false
    }
    setPosts([...posts, newPost]);
    console.log(posts);
  };

  const changePostColor = (color, post) => {
    setPosts(posts.map(el => el = el.id === post.id ? { ...el, color: color } : el))
    console.log(posts);
  }

  const changePostDecor = (post) => {
    setPosts(posts.map(el => el = el.id === +post.id ? { ...el, compleated: !el.compleated } : el))
    console.log(post);
  }

  return (
    <div className="App">
      <Header create={createPost} />
      <PostList
        posts={posts}
        callback_remove={removePost}
        callback_color={changePostColor}
        callback_decor={changePostDecor}
      />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import CreatePost from './Components/CreatePost';
import DisplayPost from './Components/DisplayPost';



function App() {

  const [posts, setPosts] = useState([
    { name: "Parker", comment: "Test post" },
  ]);

  function addNewPost(post){
    let tempPosts = [...posts, post];
    setPosts(tempPosts);
  }

  return (
    <div>
      <NavBar />
      <main>
      <CreatePost addNewPostProp={addNewPost}/>
      <DisplayPost post={posts}/>
      </main>
    </div>
  );
}

export default App;

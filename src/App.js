import React, { useState } from 'react';
import NavBar from './Components/NavBar';



function App() {

  const [posts, setPosts] = useState([
    { name: "Parker", comment: "Test post" },
  ]);

  // function addNewPost(post){
  //   let tempPosts = [...posts, post];
  //   setPosts(tempPosts);
  // }

  return (
    <div>
      <NavBar />
      <main>
      
      </main>
    </div>
  );
}

export default App;

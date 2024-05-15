import ComposePost from './components/ComposePost';
import Timeline from './components/Timeline'
import posts from './posts.json'
import axios from 'axios'
import { useEffect, useState } from 'react';

function App() {
  const [post_data, updatePostData] = useState([]);
  const [lastest_post, updateLastestPost] = useState({});

  function fetchPostData() {
    axios.get('//localhost:3000/api')
      .then((res) => res.data)
      .then((json) => updatePostData(json))
      .catch((err) => console.log(err));
      console.log("GET Request");
  }

  useEffect(() => {
    fetchPostData();
  }, []);

  const handleNewPost = (new_post) => {
    
    console.log(new_post);
    axios.post('//localhost:3000/api', new_post)
      .then((res) => {
        console.log(res);
        fetchPostData();
        // if (res.status >= 200 && res.status <= 299)
        //   updatePostData([...post_data, new_post]);
      });
    //updatePostData([...post_data, {...new_post, created_at: (new Date()).toJSON()}]);
    
  }

  return(
    <div>
      <ComposePost handleNewPost={handleNewPost}/>
      <Timeline posts = {post_data}/>
    </div>
  );
}

export default App;
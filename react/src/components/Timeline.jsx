import Post from './Post.jsx'
import { useState, useEffect } from 'react';

function Timeline() {
    const [post_data, updatePostData] = useState([]);

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

    return (
        <div>
            <ul>
                {post_data.map((post) => (
                    <li key={post.id}>
                        <Post title={post.title}
                            size={post.size}
                            bedroom={post.bedroom}
                            address={post.address}
                            seller={post.seller}
                            phone={post.phone}
                            created_at={post.created_at}
                            description={post.description}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Timeline;
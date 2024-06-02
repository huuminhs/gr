import Post from '../components/Post.jsx'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Timeline() {
    const [post_data, updatePostData] = useState([]);

    useEffect(() => {
        axios.get('//localhost:3000/api/post')
        .then((res) => res.data)
        .then((json) => updatePostData(json))
        .catch((err) => console.log(err));
        console.log("GET Request");
    }, []);

    return (
        <div className='mx-1 md:mx-5 max-w-3xl'>
            <ul>
                {post_data.sort((a, b) => (a.created_at > b.created_at? -1:1)).map((post) => (
                    <li key={post.post_id}>
                        <Post
                            post_id={post.post_id}
                            title={post.title}
                            price={post.price}
                            size={post.size}
                            bedroom={post.bedroom}
                            address={post.address}
                            seller={post.seller}
                            phone={post.phone}
                            created_at={post.created_at}
                            description={post.description}
                            imgUrl={post.img_url}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Timeline;
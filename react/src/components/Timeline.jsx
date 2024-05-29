import Post from './Post.jsx'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Timeline() {
    const [post_data, updatePostData] = useState([]);

    useEffect(() => {
        axios.get('//localhost:3000/api/get-post')
        .then((res) => res.data)
        .then((json) => updatePostData(json))
        .catch((err) => console.log(err));
        console.log("GET Request");
    }, []);

    return (
        <div className='mx-5 my-6 max-w-3xl'>
            <ul>
                {post_data.map((post) => (
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
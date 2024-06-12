import Post from '../components/Post.jsx'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { SearchBar } from '../components/SearchBar.jsx';
import postService from '../services/postService.js';

function Timeline() {
    const [post_data, updatePostData] = useState([]);

    async function getAllPost() {
        try {
            const res = await postService.getAllPost()
            updatePostData(res.data)
        } 
        catch (e) {
            console.log(e)
        }
        console.log("GET Request called")
    }

    useEffect(() => {
        getAllPost()
    }, []);

    return (
        <div className='w-full px-1 md:px-5 '>
            <div className='w-full flex justify-center  pb-8'>
                <SearchBar setPostData={updatePostData}/>
            </div>
            <ul className='max-w-3xl'>
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
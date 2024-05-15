import Post from './Post.jsx'

function Timeline({ posts }) {
    return (
        <div>
            <ul>
                {posts.map((post) => (
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
function Post(props) {
    return (
        <div className="bg-gray-100 rounded p-4 shadow-md mb-4">
            <div className="mb-2">
                <h2 className="text-xl font-semibold">{props.title}</h2>
            </div>
            <div className="flex flex-wrap mb-2">
                <div className="mr-4">
                    <span className="text-gray-600">{props.size} m<sup>2</sup></span>
                </div>
                <div className="mr-4">
                    <span className="text-gray-600">{props.bedroom} phòng ngủ</span>
                </div>
                <div className="mr-4">
                    <span className="text-gray-600">{props.address}</span>
                </div>
                <div>
                    <span className="text-gray-600">{(new Date(props.created_at)).toLocaleString()}</span>
                </div>
            </div>
            <div className="mb-2">
                <p className="text-gray-800">{props.description}</p>
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <span className="text-gray-600">{props.seller}</span>
                </div>
            </div>
        </div>
    );
}

export default Post;

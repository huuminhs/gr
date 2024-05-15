import { useState } from "react";

function ComposePost(props) {
    const [input_val, updateVal] = useState({
        title: "",
        description: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleNewPost(input_val);
    };

    const handleChange = (e) => {
        updateVal({
            ...input_val,
            [e.target.name]: e.target.value
        })
    };

    return (
        <div>
            <form className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Tiêu đề</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        type="text" 
                        name="title" 
                        value={input_val.title} 
                        onChange={handleChange} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Nội dung</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        type="text" 
                        name="description" 
                        value={input_val.description} 
                        onChange={handleChange} />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                            type="button" 
                            onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </form>

        </div>
    );
}

export default ComposePost;
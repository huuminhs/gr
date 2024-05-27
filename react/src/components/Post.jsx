import { FaBed } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";


function Post(props) {
    const formatPrice = (price) => {
        if (price >= 1000000000)
            return (
                <div>{price/1000000000} tỷ</div>
            );
        return (
            <div>{price/1000000} triệu</div>
        );
    }

    return (
        <div className="h-44 sm:h-40 rounded shadow-md mb-4 flex">
            <div className="aspect-square">
                <img className="h-full w-full object-cover" src={props.imgUrl} alt="House image"/>
            </div>
            <div className="p-2 pl-4 text-base">
                <div className="mb-1">
                    <h2 className="text-[#b21c0e] hover:underline text-l font-semibold">{props.title}</h2>
                </div>
                <div className="sm:flex flex-wrap mb-1">
                    <div className="flex">
                        <div className="mr-4">
                            <span className="text-[#cb0e40] font-semibold">{formatPrice(props.price)}</span>
                        </div>
                        <div className="mr-4">
                            <span className="text-[#cb0e40] font-semibold">{props.size} m<sup>2</sup></span>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="mr-4 flex items-center">
                            <FaBed className="w-5 h-5 mr-1.5"/>
                            <span className="text-gray-600">{props.bedroom}</span>
                        </div>
                        <div className="mr-4 flex items-center">
                            <CiLocationOn className="w-5 h-5 mr-1"/>
                            <span className="text-gray-600 line-clamp-1">{props.address}</span>
                        </div>
                    </div>
                </div>
                <div className="mb-1">
                    <p className="text-gray-800 line-clamp-2">{props.description}</p>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-gray-600">{(new Date(props.created_at)).toLocaleString()}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;

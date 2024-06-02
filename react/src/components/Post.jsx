import { FaBed } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";


function Post(props) {
    function formatPrice (price) {
        if (price >= 1000000000)
            return (
                <>{Math.round(price/1000000000 * 100) / 100} tỷ</>
            );
        return (
            <>{Math.round(price/1000000 * 100) / 100} triệu</>
        );
    }

    const icon_class = "sm:w-5 sm:h-5 mr-1"

    return (
        <Link to={`/bai-dang/${props.post_id}`}>
            <div className="h-36 min-w-72 md:h-40 rounded-lg shadow-md mb-4 flex">
                <div className="aspect-square">
                    <img className="h-full w-full object-cover rounded-l-lg" src={props.imgUrl} alt="House image"/>
                </div>
                <div className="p-1 pl-4 text-base">
                    <div className="">
                        <h2 className="text-[#b21c0e] line-clamp-1 hover:underline font-semibold sm:text-lg">{props.title}</h2>
                    </div>
                    <div className="sm:flex flex-wrap sm:mb-1">
                        <div className="flex">
                            <div className="mr-4">
                                <span className="text-[#cb0e40] font-semibold text-sm sm:text-base">{formatPrice(props.price)}</span>
                            </div>
                            <div className="mr-4">
                                <span className="text-[#cb0e40] font-semibold text-sm sm:text-base">{props.size} m<sup>2</sup></span>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mr-4 flex items-center">
                                <FaBed className={icon_class}/>
                                <span className="text-gray-600">{props.bedroom}</span>
                            </div>
                            <div className="mr-4 flex items-center">
                                <CiLocationOn className={icon_class}/>
                                <span className="text-gray-600 line-clamp-1 text-sm sm:text-base">{props.address}</span>
                            </div>
                        </div>
                    </div>
                    <div className="sm:mb-1">
                        <p className="text-gray-800 line-clamp-2 text-sm sm:text-base">{props.description}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <span className="text-gray-600 text-sm sm:text-base">{(new Date(props.created_at)).toLocaleString('en-GB', {hour12: false})}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Post;

import { Breadcrumbs, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaBath, FaBed } from "react-icons/fa6";

export default function ViewPostById(props) {
    let { id } = useParams();
    
    const [post, setPost] = useState({});

    useEffect(() => {
        axios.get(`//localhost:3000/api/get-post-by-id/${id}`)
            .then(res => {
                console.log(res.data[0])
                setPost(res.data[0]);
            })
            .catch(error => console.log(error));
    }, []);

    function formatPrice (price) {
        if (price >= 1000000000)
            return (
                <>{Math.round(price/1000000000 * 100) / 100} tỷ</>
            );
        return (
            <>{Math.round(price/1000000 * 100) / 100} triệu</>
        );
    }

    return (
        <div>
            <div className="flex justify-center">
                <div className="shadow-md m-6 py-6 px-6 w-2/3 min-w-96 rounded-xl">
                    <div>
                        <img src={post.img_url} className="rounded-xl w-full h-72 object-cover object-center"/>
                    </div>
                    <div className="mt-3">
                        <Typography variant="h4" className="text-[#b21c0e]">{post.title}</Typography>
                        <Typography variant="paragraph" className="mt-1 text-gray-700">{`${post.address}, ${post.ward}, ${post.district}`}</Typography>
                    </div>
                    <hr className="my-3"/>
                    <div className="flex justify-between md:max-w-96">
                        <div>
                            <p className="text-gray-700">Giá</p>
                            <p className="text-lg font-semibold">{formatPrice(post.price)}</p>
                        </div>
                        <div>
                            <p className="text-gray-700">Diện tích</p>
                            <p className="text-lg font-semibold">{post.size} m<sup>2</sup></p>
                        </div>
                        <div>
                            <p className="text-gray-700">Ước lượng</p>
                            <p className="text-lg font-semibold">{formatPrice(post.price/post.size)}/m<sup>2</sup></p>
                        </div>
                    </div>
                    <hr className="my-3"/>
                    <div>
                        <p className="text-xl font-semibold text-[#b21c0e]">Mô tả</p>
                        <p className="mt-2">{post.description}</p>
                    </div>
                    <hr className="my-3"/>
                    <div>
                        <p className="text-xl font-semibold text-[#b21c0e]">Thông tin chi tiết</p>
                        <div className="mt-3 columns-2">
                            <div className="flex items-center">
                                <FaBed/>
                                <p className="ml-2">{post.bedroom} phòng ngủ</p>
                            </div>
                            <div className="flex items-center">
                                <FaBath/>
                                <p className="ml-2">{post.bathroom} phòng tắm</p>
                            </div>
                        </div>
                        <p className="mt-5 text-gray-700">Đăng lúc {(new Date(post.created_at)).toLocaleString('en-GB', {hour12: false})}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
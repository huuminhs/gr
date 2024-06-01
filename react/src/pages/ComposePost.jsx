import { Textarea, Input, Typography, Select, Option, Button } from "@material-tailwind/react";
import { useState } from "react";
import uploadService from "../services/uploadService.js"

export default function ComposePost() {
    const [new_post, setNewPost] = useState({
        title: "",
        description: "",
        price: "",
        seller: "",
        phone_number: "",
        size: "",
        address: "",
        bedroom: "",
        bathroom: "",
        type: "",
        img_url: "",
        province: "",
        district: "",
        ward: "",
    });

    const list_of_districts = {
        "": [],
        "Hà Nội": [
            "",
            "Hai Bà Trưng",
            "Đống Đa"
        ],
        "Hồ Chí Minh": []
    }

    const list_of_wards = {
        "": [],
        "Hai Bà Trưng": [
            "",
            "Bạch Đằng",
            "Bùi Thị Xuân",
            "Đồng Tâm",
            "Bách Khoa"
        ],
        "Đống Đa": [
            "",
            "Khâm Thiên",
            "Kim Liên"
        ]
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await uploadService.createPost(new_post);
            console.log(response);
        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = (e) => {
        setNewPost({
            ...new_post,
            [e.target.name]: e.target.value
        })
    };

    const handleProvinceChange = (val) => {
        if (val != new_post.province)
            setNewPost({...new_post, "province": val, "district": "", "ward": ""});
    }

    const handleDistrictChange = (val) => {
        if (val != new_post.district)
            setNewPost({...new_post, "district": val, "ward": ""});
    }

    const handleWardChange = (val) => {
        if (val != new_post.ward) // must have to avoid a weird bug
            setNewPost({...new_post, "ward": val});
    }

    return (
        <div className="w-full p-4 md:px-12 md:py-8">
            <form className="max-w-2xl" onSubmit={handleSubmit}>
                <div className="mb-12">
                    <Typography variant="h4" className="mb-6 text-[#b21c0e] font-semibold">Thông tin bài đăng</Typography>
                    <div className="mb-4">
                        <Input name="title" value={new_post.title} onChange={handleChange} label="Tiêu đề" required/>
                    </div>
                    <div className="mb-4">
                        <Input name="img_url" value={new_post.img_url} onChange={handleChange} type="url" label="Đường dẫn ảnh" required/>
                    </div>
                    <div className="mb-4">
                        <Textarea name="description" value={new_post.description} onChange={handleChange} resize={true} label="Mô tả"/>
                    </div>
                </div>

                <div className="mb-12">
                    <Typography variant="h4" className="mb-6 text-[#b21c0e] font-semibold">Thông tin bất động sản</Typography>
                    <div className="mb-6">
                        <Typography variant="lead" className="mb-2 font-semibold">Thông tin chung</Typography>
                        <div className="mb-4">
                            <Select onChange={(val) => setNewPost({...new_post, "type": val})} label="Chọn phân loại">
                                <Option value="Nhà đất">Nhà đất</Option>
                                <Option value="Chung cư">Chung cư</Option>
                                <Option value="Khu tập thể">Khu tập thể</Option>
                                <Option value="Shophouse">Shophouse</Option>
                                <Option value="Biệt thự">Biệt thự</Option>
                            </Select>
                        </div>
                        <div className="mb-4 sm:flex block justify-between">
                            <div className="sm:w-1/2 sm:mr-3 mb-4 sm:mb-0">
                                <Input name="bedroom" value={new_post.bedroom} onChange={handleChange} type="number" label="Số phòng ngủ" required/>
                            </div>
                            <div className="sm:w-1/2">
                                <Input name="bathroom" value={new_post.bathroom} onChange={handleChange} type="number" label="Số phòng tắm" required/>
                            </div>
                        </div>
                        <div className="mb-4 sm:flex block justify-between">
                            <div className="sm:w-1/2 sm:mr-3 mb-4 sm:mb-0">
                                <Input name="size" value={new_post.size} onChange={handleChange} type="number" label="Diện tích (m²)" required/>
                            </div>
                            <div className="sm:w-1/2">
                                <Input name="price" value={new_post.price} onChange={handleChange} type="number" label="Giá (VNĐ)" required/>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Typography variant="lead" className="mb-2 font-semibold">Thông tin chi tiết</Typography>
                        <div className="mb-4 md:flex">
                            <div className="w-full md:w-1/3 mr-3 mb-4 md:mb-0">
                                <Select onChange={handleProvinceChange} label="Chọn tỉnh, thành phố">
                                    <Option value="Hà Nội">Hà Nội</Option>
                                    <Option value="Hồ Chí Minh">Hồ Chí Minh</Option>
                                </Select>
                            </div>
                            <div className="block sm:flex md:w-2/3">
                                <div className="sm:w-1/2 sm:mr-3 mb-4 sm:mb-0">
                                    <Select onChange={handleDistrictChange} disabled={new_post.province? false : true} label="Chọn quận, huyện">
                                        {list_of_districts[new_post.province].map((w) => <Option key={w} disabled={!w} value={w}>{w? w : "Chọn"}</Option>)}
                                    </Select>
                                </div>
                                <div className="sm:w-1/2">
                                    <Select disabled={new_post.district? false : true} onChange={handleWardChange} label="Chọn phường, thị xã">
                                        {list_of_wards[new_post.district].map((w) => <Option key={w} disabled={!w} value={w}>{w? w : "Chọn"}</Option>)}
                                    </Select>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <Input value={new_post.address} name="address" onChange={handleChange} label="Địa chỉ" required/>
                        </div>
                    </div>
                </div>

                <div className="mb-12">
                    <Typography variant="h4" className="mb-6 text-[#b21c0e] font-semibold">Thông tin liên lạc</Typography>
                    <div className="mb-4">
                        <Input value={new_post.seller} name="seller" onChange={handleChange} label="Tên" required/>
                    </div>
                    <div className="mb-4">
                        <Input value={new_post.phone_number} name="phone_number" onChange={handleChange} label="Số điện thoại" required/>
                    </div>
                </div>

                <Button type="submit" className="w-full bg-[#b21c0e] hover:bg-[#a10c0d]">Submit</Button>
            </form>
        </div>
    );
}
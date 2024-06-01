import { FaHouse } from "react-icons/fa6";
import { MdOutlinePostAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { TokenContext } from "../App";

function Navbar () {
    const { token, setToken } = useContext(TokenContext)

    const handleSignOut = () => {
        localStorage.removeItem("token");
        setToken(null);
    }

    return (
            <nav className="py-3 px-6 shadow-md bg-white z-50 fixed top-0 w-full flex justify-between">
                <div className='flex items-center'>
                    <div>
                        <FaHouse className="fill-[#b21c0e] w-5 h-5"/>
                    </div>
                    <p className='ml-2 text-xl font-semibold text-[#b21c0e]'>Tìm nhà</p>
                </div>
                <ul className='flex w-auto items-center'>
                    <li className=''>
                        <Link to='danh-sach-bai-dang'>
                            <button className='block bg-transparent mr-4 group transition'>
                                <p className="text-[#b21c0e]">Xem bài đăng</p>
                                <hr className="border-[#b21c0e] w-0 group-hover:w-full duration-200"/>
                            </button>
                        </Link>
                    </li>
                    <li className=''>
                        {token?
                            <Link to='dang-bai'>
                                <button className='bg-transparent mr-4 group transition pt-0.5'>
                                    <div className="flex items-center">
                                        <MdOutlinePostAdd className="fill-[#b21c0e]"/>
                                        <p className="text-[#b21c0e] ml-1">Đăng bài</p>
                                    </div>
                                    <hr className="border-[#b21c0e] w-0 group-hover:w-full duration-200"/>
                                </button>
                            </Link>
                        : null
                        }
                        
                    </li>
                    <li className=''>
                        {token?
                            <button onClick={handleSignOut} className='flex items-center bg-[#b21c0e] hover:bg-[#a10c0d] duration-200 rounded px-2.5 py-1'>
                                <MdOutlinePostAdd className="fill-white"/>
                                <p className="text-white ml-1">Đăng xuất</p>
                            </button>
                        :
                            <Link to='/dang-nhap'>
                                <button className='flex items-center bg-[#b21c0e] hover:bg-[#a10c0d] duration-200 rounded px-2.5 py-1'>
                                    <MdOutlinePostAdd className="fill-white"/>
                                    <p className="text-white ml-1">Đăng nhập</p>
                                </button>
                            </Link>
                        }   
                    </li>
                </ul>
            </nav>
    );
}

export default Navbar;
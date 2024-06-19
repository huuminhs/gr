import { FaHouse } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { TokenContext } from "../App";
import { PiSignInBold, PiSignOutBold } from "react-icons/pi";
import { FaRegNewspaper, FaPen } from "react-icons/fa";

function Navbar () {
    const { token, setToken } = useContext(TokenContext)

    const handleSignOut = () => {
        setToken(null)
    }

    return (
            <nav className="py-1.5 px-6 shadow-md bg-white z-50 fixed top-0 w-full flex justify-between">
                <Link to='/'>
                    <div className='flex items-center mt-1.5'>
                            <FaHouse className="fill-[#b21c0e] w-5 h-5 -mt-0.5"/>
                            <p className='ml-2 text-xl font-semibold text-[#b21c0e]'>Tìm nhà</p>
                    </div>
                </Link>
                <ul className='flex w-auto items-center'>
                    <li className='mt-2'>
                        <Link to='danh-sach-bai-dang'>
                            <button className='bg-transparent mr-4 group transition'>
                                <div className="flex items-center">
                                    <FaRegNewspaper className="fill-[#b21c0e] w-4 h-4"/>
                                    <p className="text-[#b21c0e] ml-1">Xem tin</p>
                                </div>
                                <hr className="border-[#b21c0e] w-0 group-hover:w-full duration-200"/>
                            </button>
                        </Link>
                    </li>
                    <li className='mt-2'>
                        {token?
                            <Link to='protected/dang-bai'>
                                <button className='bg-transparent mr-4 group transition'>
                                    <div className="flex items-center">
                                        <FaPen className="fill-[#b21c0e] w-3 h-3"/>
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
                                <PiSignOutBold className="fill-white"/>
                                <p className="text-white ml-1">Đăng xuất</p>
                            </button>
                        :
                            <Link to='/auth/dang-nhap'>
                                <button className='flex items-center bg-[#b21c0e] hover:bg-[#a10c0d] duration-200 rounded px-2.5 py-1'>
                                    <PiSignInBold className="fill-white"/>
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
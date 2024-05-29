import { FaHouse } from "react-icons/fa6";
import { MdOutlinePostAdd } from "react-icons/md";
import { Link } from "react-router-dom";

function Navbar () {
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
                        <Link to='dang-bai'>
                            <button className='flex items-center bg-[#b21c0e] hover:bg-[#a10c0d] duration-200 rounded px-2.5 py-1'>
                                <MdOutlinePostAdd className="fill-white"/>
                                <p className="text-white ml-1">Đăng bài</p>
                            </button>
                        </Link>
                    </li>
                    
                </ul>
            </nav>
    );
}

export default Navbar;
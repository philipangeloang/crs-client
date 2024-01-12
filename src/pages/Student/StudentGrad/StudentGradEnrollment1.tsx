import DateTime from "@/components/DateTime";
import { useNavigate } from 'react-router-dom';
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import TempRoleSelector from "../../TempRoleSelector";
import { FaArrowRight } from "react-icons/fa6";
import { useState, ChangeEvent } from 'react';
import { BiCalendarEvent } from "react-icons/bi";
import { FaClock } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";

const StudentGradEnrollment1 = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        console.log('Button clicked!');
        navigate('/home');
    };

    const handleNextClick = () => {
        console.log('Button clicked!');
        navigate('/home/enrollment2');
    };

    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        // Implement your search logic here
        console.log('Search Term:', searchTerm);
        // You can update the state or perform any action based on the search term
    };

    return (
        <>
            <div className="p-10 px-16 grid grid-cols-12 font-montserrat ">
                {/* Row 1 */}
                <div className="col-span-12 flex justify-between items-center">
                    <div className="px-5 py-1 bg-main-red text-white rounded-lg ">
                        Student Grad Home
                    </div>
                    <div className="flex flex-col items-end">
                        <h1 className="font-bold">DELA CRUZ. JUAN PEPITO</h1>
                        <p className="text-xs ">
                            Logged as: <TempRoleSelector />
                        </p>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="flex flex-row  col-span-12 justify-between items-center mt-8">
                    <div className="text-3xl font-bold text-main-red">STEP 1</div>
                    <div className="text-2xl text-main-red mr-80">Enlist Available Classes</div>
                    <div className="flex flex-row">
                        <button className="px-6 py-1 bg-main-red text-white rounded-lg flex items-center" onClick={handleHomeClick}>
                            <BiSolidLeftArrow size={15}></BiSolidLeftArrow>Home
                        </button>
                        <button className="ml-2 px-6 py-1 bg-main-red text-white rounded-lg flex items-center" onClick={handleNextClick}>
                            Next<BiSolidRightArrow size={15}></BiSolidRightArrow>
                        </button>
                    </div>
                </div>
                <div>
                    <ol className="flex items-center w-full mt-4 ">
                        <li className="ml-10 flex items-center text-white dark:text-red-500 after:content-[''] after:w-72 after:h-1 after:border-b after:border-red-100 after:border-4 after:inline-block dark:after:border-red-800">
                            <span className="flex items-center justify-center w-10 h-10 bg-main-red rounded-full lg:h-12 lg:w-12 dark:bg-red-700 shrink-0">
                                1
                            </span>
                        </li>
                        <li className="flex items-center after:content-[''] after:w-72 after:h-1 after:border-b after:border-red-100 after:border-4 after:inline-block dark:after:border-red-800">
                            <span className="flex items-center justify-center w-10 h-10 bg-red-100 rounded-full lg:h-12 lg:w-12 dark:bg-red-700 shrink-0">
                                2
                            </span>
                        </li>
                        <li className="flex items-center after:content-[''] after:w-72 after:h-1 after:border-b after:border-red-100 after:border-4 after:inline-block dark:after:border-red-700">
                            <span className="flex items-center justify-center w-10 h-10 bg-red-100 rounded-full lg:h-12 lg:w-12 dark:bg-red-700 shrink-0">
                                3
                            </span>
                        </li>
                        <li className="flex items-center w-full">
                            <span className="flex items-center justify-center w-10 h-10 bg-red-100 rounded-full lg:h-12 lg:w-12 dark:bg-red-700 shrink-0">
                                <svg className="w-3.5 h-3.5 text-red-600 lg:w-4 lg:h-4 dark:text-red-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                            </span>
                        </li>
                    </ol>
                    <div className="text-xs mt-8 ml-1 text-[#676C72]">Subject</div>
                </div>
                <div className="col-span-12 flex justify-between items-center">
                    <div className="flex items-center text-xs">
                        <input
                            type="text"
                            placeholder="Search"
                            className="border rounded-md border-[#676C72] p-2"
                            value={searchTerm}
                            onChange={handleInputChange}
                        />
                        <button
                            onClick={handleSearch}
                            className="border rounded-md border-[#676C72] text-[#676C72] p-2 ml-1"
                        >
                            <FaArrowRight size={16} />
                        </button>
                    </div>

                </div>

                <div className="col-span-12 mt-2">
                    <table className="border text-xs w-full">
                        <thead>
                            <tr className="bg-main-red text-white text-center">
                                <th className="w-3/12 p-2 text-left">Subject Code - Section</th>
                                <th className="w-2/12 p-2 text-left">Subject Title</th>
                                <th className="w-1/12 p-2">Credits</th>
                                <th className="w-1/12 p-2">Prerequisite/s</th>
                                <th className="w-5/12 p-2">Schedule / Room</th>
                                <th className="w-1/12 p-2">Slot</th>
                                <th className="w-1/12 p-2">Enlisted</th>
                                <th className="w-1/12 p-2">Enrolled</th>
                                <th className="w-1/12 p-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b text-center">
                                <td className="p-2 text-left">GEIT 838 - 1</td>
                                <td className="p-2 text-left">NETWORK DESIGN AND MANAGEMENT</td>
                                <td className="p-2">3</td>
                                <td className="p-2">---</td>
                                <td className="p-2 flex flex-wrap gap-1 items-center space-x-1 justify-center">
                                    <BiCalendarEvent /> Monday
                                    <FaClock /> 6:00 PM - 9:00 PM
                                    <MdGroups size={16} /> F2F - FIELD
                                </td>
                                <td className="p-1">3</td>
                                <td className="p-1">3</td>
                                <td className="p-1">3</td>
                                <td className="p-1"><button className="col-span-3 col-start-5 bg-[#306FBC] text-white p-2 rounded hover:bg-main-blue">Enlist</button></td>
                            </tr>
                            <tr className="border-b text-center">
                                <td className="p-2 text-left">GEIT 838 - 1</td>
                                <td className="p-2 text-left">NETWORK DESIGN AND MANAGEMENT</td>
                                <td className="p-2">3</td>
                                <td className="p-2">---</td>
                                <td className="p-2 flex flex-wrap gap-1 items-center space-x-1 justify-center">
                                    <BiCalendarEvent /> Monday
                                    <FaClock /> 6:00 PM - 9:00 PM
                                    <MdGroups size={16} /> F2F - FIELD
                                </td>
                                <td className="p-1">3</td>
                                <td className="p-1">3</td>
                                <td className="p-1">3</td>
                                <td className="p-1"><button className="col-span-3 col-start-5 bg-[#306FBC] text-white p-2 rounded hover:bg-main-blue">Enlist</button></td>
                            </tr>
                            <tr className="border-b text-center">
                                <td className="p-2 text-left">GEIT 838 - 1</td>
                                <td className="p-2 text-left">NETWORK DESIGN AND MANAGEMENT</td>
                                <td className="p-2">3</td>
                                <td className="p-2">---</td>
                                <td className="p-2 flex flex-wrap gap-1 items-center space-x-1 justify-center">
                                    <BiCalendarEvent /> Monday
                                    <FaClock /> 6:00 PM - 9:00 PM
                                    <MdGroups size={16} /> F2F - FIELD
                                </td>
                                <td className="p-1">3</td>
                                <td className="p-1">3</td>
                                <td className="p-1">3</td>
                                <td className="p-1"><button className="col-span-3 col-start-5 bg-[#306FBC] text-white p-2 rounded hover:bg-main-blue">Enlist</button></td>
                            </tr>
                            <tr className="border-b text-center">
                                <td className="p-2 text-left">GEIT 838 - 1</td>
                                <td className="p-2 text-left">NETWORK DESIGN AND MANAGEMENT</td>
                                <td className="p-2">3</td>
                                <td className="p-2">---</td>
                                <td className="p-2 flex flex-wrap gap-1 items-center space-x-1 justify-center">
                                    <BiCalendarEvent /> Monday
                                    <FaClock /> 6:00 PM - 9:00 PM
                                    <MdGroups size={16} /> F2F - FIELD
                                </td>
                                <td className="p-1">3</td>
                                <td className="p-1">3</td>
                                <td className="p-1">3</td>
                                <td className="p-1"><button className="col-span-3 col-start-5 bg-[#306FBC] text-white p-2 rounded hover:bg-main-blue">Enlist</button></td>
                            </tr>
                            <tr className="border-b text-center">
                                <td className="p-2 text-left">GEIT 838 - 1</td>
                                <td className="p-2 text-left">NETWORK DESIGN AND MANAGEMENT</td>
                                <td className="p-2">3</td>
                                <td className="p-2">---</td>
                                <td className="p-2 flex flex-wrap gap-1 items-center space-x-1 justify-center">
                                    <BiCalendarEvent /> Monday
                                    <FaClock /> 6:00 PM - 9:00 PM
                                    <MdGroups size={16} /> F2F - FIELD
                                </td>
                                <td className="p-1">3</td>
                                <td className="p-1">3</td>
                                <td className="p-1">3</td>
                                <td className="p-1"><button className="col-span-3 col-start-5 bg-[#306FBC] text-white p-2 rounded hover:bg-main-blue">Enlist</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="col-span-12 mt-8">
                    <div className="text-xl font-bold text-main-red mb-4">Selected Subjects</div>
                    <table className="border text-xs w-full">
                        <thead>
                            <tr className="bg-main-red text-white text-center">
                                <th className="w-2/12 p-2 text-left">Subject Code - Section</th>
                                <th className="w-3/12 p-2 text-left">Subject Title</th>
                                <th className="w-1/12 p-2">Credits</th>
                                <th className="w-1/12 p-2">Prerequisite/s</th>
                                <th className="w-5/12 p-2">Schedule / Room</th>
                                <th className="w-1/12 p-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b text-center">
                                <td className="p-2 text-left">GEIT 838 - 1</td>
                                <td className="p-2 text-left">NETWORK DESIGN AND MANAGEMENT</td>
                                <td className="p-2">3</td>
                                <td className="p-2">---</td>
                                <td className="p-2 flex flex-wrap gap-1 items-center space-x-1 justify-center">
                                    <BiCalendarEvent /> Monday
                                    <FaClock /> 6:00 PM - 9:00 PM
                                    <MdGroups size={16} /> F2F - FIELD
                                </td>
                                <td className="p-1"><button className="col-span-3 col-start-5 bg-main-red text-white p-2 rounded hover:bg-main-red">Remove</button></td>
                            </tr>
                            <tr className="border-b text-center">
                                <td className="p-2 text-left">GEIT 838 - 1</td>
                                <td className="p-2 text-left">NETWORK DESIGN AND MANAGEMENT</td>
                                <td className="p-2">3</td>
                                <td className="p-2">---</td>
                                <td className="p-2 flex flex-wrap gap-1 items-center space-x-1 justify-center">
                                    <BiCalendarEvent /> Monday
                                    <FaClock /> 6:00 PM - 9:00 PM
                                    <MdGroups size={16} /> F2F - FIELD
                                </td>
                                <td className="p-1"><button className="col-span-3 col-start-5 bg-main-red text-white p-2 rounded hover:bg-main-red">Remove</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Row 4 */}
                <div className="col-span-12 flex flex-row justify-end mt-24 text-[#434343]">
                    <div className="ml-auto">
                        <p><DateTime></DateTime></p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default StudentGradEnrollment1;
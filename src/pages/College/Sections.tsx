import DateTime from '@/components/DateTime';
import React, { useState } from 'react';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { FaEdit, FaTrash, FaMinusCircle } from 'react-icons/fa';

const Sections = () => {
    const [sectionModalOpen, setSectionModalOpen] = useState(false);


    // Dummy data 
    const tableData = [
        { id: 2121231, section: '1', college: 'CET', term: '4', slots: '50', enlisted: '37', academic: '2023' },


        // Add more data as needed
    ];


    // Function to open the faculty modal
    const openSectionModal = () => {
        setSectionModalOpen(true);
    };

    // Function to close the faculty modal
    const closeSectionModal = () => {
        setSectionModalOpen(false);
    };

    return (
        <div className="p-10 px-16 grid grid-cols-12 font-montserrat" >

            {/* Row 1 */}
            <div className="col-span-12 flex justify-between items-center">
                <div className="px-5 py-1 bg-main-red text-white rounded-lg ">
                    Sections
                </div>
                <div className="flex flex-col items-end">
                    <h1 className="font-bold">DELA CRUZ. JUAN PEPITO</h1>
                    <p className="text-xs ">
                        Logged as: <span className="text-main-red">Administrator</span>
                    </p>
                </div>
            </div>

            {/* Row 2 */}
            <div className="col-span-12 mt-20">
                <div>
                    <div className="flex justify-between mb-4">
                        <div className="flex items-center">
                            <input
                                type="text"
                                placeholder="Search"
                                className="border p-2 rounded"
                            />
                            <button className="ml-2">
                                <FiArrowRight className="border text-2xl h-10" />
                            </button>
                            <div className="mb-5 ml-3">
                                <label htmlFor="selectCollege" className="text-sm font-medium">
                                    Course
                                </label>
                                <select
                                    id="selectCollege"
                                    className="w-full border p-2 rounded"
                                    placeholder="Select"
                                >
                                    <option value="BSCS">BSCS</option>
                                    <option value="BSBA">BSBA</option>
                                    <option value="BSCE">BSCE</option>
                                </select>
                            </div>
                            <div className="mb-5 ml-3">
                                <label htmlFor="selectCollege" className="text-sm font-medium">
                                    AY Sem
                                </label>
                                <select
                                    id="selectCollege"
                                    className="w-full border p-2 rounded"
                                    placeholder="Select"
                                >
                                    <option>2031</option>
                                    <option>2322</option>
                                    <option>2134</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex items-center">

                            <button className=" bg-main-red text-white rounded-lg p-2 ml-3" onClick={openSectionModal}>
                                Add Section
                            </button>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto  bg-white shadow-md rounded-lg">
                            <thead>
                                <tr className="bg-main-red text-white rounded-lg border ">
                                    <th>Block ID</th>
                                    <th>Section</th>
                                    <th>College Code</th>
                                    <th>Term</th>
                                    <th>Slots</th>
                                    <th>Enlisted</th>
                                    <th>Academic Year</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-center border">
                                {tableData.map((item) => (
                                    <tr className="border" key={item.id}>
                                        <td className="px-4 py-2">{item.id}</td>
                                        <td className="px-4 py-2">{item.section}</td>
                                        <td className="px-4 py-2">{item.college}</td>
                                        <td className="px-4 py-2">{item.term}</td>
                                        <td className="px-4 py-2">{item.slots}</td>
                                        <td className="px-4 py-2">{item.enlisted}</td>
                                        <td className="px-4 py-2">{item.academic}</td>

                                        <td className="text-center flex justify-center items-center">
                                            <FaEdit className="bg-main-blue text-white rounded text-2xl w-7 h-7 p-1 m-1" />
                                            <FaTrash className="bg-main-red text-white rounded text-2xl w-7 h-7 p-1 m-1" />
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                    {sectionModalOpen && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white p-4 rounded-lg w-full max-w-lg">
                                <div className="flex justify-between">
                                    <h2 className="text-xl font-bold mb-4">Add Section</h2>
                                    <button className="flex bg-main-red items-center text-white p-2" onClick={closeSectionModal}>
                                        X
                                    </button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* First Column */}
                                    <div>
                                        <div className="mb-4">
                                            <label htmlFor="firstName" className="text-sm font-medium">Block ID</label>
                                            <input type="text" className="w-full border p-2 rounded" />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="firstName" className="text-sm font-medium">College</label>
                                            <select className="w-full border p-2 rounded">
                                                <option >CET</option>
                                                <option >CHASS</option>
                                            </select>
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="firstName" className="text-sm font-medium">Slots</label>
                                            <input type="text" className="w-full border p-2 rounded" />
                                        </div>

                                    </div>

                                    {/* Second Column */}
                                    <div>
                                        <div className="mb-4">
                                            <label htmlFor="birthdate" className="text-sm font-medium">Section</label>
                                            <input type="text" className="w-full border p-2 rounded" />

                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="birthdate" className="text-sm font-medium">Term</label>
                                            <select className="w-full border p-2 rounded">
                                                <option >4</option>
                                                <option >3</option>
                                            </select>

                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="birthdate" className="text-sm font-medium">Academic Year</label>
                                            <input type="text" className="w-full border p-2 rounded" />

                                        </div>


                                    </div>
                                </div>
                                <button className="bg-main-red text-white rounded-lg p-2 mt-4 ml-auto flex">
                                    Save
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>


            {/* Row 3 Pagination (right-aligned and smaller) */}
            <div className="col-span-12 mt-20">
                <div className="flex justify-between items-center space-x-2">
                    <ul className="flex space-x-2">
                        <li>
                            <FiArrowLeft className="border border-gray-500 w-5 h-5 rounded" />
                        </li>
                        <li>
                            <a href="#" className="text-gray-500 border border-gray-500 px-2 rounded hover:text-gray-700 hover:border-gray-700">1</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-500 border border-gray-500 px-2 rounded hover:text-gray-700 hover:border-gray-700">2</a>
                        </li>
                        <li>
                            <FiArrowRight className="border border-gray-500 w-5 h-5 rounded" />
                        </li>
                        <li>
                            <p>1 out of 12 rows</p>
                        </li>
                    </ul>
                    <div className="flex items-end">
                        <DateTime />
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Sections
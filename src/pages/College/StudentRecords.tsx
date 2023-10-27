import React from 'react'
import { IoMdPrint} from 'react-icons/io';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import DateTime from '@/components/DateTime';




const StudentRecords = () => {
  return (
    <div  className="p-10 px-16 grid grid-cols-12 font-montserrat" >
           {/* Row 1 */}
           <div className="col-span-12 flex justify-between items-center">
          <div className="px-5 py-1 bg-main-red text-white rounded-lg ">
            Home
          </div>
          <div className="flex flex-col items-end">
            <h1 className="font-bold">DELA CRUZ. JUAN PEPITO</h1>
            <p className="text-xs ">
              Logged as: <span className="text-main-red">Administrator</span>
            </p>
          </div>
        </div>

        {/* Row 2 Table */}
        <div className="col-span-12 mt-20">
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto bg-white shadow-md rounded-lg border shadow">
                    <thead>
                        <tr className="bg-main-red text-white rounded-lg border ">
                            <th className="px-4 py-2">#</th>
                            <th className="px-4 py-2">Identity #</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Program</th>
                            <th className="px-4 py-2">Registered As</th>
                            <th className="px-4 py-2">College</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Replace with dynamic data from your backend */}
                        <tr className="text-center border">
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">202011511</td>
                            <td className="px-4 py-2">Mike Miguel Gomez</td>
                            <td className="px-4 py-2">BSCS</td>
                            <td className="px-4 py-2">CET</td>
                            <td className="px-4 py-2">Old Student</td>
                            <td className="px-4 py-2 flex items-center justify-center ">
                                <button className="btn">
                                    <IoMdPrint className="bg-main-red text-white text-lg m-2 p-1 w-6 h-6 rounded" />
                                </button>
                                <button className="bg-main-blue text-white rounded-lg p-1">
                                    Update
                                </button>
                            </td>
                        </tr>
                        {/* Replace with dynamic data from your backend */}
                        <tr className="text-center border">
                            <td className="px-4 py-2">2</td>
                            <td className="px-4 py-2">20205256</td>
                            <td className="px-4 py-2">Philip Ang</td>
                            <td className="px-4 py-2">BSCS</td>
                            <td className="px-4 py-2">CET</td>
                            <td className="px-4 py-2">Old Student</td>
                            <td className="px-4 py-2 flex items-center justify-center ">
                                <button className="btn">
                                    <IoMdPrint className="bg-main-red text-white text-lg m-2 p-1 w-6 h-6 rounded" />
                                </button>
                                <button className="bg-main-blue text-white rounded-lg p-1">
                                    Update
                                </button>
                            </td>
                        </tr>
                        {/* Replace with dynamic data from your backend */}
                        <tr className="text-center border">
                            <td className="px-4 py-2">3</td>
                            <td className="px-4 py-2">20201245</td>
                            <td className="px-4 py-2">Yuanah Cruz</td>
                            <td className="px-4 py-2">BSCS</td>
                            <td className="px-4 py-2">CET</td>
                            <td className="px-4 py-2">Old Student</td>
                            <td className="px-4 py-2 flex items-center justify-center ">
                                <button className="btn">
                                    <IoMdPrint className="bg-main-red text-white text-lg m-2 p-1 w-6 h-6 rounded" />
                                </button>
                                <button className="bg-main-blue text-white rounded-lg p-1">
                                    Update
                                </button>
                            </td>
                        </tr>
                        {/* Replace with dynamic data from your backend */}
                        <tr className="text-center border">
                            <td className="px-4 py-2">4</td>
                            <td className="px-4 py-2">20212122</td>
                            <td className="px-4 py-2">Schrodinger's cat</td>
                            <td className="px-4 py-2">BSCS</td>
                            <td className="px-4 py-2">CET</td>
                            <td className="px-4 py-2">Old Student</td>
                            <td className="px-4 py-2 flex items-center justify-center ">
                                <button className="btn">
                                    <IoMdPrint className="bg-main-red text-white text-lg m-2 p-1 w-6 h-6 rounded" />
                                </button>
                                <button className="bg-main-blue text-white rounded-lg p-1">
                                    Update
                                </button>
                            </td>
                        </tr>
                        {/* Replace with dynamic data from your backend */}
                        <tr className="text-center border">
                            <td className="px-4 py-2">5</td>
                            <td className="px-4 py-2">20232351</td>
                            <td className="px-4 py-2">Taylor Swift</td>
                            <td className="px-4 py-2">BSCS</td>
                            <td className="px-4 py-2">CET</td>
                            <td className="px-4 py-2">New Student</td>
                            <td className="px-4 py-2 flex items-center justify-center ">
                                <button className="btn">
                                    <IoMdPrint className="bg-main-red text-white text-lg m-2 p-1 w-6 h-6 rounded" />
                                </button>
                                <button className="bg-main-blue text-white rounded-lg p-1">
                                    Update
                                </button>
                            </td>
                        </tr>
                        <tr className="text-center border">
                            <td className="px-4 py-2">6</td>
                            <td className="px-4 py-2">20216751</td>
                            <td className="px-4 py-2">Francis Santoyo</td>
                            <td className="px-4 py-2">BSCS</td>
                            <td className="px-4 py-2">CET</td>
                            <td className="px-4 py-2">Old Student</td>
                            <td className="px-4 py-2 flex items-center justify-center ">
                                <button className="btn">
                                    <IoMdPrint className="bg-main-red text-white text-lg m-2 p-1 w-6 h-6 rounded" />
                                </button>
                                <button className="bg-main-blue text-white rounded-lg p-1">
                                    Update
                                </button>
                            </td>
                        </tr>
                        <tr className="text-center border">
                            <td className="px-4 py-2">7</td>
                            <td className="px-4 py-2">20232133</td>
                            <td className="px-4 py-2">Ma U. Reed</td>
                            <td className="px-4 py-2">BSCS</td>
                            <td className="px-4 py-2">CET</td>
                            <td className="px-4 py-2">New Student</td>
                            <td className="px-4 py-2 flex items-center justify-center ">
                                <button className="btn">
                                    <IoMdPrint className="bg-main-red text-white text-lg m-2 p-1 w-6 h-6 rounded" />
                                </button>
                                <button className="bg-main-blue text-white rounded-lg p-1">
                                    Update
                                </button>
                            </td>
                        </tr>
                        {/* Add more rows for additional data */}
                    </tbody>
                </table>
            </div>

        {/* Pagination (right-aligned and smaller) */}
        <div className="col-span-12 sm:col-span-3 mt-20 text-sm ml-auto">
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
                        <p>7 out of 12 rows</p>
                    </li>
                </ul>
                <DateTime />
            </div>
        </div>
           
    
        </div>
    </div>
    
  )
}

export default StudentRecords
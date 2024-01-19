import { IoMdPrint } from 'react-icons/io';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import DateTime from '@/components/DateTime';
import { FaEdit } from 'react-icons/fa';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const navigate = useNavigate();

    // Dummy data
    const tableData = [
      { studentNo: 2121231, StudentName: 'Juan B. Dela Cruz', DatePaid: 'ENGINEERING RESEARCH AND DEVELOPMENT', PaidAmt: '₱ 2,000.00', Balance: '₱ 2,000.00', ExcessPay: '₱ 1,500.00', Status: 'Unpaid' },
      { studentNo: 2121231, StudentName: 'Juan B. Dela Cruz', DatePaid: 'ENGINEERING RESEARCH AND DEVELOPMENT', PaidAmt: '₱ 2,000.00', Balance: '₱ 2,000.00', ExcessPay: '₱ 1,500.00', Status: 'Unpaid' },
      { studentNo: 2121231, StudentName: 'Juan B. Dela Cruz', DatePaid: 'ENGINEERING RESEARCH AND DEVELOPMENT', PaidAmt: '₱ 2,000.00', Balance: '₱ 2,000.00', ExcessPay: '₱ 1,500.00', Status: 'Unpaid' },
      { studentNo: 2121231, StudentName: 'Juan B. Dela Cruz', DatePaid: 'ENGINEERING RESEARCH AND DEVELOPMENT', PaidAmt: '₱ 2,000.00', Balance: '₱ 2,000.00', ExcessPay: '₱ 1,500.00', Status: 'Unpaid' },
      { studentNo: 2121231, StudentName: 'Juan B. Dela Cruz', DatePaid: 'ENGINEERING RESEARCH AND DEVELOPMENT', PaidAmt: '₱ 2,000.00', Balance: '₱ 2,000.00', ExcessPay: '₱ 1,500.00', Status: 'Unpaid' },
      { studentNo: 2121231, StudentName: 'Juan B. Dela Cruz', DatePaid: 'ENGINEERING RESEARCH AND DEVELOPMENT', PaidAmt: '₱ 2,000.00', Balance: '₱ 2,000.00', ExcessPay: '₱ 1,500.00', Status: 'Unpaid' },
    ];
  
    const handleRowClick = (studentNo: number) => {
        // Navigate to a new page with the student's details
        navigate(`/home/student-details`);
      };
      
    return (
    <div>
           <div className="mx-auto max-w-[100rem] px-16 flex flex-col my-3">
        <div className="flex flex-col justify-between items-center | md:flex-row ">
          <img src="/plm_logo.png" className="h-20" />
          <h1 className="font-montserrat font-bold text-xl text-[#434343] mt-5 | md:mt-0">
            The PLM Online Campus
          </h1>
        </div>
      </div>
      <div>
        <img src="/divider_signin.png" className="w-full h-3" />
      </div>
   
        <div className="p-10 px-16 grid grid-cols-12 font-montserrat ">
            {/* Row 1 */}
            <div className="col-span-12 flex justify-between items-center">
                <div>
                    <span className='border p-2 mr-2 rounded text-main-red'>
                        Home
                    </span>
                    <span className="px-4 py-4 bg-main-red text-white rounded-lg ">
                        Student Payment Status
                    </span>

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

                <div className="flex justify-between  items-center mb-4">
                    <div className="">
                        <label htmlFor="">Student Number</label>
                        <div className="flex items-center">
                            <input
                                type="text"
                                placeholder="Search"
                                className="border p-2 rounded"
                            />
                            <button className="ml-2">
                                <FiArrowRight className="border text-2xl h-10" />
                            </button>

                        </div>

                    </div>
                    <div className="">

                        <label htmlFor="selectCollege" className="text-sm font-medium">
                            Year/Term
                        </label>
                        <div className="flex items-center">

                            <select
                                id="selectCollege"
                                className="w-full border p-2 rounded form-control"
                                placeholder="Select"
                            >
                                <option>1st, 2023-2024</option>
                                <option>1st, 2023-2024</option>
                                <option>1st, 2023-2024</option>
                                <option>1st, 2023-2024</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto  bg-white shadow-md rounded-lg">
                        <thead>
                            <tr className="bg-main-red text-white rounded-lg border ">
                                <th>Student No.</th>
                                <th>Student Name</th>
                                <th>Date Paid</th>
                                <th>Paid Amt</th>
                                <th>Balance</th>
                                <th>Excess Pay</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-center border">

                            {tableData.map((item) => (
                                
                                <tr className="border" key={item.studentNo} onClick={() => handleRowClick(item.studentNo)} style={{ cursor: 'pointer' }}>
                                    <td className="px-4 py-2 ">{item.studentNo}</td>
                                    <td className="px-4 py-2">{item.StudentName}</td>
                                    <td className="px-4 py-2 ">{item.DatePaid}</td>
                                    <td className="px-4 py-2">{item.PaidAmt}</td>
                                    <td className="px-4 py-2">{item.Balance}</td>
                                    <td className="px-4 py-2">{item.ExcessPay}</td>
                                    <td className="px-4 py-2">{item.Status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

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
        </div>

    )
}

export default Payment
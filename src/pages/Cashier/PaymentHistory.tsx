import { IoMdPrint } from 'react-icons/io';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import DateTime from '@/components/DateTime';
import { FaEdit, FaArrowLeft, FaTrash } from 'react-icons/fa';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const PaymentHistory = () => {
    const tableData = [
        { No: 1, PaidInstall: '1st Payment', YearTerm: '20212', OR: '275476', DatePaid: 'March 08, 2022', PaidAmt: '₱ 1,500.00', Balance: '₱ 2,000.00', Excess: '₱ 0.00', Status: 'PAID' },
        { No: 2, PaidInstall: '1st Payment', YearTerm: '20212', OR: '275476', DatePaid: 'March 08, 2022', PaidAmt: '₱ 1,500.00', Balance: '₱ 2,000.00', Excess: '₱ 0.00', Status: 'PAID' },
        { No: 3, PaidInstall: '1st Payment', YearTerm: '20212', OR: '275476', DatePaid: 'March 08, 2022', PaidAmt: '₱ 1,500.00', Balance: '₱ 2,000.00', Excess: '₱ 0.00', Status: 'PAID' },
        { No: 4, PaidInstall: '1st Payment', YearTerm: '20212', OR: '275476', DatePaid: 'March 08, 2022', PaidAmt: '₱ 1,500.00', Balance: '₱ 2,000.00', Excess: '₱ 0.00', Status: 'PAID' },
        { No: 5, PaidInstall: '1st Payment', YearTerm: '20212', OR: '275476', DatePaid: 'March 08, 2022', PaidAmt: '₱ 1,500.00', Balance: '₱ 2,000.00', Excess: '₱ 0.00', Status: 'PAID' },
        { No: 6, PaidInstall: '1st Payment', YearTerm: '20212', OR: '275476', DatePaid: 'March 08, 2022', PaidAmt: '₱ 1,500.00', Balance: '₱ 2,000.00', Excess: '₱ 0.00', Status: 'PAID' },
        { No: 7, PaidInstall: '1st Payment', YearTerm: '20212', OR: '275476', DatePaid: 'March 08, 2022', PaidAmt: '₱ 1,500.00', Balance: '₱ 2,000.00', Excess: '₱ 0.00', Status: 'PAID' },

    ];
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



            <div className="mx-auto max-w-[100rem] px-16 flex flex-col my-3">
                {/* Row 1 */}
                <div className="col-span-12 flex justify-between items-center">
                    <Link to="/home/payment-student">
                        <div className="px-5 py-1 flex justify-content-center items-center bg-main-red text-white rounded-lg ">
                            <FaArrowLeft className="mr-2" />
                            Back
                        </div>

                    </Link>
                    <div className="flex flex-col items-end">
                        <h1 className="font-bold">DELA CRUZ. JUAN PEPITO</h1>
                        <p className="text-xs ">
                            Logged as: <span className="text-main-red">Administrator</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Row 2 */}

            <div className="mx-auto max-w-[91rem] flex flex-col justify-start">
                <h6 className="text-main-red mb-2">Student Information</h6>
                <div className="row border w-[60rem] bg-[#f1f5f9] rounded">
                    <div className='flex p-2'>
                        <h6 className='mr-2'>
                            Student Name:
                        </h6>
                        <p>
                            JUAN PEPITO DELA CRUZ
                        </p>
                    </div>
                    <div className='flex p-2'>
                        <h6 className='mr-2'>
                            Graduate School:
                        </h6>
                        <p>
                            COLLEGE OF ENGINEERING AND TECHNOLOGY - GRADUATE PROGRAM
                        </p>
                    </div>
                    <div className='flex p-2'>
                        <h6 className='mr-2'>
                            Program:
                        </h6>
                        <p>
                            MASTER OF INFORMATION TECHNOLOGY
                        </p>
                    </div>

                </div>

            </div>


            {/* Row 3 */}
            <div className=" mx-auto max-w-[91rem] col-span-12 mt-20">
                <div className="flex justify-between  items-center mb-4">
                    <div className="">
                        <label className='text-main-red font-bold' htmlFor="">Student Assessments</label>
                        <h2 className='text-main-red font-bold border rounded p-2 flex justify-center'>
                            Payment History
                        </h2>

                    </div>
                    <div className="">
                        <button className='border p-2 rounded bg-main-red text-white'>
                            View Balance
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto  bg-white shadow-md rounded-lg">
                        <thead>
                            <tr className="bg-main-red text-white rounded-lg border ">
                                <th>No.</th>
                                <th>Paid Installment</th>
                                <th>Year/Term</th>
                                <th>OR Num</th>
                                <th>Date Paid</th>
                                <th>Paid Amt</th>
                                <th>Balance</th>
                                <th>Excess Pay</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-center border">

                            {tableData.map((item) => (

                                <tr className="border" key={item.No}>
                                     <td className="px-4 py-2 ">{item.No}</td>
                                    <td className="px-4 py-2 ">{item.PaidInstall}</td>
                                    <td className="px-4 py-2">{item.YearTerm}</td>
                                    <td className="px-4 py-2 ">{item.OR}</td>
                                    <td className="px-4 py-2">{item.DatePaid}</td>
                                    <td className="px-4 py-2">{item.PaidAmt}</td>
                                    <td className="px-4 py-2">{item.Balance}</td>
                                    <td className="px-4 py-2">{item.Excess}</td>
                                    <td className="px-4 py-2">{item.Status}</td>
                                    <td className="text-center flex justify-center items-center">
                                            <IoMdPrint  className="bg-main-blue text-white rounded text-2xl w-7 h-7 p-1 m-1"/>

                                            <FaTrash className="bg-main-red text-white rounded text-2xl w-7 h-7 p-1 m-1" />

                                        </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
                 {/* Row 3 Pagination (right-aligned and smaller) */}
            <div className="col-span-12 mt-2">
                <div className="flex justify-end items-center space-x-2">
                 
                    <div className="flex items-end">
                        <DateTime />
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default PaymentHistory
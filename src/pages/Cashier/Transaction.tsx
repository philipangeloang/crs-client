import { IoMdPrint } from 'react-icons/io';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import DateTime from '@/components/DateTime';
import { FaEdit, FaArrowLeft, FaDownload } from 'react-icons/fa';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Transaction = () => {
    return (
        <div>
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
                        <Link to="/home/student-details">
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

                <div className="container flex mt-10">
                    {/* Sidebar */}
                    <div className="w-1/4 bg-main-red h-[700px] relative rounded">
                        {/* Sidebar content goes here */}
                        <div className="flex flex-col ml-6 mt-12">
                            <h6 className="text-white">Student Name</h6>
                            <h2 className="text-white font-bold text-2xl">Juan Pepito Dela Cruz</h2>
                            <h6 className="text-white">20XX-XXXXX</h6>
                        </div>
                        <hr className="mt-5 mb-5" />

                        {/* Text at the bottom of the sidebar */}
                        <div className="absolute bottom-0 mb-4 ml-6 text-white w-[80%]">
                            <div className="flex flex-col">
                                <p className='text-sm'>Noted By </p>
                                <p className='font-bold text-lg'>Cashier Name</p>
                                <p className='text-sm'>xxxx-xxxxxxxx</p>
                            </div>

                            <hr className="mt-5 mb-5 " />
                            <p>Transaction ID</p>
                            <p className='font-bold'>O0938RIEU20123IW</p>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="w-3/4 border shadow rounded">
                        {/* Main content goes here */}

                        <div className="mx-auto px-2 flex flex-col  h-[700px] relative">
                            <div className="flex flex-col justify-between items-center | md:flex-row  ml-6 mt-12">
                                <img src="/plm_logo.png" className="h-20" />
                                <h1 className="font-montserrat font-bold text-sm text-[#434343] mt-5 | md:mt-0">
                                    <DateTime />
                                </h1>
                            </div>
                            <hr className="mt-5 mb-5 " />

                            <div className="container mt-10 ">
                                <div className="flex flex-col border">
                                    <h2 className='text-main-red font-bold text-2xl'>PROOF OF TRANSACTION</h2>
                                    <p>A.Y. SEM</p>
                                </div>

                                <div className="mt-10">
                                    <div className="flex">
                                        <p className='w-[50%]'>
                                            Total Amount to be paid
                                        </p>

                                        <p className='w-[50%]'>
                                            Balance
                                        </p>
                                    </div>
                                </div>

                                <div className="py-6 rounded bg-[#f1f5f9]">
                                    <div className="flex">
                                        <p className='w-[50%] text-xl font-bold'>
                                            ₱ 16,764.10
                                        </p>

                                        <p className='w-[50%] text-xl font-bold'>
                                            ₱ 6,764.10
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-10">
                                    <div className="flex">
                                        <p className='w-[50%]'>
                                            Paid Amount
                                        </p>

                                        <p className='w-[50%]'>
                                            Excess Pay
                                        </p>
                                        <p className='w-[50%]'>
                                            Remaining Balance
                                        </p>
                                    </div>
                                </div>

                                <div className="py-6 rounded bg-[#f1f5f9]">
                                    <div className="flex">
                                        <p className='w-[50%] text-xl font-bold'>
                                            ₱ 7,000.00
                                        </p>

                                        <p className='w-[50%] text-xl font-bold'>
                                            ₱ 235.90
                                        </p>
                                        <p className='w-[50%] text-xl font-bold'>
                                            ₱ 0.00
                                        </p>
                                    </div>
                                </div>
                                <hr className="mt-16 mb-5" />
                                <div className='flex align-center justify-center text-gray-400'>
                                    This receipt is officially recognized by Pamantasan ng Lungsod ng Maynila Financial Office
                                </div>
                            </div>
                        </div>












                    </div>

                </div>
                <div className="container mt-2 ">
                    <ul className="flex space-x-2">
                        < IoMdPrint className="bg-main-blue text-4xl p-1 rounded text-white" />
                        <FaDownload className="bg-main-red text-4xl p-1 rounded text-white" />
                    </ul>
                </div>


            </div>
        </div >
    )
}

export default Transaction
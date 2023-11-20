import { IoMdPrint } from 'react-icons/io';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import DateTime from '@/components/DateTime';
import { FaEdit, FaArrowLeft, FaDownload } from 'react-icons/fa';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const StudentDetails = () => {
    const [subjectModalOpen, setSubjectModalOpen] = useState(false);
    // Function to open the faculty modal
    const openSubjectModal = () => {
        setSubjectModalOpen(true);
    };

    // Function to close the faculty modal
    const closeSubjectModal = () => {
        setSubjectModalOpen(false);
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
            <div className="mx-auto max-w-[91rem] flex flex-col justify-start mt-5">
                <h6 className="text-main-red mb-2">Student Assessments</h6>
                <div className="flex justify-between">
                    <h4 className='border w-[200px] flex justify-center text-align-center rounded text-main-red p-2'>Remaining Balance</h4>
                    <div>
                        <button className='bg-main-blue p-2 text-white rounded mr-2' onClick={openSubjectModal}>
                            Account Payment
                        </button>
                        <Link to="/home/payment-history">
                        <button className='bg-main-red p-2 text-white rounded'>
                            View History
                        </button>
                        </Link>
                       
                    </div>
                </div>

                <div className="flex flex-col border mt-2 ">
                    <div className="flex mt-2">
                        <div className='flex  w-[50%]  '>
                            <h6 className='ml-2 text-sm w-[25%]'>
                                Year / Term :
                            </h6>
                            <p className='text-sm'>
                                2023 | 1st Trimester
                            </p>
                            <br />
                        </div>
                        <div className='flex  w-[50%]'>
                            <h6 className='ml-10 text-sm w-[25%]'>
                                Status:
                            </h6>
                            <p className='text-sm'>
                                Partial Paid
                            </p>
                        </div>
                    </div>

                    <div className="flex">
                        <div className='flex  w-[50%]'>
                            <h6 className='ml-2 text-sm w-[25%]'>
                                Terms of Payment :
                            </h6>
                            <p className='text-sm text-main-blue'>
                                Partial Payment
                            </p>
                            <br />
                        </div>
                        <div className='flex  w-[50%]'>
                            <h6 className='ml-10 text-sm w-[25%]'>
                                Assessment:
                            </h6>
                            <p className='text-sm'>
                                Active Assessment
                            </p>
                        </div>


                    </div>

                </div>

                <div className="flex  border mt-2 ">
                    <div className="border w-[50%]  ">
                        <div className='flex w-[100%]'>
                            <h6 className='ml-2 text-sm w-[25%]'>
                                Tuition Fee (Per Unit) :
                            </h6>
                            <p className='text-sm'>
                                ₱ 1,271.00
                            </p>
                            <p className='text-sm ml-20'>
                                Unit/s :
                            </p>
                            <p className='text-sm ml-20 text-gray-400'>
                                6.00 unit/s
                            </p>
                        </div>
                        <div className='flex w-[100%]'>
                            <h6 className='ml-2 text-sm w-[25%]'>
                                Miscellaneous Fees :
                            </h6>
                        </div>
                        <div className='flex w-[100%]'>
                            <h6 className='ml-4 text-sm w-[25%]'>
                                Guidance Fee :
                            </h6>
                            <p className='text-sm'>
                                ₱ 247.50
                            </p>
                        </div>
                        <div className='flex w-[100%]'>
                            <h6 className='ml-4 text-sm w-[25%]'>
                                Medical/Dental Fee :
                            </h6>
                            <p className='text-sm'>
                                ₱ 330.00
                            </p>
                        </div>
                        <div className='flex w-[100%]'>
                            <h6 className='ml-4 text-sm w-[25%]'>
                                Registration Fee :
                            </h6>
                            <p className='text-sm'>
                                ₱ 396.00
                            </p>
                        </div>
                        <div className='flex w-[100%]'>
                            <h6 className='ml-4 text-sm w-[25%]'>
                                Publication Fee :
                            </h6>
                            <p className='text-sm'>
                                ₱ 825.00
                            </p>
                        </div>
                        <div className='flex w-[100%]'>
                            <h6 className='ml-4 text-sm w-[25%]'>
                                Library Fee :
                            </h6>
                            <p className='text-sm'>
                                ₱ 1,650.00
                            </p>
                        </div>
                        <div className='flex w-[100%] mt-2'>
                            <h6 className='ml-2 text-md w-[25%]'>
                                Other Fees :
                            </h6>
                            <p className='text-sm'>
                                ₱ 1,650.00
                            </p>
                        </div>
                        <div className='flex w-[100%] mt-5 mb-5'>
                            <h6 className='ml-4 text-md w-[25%]'>
                                Development Fund :
                            </h6>
                            <p className='text-sm'>
                                ₱ 900.00
                            </p>
                        </div>
                        <div className='flex w-[100%] mt-2'>
                            <h6 className='ml-2 text-md w-[25%]'>
                                Total Amount : <br />
                                Current Term
                            </h6>
                            <p className='text-sm'>
                                ₱ 11,974.50
                            </p>
                        </div>
                        <div className='flex w-[100%] mt-2 '>
                            <h6 className='ml-2 text-md w-[25%]'>
                                Paid Amount : <br />
                                Current Term
                            </h6>
                            <p className='text-sm'>
                                ₱ 2,500.00
                            </p>
                        </div>
                        <div className='flex w-[100%] mt-2'>
                            <h6 className='ml-2 text-md w-[25%]'>
                                Overall Paid :
                            </h6>
                            <p className='text-sm'>
                                ₱ 23,785.90
                            </p>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="border w-[50%] bg-[#f1f5f9] rounded ">
                        <div className='flex w-[100%] mt-5 mb-5'>
                            <h6 className='ml-2 text-sm w-[25%]'>
                                Tuition Fee (Per Unit) :
                            </h6>
                            <p className='text-sm text-main-red'>
                                ₱ 7,626.00
                            </p>


                        </div>
                        <div className='border mt-20'></div>
                        <div className='flex w-[100%] mt-12 mb-5'>
                            <h6 className='ml-2 text-sm w-[25%]'>
                                Overall Balance :
                                Previous Balance (existing)
                                + Current Balance
                            </h6>
                            <p className='text-sm text-main-red'>
                                ₱ 6,764.10
                            </p>
                        </div>
                        <div className='flex w-[100%] mt-12 mb-5'>
                            <h6 className='ml-2 text-sm w-[25%]'>
                                Amount to be Paid :
                            </h6>
                            <div>
                                <p className='text-sm text-main-red font-bold'>
                                    For 2023 | 1st Trimester
                                </p> <br />
                                <span>
                                    ₱6,764.10
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                 {/* Modal for Adding */}
            {subjectModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg w-full max-w-lg">
                        <div className="flex justify-between">
                            <h2 className="text-xl text-main-red mb-4">Payment Transactions
                            </h2>
                            <button className="flex bg-main-red items-center text-white p-2" onClick={closeSubjectModal}>
                                X
                            </button>
                        </div>
                        <hr />
                        <div className="mt-5">
                            <div className="flex flex-col">
                                <h1 className='text-2xl font-bold'>Jose Pepito Dela Cruz</h1>
                                <div className='flex flex-row mt-2 mb-2'>
                                   <label className='mr-2' htmlFor="">
                                 Date: 
                                   </label>
                                   <DateTime/>
                                </div>
                                <div className='flex'>
                                   <label className='mr-2' htmlFor="">
                                   Balance:
                                   </label>
                                   ₱ 6,764.10
                                </div>
                            </div>
                            <div className="flex mt-5 mb-5 ">
                              <label className='mr-2' htmlFor="">
                                Amount Received:
                              </label>
                             <input type="text" className='form-control border' />
                            </div>

                            

                            <div>
                                <div className="w-full  flex justify-center items-center flex-col mt-5 mb-5">
                                    <Link  to="/home/transaction">
                                    <button className='border w-[200px] bg-main-red text-white p-2'>
                                        Save
                                    </button>
                                    </Link>
                                 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            </div>

            {/* Row 4 Pagination (right-aligned and smaller) */}
            <div className="mx-auto max-w-[91rem] flex flex-col justify-start mt-5">
                <div className="flex justify-between items-center space-x-2">
                    <ul className="flex space-x-2">
                        < IoMdPrint className="bg-main-blue text-4xl p-1 rounded text-white" />
                        <FaDownload className="bg-main-red text-4xl p-1 rounded text-white" />
                    </ul>
                    <div className="flex items-end">
                        <DateTime />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default StudentDetails
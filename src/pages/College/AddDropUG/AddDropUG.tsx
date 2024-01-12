import DateTime from '@/components/DateTime';
import React, { useState } from 'react';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { FaEdit, FaEye, FaTrash, FaMinusCircle, FaExchangeAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";

// Dummy data 
const tableData = [
    { id: '1', StudentNo: '2023-12345', name: 'Juanita D. Batumbakal', year: '4-1', code: 'BSCS', enroll: 'Enrolled', registration: 'regular' },
];


const AddDropUG = () => {
    const [enlistModalOpen, setEnlistModalOpen] = useState(false);

    const openEnlistModal = () => {
        setEnlistModalOpen(true);
    };

    const closeEnlistModal = () => {
        setEnlistModalOpen(false);
    };
    const [AddDropModalOpen, setAddDropModalOpen] = useState(false);

    const openAddDropModal = () => {
        setAddDropModalOpen(true);
    };

    const closeAddDropModal = () => {
        setAddDropModalOpen(false);
    };
    return (
        <div className="p-10 px-16 grid grid-cols-12 font-montserrat" >
            {/* Row 1 */}
            <div className="col-span-12 flex justify-between items-center">
                <div className="px-5 py-1 bg-main-red text-white rounded-lg ">
                    Add/Drop Requests
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
                <div className="flex  justify-between mb-4">
                    <div className="flex">
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

                        <div className="mb-3 ml-3">
                            <label htmlFor="selectCollege" className="text-sm font-medium">
                                College
                            </label>
                            <select
                                id="selectCollege"
                                className="w-full border p-2 rounded"
                                placeholder="Select"
                            >
                                <option>CET</option>
                                <option>CHASS</option>
                                <option>CED</option>
                            </select>
                        </div>
                        <div className="mb-3 ml-3">
                            <label htmlFor="selectCollege" className="text-sm font-medium">
                                Program
                            </label>
                            <select
                                id="selectCollege"
                                className="w-full border p-2 rounded"
                                placeholder="Select"
                            >
                                <option>BSCS</option>

                            </select>
                        </div>
                        <div className="mb-3 ml-3">
                            <label htmlFor="selectCollege" className="text-sm font-medium">
                                Registration Code
                            </label>
                            <select
                                id="selectCollege"
                                className="w-full border p-2 rounded"
                                placeholder="Select"
                            >
                                <option>Regular</option>
                                <option>New</option>
                            </select>
                        </div>

                    </div>
                    {/* Col 2 */}
                    <div className="flex items-center">
                        <div className="mb-3 ml-3">
                            <button className="text-white bg-main-red p-2 rounded" onClick={openEnlistModal} >Enlist</button>
                            <button className="text-white bg-main-blue p-2 rounded ml-2" onClick={openAddDropModal}>Add/Drop</button>
                        </div>

                    </div>
                </div>

                {/* Enlist Modal */}
                {enlistModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-4 rounded-lg w-full max-w-xl">
                            <div className="flex justify-between">
                                <h2 className="text-xl font-bold mb-4">Enlist Student</h2>
                                <button
                                    className="flex bg-main-red items-center text-white p-2"
                                    onClick={closeEnlistModal}
                                >
                                    X
                                </button>
                            </div>
                            {/* Add content for the Enlist modal */}
                            <div className="flex justify-between">
                                {/* First Column */}
                                <div className="w-3/2">
                                    <label htmlFor="employeeNumber" className="text-sm font-medium">
                                        Block
                                    </label>
                                    <select
                                        id="selectCollege"
                                        className="w-full border p-2 rounded"
                                        placeholder="Select"
                                    >
                                        <option value="BSCS">BSCS 4-1</option>
                                    </select>

                                </div>

                                {/* Second Column */}
                                <div className="mt-6">
                                    <button className='bg-main-red text-white p-2 rounded'>
                                        Enlist
                                    </button>
                                </div>
                            </div>
                            <div className='flex mt-2'>
                                {/* First Column */}
                                <div className="w-1/4 flex flex-col">
                                    <div className='flex flex-row justify-between '>
                                        <label htmlFor="employeeNumber" className="text-sm font-medium mr-2">
                                            Block
                                        </label>
                                        <p className="text-sm mr-2 text-main-red font-bold">BSCS 4-1</p>
                                    </div>
                                    <div className='flex flex-row justify-between'>
                                        <label htmlFor="employeeNumber" className="text-sm font-medium mr-2">
                                            Slots
                                        </label>
                                        <p className="text-sm mr-2">50</p>
                                    </div>
                                    <div className='flex flex-row justify-between'>
                                        <label htmlFor="employeeNumber" className="text-sm font-medium mr-2">
                                            Enrolled
                                        </label>
                                        <p className="text-sm mr-2">37</p>
                                    </div>


                                </div>

                                {/* Second Column */}
                                <div className="w-3/4 ml-2">
                                    <div className='flex flex-row justify-between'>
                                        <label htmlFor="employeeNumber" className="text-sm font-medium mr-2 text-main-red">
                                            Class Code - Section
                                        </label>
                                        <p className="text-sm mr-2 text-main-red">Slots</p>
                                        <p className="text-sm mr-2 text-main-red">Enrolled</p>
                                    </div>

                                    <div className='flex flex-row justify-between'>
                                        <label htmlFor="employeeNumber" className="text-sm font-medium mr-2 ">
                                            CSC 0411 - 2
                                        </label>
                                        <p className="text-sm mr-2 ">50</p>
                                        <p className="text-sm mr-2 ">37</p>
                                    </div>
                                </div>



                            </div>
                            <div className="overflow-x-auto mt-2">
                                <table className="min-w-full table-auto  bg-white shadow-md rounded-lg">
                                    <thead>
                                        <tr className="bg-main-red text-white rounded-lg border ">
                                            <th>Class Code</th>
                                            <th>Schedule</th>
                                            <th>Action</th>


                                        </tr>
                                    </thead>
                                    <tbody className="text-center border">

                                        <tr className="border" >
                                            <td className="px-4 py-2">
                                                <select
                                                    id="selectCollege"
                                                    className="w-full border p-2 rounded"
                                                    placeholder="Select"
                                                >
                                                    <option>CSC 0411</option>
                                                </select>
                                            </td>
                                            <td className="px-4 py-2">
                                                <select
                                                    id="selectCollege"
                                                    className="w-full border p-2 rounded"
                                                    placeholder="Select"
                                                >
                                                    <option>CSC 0411 - 2, 3 Units, T 7:00a-8:30a LEc GCA 306, F 7:00a-8:30a LecSyncOnline FIELD</option>
                                                </select>
                                            </td>
                                            <td className="px-4 py-2">
                                           <FaTrash className="bg-main-red text-white p-2 text-2xl h-10 rounded" />
                                            </td>
                                          

                                        </tr>

                                    </tbody>
                                </table>

                            </div>

                            {/* Add buttons or actions for Enlist modal */}
                            <div className="flex justify-start mt-4">
                                <button
                                    className="text-white bg-main-red p-2 rounded">
                                    Add Class
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Add Drop Modal */}
                {AddDropModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-4 rounded-lg w-full max-w-xl">
                            <div className="flex justify-between">
                                <h2 className="text-xl font-bold mb-4">Enlistment Form 5A</h2>
                                <button
                                    className="flex bg-main-red items-center text-white p-2"
                                    onClick={closeAddDropModal}
                                >
                                    X
                                </button>
                            </div>
     
                            <div className='flex mt-2'>
                                {/* First Column */}
                                <div className="w-1/2 flex flex-col">
                                    <div className='flex flex-row justify-between '>
                                        <label htmlFor="employeeNumber" className="text-sm font-medium mr-2">
                                        Student ID :
                                        </label>
                                        <p className="text-sm mr-2 text-main-red font-bold">2020-18564</p>
                                    </div>
                                    <div className='flex flex-row justify-between'>
                                        <label htmlFor="employeeNumber" className="text-sm font-medium mr-2">
                                        Student Name :
                                        </label>
                                        <p className="text-sm mr-2">JUAN PEPITO DELA CRUZ</p>
                                    </div>
                                    <div className='flex flex-row justify-between'>
                                        <label htmlFor="employeeNumber" className="text-sm font-medium mr-2">
                                        Program :
                                        </label>
                                        <p className="text-sm mr-2">BSCS</p>
                                    </div>
                                    <div className='flex flex-row justify-between'>
                                        <label htmlFor="employeeNumber" className="text-sm font-medium mr-2">
                                        College :
                                        </label>
                                        <p className="text-sm mr-2">CET</p>
                                    </div>


                                </div>

                                {/* Second Column */}
                                <div className="w-3/4 ml-2">
                                    <div className='flex flex-row justify-around'>
                                        <label htmlFor="employeeNumber" className="text-sm font-medium mr-2">
                                        Year:
                                        </label>
                                        <p className="text-sm mr-2">4</p>
                                    </div>

                                    <div className='flex flex-row justify-around'>
                                        <label htmlFor="employeeNumber" className="text-sm font-medium mr-2">
                                        Block:
                                        </label>
                                        <p className="text-sm mr-2">1</p>
                                    </div>

                                    <div className='flex flex-row justify-around'>
                                        <label htmlFor="employeeNumber" className="text-sm font-medium mr-2">
                                        Registration Code:
                                        </label>
                                        <p className="text-sm mr-2">Irregular</p>
                                    </div>

                                    <div className='flex flex-row justify-around'>
                                        <label htmlFor="employeeNumber" className="text-sm font-medium mr-2">
                                        Enrollment Status:
                                        </label>
                                        <p className="text-sm mr-2">Enrolled</p>
                                    </div>
                                </div>
                            </div>


                            {/* Class Code */}
                            <p className="text-gray mt-10 text-sm">Note: To cancel subject click the Trash Icon</p>
                            <div className="overflow-x-auto mt-2">
                                <table className="min-w-full table-auto  bg-white shadow-md rounded-lg">
                                    <thead>
                                        <tr className="bg-main-red text-white rounded-lg border ">
                                            <th>Class Code</th>
                                            <th>Schedule</th>
                                            <th>Action</th>


                                        </tr>
                                    </thead>
                                    <tbody className="text-center border">

                                        <tr className="border" >
                                            <td className="px-4 py-2">
                                                <select
                                                    id="selectCollege"
                                                    className="w-full border p-2 rounded"
                                                    placeholder="Select"
                                                >
                                                    <option>CSC 0411</option>
                                                </select>
                                            </td>
                                            <td className="px-4 py-2">
                                                <select
                                                    id="selectCollege"
                                                    className="w-full border p-2 rounded"
                                                    placeholder="Select"
                                                >
                                                    <option>CSC 0411 - 2, 3 Units, T 7:00a-8:30a LEc GCA 306, F 7:00a-8:30a LecSyncOnline FIELD</option>
                                                </select>
                                            </td>
                                            <td className="px-4 py-2">
                                           <FaTrash className="bg-main-red text-white p-2 text-2xl h-10 rounded" />
                                            </td>
                                          

                                        </tr>

                                    </tbody>
                                </table>

                            </div>

                            {/* Class Code */}
                        


                             {/* Add buttons or actions for Enlist modal */}
                             <div className="flex justify-between mt-4">
                                <div>
                                <p className="text-main-red text-md">ADD CLASS FEATURE</p>
                                <p className=" text-[10px]">Search a Class to Pick a Schedule</p>
                                </div>
                             
                                <button
                                    className="text-white bg-main-red p-1 rounded">
                                    Add Class
                                </button>
                            </div>



                            <div className="overflow-x-auto mt-2">
                                <table className="min-w-full table-auto  bg-white shadow-md rounded-lg">
                                    <thead>
                                        <tr className="bg-main-red text-white rounded-lg border ">
                                            <th>Class Code</th>
                                            <th>Schedule</th>
                                            <th>Action</th>


                                        </tr>
                                    </thead>
                                    <tbody className="text-center border">

                                        <tr className="border" >
                                            <td className="px-4 py-2">
                                                <select
                                                    id="selectCollege"
                                                    className="w-full border p-2 rounded"
                                                    placeholder="Select"
                                                >
                                                    <option>CSC 0411</option>
                                                </select>
                                            </td>
                                            <td className="px-4 py-2">
                                                <select
                                                    id="selectCollege"
                                                    className="w-full border p-2 rounded"
                                                    placeholder="Select"
                                                >
                                                    <option>CSC 0411 - 2, 3 Units, T 7:00a-8:30a LEc GCA 306, F 7:00a-8:30a LecSyncOnline FIELD</option>
                                                </select>
                                            </td>
                                            <td className="px-4 py-2">
                                           <FaTrash className="bg-main-red text-white p-2 text-2xl h-10 rounded" />
                                            </td>
                                          

                                        </tr>

                                    </tbody>
                                </table>

                            </div>

                           
                        </div>
                    </div>
                )}



                {/* Table  */}
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto  bg-white shadow-md rounded-lg">
                        <thead>
                            <tr className="bg-main-red text-white rounded-lg border ">
                                <th><input type="checkbox" /></th>
                                <th>Student Number</th>
                                <th>Student Name</th>
                                <th>Year / Block </th>
                                <th>Program Code</th>
                                <th>Enrollment Status</th>
                                <th>Registration Code</th>

                            </tr>
                        </thead>
                        <tbody className="text-center border">
                            {tableData.map((item) => (
                                <tr className="border" key={item.id}>
                                    <td className="px-4 py-2"><input type="checkbox" /></td>
                                    <td className="px-4 py-2">{item.StudentNo}</td>
                                    <td className="px-4 py-2">{item.name}</td>
                                    <td className="px-4 py-2">{item.year}</td>
                                    <td className="px-4 py-2">{item.code}</td>
                                    <td className="px-4 py-2">{item.enroll}</td>
                                    <td className="px-4 py-2">{item.registration}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>



        </div>
    )
}

export default AddDropUG
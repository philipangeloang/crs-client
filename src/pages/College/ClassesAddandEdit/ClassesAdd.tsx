import React, { useState } from "react";
import { MdCheck } from 'react-icons/md';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import DateTime from "@/components/DateTime";

const ClassesAdd = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [rowCount, setRowCount] = useState(5); // Initial number of rows



    // Labels for buttons 
    const stepLabels = [
        "Class Information",
        "Class Hours",
        "Class Restrictions",
        "Finish",
    ];

    // Progress bar width class
    const getProgressWidth = () => {
        switch (currentStep) {
            case 1:
                return "w-1/4"; // 25%
            case 2:
                return "w-2/4"; // 50%
            case 3:
                return "w-3/4 "; // 75%
            case 4:
                return "w-full"; // 100%
            default:
                return "w-0"; // 0%
        }
    };

    // Step's Circle Completion in Progress Bar
    const getProgressWidth2 = () => {
        if (currentStep >= 2) {
            return "bg-main-red text-white";
        }
    };

    const getProgressWidth3 = () => {
        if (currentStep >= 3) {
            return "bg-main-red text-white";
        }
    };
    const getProgressWidth4 = () => {
        if (currentStep == 5 - 1) {
            return "bg-main-red text-white";
        }
    };



    // Function for Next Step / next div
    const handleNextStep = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);

        }
    };

    // Functio for Prev Step / Prev div
    const handleBackStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);

        }
    };



    // For backend 
    const handleFinish = () => {
        // Submit the form data to the server
    };

    const addMoreRows = () => {
        setRowCount(rowCount + 1);
    };

    // Steps 1 to 4 
    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="flex ">
                        <h1 className="text-2xl text-red-600 mr-2 font-bold">Step 1:</h1><span className="text-2xl text-red-600 mr-2 font-light" >Class Information</span>
                    </div>
                );
            case 2:
                return (
                    <div className="flex ">
                        <h1 className="text-2xl text-red-600 mr-2 font-bold">Step 2:</h1><span className="text-2xl text-red-600 mr-2 font-light" >Class Hours</span>
                    </div>
                );
            case 3:
                return (
                    <div className="flex ">
                        <h1 className="text-2xl text-red-600 mr-2 font-bold">Step 3:</h1><span className="text-2xl text-red-600 mr-2 font-light" >Class Restriction</span>
                    </div>
                );
            case 4:
                return (
                    <div className="flex ">
                        <h1 className="text-2xl text-red-600 mr-2 font-bold">FINISH:</h1><span className="text-2xl text-red-600 mr-2 font-light" >Class Added</span>
                    </div>
                );
            default:
                return <div>Invalid step</div>;
        }
    };

    // Transitional Div's for each step 
    const divs = [
        (
            // Step 1 
            <div className="w-full mt-10 p-5 border shadow rounded" key={1}>
                <div className="mb-3">
                    <label htmlFor="Course" className="form-label">Program Code: </label>
                    <select className="form-select ml-4 p-1 w-1/3 border rounded form-control">
                        <option></option>
                        <option>2021343</option>
                        <option>202334</option>
                    </select>
                    <label htmlFor="Course" className="form-label ml-2">Subject Code : </label>
                    <select className="form-select ml-3 p-1 w-1/3 border rounded form-control">
                        <option></option>
                        <option>2021343</option>
                        <option>202334</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="NSTP" className="form-label">NSTP Activity: </label>
                    <input type="text" className="form-control border ml-8 w-1/4 rounded p-1" />
                    <span className="text-sm text-main-red ml-3">(to be filled only if class to be added is an NSTP subject) </span>
                </div>
                <div className="mb-3">
                    <label className="form-label text-center">Section: </label>
                    <input type="text" className="form-control border ml-8 w-1/4 rounded p-1" />
                </div>
                <div className="mb-3 flex flex-row items-center justify-start">
                    <label className="form-label">Credits: </label>
                    <input type="text" className="form-control border ml-8 w-1/4 rounded p-1" />
                    <label className="form-label ml-3 ">Actual Credits: </label>
                    <input type="text" className="form-control border m-3 w-1/4 rounded p-1" />
                    <span className="text-sm text-main-red ml-3">(fill-up if displayed Credits is not the actual class credit)</span>
                </div>
                <div className="mb-3">
                    <div className="flex flex-row">
                        <label className="form-label">Faculty:<br /><span className="text-sm text-main-red">Leave it blank if TBA</span> </label>
                        <div className="flex flex-col w-full">
                            <select className="form-select ml-20 p-1 w-3/4 border rounded form-control">
                                <option></option>
                                <option>2021343</option>
                                <option>202334</option>
                            </select>
                            <select className="form-select mt-4 ml-20 p-1 w-3/4 border rounded form-control">
                                <option></option>
                                <option>2021343</option>
                                <option>202334</option>
                            </select>
                            <select className="form-select mt-4 ml-20 p-1 w-3/4 border rounded form-control">
                                <option></option>
                                <option>2021343</option>
                                <option>202334</option>
                            </select>
                            <select className="form-select mt-4 ml-20 p-1 w-3/4 border rounded form-control">
                                <option></option>
                                <option>2021343</option>
                                <option>202334</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-3 mt-5">
                        <label htmlFor="NSTP" className="form-label">Alloted Slots: </label>
                        <input type="text" className="form-control border ml-8 w-1/4 rounded p-1" />
                    </div>

                    <div className="mb-3 flex flex-row items-center justify-start mt-5">
                        <label className="form-label">Parental Class Code: </label>
                        <input type="text" className="form-control border w-1/4 rounded p-1 ml-2" />
                        <select className="form-select ml-3 p-1 w-1/4 border rounded">
                            <option>Select Link Type</option>
                            <option>2021343</option>
                            <option>202334</option>
                        </select>
                        <a href="" className="text-sm text-main-blue ml-3">Click here for help on how to use this</a>
                    </div>
                    <div className="mb-2">
                        <span className="text-sm text-main-red">NOTE: If course is dependent on another course, write the class code of the parent course. Lab and discussion classes usually have lecture components,
                            therefore, field must be filled-up.</span>
                    </div>

                    <div className="mb-3 flex flex-row items-center justify-start mt-5">
                        <label className="form-label">Instruction Language: </label>
                        <select className="form-select ml-1 p-1 w-1/4 border rounded">
                            <option>English</option>
                            <option>Tagalog</option>
                            <option>Japanese</option>
                        </select>
                        <label className="form-label ml-2">Minimum Year Level: </label>
                        <select className="form-select ml-2 p-1 w-1/4 border rounded">
                            <option>1st year</option>
                            <option>2nd year</option>
                            <option>3rd year</option>
                        </select>
                    </div>
                </div>

            </div>
        ),
        (
            <div className="w-full p-10" key={2}>
                <div className="flex flex-row justify-start items-center">
                    <input className="mr-2" type="checkbox" />
                    <span>Check box if class has NO DEFINITE TIME AND DAY (e.g. Thesis)</span>
                </div>

                <div className="border mt-5">
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto bg-white shadow rounded-lg border">
                            <thead>
                                <tr className="bg-main-red text-white rounded-lg border ">
                                    <th className="px-4 py-2"></th>
                                    <th className="px-4 py-2">Day</th>
                                    <th className="px-4 py-2">Time (Start - Finish)</th>
                                    <th className="px-4 py-2">Room</th>
                                    <th className="px-4 py-2">Meeting Type</th>
                                </tr>
                            </thead>
                            <tbody className="text-center border">
                                {Array.from({ length: 7 }, (_, index) => (
                                    <tr className="border" key={index}>
                                        <td className="px-4 py-2">{index + 1}</td>
                                        <td className="px-4 py-2">
                                            <select className="form-select p-1 w-full border rounded">
                                                <option value="true"></option>
                                                <option value="true">Monday</option>
                                                <option>Tuesday</option>
                                                <option>Wednesday</option>
                                            </select>
                                        </td>
                                        <td className="px-4 py-2">
                                            <select className="form-select p-1 w-1/4 m-1 border rounded">
                                                <option></option>
                                                <option>Monday</option>
                                                <option>Tuesday</option>
                                                <option>Wednesday</option>
                                            </select>
                                            <select className="form-select p-1 w-1/4 border rounded">
                                                <option></option>
                                                <option>Monday</option>
                                                <option>Tuesday</option>
                                                <option>Wednesday</option>
                                            </select>
                                        </td>
                                        <td className="px-4 py-2">
                                            <input type="text" className="form-control border w-3/4 rounded p-1 ml-2" />
                                        </td>
                                        <td className="px-4 py-2">
                                            <select className="form-select p-1 w-1/2 border rounded">
                                                <option></option>
                                                <option>Monday</option>
                                                <option>Tuesday</option>
                                                <option>Wednesday</option>
                                            </select>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>

                        </table>
                        <div className="w-full flex flex-row justify-center items-center">
                            <button className=" w-[5rem] bg-main-red text-white p-2 mt-2 m-2 rounded">Save</button>
                        </div>
                    </div>
                </div>

            </div>
        ),
        (
            <div className="w-full mt-10 p-10 border shadow" key={3}>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto bg-white shadow rounded-lg border">
                        <thead>
                            <tr className="bg-main-red text-white rounded-lg border">
                                <th className="px-4 py-2">Scope</th>
                                <th className="px-4 py-2">Restriction</th>
                            </tr>
                        </thead>
                        <tbody className="text-center border">
                            {Array.from({ length: rowCount }, (_, index) => (
                                <tr className="border" key={index}>
                                    <td className="px-4 py-2">
                                        <select className="form-select p-1 w-full border rounded">
                                            <option value="true"></option>
                                            <option value="true">Monday</option>
                                            <option>Tuesday</option>
                                            <option>Wednesday</option>
                                        </select>
                                    </td>
                                    <td className="px-4 py-2">
                                        <input type="text" className="form-control border w-3/4 rounded p-1 ml-2" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="w-full flex flex-row justify-center items-center">
                        <button
                            className="w-[5rem] bg-main-red text-white p-2 mt-2 m-2 rounded"
                            onClick={addMoreRows}
                        >
                            Add more
                        </button>
                    </div>
                </div>
            </div>
        ),
        (
            <div className="w-full mt-20 mb-20" key={4}>
                <div className="flex justify-center items-center"></div>
                <h1 className="text-5xl text-center mt-10 text-main-red">
                    Class record saved! Redirecting to the list of
                    Classes
                </h1>

            </div>
        ),
    ];



    // Main Layout
    return (
        // Row 1
        <div className="p-10 px-16 grid grid-cols-12 font-montserrat relative">
            <div className="col-span-12 flex justify-between items-center">
                <div className="px-5 py-1 bg-main-red text-white rounded-lg">
                    Classes
                </div>
                <div className="flex flex-col items-end">
                    <h1 className="font-bold">DELA CRUZ. JUAN PEPITO</h1>
                    <p className="text-xs">
                        Logged as: <span className="text-main-red">Administrator</span>
                    </p>
                </div>
            </div>

            <div className="col-span-12 mt-20">
                <div className="flex justify-between">
                    <div className="flex-start ">{renderStep()}</div>
                    <div className="flex justify-end">
                        {currentStep > 1 && (
                            <button
                                type="button"
                                onClick={handleBackStep}
                                className="mr-2 bg-main-red text-white p-2 flex justify-center items-center "
                            >
                                <FaAngleLeft />
                                {stepLabels[currentStep - 2]}
                            </button>
                        )}
                        {currentStep < 4 && (
                            <button
                                type="button"
                                onClick={handleNextStep}
                                className="bg-main-red text-white p-2 flex justify-center items-center"
                            >
                                {stepLabels[currentStep]}
                                <FaAngleRight />
                            </button>

                        )}
                    </div>
                </div>
            </div>

            <div className="col-span-12 mt-4">
                <div className="relative pt-4">
                    <div className="flex relative shadow">
                        <div className={` bg-main-red rounded-full h-2 ${getProgressWidth()}`}>
                            <div className="absolute top-0 left-0 transform  -translate-x-0 -translate-y-4 w-10 h-10 bg-main-red text-white rounded-full flex items-center justify-center">
                                1
                            </div>
                            <div className="absolute top-0 left-2/4 transform -translate-x-20 -translate-y-4">
                                <div className={`w-10 h-10 shadow border border-red-200  text-main-red rounded-full flex items-center justify-center ${getProgressWidth2()} `}>
                                    2
                                </div>
                            </div>
                            <div className="absolute top-0 left-3/4 transform -translate-x-20 -translate-y-4">
                                <div className={`w-10 h-10 border border-red-200 text-main-red rounded-full flex items-center justify-center ${getProgressWidth3()}`}>
                                    3
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 transform -translate-x-20 -translate-y-4">
                                <div className={`w-10 h-10 border border-red-200 text-main-red rounded-full flex items-center justify-center ${getProgressWidth4()}`}>
                                    <MdCheck />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Row 2 */}
            <div className="col-span-12 mt-4">
                <div className="relative pt-4">
                    <div className="flex relative">
                        {divs[currentStep - 1]}
                    </div>
                </div>
            </div>

            {/*Row 3 Pagination (right-aligned and smaller) */}
            <div className="col-span-12 mt-30">
                <div className="flex justify-end">
                    <DateTime />
                </div>
            </div>
        </div>
    );
};

export default ClassesAdd;

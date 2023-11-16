import DateTime from "@/components/DateTime";
import TempRoleSelector from "../../TempRoleSelector";
import React, { useState } from 'react';

const StudentGradChangePassword = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleUpdatePassword = () => {
        // Add your logic for updating the password here
        console.log('Updating password...');
    };

    return (
        <>
            <div className="p-10 px-16 grid grid-cols-12 font-montserrat ">
                {/* Row 1 */}
                <div className="col-span-12 flex justify-between items-center">
                    <div className="px-5 py-1 bg-main-red text-white rounded-lg ">
                        Change Password
                    </div>
                    <div className="flex flex-col items-end">
                        <h1 className="font-bold">DELA CRUZ. JUAN PEPITO</h1>
                        <p className="text-xs ">
                            Logged as: <TempRoleSelector />
                        </p>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="col-span-12 mt-12 flex flex-wrap justify-between">
                    <div className="w-full md:w-3/5 lg:w-3/5">
                        <div className="p-3 mt-3 rounded-lg bg-[#FFCDCF] text-main-red flex flex-col justify-between">
                            {/* Enrollment Status*/}
                            <div>
                                <span className="font-bold">You are not yet Officially Enrolled for this term.</span>
                            </div>

                            {/* Blockers */}
                            <div className="text-sm">
                                <span>Please settle your SFE (Student-Faculty Evaluation) before proceeding to enrollment.</span>
                            </div>

                            {/* Payment */}
                            <div className="text-sm">
                                <span>Please see and settle your remaining balance.</span>
                            </div>
                        </div>



                    </div>

                    <div className="w-full md:w-2/5 lg:w-2/5 ">

                        <div className="grid grid-cols-7 gap-2 p-4 rounded-lg border border-black text-xs">
                            {/* Student Number */}
                            <div className="col-span-2">
                                <span className="text-[#676C72] font-bold">Student No.:</span>
                            </div>
                            <div className="col-span-5">
                                <span className="text-main-red font-bold">2020-18564</span>
                            </div>

                            <div className="col-span-7 flex">
                                <div className="col-span-3">
                                    <label htmlFor="currentPassword" className="text-[#434343]">
                                        Current Password:
                                    </label>
                                </div>
                                <div className="col-span-4 col-start-4">
                                    <input
                                        type="password"
                                        id="currentPassword"
                                        className="w-full p-2 border border-[#434343] rounded"
                                        value={currentPassword}
                                        onChange={(e) => setCurrentPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="col-span-7 flex">
                                <label htmlFor="newPassword" className="text-[#434343]">
                                    New Password:
                                </label>
                                <input
                                    type="password"
                                    id="newPassword"
                                    className="w-full p-2 border border-[#434343] rounded"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                            </div>

                            <div className="col-span-7 flex">
                                <label htmlFor="confirmPassword" className="text-[#434343]">
                                    Confirm Password:
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    className="w-full p-2 border border-[#434343] rounded"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>

                            <button
                                className="col-span-3 col-start-5 bg-[#CA2B16] text-white p-2 rounded hover:bg-main-red"
                                onClick={handleUpdatePassword}
                            >
                                Update Password
                            </button>
                        </div>
                    </div>


                </div>

                <div className="col-span-12 fixed bottom-4 right-16 mt-8 text-right text-sm">
                    <DateTime />
                </div>

            </div>
        </>
    );
};

export default StudentGradChangePassword;

import DateTime from "@/components/DateTime";
import TempRoleSelector from "../../TempRoleSelector";
import { useState } from 'react';

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
                        <h1 className="font-bold">DELA CRUZ, JUAN PEPITO</h1>
                        <p className="text-xs ">
                            Logged as: <TempRoleSelector />
                        </p>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="col-span-12 mt-12 flex flex-wrap justify-between">
                    <div className="w-full md:w-1/2 lg:w-1/2 ">
                        <div className="px-24">
                            <div>
                                <span className="font-bold text-main-red">Change Password Utility</span>
                            </div>

                            <div className="text-sm text-justify mt-4">
                                You can now personalize your user password to make it easier for you to remember. However, you should ensure that it is not too easy for anyone else to guess!
                            </div>
                            
                            <div className="text-sm text-justify mt-4">
                                Your <span className="text-main-red">password must be at least 8-20 characters long only.</span> Making your password difficult for anyone else to crack will secure your CRS data.
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-1/2">

                        <div className="grid grid-cols-7 mr-24 gap-2 p-4 rounded-lg border border-black text-xs">
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

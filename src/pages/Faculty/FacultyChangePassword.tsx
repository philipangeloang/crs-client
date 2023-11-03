import { AiOutlineMail } from "react-icons/ai";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { BsGlobe2 } from "react-icons/bs";
import { BiUserPin } from "react-icons/bi";
import DateTime from "@/components/DateTime";

// Faculty Details
const employeeNumber = "2019-81725";

const FacultyChangePassword = () => {
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
              Logged as: <span className="text-main-red">Administrator</span>
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="col-span-12 mt-12">
          <div className="gap-8 flex flex-row justify-center items-center">
            <div className="w-1/3 gap-4 flex flex-col justify-start">
              <h1 className="font-bold text-[#434343] text-1xl mt-4">
                Change Password Utility
              </h1>
              <p>
              You can now personalize your user password to make it easier for you to remember. However, you should ensure that it is not too easy for anyone else to guess!
              </p>
              <p>
              Your password must be at least 8-20 characters long only. Making your password difficult for anyone else to crack will secure your CRS data.
              </p>
            </div>
            <div className="w-2/5 col-span-12 flex justify-start text-sm items-center">
              <form id="facultyChangePasswordForm" className="w-full">
                <div className="p-8 mt-4 gap-4 rounded-lg border border-black w-full flex flex-col justify-center">
                  <div className="flex flex-row justify-start items-center mb-4">
                    <span className="w-1/3 text-left font-bold">Employee No. :</span>
                    <span className="text-left font-bold">{employeeNumber}</span>
                  </div>
                  <div className="flex flex-row justify-start items-center">
                    <span className="w-1/2 text-left">Current Password :</span>
                    <input type="password" name="currentPassword" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold"/>
                  </div>
                  <div className="flex flex-row justify-start items-center">
                    <span className="w-1/2 text-left">New Password :</span>
                    <input type="password" name="newPassword" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold"/>
                  </div>
                  <div className="flex flex-row justify-start items-center">
                    <span className="w-1/2 text-left">Confirm Password :</span>
                    <input type="password" name="confirmPassword" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold"/>
                  </div>
                  <div className="col-span-12 gap-5 w-full flex justify-end items-center">
                    <input type="submit" id="changePasswordButton" className="px-4 py-2 bg-main-red text-white rounded-lg cursor-not-allowed opacity-50" value="Change Password" disabled/>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="col-span-12 flex justify-between items-end mt-24 text-[#434343] text-sm">
          <div className="flex gap-10">
            <div>Contacts</div>
            <div className="flex flex-col">
              <div className="grid grid-cols-12 gap-8 mb-4">
                <p className="flex gap-3 col-span-6">
                  <AiOutlineMail size={25} /> info@plm.edu.ph
                </p>
                <p className="flex gap-3 col-span-6">
                  <FiFacebook size={25} /> @PLM.Haribon
                </p>
              </div>

              <div className="grid grid-cols-12 gap-8 mb-4">
                <p className="flex gap-3 col-span-6">
                  <BsGlobe2 size={25} /> plm.edu.ph
                </p>
                <p className="flex gap-3 col-span-6">
                  <FiTwitter size={25} /> @PLM_Manila
                </p>
              </div>

              <div className="grid grid-cols-12 gap-8">
                <p className="flex gap-3 col-span-6">
                  <BiUserPin size={25} /> Campus Directory
                </p>
              </div>
            </div>
          </div>

          <DateTime />
        </div>
      </div>
    </>
  );
};

export default FacultyChangePassword;

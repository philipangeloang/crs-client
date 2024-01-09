import DateTime from "@/components/DateTime";
import TempRoleSelector from "../../TempRoleSelector";

// Faculty Details
const studentNumber = "2020-10000";

const UndergradChangePassword = () => {
  return (
    <>
      <div    className="p-10 px-16 grid grid-cols-12 font-montserrat
                            bg-cover bg-center min-h-screen items-center
                            bg-no-repeat" 
                    style = {{ 
                                backgroundImage: 'url(/gradient.png), url(/plm_bg.png)'
                            }}
                >
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
        <div className="col-span-12 mt-12">
          <div className="gap-8 flex flex-row justify-center items-center">
            <div className="w-1/3 gap-4 flex flex-col justify-start">
              <h1 className="font-bold text-main-red text-1xl mt-4">
                Change Password Utility
              </h1>
              <p>
              You can now personalize your user password to make it easier for you to remember. However, you should ensure that it is not too easy for anyone else to guess!
              </p>
              <div className = "flex-col">
                <p className = "text-main-red">Your password must be at least 8-20 characters long only</p>
                <p>Making your password difficult for anyone else to crack will secure your CRS data.</p>
              </div>
              
            </div>
            <div className="w-2/5 col-span-12 flex justify-start text-sm items-center">
              <form id="facultyChangePasswordForm" className="w-full">
                <div className="p-8 mt-4 gap-4 rounded-lg border bg-white border-black w-full flex flex-col justify-center">
                  <div className="flex flex-row justify-start items-center mb-4">
                    <span className="w-1/3 text-left font-bold">Student No. :</span>
                    <span className="text-left font-bold text-main-red">{studentNumber}</span>
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
          </div>

          <DateTime />
        </div>
      </div>
    </>
  );
};

export default UndergradChangePassword;

import React, { useState } from "react";
import useRoleStore from "@/store/ThemeStore";
import { FaSchool, FaChalkboardTeacher, FaCashRegister, FaUsersCog, FaUserGraduate, FaUser } from "react-icons/fa";
import { HeadingModal } from "@/components/ui/modal";

type UserDisplayProps = {
  name?: string;
  role?: string
  roleName?: string;
};

const TempRoleSelector: React.FC<UserDisplayProps> = ({ role = localStorage.getItem("userRole"), roleName = localStorage.getItem("userRoleName") }) => {
  const { setRole } = useRoleStore();

  const [roleChangeModalOpen, setRoleChangeModalOpen] = useState(false);

  return (
    <>
      <span className="text-main-red">{roleName}</span>
      <span className="ml-1 cursor-pointer hover:underline" onClick={() => setRoleChangeModalOpen(true)}>(Change)</span>

      {roleChangeModalOpen && (
        <HeadingModal modalHeading="Change Role" onClose={() => setRoleChangeModalOpen(false)}>
          <div className="w-full flex flex-col gap-2 justify-center items-center text-md">
            {role !== "administrator" && (
              <div onClick={() => {setRole("administrator")}} className="w-full flex flex-row gap-8 justify-start items-center p-4 rounded-lg duration-200 hover:bg-gray-200 cursor-pointer">
                <div><FaUsersCog size={48}></FaUsersCog></div>
                <div className="font-bold">Administrator</div>
              </div>
              )
            }
            {role !== "college" && (
              <div onClick={() => {setRole("college")}} className="w-full flex flex-row gap-8 justify-start items-center p-4 rounded-lg duration-200 hover:bg-gray-200 cursor-pointer">
                <div><FaSchool size={48}></FaSchool></div>
                <div className="font-bold">College</div>
              </div>
              )
            }
            {role !== "faculty" && (
              <div onClick={() => {setRole("faculty")}} className="w-full flex flex-row gap-8 justify-start items-center p-4 rounded-lg duration-200 hover:bg-gray-200 cursor-pointer">
                <div><FaChalkboardTeacher size={48}></FaChalkboardTeacher></div>
                <div className="font-bold">Faculty</div>
              </div>
              )
            }
            {role !== "student u" && (
              <div onClick={() => {setRole("student u")}} className="w-full flex flex-row gap-8 justify-start items-center p-4 rounded-lg duration-200 hover:bg-gray-200 cursor-pointer">
                <div><FaUser size={48}></FaUser></div>
                <div className="font-bold">Undergraduate Student</div>
              </div>
              )
            }
            {role !== "student g" && (
              <div onClick={() => {setRole("student g")}} className="w-full flex flex-row gap-8 justify-start items-center p-4 rounded-lg duration-200 hover:bg-gray-200 cursor-pointer">
                <div><FaUserGraduate size={48}></FaUserGraduate></div>
                <div className="font-bold">Graduate Student</div>
              </div>
              )
            }
            {role !== "cashier" && (
              <div onClick={() => {setRole("cashier")}} className="w-full flex flex-row gap-8 justify-start items-center p-4 rounded-lg duration-200 hover:bg-gray-200 cursor-pointer">
                <div><FaCashRegister size={48}></FaCashRegister></div>
                <div className="font-bold">Cashier</div>
              </div>
              )
            }
          </div>
        </HeadingModal>
      )}
    </>
  );
};

export default TempRoleSelector;
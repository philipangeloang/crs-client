import React, { useEffect, useState } from "react";
import useRoleStore from "@/store/ThemeStore";
import { FaSchool, FaChalkboardTeacher, FaCashRegister, FaUsersCog, FaUserGraduate, FaUser } from "react-icons/fa";
import { HeadingModal } from "@/components/ui/modal";
import axios from "axios";

type UserDisplayProps = {
  roles: () => Promise<UserRole[]>;
  name?: string;
  role?: string
  roleName?: string;
};

interface UserRole {
  id: number;
  name: string;
}

interface UserInfo {
  roles: UserRole[];
}

async function getUserData(): Promise<UserInfo> {
  const apiUrl = 'https://13.229.75.4/api/me';
  try {
    const response = await axios.get(apiUrl, {
      headers: {
          'Content-Type': 'application/json',
      },
      withCredentials: true /* Necessary for storing cookies */
    });
    return response.data as UserInfo;
  } catch (error) {
    console.error('API request error:', error);
  }
}

const TempRoleSelector: React.FC<UserDisplayProps> = ({ roles = async () => {
  const data = await getUserData();
  return data.roles;},
  role = localStorage.getItem("userRole"),
  roleName = localStorage.getItem("userRoleName") }) => {

  const { setRole } = useRoleStore();
  const [roleChangeModalOpen, setRoleChangeModalOpen] = useState(false);

  const [userRoles, setUserRoles] = useState<UserRole[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedUserRoles = await roles();
        setUserRoles(fetchedUserRoles);
      } catch (error) {
        console.error('Error fetching user roles:', error);
      }
    };

    fetchData();
  }, [roles]);

  return (
    <>
      <span className="text-main-red">{roleName}</span>
      <span className="ml-1 cursor-pointer hover:underline" onClick={() => setRoleChangeModalOpen(true)}>(Change)</span>

      {roleChangeModalOpen && (
        <HeadingModal modalHeading="Change Role" onClose={() => setRoleChangeModalOpen(false)}>
          <div className="w-full flex flex-col gap-2 justify-center items-center text-md">
            {(userRoles.some(role => role.name === 'ADMIN') && role !== 'ADMIN') && (
              <div onClick={() => {setRole("ADMIN"); window.location.reload();}} className="w-full flex flex-row gap-8 justify-start items-center p-4 rounded-lg duration-200 hover:bg-gray-200 cursor-pointer">
                <div><FaUsersCog size={48}></FaUsersCog></div>
                <div className="font-bold">Administrator</div>
              </div>
              )
            }
            {(userRoles.some(role => role.name === 'COLLEGE') && role !== 'COLLEGE') && (
              <div onClick={() => {setRole("COLLEGE"); window.location.reload();}} className="w-full flex flex-row gap-8 justify-start items-center p-4 rounded-lg duration-200 hover:bg-gray-200 cursor-pointer">
                <div><FaSchool size={48}></FaSchool></div>
                <div className="font-bold">College</div>
              </div>
              )
            }
            {(userRoles.some(role => role.name === 'FACULTY') && role !== 'FACULTY') && (
              <div onClick={() => {setRole("FACULTY"); window.location.reload();}} className="w-full flex flex-row gap-8 justify-start items-center p-4 rounded-lg duration-200 hover:bg-gray-200 cursor-pointer">
                <div><FaChalkboardTeacher size={48}></FaChalkboardTeacher></div>
                <div className="font-bold">Faculty</div>
              </div>
              )
            }
            {(userRoles.some(role => role.name === 'STUDENT_UNDERGRADUATE') && role !== 'STUDENT_UNDERGRADUATE') && (
              <div onClick={() => {setRole("STUDENT_UNDERGRADUATE"); window.location.reload();}} className="w-full flex flex-row gap-8 justify-start items-center p-4 rounded-lg duration-200 hover:bg-gray-200 cursor-pointer">
                <div><FaUser size={48}></FaUser></div>
                <div className="font-bold">Undergraduate Student</div>
              </div>
              )
            }
            {(userRoles.some(role => role.name === 'STUDENT_GRADUATE') && role !== 'STUDENT_GRADUATE') && (
              <div onClick={() => {setRole("STUDENT_GRADUATE"); window.location.reload();}} className="w-full flex flex-row gap-8 justify-start items-center p-4 rounded-lg duration-200 hover:bg-gray-200 cursor-pointer">
                <div><FaUserGraduate size={48}></FaUserGraduate></div>
                <div className="font-bold">Graduate Student</div>
              </div>
              )
            }
            {(userRoles.some(role => role.name === 'CASHIER') && role !== 'CASHIER') && (
              <div onClick={() => {setRole("CASHIER"); window.location.reload();}} className="w-full flex flex-row gap-8 justify-start items-center p-4 rounded-lg duration-200 hover:bg-gray-200 cursor-pointer">
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
import { FaSchool, FaChalkboardTeacher, FaCashRegister, FaUsersCog, FaUserGraduate, FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import useRoleStore from "@/store/ThemeStore";

interface UserRole {
  id: number;
  name: string;
}

interface RoleSelectorProps {
  roles: () => Promise<UserRole[]>;
}

const RoleSelector: React.FC<RoleSelectorProps> = ({ roles }) => {
  const { setRole } = useRoleStore();
  const role = localStorage.getItem("userRole");

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
      <div>
        <div className="w-full flex flex-col gap-2 justify-center items-center text-md">
          {(userRoles.some(role => role.name === 'ADMIN') && role !== 'ADMIN') && (
            <div onClick={() => {setRole("ADMIN")}} className="w-full flex flex-row gap-8 justify-start items-center p-4 rounded-lg duration-200 hover:bg-gray-200 cursor-pointer">
              <div><FaUsersCog size={48}></FaUsersCog></div>
              <div className="font-bold">Administrator</div>
            </div>
            )
          }
          {(userRoles.some(role => role.name === 'COLLEGE') && role !== 'COLLEGE') && (
            <div onClick={() => {setRole("COLLEGE")}} className="w-full flex flex-row gap-8 justify-start items-center p-4 rounded-lg duration-200 hover:bg-gray-200 cursor-pointer">
              <div><FaSchool size={48}></FaSchool></div>
              <div className="font-bold">College</div>
            </div>
            )
          }
          {(userRoles.some(role => role.name === 'FACULTY') && role !== 'FACULTY') && (
            <div onClick={() => {setRole("FACULTY")}} className="w-full flex flex-row gap-8 justify-start items-center p-4 rounded-lg duration-200 hover:bg-gray-200 cursor-pointer">
              <div><FaChalkboardTeacher size={48}></FaChalkboardTeacher></div>
              <div className="font-bold">Faculty</div>
            </div>
            )
          }
          {(userRoles.some(role => role.name === 'STUDENT_UNDERGRADUATE') && role !== 'STUDENT_UNDERGRADUATE') && (
            <div onClick={() => {setRole("STUDENT_UNDERGRADUATE")}} className="w-full flex flex-row gap-8 justify-start items-center p-4 rounded-lg duration-200 hover:bg-gray-200 cursor-pointer">
              <div><FaUser size={48}></FaUser></div>
              <div className="font-bold">Undergraduate Student</div>
            </div>
            )
          }
          {(userRoles.some(role => role.name === 'STUDENT_GRADUATE') && role !== 'STUDENT_GRADUATE') && (
            <div onClick={() => {setRole("STUDENT_GRADUATE")}} className="w-full flex flex-row gap-8 justify-start items-center p-4 rounded-lg duration-200 hover:bg-gray-200 cursor-pointer">
              <div><FaUserGraduate size={48}></FaUserGraduate></div>
              <div className="font-bold">Graduate Student</div>
            </div>
            )
          }
          {(userRoles.some(role => role.name === 'CASHIER') && role !== 'CASHIER') && (
            <div onClick={() => {setRole("CASHIER")}} className="w-full flex flex-row gap-8 justify-start items-center p-4 rounded-lg duration-200 hover:bg-gray-200 cursor-pointer">
              <div><FaCashRegister size={48}></FaCashRegister></div>
              <div className="font-bold">Cashier</div>
            </div>
            )
          }
        </div>
      </div>
    </>
  );
};

export default RoleSelector;

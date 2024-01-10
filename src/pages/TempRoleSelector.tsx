/* eslint-disable @typescript-eslint/no-explicit-any */
import useRoleStore from "@/store/ThemeStore";
import api from "../api/fetch";
import { useEffect, useState } from "react";
import { HiXMark } from "react-icons/hi2";
import {
  FaCashRegister,
  FaChalkboardTeacher,
  FaSchool,
  FaUser,
  FaUserGraduate,
  FaUsersCog,
} from "react-icons/fa";

const TempRoleSelector = () => {
  const { setRole, setAvailRoles, role } = useRoleStore();

  const [changeRoleModalOpen, setChangeRoleModalOpen] = useState(false);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await api.get("/api/me", {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });

        const data = response.data;
        setAvailRoles(data.roles);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRoles();
  }, [setAvailRoles]);

  return (
    <>
      <span
        className="text-main-red font-bold cursor-pointer"
        onClick={() => {
          setChangeRoleModalOpen(!changeRoleModalOpen);
        }}
      >
        {role
          .split("_")
          .filter((x) => x.length > 0)
          .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
          .join(" ")
          .toLowerCase()}
      </span>

      {changeRoleModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg w-full py-4 max-w-lg">
            <div className="flex justify-between items-center p-4 px-14">
              <h2 className="text-xl text-main-red">Roles Available</h2>
              <button
                className="flex items-center justify-center text-gray-700 border border-gray-700 rounded-full h-6 w-6"
                onClick={() => {
                  setChangeRoleModalOpen(!changeRoleModalOpen);
                }}
              >
                <HiXMark />
              </button>
            </div>
            <hr className="w-full mb-3 " />

            <div className="w-full px-14 flex flex-col gap-2 justify-center items-center text-md">
              <div
                onClick={() => {
                  setRole("ADMIN");
                }}
                className="w-full flex flex-row gap-8 justify-start items-center p-4 rounded-lg duration-200 hover:bg-gray-200 cursor-pointer"
              >
                <div>
                  <FaUsersCog size={48}></FaUsersCog>
                </div>
                <div className="font-bold">Administrator</div>
              </div>

              <div
                onClick={() => {
                  setRole("COLLEGE");
                }}
                className="w-full flex flex-row gap-8 justify-start items-center p-4 rounded-lg duration-200 hover:bg-gray-200 cursor-pointer"
              >
                <div>
                  <FaSchool size={48}></FaSchool>
                </div>
                <div className="font-bold">College</div>
              </div>

              <div
                onClick={() => {
                  setRole("FACULTY");
                }}
                className="w-full flex flex-row gap-8 justify-start items-center p-4 rounded-lg duration-200 hover:bg-gray-200 cursor-pointer"
              >
                <div>
                  <FaChalkboardTeacher size={48}></FaChalkboardTeacher>
                </div>
                <div className="font-bold">Faculty</div>
              </div>

              <div
                onClick={() => {
                  setRole("STUDENT_UNDERGRADUATE");
                }}
                className="w-full flex flex-row gap-8 justify-start items-center p-4 rounded-lg duration-200 hover:bg-gray-200 cursor-pointer"
              >
                <div>
                  <FaUser size={48}></FaUser>
                </div>
                <div className="font-bold">Undergraduate Student</div>
              </div>

              <div
                onClick={() => {
                  setRole("STUDENT_GRADUATE");
                }}
                className="w-full flex flex-row gap-8 justify-start items-center p-4 rounded-lg duration-200 hover:bg-gray-200 cursor-pointer"
              >
                <div>
                  <FaUserGraduate size={48}></FaUserGraduate>
                </div>
                <div className="font-bold">Graduate Student</div>
              </div>

              <div
                onClick={() => {
                  setRole("CASHIER");
                }}
                className="w-full flex flex-row gap-8 justify-start items-center p-4 rounded-lg duration-200 hover:bg-gray-200 cursor-pointer"
              >
                <div>
                  <FaCashRegister size={48}></FaCashRegister>
                </div>
                <div className="font-bold">Cashier</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TempRoleSelector;

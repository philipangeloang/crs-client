import { AiOutlineMail } from "react-icons/ai";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { BsGlobe2 } from "react-icons/bs";
import { BiUserPin } from "react-icons/bi";
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import TempRoleSelector from "../TempRoleSelector";
=======
import { Link } from "react-router-dom";
import React, { useState } from 'react';
>>>>>>> Stashed changes

=======
import { Link, Outlet } from "react-router-dom";
import DateTime from "@/components/DateTime";
>>>>>>> Stashed changes
const RootLayoutCashier = () => {
  return (
    <>
      <div className="mx-auto max-w-[100rem] px-16 flex flex-col my-3">
        <div className="flex flex-col justify-between items-center | md:flex-row ">
          <img src="/plm_logo.png" className="h-20" />
          <h1 className="font-montserrat font-bold text-xl text-[#434343] mt-5 | md:mt-0">
            The PLM Online Campus
          </h1>
        </div>
      </div>
      <div>
        <img src="/divider_signin.png" className="w-full h-3" />
      </div>

      <div className="mx-auto max-w-[100rem] px-16 flex flex-col my-3">
        <div className="p-10 px-16 grid grid-cols-12 font-montserrat ">
          {/* Row 1 */}
          <div className="col-span-12 flex justify-between items-center">
            <div className="px-5 py-1 bg-main-red text-white rounded-lg ">
              Home
            </div>
            <div className="flex flex-col items-end">
              <h1 className="font-bold">DELA CRUZ. JUAN PEPITO</h1>
              <p className="text-xs ">
                Logged as: <TempRoleSelector />
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="col-span-12 mt-20">
            <h1 className="text-3xl font-normal mb-2">
              Welcome to the Official CRS Website of
            </h1>
            <h1 className="text-3xl font-bold text-main-red">
              Pamantasan ng Lungsod ng Maynila
            </h1>
<<<<<<< Updated upstream
            <div className="flex items-center mt-5">
            <span className="mr-2">
              Go to
            </span>
            <Link to="/home/payment-student">
            <button className="btn border p-2 bg-main-red text-white">
                Student Payment Status
            </button>
            </Link>
          
            </div>
      
=======
            <Link to="payment-student">
              <span className="mr-2">
                Go to
              </span>
              <button className=" bg-main-red text-white rounded-lg p-2 mt-3">
                Student Payment Status 
              </button>
            </Link>
>>>>>>> Stashed changes
          </div>

          {/* Row 3 */}
          <div className="col-span-12 flex justify-between items-end mt-96 text-[#434343] text-sm">
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
            <div className="flex flex-col items-end">
              <DateTime/>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default RootLayoutCashier;

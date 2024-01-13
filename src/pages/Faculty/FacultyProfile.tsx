import DateTime from "@/components/DateTime";
import api from "@/api/fetch";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const FacultyProfile: React.FC = () => {
  function fetchProfile() {
    api
      .get("api/me", {
        withCredentials: true,
      })
      .then((response) => {
        setProfile(response.data.staff_info);
        // console.log("Response:", response.data.staff_info);
        // Handle the response data as needed
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle the error
      });
  }

  const [ profile, setProfile ] = useState({
      "staff_id": null,
      "user_account_id": null,
      "address_id": null,
      "employee_number": null,
      "designation": null,
      "first_name": null,
      "last_name": null,
      "middle_name": null,
      "name_extension": null,
      "pedigree": null,
      "sex": null,
      "civil_status": null,
      "citizenship": null,
      "birth_date": null,
      "birth_place": null,
      "contact_no": null,
      "personal_email": null,
      "TIN_no": null,
      "GSIS_no": null,
      "created_at": null,
      "updated_at": null,
      "address": {
          "address_id": null,
          "street_address": null,
          "city": null,
          "province": null,
          "zip_code": null,
          "telephone_no": null
      },
      "instructor_info": {
          "instructor_id": null,
          "staff_id": null,
          "instructor_code": null,
          "first_name": null,
          "middle_name": null,
          "last_name": null,
          "teaching_position": null,
          "employment_type": null
      }
  });

  useEffect(() => {
    fetchProfile();
  }, [])

  return (
    <>
      <div className="p-10 px-16 grid grid-cols-12 font-montserrat ">
        {/* Row 1 */}
        <div className="col-span-12 flex justify-between items-center">
          <div className="px-5 py-1 border-2 border-main-red bg-main-red text-white rounded-lg ">
            Profile
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
          <div className="col-span-12 gap-5 flex justify-start items-center">
            <div className="px-4 py-2 border-2 border-main-blue bg-main-blue text-white rounded-lg ">
              View Details
            </div>
            <div className="px-4 py-2 border-2 border-main-red bg-main-red text-white rounded-lg cursor-pointer">
              <Link
                to="/home/profile/edit"
                state={{ profile }}
              >
                Edit Details
              </Link>
            </div>
          </div>

          <h1 className="font-bold text-[#434343] text-1xl mt-4">
            Personal Details
          </h1>
          <div className="col-span-12 flex justify-start text-sm items-center">
            <div className="p-4 mt-4 gap-4 rounded-lg border border-black w-full flex flex-col justify-center">
              <div className="w-full flex flex-row justify-start">
                <div className="w-1/3 flex flex-row justify-start items-center">
                  <span className="w-1/3 text-left">Employee No. :</span>
                  <span className="w-2/3 text-left font-bold">{profile.employee_number}</span>
                </div>
              </div>
              <div className="w-full flex flex-row justify-start">
                <div className="w-1/3 flex flex-row justify-start items-center">
                  <span className="w-1/3 text-left">Full Name :</span>
                  <span className="w-2/3 text-left font-bold">{profile.first_name} {profile.middle_name} {profile.last_name} {profile.name_extension}</span>
                </div>
                <div className="w-1/3 flex flex-row justify-start items-center">
                  <span className="w-1/3 text-left">Pedigree :</span>
                  <span className="w-2/3 text-left font-bold">{profile.pedigree}</span>
                </div>
              </div>
              <div className="w-full flex flex-row justify-start">
                <div className="w-1/3 flex flex-row justify-start items-center">
                  <span className="w-1/3 text-left">Birth Date :</span>
                  <span className="w-2/3 text-left font-bold">{profile.birth_date}</span>
                </div>
                <div className="w-1/3 flex flex-row justify-start items-center">
                  <span className="w-1/3 text-left">Birth Place :</span>
                  <span className="w-2/3 text-left font-bold">{profile.birth_place}</span>
                </div>
              </div>
              <div className="w-full flex flex-row justify-start">
                <div className="w-1/3 flex flex-row justify-start items-center">
                  <span className="w-1/3 text-left">Gender :</span>
                  <span className="w-2/3 text-left font-bold">{profile.sex}</span>
                </div>
                <div className="w-1/3 flex flex-row justify-start items-center">
                  <span className="w-1/3 text-left">Civil Status :</span>
                  <span className="w-2/3 text-left font-bold">{profile.civil_status}</span>
                </div>
                <div className="w-1/3 flex flex-row justify-start items-center">
                  <span className="w-1/3 text-left">Citizenship :</span>
                  <span className="w-2/3 text-left font-bold">{profile.citizenship}</span>
                </div>
              </div>
              <div className="w-full flex flex-row justify-start">
                <div className="w-1/3 flex flex-row justify-start items-center">
                  <span className="w-1/3 text-left">Mobile No. :</span>
                  <span className="w-2/3 text-left font-bold">{profile.contact_no}</span>
                </div>
                <div className="w-1/3 flex flex-row justify-start items-center">
                  <span className="w-1/3 text-left">Email Address :</span>
                  <span className="w-2/3 text-left font-bold">{profile.personal_email}</span>
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="font-bold text-[#434343] text-1xl mt-4">
            Employment Details
          </h1>
          <div className="col-span-12 flex justify-start text-sm items-center">
            <div className="p-4 mt-4 gap-4 rounded-lg border border-black w-full flex flex-col justify-center">
              <div className="w-full flex flex-row justify-start">
                <div className="w-1/3 flex flex-row justify-start items-center">
                  <span className="w-1/3 text-left">TIN :</span>
                  <span className="w-2/3 text-left font-bold">{profile.TIN_no}</span>
                </div>
                <div className="w-1/3 flex flex-row justify-start items-center">
                  <span className="w-1/3 text-left">GSIS No. :</span>
                  <span className="w-2/3 text-left font-bold">{profile.GSIS_no}</span>
                </div>
                <div className="w-1/3 flex flex-row justify-start items-center">
                  <span className="w-1/3 text-left">Instructor Code :</span>
                  <span className="w-2/3 text-left font-bold">{profile.instructor_info.instructor_code}</span>
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="font-bold text-[#434343] text-1xl mt-4">
            Current Address
          </h1>
          <div className="col-span-12 flex justify-start text-sm items-center">
            <div className="p-4 mt-4 gap-4 rounded-lg border border-black w-full flex flex-col justify-center">
              <div className="w-full flex flex-row justify-start">
                <div className="w-1/2 flex flex-row justify-start items-center">
                  <span className="w-1/4 text-left">Address :</span>
                  <span className="w-full text-left font-bold">{profile.address.street_address}, {profile.address.city}, {profile.address.province} {profile.address.zip_code}</span>
                </div>
              </div>
              <div className="w-full flex flex-row justify-start">
                <div className="w-1/2 flex flex-row justify-start items-center">
                  <span className="w-1/4 text-left">Phone No. :</span>
                  <span className="w-full text-left font-bold">{profile.address.telephone_no}</span>
                </div>
              </div>
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

export default FacultyProfile;

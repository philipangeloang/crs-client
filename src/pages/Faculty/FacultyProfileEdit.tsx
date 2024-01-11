import DateTime from "@/components/DateTime";
import api from "@/api/fetch";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const FacultyProfileEdit: React.FC = () => {
  const location = useLocation();
  const { profile } = location.state || { profile : null };

  function editProfile() {
    const first_name = document.getElementById('faculty-edit-first_name') as HTMLInputElement;
    const last_name = document.getElementById('faculty-edit-last_name') as HTMLInputElement;
    const middle_name = document.getElementById('faculty-edit-middle_name') as HTMLInputElement;
    const name_extension = document.getElementById('faculty-edit-name_extension') as HTMLInputElement;
    const pedigree = document.getElementById('faculty-edit-pedigree') as HTMLInputElement;
    const sex = document.getElementById('faculty-edit-sex') as HTMLInputElement;
    const civil_status = document.getElementById('faculty-edit-civil_status') as HTMLInputElement;
    const citizenship = document.getElementById('faculty-edit-citizenship') as HTMLInputElement;
    const birth_date = document.getElementById('faculty-edit-birth_date') as HTMLInputElement;
    const birth_place = document.getElementById('faculty-edit-birth_place') as HTMLInputElement;
    const contact_no = document.getElementById('faculty-edit-contact_no') as HTMLInputElement;
    const personal_email = document.getElementById('faculty-edit-personal_email') as HTMLInputElement;
    const TIN_no = document.getElementById('faculty-edit-TIN_no') as HTMLInputElement;
    const GSIS_no = document.getElementById('faculty-edit-GSIS_no') as HTMLInputElement;
    const street_address = document.getElementById('faculty-edit-address-street_address') as HTMLInputElement;
    const city = document.getElementById('faculty-edit-address-city') as HTMLInputElement;
    const province = document.getElementById('faculty-edit-address-province') as HTMLInputElement;
    const zip_code = document.getElementById('faculty-edit-address-zip_code') as HTMLInputElement;
    const telephone_no = document.getElementById('faculty-edit-address-telephone_no') as HTMLInputElement;
    // Add more variables for additional input and select elements

    // Create a JSON object with the collected values
    const editedProfile = {
      "staff_id": profile.staff_id,
      "first_name": first_name ? first_name.value : '',
      "last_name": last_name ? last_name.value : '',
      "middle_name": middle_name ? middle_name.value : '',
      "name_extension": name_extension ? name_extension.value : '',
      "pedigree": pedigree ? pedigree.value : '',
      "sex": sex ? sex.value : '',
      "civil_status": civil_status ? civil_status.value : '',
      "citizenship": citizenship ? citizenship.value : '',
      "birth_date": birth_date ? birth_date.value : '',
      "birth_place": birth_place ? birth_place.value : '',
      "contact_no": contact_no ? contact_no.value : '',
      "personal_email": personal_email ? personal_email.value : '',
      "TIN_no": TIN_no ? TIN_no.value : '',
      "GSIS_no": GSIS_no ? GSIS_no.value : '',
      "address": {
        "street_address": street_address ? street_address.value : '',
        "city": city ? city.value : '',
        "province": province ? province.value : '',
        "zip_code": zip_code ? zip_code.value : '',
        "telephone_no": telephone_no ? telephone_no.value : ''
      }
    };

    console.log(editedProfile);
    const route = "api/staffs/" + profile.staff_id;

    api
      .put(route, editedProfile, {
        withCredentials: true,
      })
      .then((response) => {
        window.location.href = "/home/profile"
        // Handle the response data as needed
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle the error
      });
  }
  
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
          <div className="col-span-12 gap-5 w-full flex justify-end items-center">
            <div onClick={editProfile} className="px-4 py-2 border-2 border-main-red bg-main-red text-white rounded-lg cursor-pointer">
              Save Details
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
                  <span className="w-1/3 text-left">Last Name :</span>
                  <input required type="text" id="faculty-edit-last_name" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold" defaultValue={profile.last_name}/>
                </div>
                <div className="w-1/3 flex flex-row justify-start items-center">
                  <span className="w-1/3 text-left">First Name :</span>
                  <input required type="text" id="faculty-edit-first_name" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold" defaultValue={profile.first_name}/>
                </div>
                <div className="w-1/3 flex flex-row justify-start items-center">
                  <span className="w-1/3 text-left">Middle Name :</span>
                  <input type="text" id="faculty-edit-middle_name" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold" defaultValue={profile.middle_name} placeholder="Leave blank if not applicable"/>
                </div>
              </div>
              <div className="w-full flex flex-row justify-start">
                <div className="w-1/3 flex flex-row justify-start items-center">
                  <span className="w-1/3 text-left">Name Extension :</span>
                  <input type="text" id="faculty-edit-name_extension" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold" defaultValue={profile.name_extension} placeholder="ex. (Sr., Jr., III, IV)"/>
                </div>
                <div className="w-1/3 flex flex-row justify-start items-center">
                  <span className="w-1/3 text-left">Maiden Name :</span>
                  <input type="text" id="faculty-edit-maiden_name" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold" defaultValue="" placeholder="Leave blank if not applicable"/>
                </div>
                <div className="w-1/3 flex flex-row justify-start items-center">
                  <span className="w-1/3 text-left">Pedigree :</span>
                  <select id="faculty-edit-pedigree" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold" defaultValue={profile.pedigree}>
                    <option value="None" selected>None</option>
                  </select>
                </div>
              </div>
              <div className="w-full flex flex-row justify-start">
                <div className="w-1/3 flex flex-row justify-start items-center">
                  <span className="w-1/3 text-left">Birth Date :</span>
                  <input required type="date" id="faculty-edit-birth_date" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold" defaultValue={profile.birth_date}/>
                </div>
                <div className="w-1/3 flex flex-row justify-start items-center">
                  <span className="w-1/3 text-left">Birth Place :</span>
                  <input required type="text" id="faculty-edit-birth_place" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold" defaultValue={profile.birth_place}/>
                </div>
              </div>
              <div className="w-full flex flex-row justify-start">
                <div className="w-1/3 flex flex-row justify-start items-center">
                  <span className="w-1/3 text-left">Gender :</span>
                  <select required id="faculty-edit-sex" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold" defaultValue={profile.sex}>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                  </select>
                </div>
                <div className="w-1/3 flex flex-row justify-start items-center">
                  <span className="w-1/3 text-left">Civil Status :</span>
                  <select required id="faculty-edit-civil_status" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold" defaultValue={profile.civil_status}>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Widowed">Widowed</option>
                    <option value="Legally Separated">Legally Separated</option>
                  </select>
                </div>
                <div className="w-1/3 flex flex-row justify-start items-center">
                  <span className="w-1/3 text-left">Citizenship :</span>
                  <input required type="text" id="faculty-edit-citizenship" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold" defaultValue={profile.citizenship}/>
                </div>
              </div>
              <div className="w-full flex flex-row justify-start">
                <div className="w-1/3 flex flex-row justify-start items-center">
                  <span className="w-1/3 text-left">Mobile No. :</span>
                  <input required type="number" id="faculty-edit-contact_no" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold" defaultValue={profile.contact_no} placeholder="09XXXXXXXXX"/>
                </div>
                <div className="w-1/3 flex flex-row justify-start items-center">
                  <span className="w-1/3 text-left">Email Address :</span>
                  <input required type="text" id="faculty-edit-personal_email" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold" defaultValue={profile.personal_email} placeholder="example@domain.com"/>
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
                  <input required type="text" id="faculty-edit-TIN_no" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold" defaultValue={profile.TIN_no} placeholder="XXX-XXX-XXX-XXX"/>
                </div>
                <div className="w-1/3 flex flex-row justify-start items-center">
                  <span className="w-1/3 text-left">GSIS No. :</span>
                  <input required type="text" id="faculty-edit-GSIS_no" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold" defaultValue={profile.GSIS_no} placeholder="XXXX-XXXX-XXXX-XXXX"/>
                </div>
                <div className="w-1/3 flex flex-row justify-start items-center">
                  <span className="w-1/3 text-left">Instructor Code :</span>
                  <span required className="w-2/3 text-left font-bold">{profile.instructor_info.instructor_code}</span>
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
                <div className="w-full flex flex-row justify-start items-center">
                  <span className="w-1/2 text-left">Address :</span>
                  <input type="text" id="faculty-edit-address-street_address" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold" defaultValue={profile.address.street_address} placeholder="House No., Street Name"/>
                  <input type="text" id="faculty-edit-address-city" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold" defaultValue={profile.address.city} placeholder="City"/>
                  <input type="text" id="faculty-edit-address-province" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold" defaultValue={profile.address.province} placeholder="Province"/>
                  <input type="number" id="faculty-edit-address-zip_code" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold" defaultValue={profile.address.zip_code} placeholder="ZIP Code"/>
                </div>
              </div>
              <div className="w-full flex flex-row justify-start">
                <div className="w-1/2 flex flex-row justify-start items-center">
                  <span className="w-1/4 text-left">Phone No. :</span>
                  <input type="text" id="faculty-edit-address-telephone_no" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold" defaultValue={profile.address.telephone_no}/>
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

export default FacultyProfileEdit;

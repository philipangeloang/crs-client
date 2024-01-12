/* eslint-disable @typescript-eslint/no-explicit-any */
import DateTime from "@/components/DateTime";
import { useState, useEffect } from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { FaEdit, FaTrash } from "react-icons/fa";
import api from "../../api/fetch";

interface FormData {
  staff_id: number;
  instructor_id: number;
  instructor_code: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  teaching_position: string;
  employment_type: string;
  personal_email: string;
  contact_no: string;
  sex: string;
  address_id: string;
  birth_date: string;
  // Add other fields as needed
}

const Faculty = () => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [facultyModalOpen, setFacultyModalOpen] = useState(false);
  const [selectedFaculty] = useState<{
    id: number;
    identity: string;
    name: string;
    designation: string;
    college: string;
  } | null>(null);

  const [faculty, setFaculty] = useState<any[]>([]);
  const [dept, setDept] = useState<any[]>([]);
  const [staff, setStaff] = useState<any[]>([]);

  console.log(dept);

  const fetchDataFromFacultyEndpoint = async () => {
    try {
      const response = await api.get("api/instructors", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      const data = await response.data.data;

      if (data) {
        setFaculty(data);
      }
      console.log("API response from api/instructor", data);
    } catch (error) {
      console.error("API request error:", error);
    }
  };

  const fetchDataFromDepartmentEndpoint = async () => {
    try {
      const response = await api.get("api/departments", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      const data = await response.data.data;

      if (data) {
        setDept(data);
      }
      console.log("API response from api/department", data);
    } catch (error) {
      console.error("API request error:", error);
    }
  };
  const fetchDataFromStaffEndpoint = async () => {
    try {
      const response = await api.get("api/staffs", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      const data = await response.data.data;

      if (data) {
        setStaff(data);
      }
      console.log("API response from api/staffs", data);
    } catch (error) {
      console.error("API request error:", error);
    }
  };

  const [formData, setFormData] = useState<FormData>({
    staff_id: 0, // Provide default values for each field based on your data types
    instructor_id: 0,
    instructor_code: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    teaching_position: "",
    employment_type: "",
    personal_email: "",
    contact_no: "",
    sex: "",
    address_id: "",
    birth_date: "",
    // Add other fields with default values as needed
  });
  const handleInstructorCodeChange = (selectedValue: string) => {
    // Assuming staff is an array containing all staff data
    const selectedStaff = staff.find(
      (item) => `${item.staff_id}-${item.employee_number}` === selectedValue
    );

    if (selectedStaff) {
      setFormData({
        staff_id: selectedStaff.staff_id,
        instructor_id: selectedStaff.instructor_id,
        instructor_code: selectedValue,
        first_name: selectedStaff.first_name || "",
        middle_name: selectedStaff.middle_name || "",
        last_name: selectedStaff.last_name || "",
        teaching_position: selectedStaff.teaching_position || "",
        employment_type: selectedStaff.employment_type || "",
        personal_email: selectedStaff.personal_email || "",
        contact_no: selectedStaff.contact_no || "",
        sex: selectedStaff.sex || "male",
        address_id: selectedStaff.address_id || "",
        birth_date: selectedStaff.birth_date || "",
        // Add other fields as needed
      });
    }
  };

  useEffect(() => {
    fetchDataFromStaffEndpoint();
    fetchDataFromFacultyEndpoint();
    fetchDataFromDepartmentEndpoint();
  }, []);

  const handleSubmit = async () => {
    try {
      // Assuming instructor_id is generated on the backend (e.g., auto-incremented in the database)
      // Prepare the form data to match the "instructors" table structure
      const instructorData = {
        staff_id: formData.staff_id,
        instructor_code: formData.instructor_code,
        first_name: formData.first_name,
        middle_name: formData.middle_name,
        last_name: formData.last_name,
        teaching_position: "staff",
        employment_type: "regular",
      };

      // You can send the form data to your backend API endpoint using the 'api.post' method
      const response = await api.post("api/instructors", instructorData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      // Handle the response from the server (e.g., show success message, update state, etc.)
      console.log("Form submitted successfully to instructors", response.data);

      // Update the form data state to clear the form fields
      setFormData({
        staff_id: 0,
        instructor_id: response.data.instructor_id, // Assuming the backend returns the newly generated instructor_id
        instructor_code: "",
        first_name: "",
        middle_name: "",
        last_name: "",
        teaching_position: "",
        employment_type: "",
        personal_email: "",
        contact_no: "",
        sex: "",
        address_id: "",
        birth_date: "",
        // Add other fields with default values as needed
      });

      // Optionally, close the modal or perform other actions after successful submission
      setFacultyModalOpen(false);
    } catch (error) {
      // Handle errors (e.g., show error message, log to console, etc.)
      console.error("Form submission error:", error);
    }
  };

  // Function to open the faculty modal
  const openFacultyModal = () => {
    setFacultyModalOpen(true);
  };

  // Function to close the faculty modal
  const closeFacultyModal = () => {
    setFacultyModalOpen(false);
  };

  // Function to open the "Edit" modal
  // const openEditModal = () => {
  //   console.log("Open button clicked"); // Add this line
  //   setEditModalOpen(true);
  // };

  // Function to close the "Edit" modal
  const closeEditModal = () => {
    console.log("Close button clicked");
    setEditModalOpen(false);
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="p-10 px-16 grid grid-cols-12 font-montserrat">
      {/* Row 1 */}
      <div className="col-span-12 flex justify-between items-center">
        <div className="px-5 py-1 bg-main-red text-white rounded-lg ">
          Faculty
        </div>
        <div className="flex flex-col items-end">
          <h1 className="font-bold">DELA CRUZ. JUAN PEPITO</h1>
          <p className="text-xs ">
            Logged as: <span className="text-main-red">Administrator</span>
          </p>
        </div>
      </div>

      {/* Row 2 */}

      <div className="col-span-12 mt-20">
        <div>
          <div className="flex justify-between mb-4">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search"
                className="border p-2 rounded"
              />
              <button className="ml-2" onClick={openModal}>
                <FiArrowRight className="border text-2xl h-10" />
              </button>
            </div>

            <div className="flex items-center">
              <button
                className=" bg-main-red text-white rounded-lg p-2 ml-3"
                onClick={openFacultyModal}
              >
                Add Faculty
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto  bg-white shadow-md rounded-lg">
              <thead>
                <tr className="bg-main-red text-white rounded-lg border ">
                  <th>Instructor ID</th>
                  <th>Instructor Code</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Department Name</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {faculty.map((facultyItem) => {
                  const matchingStaff = staff.find(
                    (staffItem) => staffItem.staff_id === facultyItem.staff_id
                  );

                  if (matchingStaff) {
                    return (
                      <tr
                        className="border"
                        key={`${facultyItem.instructor_id}-${facultyItem.department_id}`}
                      >
                        <td className="text-center">
                          {facultyItem.instructor_id}
                        </td>
                        <td className="text-center">
                          {facultyItem.instructor_code}
                        </td>
                        <td className="text-center">
                          {matchingStaff.last_name}, {matchingStaff.first_name},{" "}
                          {matchingStaff.middle_name}
                        </td>
                        <td className="text-center">
                          {matchingStaff.designation}
                        </td>

                        {facultyItem.departments &&
                        facultyItem.departments.length > 0 ? (
                          <td className="text-center">
                            {facultyItem.departments.map(
                              (department: {
                                department_id: number;
                                department_code: string;
                                department_name: string;
                              }) => (
                                <div key={department.department_id}>
                                  <span>
                                    {department.department_code} <br />{" "}
                                    {department.department_name}
                                  </span>
                                  <br />
                                </div>
                              )
                            )}
                          </td>
                        ) : (
                          <td className="text-center">No Departments</td>
                        )}

                        <td
                          className="text-center"
                          style={{
                            color:
                              facultyItem.employment_type === "regular"
                                ? "green"
                                : "gray",
                            fontWeight: "bold",
                          }}
                        >
                          {facultyItem.employment_type === "regular"
                            ? "Active"
                            : "None"}
                        </td>
                        <td className="text-center flex justify-center items-center">
                          <FaEdit
                            className="bg-main-blue text-white rounded text-2xl w-7 h-7 p-1 m-1"
                            onClick={() => {
                              // Handle edit action
                            }}
                          />
                          <FaTrash className="bg-main-red text-white rounded text-2xl w-7 h-7 p-1 m-1" />
                        </td>
                      </tr>
                    );
                  } else {
                    // Only faculty has this staff_id
                    return (
                      <tr
                        className="border"
                        key={`${facultyItem.instructor_id}`}
                      >
                        {/* Render faculty data here */}
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>

          {facultyModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-4 rounded-lg w-full max-w-lg">
                <div className="flex justify-between">
                  <h2 className="text-xl font-bold mb-4">Add Faculty</h2>
                  <button
                    className="flex bg-main-red items-center text-white p-2"
                    onClick={closeFacultyModal}
                  >
                    X
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* First Column */}
                  <div>
                    <div className="mb-4">
                      <label
                        htmlFor="selectCode"
                        className="text-sm font-medium"
                      >
                        Instructor Code
                      </label>
                      <select
                        id="instructor_code"
                        className="w-full border p-2 rounded"
                        placeholder="Select"
                        onChange={(e) =>
                          handleInstructorCodeChange(e.target.value)
                        }
                      >
                        {staff.map((item) => (
                          <option
                            key={item.staff_id}
                            value={`${item.staff_id}-${item.employee_number}`}
                          >
                            {`${item.staff_id}-${item.employee_number}`}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="firstName"
                        className="text-sm font-medium"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        className="w-full border p-2 rounded"
                        value={formData.first_name || ""}
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="middleName"
                        className="text-sm font-medium"
                      >
                        Middle Name
                      </label>
                      <input
                        type="text"
                        id="middle_name"
                        className="w-full border p-2 rounded"
                        value={formData.middle_name || ""}
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="last_name"
                        className="w-full border p-2 rounded"
                        value={formData.last_name || ""}
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="personal_email"
                        className="w-full border p-2 rounded"
                        value={formData.personal_email || ""}
                      />
                    </div>
                  </div>

                  {/* Second Column */}
                  <div>
                    <div className="mb-4">
                      <label
                        htmlFor="contact_number"
                        className="text-sm font-medium"
                      >
                        Contact Number
                      </label>
                      <input
                        type="text"
                        id="contact_no"
                        className="w-full border p-2 rounded"
                        value={formData.contact_no || ""}
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="sex" className="text-sm font-medium">
                        Sex
                      </label>
                      <select
                        id="sex"
                        className="w-full border p-2 rounded"
                        value={formData.sex || "male"}
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="address" className="text-sm font-medium">
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        className="w-full border p-2 rounded"
                        value={formData.address_id || ""}
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="birthdate"
                        className="text-sm font-medium"
                      >
                        Birthdate
                      </label>
                      <input
                        type="text"
                        id="birthdate"
                        className="w-full border p-2 rounded"
                        value={formData.birth_date || ""}
                      />
                    </div>
                  </div>
                </div>
                <button
                  className="bg-main-red text-white rounded-lg p-2 mt-4 ml-auto flex"
                  onClick={handleSubmit}
                >
                  Add Faculty
                </button>
              </div>
            </div>
          )}

          {/* Edit/Update Button  */}
          {editModalOpen && selectedFaculty && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-4 rounded-lg w-full max-w-xl">
                <div className="flex justify-between">
                  <h2 className="text-xl font-bold mb-4">Edit Faculty</h2>
                  <button
                    className="flex bg-main-red items-center text-white p-2"
                    onClick={closeEditModal}
                  >
                    X
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="mb-6">
                    <label className="text-sm font-light">Full Name</label>
                    <h1 className="text-sm font-bold">
                      {selectedFaculty.name}
                    </h1>
                  </div>
                  <div className="mb-3">
                    <label className="text-sm font-light">Faculty ID</label>
                    <h1 className="text-sm">{selectedFaculty.identity}</h1>
                  </div>
                  <div className="mb-3">
                    <label className="text-sm font-light">Status</label>
                    <h1 className="text-sm font-light text-main-green">
                      Active
                    </h1>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* First Column */}
                  <div>
                    <div className="mb-4">
                      <label
                        htmlFor="firstName"
                        className="text-sm font-medium"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full border p-2 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="middleName"
                        className="text-sm font-medium"
                      >
                        Middle Name
                      </label>
                      <input
                        type="text"
                        id="middleName"
                        className="w-full border p-2 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="middleInitial"
                        className="text-sm font-medium"
                      >
                        Middle Initial
                      </label>
                      <input
                        type="text"
                        id="middleInitial"
                        className="w-full border p-2 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full border p-2 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="suffix" className="text-sm font-medium">
                        Suffix
                      </label>
                      <input
                        type="text"
                        id="suffix"
                        className="w-full border p-2 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="maiden" className="text-sm font-medium">
                        Maiden
                      </label>
                      <input
                        type="text"
                        id="maiden"
                        className="w-full border p-2 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="birthdate"
                        className="text-sm font-medium"
                      >
                        Birth Place
                      </label>
                      <input
                        type="date"
                        id="birthdate"
                        className="w-full border p-2 rounded"
                      />
                    </div>
                  </div>

                  {/* Second Column */}
                  <div>
                    <div className="mb-4">
                      <label
                        htmlFor="birthdate"
                        className="text-sm font-medium"
                      >
                        Birthdate
                      </label>
                      <input
                        type="date"
                        id="birthdate"
                        className="w-full border p-2 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="sex" className="text-sm font-medium">
                        Sex
                      </label>
                      <select id="sex" className="w-full border p-2 rounded">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="text-sm font-medium">
                        {" "}
                        Personal Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full border p-2 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="contactNumber"
                        className="text-sm font-medium"
                      >
                        Contact Number
                      </label>
                      <input
                        type="tel"
                        id="contactNumber"
                        className="w-full border p-2 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="contactNumber"
                        className="text-sm font-medium"
                      >
                        Designation
                      </label>
                      <input
                        type="text"
                        className="w-full border p-2 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="contactNumber"
                        className="text-sm font-medium"
                      >
                        Instructor Code
                      </label>
                      <input
                        type="text "
                        className="w-full border p-2 rounded"
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="address" className="text-sm font-medium">
                        Department name
                      </label>
                      <input
                        type="text"
                        id="address"
                        className="w-full border p-2 rounded"
                      />
                    </div>
                  </div>
                </div>
                <button className="bg-main-red text-white rounded-lg p-2 mt-4 ml-auto flex ">
                  Add Faculty
                </button>
              </div>
            </div>
          )}
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Search Staff</h2>

              {/* Employee Number Input */}
              <div className="mb-4">
                <label className="text-sm" htmlFor="employeeNumber">
                  Employee Number
                </label>
                <input
                  type="text"
                  id="employeeNumber"
                  className="w-full border p-2 rounded"
                  placeholder="Enter Employee Number"
                />
              </div>

              {/* Employee Name Input */}
              <div className="mb-4">
                <label className="text-sm" htmlFor="employeeName">
                  Employee Name
                </label>
                <input
                  type="text"
                  id="employeeName"
                  className="w-full border p-2 rounded"
                  placeholder="Enter Employee Name"
                />
              </div>

              {/* Search Button */}
              <div className="flex justify-center">
                <button
                  className="bg-main-red text-white p-2 rounded"
                  onClick={closeModal}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Row 3 Pagination (right-aligned and smaller) */}
      <div className="col-span-12 mt-20">
        <div className="flex justify-between items-center space-x-2">
          <ul className="flex space-x-2">
            <li>
              <FiArrowLeft className="border border-gray-500 w-5 h-5 rounded" />
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 border border-gray-500 px-2 rounded hover:text-gray-700 hover:border-gray-700"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 border border-gray-500 px-2 rounded hover:text-gray-700 hover:border-gray-700"
              >
                2
              </a>
            </li>
            <li>
              <FiArrowRight className="border border-gray-500 w-5 h-5 rounded" />
            </li>
            <li>
              <p>7 out of 12 rows</p>
            </li>
          </ul>
          <div className="flex items-end">
            <DateTime />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;

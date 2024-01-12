import { AiOutlineWarning } from "react-icons/ai";
import { FaEdit, FaArrowRight } from "react-icons/fa";
import DateTime from "@/components/DateTime";
import { Key, useState } from "react";
import StringCardinal from "@/components/StringCardinal";
import { FullModal } from "@/components/ui/modal";
import { UserDisplay } from "@/components/ui/userdisplay";
import { Pager } from "@/components/ui/pager";
import "@azure/msal-browser";
import axios from "axios";

// Faculty Details
type termAndAcademicYear = {
  academic_year: number;
  term: number;
};

type termAndAcademicYearArray = {
  data: termAndAcademicYear[];
};

const termsAndAcademicYears = [
  { academic_year: 2023, term: 1 },
  { academic_year: 2022, term: 3 },
  { academic_year: 2022, term: 2 },
  { academic_year: 2022, term: 1 },
  { academic_year: 2021, term: 3 },
  { academic_year: 2021, term: 2 },
  { academic_year: 2021, term: 1 },
  { academic_year: 2020, term: 3 },
  { academic_year: 2020, term: 2 },
  { academic_year: 2020, term: 1 },
];

type student = {
  student_number: string;
  name: string;
  college: string;
  year: number;
  grade: string;
};

// type studentArray = {
//   data: student[];
// };

const students = [
  {
    student_number: "2020-00000",
    name: "Juan Dela Cruz",
    college: "BSCS",
    year: 4,
    grade: "1.00",
  },
  {
    student_number: "2020-00001",
    name: "Juan Dela Cruz",
    college: "BSCS",
    year: 4,
    grade: "1.00",
  },
  {
    student_number: "2020-00002",
    name: "Juan Dela Cruz",
    college: "BSCS",
    year: 4,
    grade: "1.00",
  },
  {
    student_number: "2020-00003",
    name: "Juan Dela Cruz",
    college: "BSCS",
    year: 4,
    grade: "1.00",
  },
  {
    student_number: "2020-00004",
    name: "Juan Dela Cruz",
    college: "BSCS",
    year: 4,
    grade: "1.00",
  },
  {
    student_number: "2020-00005",
    name: "Juan Dela Cruz",
    college: "BSCS",
    year: 4,
    grade: "1.00",
  },
  {
    student_number: "2020-00006",
    name: "Juan Dela Cruz",
    college: "BSCS",
    year: 4,
    grade: "1.00",
  },
  {
    student_number: "2020-00007",
    name: "Juan Dela Cruz",
    college: "BSCS",
    year: 4,
    grade: "1.00",
  },
  {
    student_number: "2020-00008",
    name: "Juan Dela Cruz",
    college: "BSCS",
    year: 4,
    grade: "1.00",
  },
  {
    student_number: "2020-00009",
    name: "Juan Dela Cruz",
    college: "BSCS",
    year: 4,
    grade: "1.00",
  },
];

function SelectTermsAndAcademicYears({ data }: termAndAcademicYearArray) {
  return (
    <select
      id="selectTermAndAcademicYear"
      className="rounded-sm py-2 px-4 border text-left"
    >
      {data.map(
        (
          termAndAcademicYear: { academic_year: number; term: number },
          index: Key | null | undefined
        ) => (
          <option
            key={index}
            value={`${termAndAcademicYear.academic_year}${termAndAcademicYear.term}`}
          >
            {StringCardinal(termAndAcademicYear.term)},{" "}
            {termAndAcademicYear.academic_year}-
            {termAndAcademicYear.academic_year + 1}
          </option>
        )
      )}
    </select>
  );
}

function apiCallExample() {
  axios
    .get("https://13.229.75.4/api/colleges", {
      withCredentials: true,
    })
    .then((response) => {
      console.log("Response:", response.data);
      // Handle the response data as needed
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle the error
    });
}

const FacultyChangeGrades = () => {
  const [showGradeChangeModal, setGradeChangeModal] = useState(false);

  const [page, setPage] = useState(1);
  // const [perPage, setPerPage] = useState(5);
  // const [search, setSearch] = useState("");

  const handleGradeClose = () => {
    setGradeChangeModal(false);
  };

  const handleGradeProceed = () => {
    alert("Successfully changed grade!");
    setGradeChangeModal(false);
  };

  return (
    <>
      <div className="p-10 px-16 grid grid-cols-12 font-montserrat ">
        {/* Row 1 */}
        <div className="col-span-12 flex justify-between items-center">
          <div className="px-5 py-1 border-2 border-main-red bg-main-red text-white rounded-lg ">
            Change of Grades
          </div>
          <UserDisplay name="Dela Cruz, Juan Pepito"></UserDisplay>
        </div>

        {/* Row 2 */}
        <div className="col-span-12 mt-12">
          <div className="col-span-12 gap-5 flex justify-between items-center">
            <div className="flex flex-row gap-5 justify-start">
              <div className="flex flex-col justify-start items-start">
                <span className="text-left text-sm">Term, Academic Year</span>
                <SelectTermsAndAcademicYears data={termsAndAcademicYears} />
              </div>
              <div className="flex flex-col justify-start items-start">
                <span className="text-left text-sm">Subject Title</span>
                <input
                  id="searchSubjectTitle"
                  type="text"
                  placeholder="Subject Title"
                  defaultValue="CS Elective 2 (Lec)"
                  className="rounded-sm py-2 px-4 border text-left"
                />
              </div>
              <div className="flex flex-col justify-start items-start">
                <span className="text-left text-sm">Student Name</span>
                <input
                  id="searchStudentName"
                  type="text"
                  placeholder="Student Name"
                  defaultValue="Juan Dela Cruz"
                  className="rounded-sm py-2 px-4 border text-left"
                />
              </div>
              <div
                className="flex flex-col justify-start items-start"
                onClick={apiCallExample}
              >
                <span className="text-left text-sm">&nbsp;</span>
                <FaArrowRight
                  size={40}
                  className="rounded-sm p-2 border cursor-pointer"
                />
              </div>
            </div>
            <div className="bg-[#FFCDCF] text-[#A42A28] w-auto text-sm px-4 py-2 gap-4 rounded-md flex flex-row justify-end items-center">
              <div>
                <AiOutlineWarning size={25} />
              </div>
              <div className="flex flex-col">
                <span>For incomplete subjects please contact ICTO.</span>
                <span>Subjects in Red Color means encoding expired!</span>
              </div>
            </div>
          </div>

          <div className="col-span-12 gap-5 flex justify-start items-center">
            {/* This contains the table for changing the grades */}
            <table
              id="tableChangeGrade"
              className="w-full table-auto rounded-md my-4 py-2 px-4 border text-left"
            >
              <thead>
                <tr className="bg-main-red text-white font-bold">
                  <th className="p-4">Subject Title</th>
                  <th>Course Code & Section</th>
                  <th>Student No.</th>
                  <th>Student Name</th>
                  <th>College</th>
                  <th>Year</th>
                  <th>Grade</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student: student) => (
                  <tr
                    key={student.student_number}
                    className="border-b-2 border-black text-sm hover:bg-neutral-100"
                  >
                    <td className="p-4">CS Elective 2 (Lec)</td>
                    <td>CSC 0413</td>
                    <td>{student.student_number}</td>
                    <td>{student.name}</td>
                    <td>{student.college}</td>
                    <td>{student.year}</td>
                    <td>{student.grade}</td>
                    <td className="align-middle">
                      <div
                        className="text-center gap-2 flex justify-center items-center"
                        onClick={() => setGradeChangeModal(true)}
                      >
                        <FaEdit className="bg-main-blue text-white rounded w-8 h-8 p-2 cursor-pointer" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {showGradeChangeModal && (
          <FullModal
            modalHeading="Update Grade"
            onClose={handleGradeClose}
            onProceed={handleGradeProceed}
            proceedName="Change Grade"
          >
            <form id="formChangeGrade">
              <div className="flex flex-row gap-5 justify-between items-center">
                <div className="w-1/2 flex flex-col">
                  <div className="text-sm">Current Grade</div>
                  <input
                    type="text"
                    className="w-full rounded-sm py-2 px-4 border text-left font-bold text-lg"
                    value="1.00"
                    disabled
                  ></input>
                </div>
                <div className="w-1/2 flex flex-col">
                  <div className="text-sm">New Grade</div>
                  <select
                    id="changeGradeTo"
                    className="w-full rounded-sm py-2 px-4 border text-left text-lg"
                  >
                    <option disabled>-</option>
                    <option value="1.00">1.00</option>
                    <option value="2.00">2.00</option>
                    <option value="3.00">3.00</option>
                    <option value="4.00">4.00</option>
                    <option value="5.00">5.00</option>
                    <option value="INC">INC</option>
                    <option value="DO">DO</option>
                    <option value="DU">DU</option>
                    <option value="DC">DC</option>
                    <option value="PASSED">Passed</option>
                  </select>
                </div>
              </div>
            </form>
          </FullModal>
        )}

        {/* Row 3 */}
        <div className="col-span-12 flex justify-between items-end mt-24 text-[#434343] text-sm">
          <div>
            <Pager
              from={1}
              to={10}
              total={200}
              current_page={page}
              last_page={10}
              on_page_change={setPage}
            />
          </div>
          <div className="flex gap-10"></div>
          <DateTime />
        </div>
      </div>
    </>
  );
};

export default FacultyChangeGrades;

import { FaPrint } from 'react-icons/fa';
import DateTime from "@/components/DateTime";
import { Key } from "react";
import StringCardinal from "@/components/StringCardinal";

// Faculty Details
const facultyDetails = {
  facultyFullName: "DELA CRUZ, JUAN PEPITO",
  collegeName: "College of Engineering and Technology",
  collegeCode: "CEng",
}

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

const teachingAssignments = [
  {course_code_section: "CSC 0413.1-1", subject_title: "CS Elective 2 (Lec)", units: 2, class_schedule: "W 6:00P-8:00PM F2F - GV 306", no_of_students: 38, credited_units: 2, college: "CEng", type_of_load: ""},
  {course_code_section: "CSC 0413.1-1", subject_title: "CS Elective 2 (Lec)", units: 2, class_schedule: "W 6:00P-8:00PM F2F - GV 306", no_of_students: 38, credited_units: 2, college: "CEng", type_of_load: ""},
  {course_code_section: "CSC 0413.1-1", subject_title: "CS Elective 2 (Lec)", units: 2, class_schedule: "W 6:00P-8:00PM F2F - GV 306", no_of_students: 38, credited_units: 2, college: "CEng", type_of_load: ""},
  {course_code_section: "CSC 0413.1-1", subject_title: "CS Elective 2 (Lec)", units: 2, class_schedule: "W 6:00P-8:00PM F2F - GV 306", no_of_students: 38, credited_units: 2, college: "CEng", type_of_load: ""},
  {course_code_section: "CSC 0413.1-1", subject_title: "CS Elective 2 (Lec)", units: 2, class_schedule: "W 6:00P-8:00PM F2F - GV 306", no_of_students: 38, credited_units: 2, college: "CEng", type_of_load: ""},
  {course_code_section: "CSC 0413.1-1", subject_title: "CS Elective 2 (Lec)", units: 2, class_schedule: "W 6:00P-8:00PM F2F - GV 306", no_of_students: 38, credited_units: 2, college: "CEng", type_of_load: ""},
  {course_code_section: "CSC 0413.1-1", subject_title: "CS Elective 2 (Lec)", units: 2, class_schedule: "W 6:00P-8:00PM F2F - GV 306", no_of_students: 38, credited_units: 2, college: "CEng", type_of_load: ""},
  {course_code_section: "CSC 0413.1-1", subject_title: "CS Elective 2 (Lec)", units: 2, class_schedule: "W 6:00P-8:00PM F2F - GV 306", no_of_students: 38, credited_units: 2, college: "CEng", type_of_load: ""},
  {course_code_section: "CSC 0413.1-1", subject_title: "CS Elective 2 (Lec)", units: 2, class_schedule: "W 6:00P-8:00PM F2F - GV 306", no_of_students: 38, credited_units: 2, college: "CEng", type_of_load: ""},
  {course_code_section: "CSC 0413.1-1", subject_title: "CS Elective 2 (Lec)", units: 2, class_schedule: "W 6:00P-8:00PM F2F - GV 306", no_of_students: 38, credited_units: 2, college: "CEng", type_of_load: ""},
]

function SelectTermsAndAcademicYears({ data }) {
  return (
    <select id="selectTermAndAcademicYear" className="rounded-sm py-2 px-4 border text-left">
      {data.map((termAndAcademicYear: { academic_year: number; term: number; }, index: Key | null | undefined) => (
        <option key={index} value={`${termAndAcademicYear.academic_year}${termAndAcademicYear.term}`}>
          {StringCardinal(termAndAcademicYear.term)}, {termAndAcademicYear.academic_year}-{termAndAcademicYear.academic_year + 1}
        </option>
      ))}
    </select>
  );
}

function TableClassAssignments ({ data }) {
  return (
    <table id="tableClassAssignments" className="w-full table-auto rounded-md my-4 py-2 px-4 border text-left">
      <thead>
        <tr className="bg-main-red text-white font-bold">
          <th className="p-4">Course Code & Section</th>
          <th>Course Title</th>
          <th>Units</th>
          <th>Class Schedule</th>
          <th>No. of Students</th>
          <th>Credited Units</th>
          <th>College</th>
          <th>Type of Load</th>
        </tr>
      </thead>
      <tbody>
        {data.map((teachingAssignment: { course_code_section: string; subject_title: string; units: number; class_schedule: string; no_of_students: number; credited_units: number; college: string; type_of_load: string | null }) => (
          <tr className="border-b-2 border-black text-sm">
            <td className="p-4">{teachingAssignment.course_code_section}</td>
            <td>{teachingAssignment.subject_title}</td>
            <td>{teachingAssignment.units}</td>
            <td>{teachingAssignment.class_schedule}</td>
            <td>{teachingAssignment.no_of_students}</td>
            <td>{teachingAssignment.credited_units}</td>
            <td>{teachingAssignment.college}</td>
            <td>{teachingAssignment.type_of_load}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const FacultyClassAssignments = () => {
  return (
    <>
      <div className="p-10 px-16 grid grid-cols-12 font-montserrat ">
        {/* Row 1 */}
        <div className="col-span-12 flex justify-between items-center">
          <div className="px-5 py-1 border-2 border-main-red bg-main-red text-white rounded-lg ">
            Class Assignments
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
          <h1 className="font-bold text-[#434343] text-1xl">
            {facultyDetails.collegeName}
          </h1>
          <p className="underline font-bold text-main-red text-2xl mt-2">
            {facultyDetails.facultyFullName}
          </p>
          <div className="col-span-12 gap-5 flex justify-between items-end">
            <div className="bg-[#FFCDCF] text-[#A42A28] w-auto text-sm px-4 py-2 gap-4 rounded-md flex flex-row justify-end items-center">
              <div className="flex flex-col">
                <span>This College has considered you to teach the following subject(s) for the stipulated term.</span>
              </div>
            </div>
            <div className="gap-2 flex flex-row justify-end items-start">
              <div className="flex flex-col justify-start items-start">
                <span className="text-left text-sm">Term, Academic Year</span>
                <SelectTermsAndAcademicYears data={termsAndAcademicYears}/>
              </div>
              <div className="flex flex-col justify-start items-start">
                <span className="text-left text-sm">&nbsp;</span>
                <FaPrint size={40} className="bg-main-blue text-white rounded-sm p-2 border cursor-pointer" />
              </div>
            </div>
          </div>
          
          <div className="col-span-12 gap-5 flex justify-start items-center">
            <TableClassAssignments data={teachingAssignments}/>
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

export default FacultyClassAssignments;

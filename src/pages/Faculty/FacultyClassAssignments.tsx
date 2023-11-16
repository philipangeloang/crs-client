import DateTime from "@/components/DateTime";
import { Key } from "react";
import StringCardinal from "@/components/StringCardinal";

// Faculty Details
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

const classAssignments = [
  {
    class_code: 26339,
    course_code_section: "CSC 0413 1.1",
    subject_title: "CS Elective 2 (Lec)",
    class_schedule: "W 6:00P-8:00PM F2F - GV 306",
    credits: 3,
  },
  {
    class_code: 26340,
    course_code_section: "CSC 0413 1.1",
    subject_title: "CS Elective 2 (Lec)",
    class_schedule: "W 6:00P-8:00PM F2F - GV 306",
    credits: 3,
  },
  {
    class_code: 26341,
    course_code_section: "CSC 0413 1.1",
    subject_title: "CS Elective 2 (Lec)",
    class_schedule: "W 6:00P-8:00PM F2F - GV 306",
    credits: 3,
  },
  {
    class_code: 26342,
    course_code_section: "CSC 0413 1.1",
    subject_title: "CS Elective 2 (Lec)",
    class_schedule: "W 6:00P-8:00PM F2F - GV 306",
    credits: 3,
  },
  {
    class_code: 26343,
    course_code_section: "CSC 0413 1.1",
    subject_title: "CS Elective 2 (Lec)",
    class_schedule: "W 6:00P-8:00PM F2F - GV 306",
    credits: 3,
  },
  {
    class_code: 26344,
    course_code_section: "CSC 0413 1.1",
    subject_title: "CS Elective 2 (Lec)",
    class_schedule: "W 6:00P-8:00PM F2F - GV 306",
    credits: 3,
  },
  {
    class_code: 26345,
    course_code_section: "CSC 0413 1.1",
    subject_title: "CS Elective 2 (Lec)",
    class_schedule: "W 6:00P-8:00PM F2F - GV 306",
    credits: 3,
  },
  {
    class_code: 26346,
    course_code_section: "CSC 0413 1.1",
    subject_title: "CS Elective 2 (Lec)",
    class_schedule: "W 6:00P-8:00PM F2F - GV 306",
    credits: 3,
  },
  {
    class_code: 26347,
    course_code_section: "CSC 0413 1.1",
    subject_title: "CS Elective 2 (Lec)",
    class_schedule: "W 6:00P-8:00PM F2F - GV 306",
    credits: 3,
  },
  {
    class_code: 26348,
    course_code_section: "CSC 0413 1.1",
    subject_title: "CS Elective 2 (Lec)",
    class_schedule: "W 6:00P-8:00PM F2F - GV 306",
    credits: 3,
  },
  {
    class_code: 26349,
    course_code_section: "CSC 0413 1.1",
    subject_title: "CS Elective 2 (Lec)",
    class_schedule: "W 6:00P-8:00PM F2F - GV 306",
    credits: 3,
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SelectTermsAndAcademicYears({ data }: { data: any }) {
  return (
    <select
      id="selectTermAndAcademicYear"
      className="rounded-sm mx-4 py-2 px-4 border text-left"
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function TableClassAssignments({ data }: { data: any }) {
  return (
    <table
      id="tableClassAssignments"
      className="w-full table-auto rounded-md my-4 py-2 px-4 border text-left"
    >
      <thead>
        <tr className="bg-main-red text-white font-bold">
          <th className="p-4">Class Code</th>
          <th>Course Code & Section</th>
          <th>Course Title</th>
          <th>Class Schedule</th>
          <th>Credits</th>
        </tr>
      </thead>
      <tbody>
        {data.map(
          (classAssignment: {
            class_code: number;
            course_code_section: string;
            subject_title: string;
            class_schedule: string;
            credits: number;
          }) => (
            <tr className="border-b-2 border-black text-sm">
              <td className="p-4">{classAssignment.class_code}</td>
              <td>{classAssignment.course_code_section}</td>
              <td>{classAssignment.subject_title}</td>
              <td>{classAssignment.class_schedule}</td>
              <td>{classAssignment.credits}</td>
            </tr>
          )
        )}
        <tr className="bg-main-red text-white font-bold p-4">
          <td></td>
          <td></td>
          <td></td>
          <td className="text-center">Total Amount of Credits:</td>
          <td>33</td>
        </tr>
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
          <div className="col-span-12 gap-5 flex justify-start items-center">
            <span className="text-left text-sm">Term, Academic Year</span>
            <SelectTermsAndAcademicYears data={termsAndAcademicYears} />
          </div>

          <div className="col-span-12 gap-5 flex justify-start items-center">
            <TableClassAssignments data={classAssignments} />
          </div>
        </div>

        {/* Row 3 */}
        <div className="col-span-12 flex justify-between items-end mt-24 text-[#434343] text-sm">
          <div className="flex gap-10"></div>

          <DateTime />
        </div>
      </div>
    </>
  );
};

export default FacultyClassAssignments;

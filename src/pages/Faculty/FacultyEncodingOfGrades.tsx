import { AiOutlineWarning } from "react-icons/ai";
import { FaPrint, FaDownload } from 'react-icons/fa';
import DateTime from "@/components/DateTime";
import { Key } from "react";
import StringCardinal from "@/components/StringCardinal";
import { Link } from "react-router-dom";

// Faculty Details
type termAndAcademicYear = {
  academic_year: number,
  term: number,
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

const classes = [
  {class_code: "CSC 0413", section: 2, subject_title: "CS Elective 2 (Lec)", schedule: "W 6:00P-8:00PM F2F - GV 306", instructor: "Jamillah S. Guialil"},
  {class_code: "CSC 0413", section: 2, subject_title: "CS Elective 2 (Lec)", schedule: "W 6:00P-8:00PM F2F - GV 306", instructor: "Jamillah S. Guialil"},
  {class_code: "CSC 0413", section: 2, subject_title: "CS Elective 2 (Lec)", schedule: "W 6:00P-8:00PM F2F - GV 306", instructor: "Jamillah S. Guialil"},
  {class_code: "CSC 0413", section: 2, subject_title: "CS Elective 2 (Lec)", schedule: "W 6:00P-8:00PM F2F - GV 306", instructor: "Jamillah S. Guialil"},
  {class_code: "CSC 0413", section: 2, subject_title: "CS Elective 2 (Lec)", schedule: "W 6:00P-8:00PM F2F - GV 306", instructor: "Jamillah S. Guialil"},
  {class_code: "CSC 0413", section: 2, subject_title: "CS Elective 2 (Lec)", schedule: "W 6:00P-8:00PM F2F - GV 306", instructor: "Jamillah S. Guialil"},
  {class_code: "CSC 0413", section: 2, subject_title: "CS Elective 2 (Lec)", schedule: "W 6:00P-8:00PM F2F - GV 306", instructor: "Jamillah S. Guialil"},
  {class_code: "CSC 0413", section: 2, subject_title: "CS Elective 2 (Lec)", schedule: "W 6:00P-8:00PM F2F - GV 306", instructor: "Jamillah S. Guialil"},
  {class_code: "CSC 0413", section: 2, subject_title: "CS Elective 2 (Lec)", schedule: "W 6:00P-8:00PM F2F - GV 306", instructor: "Jamillah S. Guialil"},
  {class_code: "CSC 0413", section: 2, subject_title: "CS Elective 2 (Lec)", schedule: "W 6:00P-8:00PM F2F - GV 306", instructor: "Jamillah S. Guialil"},
]

type plmClass = {
  class_code: string,
  section: number,
  subject_title: string,
  schedule: string,
  instructor: string
};

type plmClassArray = {
  data: plmClass[];
};

function LinkToClassReport({ class_code, section }: { class_code: string, section: number }) {
  const link = `/home/encode-grades/report-grades?class_code=${class_code}&section=${section}`;
  return (
    <Link
      to={link}
      className="text-main-blue font-semibold cursor-pointer hover:underline"
    >
      {`${class_code}`}
    </Link>
  );
}

function SelectTermsAndAcademicYears({ data }: termAndAcademicYearArray) {
  return (
    <select id="selectTermAndAcademicYear" className="rounded-sm mx-4 py-2 px-4 border text-left">
      {data.map((termAndAcademicYear: { academic_year: number; term: number; }, index: Key | null | undefined) => (
        <option key={index} value={`${termAndAcademicYear.academic_year}${termAndAcademicYear.term}`}>
          {StringCardinal(termAndAcademicYear.term)}, {termAndAcademicYear.academic_year}-{termAndAcademicYear.academic_year + 1}
        </option>
      ))}
    </select>
  );
}

function TableClassGradeEncoding ({ data }: plmClassArray) {
  return (
    <table id="tableClassAssignments" className="w-full table-auto rounded-md my-4 py-2 px-4 border text-left">
      <thead>
        <tr className="bg-main-red text-white font-bold">
          <th className="p-4">Class</th>
          <th>Section</th>
          <th>Subject Title</th>
          <th>Schedule / Room</th>
          <th>Instructor</th>
          <th className="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((classes: {class_code: string; section: number; subject_title: string; schedule: string; instructor: string;}) => (
          <tr className="border-b-2 border-black text-sm hover:bg-neutral-100">
            <td className="p-4">
              <LinkToClassReport class_code={classes.class_code} section={classes.section}/>
            </td>
            <td>{classes.section}</td>
            <td>{classes.subject_title}</td>
            <td>{classes.schedule}</td>
            <td>{classes.instructor}</td>
            <td className="align-middle">
              <div className="text-center gap-2 flex justify-center items-center">
                <FaPrint className="bg-main-blue text-white rounded w-8 h-8 p-2 cursor-pointer" />
                <FaDownload className="bg-main-red text-white rounded w-8 h-8 p-2 cursor-pointer" />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const FacultyEncodingOfGrades = () => {
  return (
    <>
      <div className="p-10 px-16 grid grid-cols-12 font-montserrat ">
        {/* Row 1 */}
        <div className="col-span-12 flex justify-between items-center">
          <div className="px-5 py-1 border-2 border-main-red bg-main-red text-white rounded-lg ">
            Encoding of Grades
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
          <div className="col-span-12 gap-5 flex justify-between items-center">
            <div className="flex justify-start items-center">
              <span className="text-left text-sm">Term, Academic Year</span>
              <SelectTermsAndAcademicYears data={termsAndAcademicYears}/>
            </div>
            <div className="bg-[#FFCDCF] text-[#A42A28] w-auto text-sm px-4 py-2 gap-4 rounded-md flex flex-row justify-end items-center">
              <div><AiOutlineWarning size={25}/></div>
              <div className="flex flex-col">
                <span>For incomplete subjects please contact ICTO.</span>
                <span>Subjects in Red Color means encoding expired!</span>
              </div>
            </div>
          </div>
          
          <div className="col-span-12 gap-5 flex justify-start items-center">
            <TableClassGradeEncoding data={classes}/>
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

export default FacultyEncodingOfGrades;

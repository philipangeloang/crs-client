import { AiOutlineWarning } from "react-icons/ai";
import { FaPrint } from 'react-icons/fa';
import DateTime from "@/components/DateTime";
import StringCardinal from "@/components/StringCardinal";

// Faculty Details
type student = {
  student_number: string,
  name: string,
  college: string,
  year: number
};

type studentArray = {
  data: student[];
};

const students = [
  { student_number: "2020-00000", name: "Juan Dela Cruz", college: "BSCS", year: 4 },
  { student_number: "2020-00000", name: "Juan Dela Cruz", college: "BSCS", year: 4 },
  { student_number: "2020-00000", name: "Juan Dela Cruz", college: "BSCS", year: 4 },
  { student_number: "2020-00000", name: "Juan Dela Cruz", college: "BSCS", year: 4 },
  { student_number: "2020-00000", name: "Juan Dela Cruz", college: "BSCS", year: 4 },
  { student_number: "2020-00000", name: "Juan Dela Cruz", college: "BSCS", year: 4 },
  { student_number: "2020-00000", name: "Juan Dela Cruz", college: "BSCS", year: 4 },
  { student_number: "2020-00000", name: "Juan Dela Cruz", college: "BSCS", year: 4 },
  { student_number: "2020-00000", name: "Juan Dela Cruz", college: "BSCS", year: 4 },
  { student_number: "2020-00000", name: "Juan Dela Cruz", college: "BSCS", year: 4 },
];

const classInfo = {
  class_code: "CSC 0413",
  section: 2,
  subject_title: "CS Elective 2 (Lec)",
  schedule: "W 6:00P-8:00PM F2F - GV 306",
  instructor: "Jamillah S. Guialil",
  units: 3,
  term: 1,
  academic_year: 2023
};

function TableClassStudentGrades ({ data }: studentArray) {
  return (
    <table id="tableClassStudentGrades" className="w-full table-auto rounded-md my-4 py-2 px-4 border text-left">
      <thead>
        <tr className="bg-main-red text-white font-bold">
          <th className="p-4">Count</th>
          <th>Student No.</th>
          <th>Student Name</th>
          <th>College</th>
          <th>Year</th>
          <th>Final Grade</th>
          <th>Remarks</th>
        </tr>
      </thead>
      <tbody>
        {data.map((student: student, index: number) => (
          <tr className="border-b-2 border-black text-sm hover:bg-neutral-100">
            <td className="p-4">{index + 1}</td>
            <td>{student.student_number}</td>
            <td>{student.name}</td>
            <td>{student.college}</td>
            <td>{student.year}</td>
            <td>
              <select className="rounded-sm py-2 px-4 border text-left">
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
            </td>
            <td className="pr-4"><input type="text" className="w-full rounded-sm py-2 px-4 border text-left"/></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const FacultyReportOfGrades = () => {
  return (
    <>
      <div className="p-10 px-16 grid grid-cols-12 font-montserrat ">
        {/* Row 1 */}
        <div className="col-span-12 flex justify-between items-center">
          <div className="gap-5 flex flex-row justify-start items-cen">
            <div className="px-5 py-1 border-2 border-main-red bg-main-red text-white rounded-lg ">
              Encoding of Grades
            </div>
            <div className="px-5 py-1 border-2 border-main-red text-main-red rounded-lg ">
              Report of Grades
            </div>
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
            <div className="bg-[#FFCDCF] text-[#A42A28] w-auto text-sm px-8 py-8 gap-8 rounded-md flex flex-col justify-end items-center">
              <div className="gap-4 w-full flex flex-row justify-start items-center">
                <AiOutlineWarning size={25}/>
                <span className="font-bold">Reminders:</span>
              </div>
              <div className="gap-4 flex flex-col">
                <span>1. Please take note that once you click the "Submit Grades" button, you can no longer change the grades online.</span>
                <span>2. Request for grade changes can only be done through a letter of request addressed to the _______</span>
                <span>3. All "Final Grade" fields should be filled up before clicking the "Submit Grades" button.</span>
              </div>
            </div>
            <div className="w-auto text-sm px-4 py-4 gap-4 border-2 border-black rounded-md flex flex-col justify-end items-center">
              <div className="gap-4 w-full flex flex-row justify-start items-center">
                <span className="font-bold">Acceptable Grades:</span>
              </div>
              <div className="gap-4 flex flex-col">
                <table>
                  <tr>
                    <td className="align-left pr-8">
                      <span className="font-bold">1.0</span>
                      <span> - 1.00</span>
                    </td>
                    <td className="align-left pr-8">
                      <span className="font-bold">1.5</span>
                      <span> - 1.50</span>
                    </td>
                    <td className="align-left pr-8">
                      <span className="font-bold">2.0</span>
                      <span> - 2.00</span>
                    </td>
                    <td className="align-left pr-8">
                      <span className="font-bold">2.5</span>
                      <span> - 2.50</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-left pr-8">
                      <span className="font-bold">3.0</span>
                      <span> - 3.00</span>
                    </td>
                    <td className="align-left pr-8">
                      <span className="font-bold">4.0</span>
                      <span> - 4.00</span>
                    </td>
                    <td className="align-left pr-8">
                      <span className="font-bold">5.0</span>
                      <span> - 5.00</span>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="align-left pr-8">
                      <span className="font-bold">1</span>
                      <span> - 1.00</span>
                    </td>
                    <td className="align-left pr-8">
                      <span className="font-bold">2</span>
                      <span> - 2.00</span>
                    </td>
                    <td className="align-left pr-8">
                      <span className="font-bold">3</span>
                      <span> - 3.00</span>
                    </td>
                    <td></td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <td className="align-left pr-8">
                      <span className="font-bold">INC/INCO</span>
                      <span> - Incomplete</span>
                    </td>
                    <td className="align-left pr-8">
                      <span className="font-bold">DO</span>
                      <span> - Dropped Officially</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-left pr-8">
                      <span className="font-bold">DU</span>
                      <span> - Dropped Unofficially</span>
                    </td>
                    <td className="align-left pr-8">
                      <span className="font-bold">PASSED</span>
                      <span> - Passed</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-left pr-8">
                      <span className="font-bold">DC</span>
                      <span> - Dropped due to COVID-19</span>
                    </td>
                    <td></td>
                  </tr>
                </table>
              </div>
            </div>
          </div>

          <h1 className="font-bold text-[#434343] text-1xl mt-4">
            Report of Grades
          </h1>
          <div className="col-span-12 flex justify-between items-center mt-2">
            <div className="w-full gap-16 flex flex-row items-center">
              <table>
                <tr>
                  <td className="font-bold pr-8">Subject Title</td>
                  <td>{classInfo.subject_title}</td>
                </tr>
                <tr>
                  <td className="font-bold pr-8">Course Code</td>
                  <td>{classInfo.class_code}</td>
                </tr>
              </table>
              <table>
                <tr>
                  <td className="font-bold pr-8">Units</td>
                  <td>{classInfo.units}</td>
                </tr>
                <tr>
                  <td className="font-bold pr-8">Term, Academic Year</td>
                  <td>{StringCardinal(classInfo.term)}, {classInfo.academic_year}-{classInfo.academic_year + 1}</td>
                </tr>
              </table>
            </div>
            <div className="gap-4 flex flex-row items-center bg-main-blue text-white rounded-md h-8 px-4 py-5 cursor-pointer" >
              <FaPrint/>
              <span className="font-bold">Print</span>
            </div>
          </div>
          
          <div className="col-span-12 gap-5 flex justify-start items-center">
            <TableClassStudentGrades data={students} />
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

export default FacultyReportOfGrades;

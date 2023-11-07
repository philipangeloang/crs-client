import { IoMdPrint } from "react-icons/io";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import DateTime from "@/components/DateTime";
import TempRoleSelector from "../TempRoleSelector";

// Dummy data
const tableData = [
  {
    id: 1,
    identity: "202011511",
    name: "Mike Miguel Gomez",
    program: "BSCS",
    registeredAs: "CET",
    college: "Old Student",
  },
  {
    id: 2,
    identity: "20205256",
    name: "Philip Ang",
    program: "BSCS",
    registeredAs: "CET",
    college: "Old Student",
  },
  {
    id: 3,
    identity: "20201245",
    name: "Yuanah Cruz",
    program: "BSCS",
    registeredAs: "CET",
    college: "Old Student",
  },
  {
    id: 4,
    identity: "20212122",
    name: "Schrodinger's cat",
    program: "BSCS",
    registeredAs: "CET",
    college: "Old Student",
  },
  {
    id: 5,
    identity: "20232351",
    name: "Taylor Swift",
    program: "BSCS",
    registeredAs: "CET",
    college: "New Student",
  },
  {
    id: 6,
    identity: "20216751",
    name: "Francis Santoyo",
    program: "BSCS",
    registeredAs: "CET",
    college: "Old Student",
  },
  {
    id: 7,
    identity: "20232133",
    name: "Ma U. Reed",
    program: "BSCS",
    registeredAs: "CET",
    college: "New Student",
  },
  // Add more data as needed
];

const AdminScheduleOfActivities = () => {
  return (
    <div className="p-10 px-16 grid grid-cols-12 font-montserrat">
      {/* Row 1 */}
      <div className="col-span-12 flex justify-between items-center">
        <div className="px-5 py-1 bg-main-red text-white rounded-lg ">
          Schedule of Activities
        </div>
        <div className="flex flex-col items-end">
          <h1 className="font-bold">DELA CRUZ. JUAN PEPITO</h1>
          <p className="text-xs ">
            Logged as: <TempRoleSelector />
          </p>
        </div>
      </div>

      {/* Row 2 Table */}
      <div className="col-span-12 mt-20 font-open-sans ">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto bg-white shadow-md rounded-xl border">
            <thead>
              <tr className="bg-main-red text-white rounded-lg border ">
                <th className="px-4 py-2">Activity</th>
                <th className="px-4 py-2">AY Sem</th>
                <th className="px-4 py-2">Schedule Start</th>
                <th className="px-4 py-2">Schedule End</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody className="text-center border">
              {tableData.map((item) => (
                <tr className="border" key={item.id}>
                  <td className="px-4 py-2">{item.id}</td>
                  <td className="px-4 py-2">{item.identity}</td>
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">{item.program}</td>
                  <td className="px-4 py-2 flex items-center justify-center">
                    <button className="btn">
                      <IoMdPrint className="bg-main-red text-white text-lg m-2 p-1 w-6 h-6 rounded" />
                    </button>
                    <button className="bg-main-blue text-white rounded-lg p-1">
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/*Row 3 Pagination (right-aligned and smaller) */}
        <div className="col-span-12 sm:col-span-3 mt-20 text-sm ml-auto">
          <div className="flex justify-between items-center space-x-2">
            <ul className="flex space-x-2 justify-center items-center">
              <li className="border border-main-gray p-1 rounded-lg">
                <FiArrowLeft size="20" />
              </li>
              <li className="border border-main-gray p-1 rounded-lg w-8 flex justify-center">
                <a href="#">1</a>
              </li>
              <li className="border border-main-gray p-1 rounded-lg w-8 flex justify-center">
                <a href="#">2</a>
              </li>
              <li className="border border-main-gray p-1 rounded-lg">
                <FiArrowRight size="20" />
              </li>
              <li>
                <p>7 out of 12 rows</p>
              </li>
            </ul>
            <DateTime />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminScheduleOfActivities;
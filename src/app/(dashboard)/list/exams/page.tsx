import Pagination from "@/components/Pagination"
import Table from "@/components/table/Table"
import TableSearch from "@/components/table/TableSearch"
import { examsData, role } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

type Exam = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  date: string;
}

const columns = [
  {
    header: "Subject Name",
    accessor: "subject"
  },
  {
    header: "Class",
    accessor: "class"
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell"
  }, 
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell"
  },
  {
    header: "Actions",
    accessor: "action"
  }
]

const ExamsListPage = () => {
  const renderRow = (item: Exam) => (
    <tr key={item.id} className="border-gray-200 even:bg-slate-50 text-sm hover:bg-purpleLight">
      <td className="flex items-center gap-4p-4">{item.subject}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center bg-skyBlue rounded-full">
              <Image src="/edit.png" alt="" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center bg-skyBlue rounded-full">
              <Image src="/delete.png" alt="" width={16} height={16} />
            </button>
          )}
        </div>
      </td>
    </tr>
  )
  return (
    <div className='bg-white flex-1 p-4 rounded-md mt-0 m-4'>
      {/* TOP */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-lg font-semibold">All exams</h1>
        <div className="flex md:flex-row flex-col items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 bg-customYellow rounded-full flex justify-center items-center">
              <Image src="/filter.png" alt="" width={20} height={20} />
            </button>
            <button className="w-8 h-8 bg-customYellow rounded-full flex justify-center items-center">
              <Image src="/sort.png" alt="" width={20} height={20} />
            </button>
            <button className="w-8 h-8 bg-customYellow rounded-full flex justify-center items-center">
              <Image src="/plus.png" alt="" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={examsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  )
}

export default ExamsListPage
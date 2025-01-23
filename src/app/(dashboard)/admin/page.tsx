import Announcement from "@/components/Announcement"
import EventCalendar from "@/components/calendar/EventCalendar"
import UserCard from "@/components/card/UserCard"
import AttendanceChart from "@/components/charts/AttendanceChart"
import CountChart from "@/components/charts/CountChart"
import FinanceChart from "@/components/charts/FinanceChart"

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* LEFT */}
      <div className="w-full flex flex-col gap-8 lg:w-2/3">
        {/* USER CARD */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* MIDDLE CHART */}
        <div className="flex flex-col gap-4 lg:flex-row">
           {/* COUNT CHART */}
           <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
           </div>

           {/* ATTENDANCE CHART */}
           <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
           </div>
        </div>
         
        {/* BUTTOM CHART */}
        <div className="">
          <FinanceChart />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcement />
      </div>
    </div>
  )
}

export default AdminPage
import Announcement from "@/components/Announcement"
import BigCalendar from "@/components/calendar/BigCalendar"
import EventCalendar from "@/components/calendar/EventCalendar"

const StudentPage = () => {
  return (
    <div className='flex p-4 gap-4 flex-col xl:flex-row'>
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule (4A)</h1>
          <BigCalendar />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
      <EventCalendar />
      <Announcement />
      </div>
    </div>
  )
}

export default StudentPage
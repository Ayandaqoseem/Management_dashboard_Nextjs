import Image from "next/image"

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 ring-[1.5px] ring-gray-300 px-2 rounded-full">
        <Image src="/search.png" alt="" width={14} height={14} />
        <input type="text" placeholder="search..." className="w-[200px] placeholder:text-white p-2 bg-transparent outline-none" />
      </div>

       {/* ICONS AND USER */}
       <div className="flex items-center gap-6 justify-end w-full">
          <div className="bg-white  rounded-full w-7 h-7 flex  items-center justify-center cursor-pointer">
            <Image src="/message.png" alt="" width={20} height={20} />
          </div>
          <div className="relative bg-white rounded-full w-7 h-7 flex  items-center justify-center cursor-pointer">
            <Image src="/announcement.png" alt="" width={20} height={20} />
            <span className="absolute -top-3 -right-3 h-5 w-5 flex rounded-full text-sm items-center justify-center bg-purple-500 text-white">1</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs leading-3 font-medium text-white">John Doe</span>
            <span className="text-[10px] text-white text-right">Admin</span>
          </div>
          <Image src="/avatar.png" alt="" width={36} height={36} className="rounded-full" />
       </div>
    </div>
  )
}

export default Navbar
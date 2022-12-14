import React from 'react'
import Image from 'next/image';
import {GlobeAltIcon,
    SearchIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon,
} from '@heroicons/react/solid';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';





function Header({placeholder}) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [nofGuests, setNofGuests] = useState(1);
  const router = useRouter();
  
  const handleSelect = (ranges) => {
    setStartDate(ranges.Selection.startDate);// .Selection is the key which is mentioned in the selectionRanges  
    setEndDate(ranges.Selection.endDate);
  }

  const resetInput = () => {
    setSearchInput("");
  }

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate:endDate.toISOString(),
        nofGuests,
      },
    });
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'Selection'
  };


  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-slate-50
    shadow-md p-5 md:px-10'>
    {/* grid-cols-3 means ki the entire component is spread across 3 columns or it can accomodate 3 containers inside it. Any more and it will automatically go to the next line */}

        {/* LEftDiv */}
        <div onClick={()=>router.push("/")} className='relative flex items-center h-10
         cursor-pointer my-auto '>
            <Image 
                src="https://links.papareact.com/qd3"
                layout="fill"
                objectFit='contain'
                objectPosition="left"
            />
        </div>
        
        {/* MiddleDiv */}
        <div className='flex items-center md:border-2 rounded-full py-2
         md:shadow-sm'>

         <input value={searchInput} 
         onChange={(e) => setSearchInput(e.target.value)} 
         className='flex-grow pl-5 bg-transparent
          outline-none text-sm text-gray-600 placeholder-gray-400'
          type="text" placeholder={placeholder || "Start your search"} />
        
        <SearchIcon className='bg-red-400 hidden md:inline-flex
         h-8 text-white rounded-full p-2 cursor-pointer md:mx-2
         ' />
        </div>

        {/* RightDiv */}
        <div className='ml-3 text-md  flex items-center space-x-4 jujstify-end
         text-gray-500'>
          <p className='hidden md:inline cursor-pointer'>Become a host</p> 
          <GlobeAltIcon className='hidden  md:inline h-6' />

          <div className='flex items-center space-x-2 border-2 p-2
           rounded-full'>
            <MenuIcon className='h-6'/>
            <UserCircleIcon className='h-6'/>
          </div>
        </div>
        
        {searchInput && 
          <div className='flex flex-col col-span-3 mx-auto'> 
          {/* All these classes used in the above div is to make the calender center. */}
            <DateRangePicker
             ranges={[selectionRange]}
             minDate={new Date()}
             rangeColors= {["#FD5667"]}
             onChange={handleSelect}
             />
             <div className='flex items-center border-b mb-4'>
              <h2 className='text-2xl pl-2 flex-grow font-semibold'>Number of Guests</h2>
              <UsersIcon className='h-5' />
              <input 
                value={nofGuests}
                onChange={e => setNofGuests(e.target.value)} 
                type="number"
                min={1} 
                className="w-12 pl-2 text-lg outline-none 
                text-red-400" 
              />
             </div>
             <div className='flex '>
              <button 
                className='flex-grow text-gray-500' 
                onClick={resetInput}>
                Cancel
              </button>
              <button onClick={search} className='flex-grow text-red-400'>Search</button>
             </div>
          </div>
        }

    </header>

  )
}

export default Header
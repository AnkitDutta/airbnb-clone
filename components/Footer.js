import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10
     px-32 py-14 bg-gray-100 text-gray-700'>
        <div className='space-y-4 text-xs'>
            <h5 className='font-bold'>COMMUNITY</h5>
            <p className='cursor-pointer'>Accessibility</p>
            <p className='cursor-pointer'>This is not a real site</p>
            <p className='cursor-pointer'>Trying to make a clone</p>
            <p className='cursor-pointer'>Looking for internships</p>
            <p className='cursor-pointer'>Try it out</p>
        </div>
        <div className='space-y-4 text-xs '>
            <h5 className='font-bold'>MOST</h5>
            <p className='cursor-pointer'>React</p>
            <p className='cursor-pointer'>Presents</p>
            <p className='cursor-pointer'>Full Stack Course</p>
            <p className='cursor-pointer'>Good Project</p>
            <p className='cursor-pointer'>Try it</p>
        </div>
        <div className='space-y-4 text-xs '>
            <h5 className='font-bold'>SUPPORT</h5>
            <p className='cursor-pointer'>Help Center</p>
            <p className='cursor-pointer'>Trust and Safety</p>
            <p className='cursor-pointer'>Youtube Algorithm</p>
            <p className='cursor-pointer'>Easter Eggs</p>
            <p className='cursor-pointer'>Airbnb</p>
        </div>
        <div className='space-y-4 text-xs'>
            <h5 className='font-bold'>ABOUT</h5>
            <p className='cursor-pointer'>How Airbnb works</p>
            <p className='cursor-pointer'>Newsroom</p>
            <p className='cursor-pointer'>Investors</p>
            <p className='cursor-pointer'>Airbnb Plus</p>
            <p className='cursor-pointer'>Airbnb Luxe</p>
        </div>
    
        
    </div>    
  )
}

export default Footer
import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10
     px-32 py-14 bg-gray-100 text-gray-700'>
        <div className='space-y-4 text-xs'>
            <h5 className='font-bold'>COMMUNITY</h5>
            <p>Accessibility</p>
            <p>This is not a real site</p>
            <p>Trying to make a clone</p>
            <p>Looking for internships</p>
            <p>Try it out</p>
        </div>
        <div className='space-y-4 text-xs '>
            <h5 className='font-bold'>MOST</h5>
            <p>React</p>
            <p>Presents</p>
            <p>Full Stack Course</p>
            <p>Good Project</p>
            <p>Try it</p>
        </div>
        <div className='space-y-4 text-xs '>
            <h5 className='font-bold'>SUPPORT</h5>
            <p>Help Center</p>
            <p>Trust and Safety</p>
            <p>Youtube Algorithm</p>
            <p>Easter Eggs</p>
            <p>Airbnb</p>
        </div>
        <div className='space-y-4 text-xs'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>How Airbnb works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>
    
        
    </div>    
  )
}

export default Footer
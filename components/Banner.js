import React from 'react';
import Image from 'next/image';

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px]
     xl:h-[600px] 2xl:h-[700px] '>
        <Image src="https://images.contentstack.io/v3/assets/bltb428ce5d46f8efd8/blt13efbce5f8cf1390/6094173e14f0211193956177/Article_Guide.jpg?crop=99.89p,100p,x0,y0&width=1050&height=591&auto=webp"
        layout="fill" objectFit="cover" />
        <div className='absolute top-1/2 xl:top-80 w-full text-center'>
            <p className='text-sm sm:text-2xl xl:text-4xl md:text-3xl text-white font-sans font-black'>
                Not sure where to go? Perfect.
            </p>
            <button className='text-green-700 bg-white px-10 py-4
             shadow-md rounded-full font-bold my-3 hover:shadow-xl 
             active:scale-90 transition duration-250'>Check This</button>
        </div>
    </div>
  )
}

export default Banner
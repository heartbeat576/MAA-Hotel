import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const FeaturedDestination = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
        <Title title='Luxury Hotspots' subTitle='Uncover our exclusive selection of extraordinary destinations, delivering unrivaled luxury and lasting memories.'  />

        <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
            {roomsDummyData.slice(0,4).map((room, index)=>(
                <HotelCard key={room._id} room={room} index={index} />
            ))}
        </div>
        <button onClick={()=>{navigate('/rooms'); scrollTo(0,0)}} className='my-16 px-4 py-2 text-sm font-medium border border-grey-300 rounded bg-white hover:bg-grey-50 transition-all cursor-pointer'>
             Find Your Next Escape
        </button>
    </div>
  )
}

export default FeaturedDestination
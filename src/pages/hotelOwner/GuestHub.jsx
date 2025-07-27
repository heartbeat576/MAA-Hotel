import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets, dashboardDummyData } from '../../assets/assets'

const GuestHub = () => {

  const [dashboardData, setDashboardData] = useState(dashboardDummyData)

  return (
    <div>
      <Title
        align='left'
        font='outfit'
        title='GuestHub'
        subTitle='Easily manage your room listings, monitor bookings, and analyze revenue—all from a single dashboard. Get real-time insights to keep your operations running smoothly.'
      />

      {/* Summary Cards */}
      <div className='flex gap-4 my-8 flex-wrap'>
        {/* Total Booking */}
        <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
          <img src={assets.totalBookingIcon} alt="Total Bookings Icon" className='max-sm:hidden h-10' />
          <div className='flex flex-col sm:ml-4 font-medium'>
            <p className='text-blue-500 text-lg'>Total Booking</p>
            <p className='text-neutral-400 text-base'>{dashboardData.totalBookings}</p>
          </div>
        </div>

        {/* Total Revenue */}
        <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
          <img src={assets.totalRevenueIcon} alt="Total Revenue Icon" className='max-sm:hidden h-10' />
          <div className='flex flex-col sm:ml-4 font-medium'>
            <p className='text-blue-500 text-lg'>Total Revenue</p>
            <p className='text-neutral-400 text-base'>{dashboardData.totalRevenue}</p>
          </div>
        </div>
      </div>

      {/* Recent Bookings Table */}
      <h2 className='text-xl text-blue-950/70 font-medium mb-5'>Recent Bookings</h2>
      <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll'>
        <table className='w-full'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='py-3 px-4 text-gray-800 font-medium'>User Name</th>
              <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Room Name</th>
              <th className='py-3 px-4 text-gray-800 font-medium text-center'>Total Price</th>
              <th className='py-3 px-4 text-gray-800 font-medium text-center'>Payment Status</th>
            </tr>
          </thead>

          <tbody className='text-sm'>
            {dashboardData.bookings.map((item, index) => (
              <tr key={item.id || index}>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                  {item.user.username}
                </td>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>
                  {item.room.roomType}
                </td>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300 text-center'>
                  {item.totalPrice}
                </td>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300 text-center'>
                  <div className='flex justify-center'>
                    <button
                      className={`py-1 px-3 text-xs rounded-full 
                        ${item.isPaid ? 'bg-green-200 text-green-600' : 'bg-amber-200 text-yellow-600'}`}
                    >
                      {item.isPaid ? 'Completed' : 'Pending'}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default GuestHub

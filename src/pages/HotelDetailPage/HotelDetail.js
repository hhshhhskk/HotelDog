import React from 'react'
import RoomType from '../../components/Detail/RoomType'
import ReserveCompletePage from '../ReserveCompletePage/ReserveCompletePage'
import HotelReview from '../../components/Detail/HotelReview'

const HotelDetail = () => {
  return (
    <div>
      <RoomType />
      <ReserveCompletePage />
      <HotelReview />
    </div>
  )
}

export default HotelDetail
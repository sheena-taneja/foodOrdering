import React from 'react'
import CourselItem from './CourselItem'

function CarouselCard({ cards }) {
  return (

    <div className="overflow-x-auto flex">
      {cards.map((card, index)=> <CourselItem key={index} offer={card?.info?.header} code={card?.info?.couponCode}></CourselItem>)}
    </div>
  )
}

export default CarouselCard

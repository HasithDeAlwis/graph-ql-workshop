import React from 'react'

const EventCard = (props) => {
    const eventDetails = props.event
  return (
    <div className='container'>
        <div className='flex flex-col basis-6/12'>
            <p className=''>{eventDetails.eventName}</p>
            <p className=''>{eventDetails.eventDate}</p>
            <p className=''>{eventDetails.eventDescription.eventDescription}</p>
        </div>
        <div className='container basis-w-6/12'>
            <img alt={`${eventDetails.eventPicture.description}`} src={`https:${eventDetails.eventPicture.file.url}`} />
        </div>
    </div>
  )
}

export default EventCard
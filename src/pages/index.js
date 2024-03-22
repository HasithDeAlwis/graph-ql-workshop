import { graphql } from 'gatsby'
import EventCard from '../components/event-card'
import React from 'react'

const HomePage = ({data}) => {
  return (
    <div className='container min-w-full'>
        {data.allContentfulEvents.nodes.map((event) => (
            <div>
                <EventCard event={event} />
            </div>
        ))}
    </div>
  )
}

export const query = graphql `
    query {
    allContentfulEvents {
        nodes {
        eventName
        eventDate
        eventPicture {
            description
            file {
            url
            }
        }
        eventHost
        eventDescription {
            eventDescription
        }
        }
    }
    }`

export default HomePage
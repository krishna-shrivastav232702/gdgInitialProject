import React, { useState, useEffect } from 'react'
import axios from "axios"
import MyCard from "../../components/MyCard";
import { Link } from 'react-router-dom';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:7001/api/events');
        // console.log(response.data);
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching the data Internal Sever Error:", error);
      }
    };
    fetchEvents();
  }, []);
  return (
    <div className='px-28 py-32 bg-darkBlue flex flex-wrap justify-center min-h-screen'>
      {
        events.map((event) => (
          <Link to={`/events/${event._id}`}>
            <div key={event._id} className='m-4'>
              <MyCard
                registerId={event._id}
                title={event.title}
                description={event.description}
                date={event.date}
                time={event.time}
                location={event.location}
                imageUrl={event.imageUrl}
              />
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default Events
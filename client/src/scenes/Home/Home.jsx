import React, { useState, useEffect } from 'react'
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { Link } from 'react-router-dom';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const handleSearch = () => {
    const filtered = events.filter((event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredEvents(filtered);
    setIsSearchClicked(true);
    setSearchQuery(""); // Clear the search query after the search
  }

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:7001/api/events');
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="bg-darkBlue min-h-screen px-28 py-32 flex flex-col items-center justify-center space-y-6 mt-10">
      <h1 className="text-white text-5xl font-black text-center leading-tight">
        From Concerts to Conferences, Find Your Next Event!
      </h1>
      <p className="text-amber-300 text-xl text-center max-w-3xl">
        Discover exciting events happening near you, book your tickets, and never miss out on memorable experiences!
      </p>
      <div className="mt-8 w-full max-w-md flex items-center justify-end">
        <input
          type="text"
          placeholder="Find events: name or location"
          value={searchQuery}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-2xl bg-white/30 text-white text-lg placeholder-white outline-none focus:ring-2 focus:ring-navyBlue shadow-lg backdrop-blur-md border border-white/20"
        />
        <FaSearch className="relative right-8 text-white cursor-pointer" onClick={handleSearch} />
      </div>

      <div>
        {
          isSearchClicked && (
            filteredEvents.length > 0 ? (
              <ul className='flex flex-wrap justify-center'>
                {filteredEvents.map((event) => (
                  <li key={event._id} className='bg-white/20 p-4 rounded-lg text-white cursor-pointer mt-4 mx-2 flex-basis-[calc(25%-1rem)] shadow-md rounded-2xl hover:shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300'>
                    <Link to={`/events/${event._id}`}>
                      <h1 className='text-lg font-semibold'>{event.title}</h1>
                      <h3 className='text-md font-semibold'>{event.location}</h3>
                      <p>{`${event.description.substring(0, 20)}....`}</p>
                    </Link>
                  </li>
                ))}
              </ul>

            ) : (
              <p className="text-warmBeige text-lg text-center">No events found </p>
            )
          )
        }
      </div>

    </div>
  );
}

export default Home;

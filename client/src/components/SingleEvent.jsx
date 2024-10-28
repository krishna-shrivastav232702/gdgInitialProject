import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SingleEvent = () => {
    const [event, setEvent] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await axios.get(`http://localhost:7001/api/events/${id}`);
                setEvent(response.data);
            } catch (error) {
                console.log("Error fetching particular event:", error.message);
            }
        };
        fetchEvent();
    }, [id]);

    return (
        <div className='mt-16 flex items-center justify-center bg-darkBlue min-h-screen'>
            <div className='bg-white rounded-lg shadow-lg overflow-hidden flex w-full max-w-4xl'>
                <img src={event.imageUrl} alt={event.title} className='h-92 max-w-80 object-cover' />
                <div className='p-6 flex-1'>
                    <h1 className='text-3xl font-bold text-gray-800 mb-2'>{event.title}</h1>
                    <h1 className='text-xl text-black font-bold mb-6 mt-4'>Description: <span className='text-base '>{event.description}</span></h1>
                    <h2 className='text-md font-semibold text-gray-700 mb-2'>Location: <span className='font-bold'>{event.location}</span></h2>
                    <h2 className='text-md font-semibold text-gray-700 mb-2'>Date: <span className='font-bold'>{new Date(event.date).toLocaleDateString()}</span></h2>
                    <h2 className='text-md font-semibold text-gray-700'>Time: <span className='font-bold'>{event.time}</span></h2>
                    <Link to={`/registration/${event._id}`}><button className=" mt-4 font-bold bg-red-500 text-white p-3 rounded-2xl hover:bg-darkBlue hover:text-white transition duration-300 ease-in-out shadow-md hover:shadow-xl transform hover:scale-105">Register Now</button></Link>
                </div>

            </div>
        </div>

    );
};

export default SingleEvent;

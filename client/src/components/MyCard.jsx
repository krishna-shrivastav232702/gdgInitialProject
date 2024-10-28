import React from 'react';
import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';

const MyCard = ({ registerId, title, description, date, time, location, imageUrl }) => {
  return (

    <Card className="w-auto h-60 max-w-xs shadow-md rounded-2xl hover:shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300" imgSrc={imageUrl} horizontal>
      <div className="flex">

        <div className="p-4 w-full">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
            {title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 mb-2">
            {`${description.substring(0,50)}....`}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-300 ">
            <strong>Date:</strong> {new Date(date).toLocaleDateString()}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-300 ">
            <strong>Time:</strong> {time}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-300 ">
            <strong>Location:</strong> {location}
          </p>
          <button className="mt-4  text-black font-semibold py-2 px-4 shadow-md rounded hover:shadow-xl hover:scale-105">
            Read More
          </button>
          <Link to={`/registration/${registerId}`} className="mx-4 font-bold bg-red-500 text-white p-3 rounded-2xl hover:bg-darkBlue hover:text-white transition duration-300 ease-in-out shadow-md hover:shadow-xl transform hover:scale-105">
            Register Now
          </Link>

        </div>
      </div>
    </Card>

    
  );
}

export default MyCard;

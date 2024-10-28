import React, { useContext, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { AuthContext } from '../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Upload = () => {
  const {user}=useContext(AuthContext)
  const [eventTitle, setEventTitle] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", eventTitle);
    formData.append("date", startDate);
    formData.append("time", eventTime);
    formData.append("location", eventLocation);
    formData.append("description", description);
    formData.append("createdBy", user.uid); 
    if (file) formData.append("imageUrl", file); 

    try {
      const response = await axios.post("http://localhost:7001/api/events", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      console.log("Event created:", response.data);
      alert("Event created Successfully");
      navigate('/events');
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };




  return (
    <div className='flex flex-col  '>
      <h1 className="text-2xl font-semibold text-white pt-16 px-28">Upload a New Event</h1>
      <div className="w-full my-6 mx-28 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg p-12">
        <form className="space-y-6 w-full" onSubmit={handleForm}>
          <div className="flex gap-10 items-center">
            <div className="flex-1 flex flex-col">
              <label htmlFor="eventTitle" className="font-medium mb-1 text-white">Event Name:</label>
              <input
                type="text"
                id="eventTitle"
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
                placeholder="Enter event name"
                className="w-full rounded-lg px-3 py-2 bg-transparent text-white placeholder-white border border-white border-opacity-30 focus:border-blue-400 focus:outline-none "
              />
            </div>

            <div className="flex-1 flex flex-col">
              <label htmlFor="date" className="font-medium mb-1 text-white">Date:</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="yyyy/MM/dd"
                placeholderText="Select a date"
                id="date"
                className="w-full rounded-lg px-3 py-2 bg-transparent text-white placeholder-white border border-white border-opacity-30 focus:border-blue-400 focus:outline-none "
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="description" className="font-medium mb-1 text-white">Event Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter event description"
              rows="3"
              className="w-full rounded-lg px-3 py-2 bg-transparent text-white placeholder-white border border-white border-opacity-30 focus:border-blue-400 focus:outline-none "
            />
          </div>

          <div className="flex gap-6">
            <div className="flex-1 flex flex-col">
              <label htmlFor="eventTime" className="font-medium mb-1 text-white">Event Time:</label>
              <input
                type="text"
                id="eventTime"
                value={eventTime}
                onChange={(e) => setEventTime(e.target.value)}
                placeholder="Enter event time"
                className="w-full rounded-lg px-3 py-2 bg-transparent text-white placeholder-white border border-white border-opacity-30 focus:border-blue-400 focus:outline-none "
              />
            </div>

            <div className="flex flex-col w-1/2 mx-auto">
              <label htmlFor="fileUpload" className="font-medium mb-1 text-white">Upload File:</label>
              <input
                type="file"
                id="fileUpload"
                name="imageUrl"
                onChange={(e) => setFile(e.target.files[0])}
                className="rounded-xl px-3 py-2 bg-transparent text-white border border-none  focus:outline-none transition-shadow"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="eventLocation" className="font-medium mb-1 text-white">Event Location:</label>
            <input
              type="text"
              id="eventLocation"
              value={eventLocation}
              onChange={(e) => setEventLocation(e.target.value)}
              placeholder="Enter event location"
              className="w-full rounded-lg px-3 py-2 bg-transparent text-white placeholder-white border border-white border-opacity-30 focus:border-blue-400 focus:outline-none "
            />
          </div>
          <div className='text-center'>
            <button type="submit" className='bg-white text-black px-4 py-2 rounded-xltext-darkBlue bg-white hover:bg-navyBlue hover:text-white px-4 py-2 rounded-2xl transition duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105 '>
              Submit
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}

export default Upload;

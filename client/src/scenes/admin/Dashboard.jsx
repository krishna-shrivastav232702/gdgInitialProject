import React, { useEffect, useState } from 'react'
import { Table } from "flowbite-react";
import { Link } from 'react-router-dom';
import axios from "axios"
import { MdOutlineDelete } from "react-icons/md";


const Dashboard = () => {
    const [allEvents, setAllEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get("http://localhost:7001/api/events");
                console.log(response);
                console.log("Events recieved from db");
                setAllEvents(response.data);
            } catch (error) {
                console.error("error fetching events :", error);
            }
        }
        fetchEvents();

    }, []);

    const handleDelete = async(id)=>{
        const confirmDelete = window.confirm("Are you sure you want to delete this event ? ");
        if(!confirmDelete) return;
        try {
            await axios.delete(`http://localhost:7001/api/events/${id}`);
            setAllEvents(allEvents.filter(event=>event._id !== id));
            alert("Event deleted Successfully");

        } catch (error) {
            console.error("Error deleting this event",error);
            
        }

    }


    return (
        <div className='px-4 my-12 '>
            <h2 className='mb-8 text-3xl font-bold text-white'>Manage your Events</h2>

            <Table className='lg:w-[1180px]'>
                <Table.Head>
                    <Table.HeadCell className='text-white'>S.No</Table.HeadCell>
                    <Table.HeadCell className='text-white'>Event Name</Table.HeadCell>
                    <Table.HeadCell className='text-white'>Date</Table.HeadCell>
                    <Table.HeadCell className='text-white'>Time</Table.HeadCell>
                    <Table.HeadCell className='text-white'>Location</Table.HeadCell>
                    <Table.HeadCell>
                        <span className='text-white'>Edit or Manage</span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {allEvents.map((event, index) => (
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={event._id}>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {index + 1}
                            </Table.Cell>
                            <Table.Cell >{event.title}</Table.Cell> 
                            <Table.Cell>{event.date}</Table.Cell> 
                            <Table.Cell>{event.time}</Table.Cell> 
                            <Table.Cell>{event.location}</Table.Cell> 
                            <Table.Cell className='flex gap-2 items-center'>
                                <Link className="font-medium text-blue-600 hover:underline dark:text-cyan-500" to={`/admin/event/edit/${event._id}`}>
                                    Edit
                                </Link>
                                <button onClick={() => handleDelete(event._id)} className='bg-red-600 px-4 py-1 font-bold text-xl text-white rounded hover:bg-darkBlue mx-4 '><MdOutlineDelete /></button>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}

export default Dashboard
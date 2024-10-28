import React, { useContext } from 'react'
import { Sidebar } from "flowbite-react"
import { HiDocumentAdd} from "react-icons/hi";
import { MdLogout } from "react-icons/md";
import { HiHome, HiPencilAlt, HiTrash,HiChartBar } from "react-icons/hi";


const SideBar = () => {
    return (
        <Sidebar className='bg-white'>
            <Sidebar.Logo href="/" img="" imgAlt="" className='text-black px-4  mt-8' >
                Eventure
            </Sidebar.Logo>
            <Sidebar.Items className='px-4 mt-32'>
                <Sidebar.ItemGroup>
                    
                    <Sidebar.Item href="/" icon={HiHome}>
                        <p>Home</p>
                    </Sidebar.Item>
                    <Sidebar.Item href="/admin/dashboard" icon={HiChartBar}>
                        <p>Dashboard</p>
                    </Sidebar.Item>

                    <Sidebar.Item href="/admin/event/upload" icon={HiDocumentAdd}>
                        Upload Events
                    </Sidebar.Item>
                    
                    <Sidebar.Item href="/logout" icon={MdLogout}>
                        Logout
                    </Sidebar.Item>
                </Sidebar.ItemGroup>

            </Sidebar.Items>
        </Sidebar>
    )
}

export default SideBar
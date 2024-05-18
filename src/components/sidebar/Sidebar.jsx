import React, { useEffect, useState } from 'react'
import "./Sidebar.scss"

import logo from "../../assets/logo.png"

import { FaTicket, FaBook, FaMoon, FaSun } from "react-icons/fa6";
import { FaLightbulb, FaUserTie, FaUsers, FaChartPie } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";

import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
    const [mode, setMode] = useState(false)

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <Link to={"/"} className='sidebar__logo'>
                    <img src={logo} alt="" />
                    <h3>Dashboard</h3>
                </Link>
                <div className="sidebar__list">
                    <NavLink to={"/"}>
                        <FaChartPie />
                        <p>Products</p>
                    </NavLink>

                    <NavLink to={"/users"}>
                        <FaTicket />
                        <p>Users</p>
                    </NavLink>

                    <NavLink to={"/posts"}>
                        <FaLightbulb />
                        <p>Posts</p>
                    </NavLink>

                    <NavLink to={"/contact"}>
                        <FaUsers />
                        <p>Contacts</p>
                    </NavLink>

                    <NavLink to={"/agents"}>
                        <FaUserTie />
                        <p>Agents</p>
                    </NavLink>

                    <NavLink to={"/articles"}>
                        <FaBook />
                        <p>Articles</p>
                    </NavLink>
                </div>
            </div>
            <div className="sidebar__bottom">
                <button onClick={() => setMode(p => !p)} className="mode__btn">
                    {
                        mode ? <><FaSun />
                            <p>Light</p></> : <><FaMoon />
                            <p>Night</p></>
                    }
                </button>
                <button className="logout__btn">
                    <IoLogOutOutline />
                    <p>Logout</p>
                </button>
            </div>
        </div>
    )
}

export default Sidebar
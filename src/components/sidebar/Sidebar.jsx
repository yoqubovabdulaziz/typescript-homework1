import React, { useEffect, useState } from 'react'
import "./Sidebar.scss"

import logo from "../../assets/logo.png"

import { FaTicket, FaBook, FaMoon, FaSun } from "react-icons/fa6";
import { FaLightbulb, FaUserTie, FaUsers, FaChartPie } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";

import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { modeToggle } from '../../context/modeSlice';

const Sidebar = () => {
    const [mode, setMode] = useState(false)
    const dispatch = useDispatch()
    const sidebar = useSelector(state => state.sidebar.value)
    const modeValue = useSelector(state => state.mode.value)

    return (
        <div className={`sidebar ${modeValue ? "dark__sidebar" : ""}`}>
            <div className="sidebar__top">
                <Link to={"/"} className='sidebar__logo'>
                    <img src={logo} alt="" />
                    <h3>{sidebar ? "" : "Dashboard"}</h3>
                </Link>
                <div className="sidebar__list">
                    <NavLink to={"/"}>
                        <FaChartPie />
                        <p>{sidebar ? "" : "Products"}</p>
                    </NavLink>

                    <NavLink to={"/users"}>
                        <FaTicket />
                        <p>{sidebar ? "" : "Users"}</p>
                    </NavLink>

                    <NavLink to={"/posts"}>
                        <FaLightbulb />
                        <p>{sidebar ? "" : "Posts"}</p>
                    </NavLink>

                    <NavLink to={"/contact"}>
                        <FaUsers />
                        <p>{sidebar ? "" : "Contacts"}</p>
                    </NavLink>

                    <NavLink to={"/agents"}>
                        <FaUserTie />
                        <p>{sidebar ? "" : "Agents"}</p>
                    </NavLink>

                    <NavLink to={"/articles"}>
                        <FaBook />
                        <p>{sidebar ? "" : "Articles"}</p>
                    </NavLink>
                </div>
            </div>
            <div className="sidebar__bottom">
                <button onClick={() => {
                    setMode(p => !p)
                    dispatch(modeToggle())
                }} className="mode__btn">
                    {
                        mode ? <><FaSun />
                            <p>{sidebar ? "" : "Light"}</p></> : <><FaMoon />
                            <p>{sidebar ? "" : "Night"}</p></>
                    }
                </button>
                <button className="logout__btn">
                    <IoLogOutOutline />
                    <p>{sidebar ? "" : "Logout"}</p>
                </button>
            </div>
        </div>
    )
}

export default Sidebar
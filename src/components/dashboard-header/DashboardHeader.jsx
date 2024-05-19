import React, { useState } from 'react'
import "./DashboardHeader.scss"

import { FiMenu } from "react-icons/fi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";


import avatar from "../../assets/avatar.png"
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../../context/sidebarSlice';

const DashboardHeader = ({ title }) => {
    const mode = useSelector(state => state.mode.value)
    const dispatch = useDispatch()
    return (
        <>
            <div className={`dashboard__top ${mode ? "dark__dashboard__top" : ""}`}>
                <div className='dashboard__header'>
                    <button onClick={() => dispatch(toggleSidebar())} >
                        <FiMenu />
                    </button>
                    <div className="dashboard__header__right">
                        <p>Jones Ferdinand</p>
                        <div className="dashboard__profile__pic">
                            <img src={avatar} alt="" />
                        </div>
                    </div>
                </div>

                <div className={`products__header ${mode ? "dark__products__header" : ""}`}>
                    <h2 className="products__title">{title}</h2>
                    <div className="products__header__right">
                        <button><HiOutlineDotsHorizontal /></button>
                        <button>Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardHeader
import React, { useState } from 'react'
import "./DashboardHeader.scss"

import { FiMenu } from "react-icons/fi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

import avatar from "../../assets/avatar.png"

const DashboardHeader = ({ title }) => {
    const [menu, setMenu] = useState(false)
    return (
        <>
            <div className="dashboard__top">
                <div className='dashboard__header'>
                    <button onClick={() => setMenu(p => !p)} >
                        <FiMenu />
                    </button>
                    <div className="dashboard__header__right">
                        <p>Jones Ferdinand</p>
                        <div className="dashboard__profile__pic">
                            <img src={avatar} alt="" />
                        </div>
                    </div>
                </div>
                <div className="products__header">
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
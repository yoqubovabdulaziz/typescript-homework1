import React, { useEffect, useState } from 'react'
import "./Users.scss"
import DashboardHeader from '../../components/dashboard-header/DashboardHeader'
import axios from 'axios'
import Loading from '../../components/loading/Loading'

const API = "https://dummyjson.com/users"


const Users = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios
            .get(API)
            .then(res => setData(res.data.users))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    let user = data?.map(el => (
        <div className="users__item">
            <div className="users__item__detail__box">
                <div className="users__item__avatar">
                    {el.firstName.slice(0, 1)}
                    {el.lastName.slice(0, 1)}
                </div>
                <p>{el.email}</p>
            </div>
            <p className='users__item__customer'>{el.firstName} {el.lastName}</p>
            <p className='users__item__date'>{el.birthDate}</p>
            <p className={`users__item__priority 
                ${el.age >= 18 && el.age < 28 ? "low__priority" : ""} 
                ${el.age >= 28 && el.age < 38 ? "normal__priority" : ""} 
                ${el.age >= 38 ? "high__priority" : ""}`}>
                {el.age >= 18 && el.age < 28 ? "Low" : ""}
                {el.age >= 28 && el.age < 38 ? "Normal" : ""}
                {el.age >= 38 ? "High" : ""}
            </p>

        </div>
    ))

    return (
        <>
            {loading && <Loading />}
            <section id="users">
                <DashboardHeader title={"Tickets"} />
                <div className="users">
                    <div className="users__main">
                        <div className="users__main__top">
                            <h2>All tickets</h2>
                            <div className="users__main__top__info">
                                <h3>Ticket details</h3>
                                <h3>Customer name</h3>
                                <h3>Date</h3>
                                <h3>Priority</h3>
                            </div>
                        </div>
                        <div className="users__main__wrapper">
                            {user}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Users
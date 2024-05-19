import React, { useEffect, useState } from 'react'
import "./Products.scss"

import DashboardHeader from '../../components/dashboard-header/DashboardHeader'
import axios from 'axios'
import Loading from '../../components/loading/Loading'
import { useSelector } from 'react-redux'

const API = "https://dummyjson.com/users"

const Products = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const mode = useSelector(state => state.mode.value)


    useEffect(() => {
        setLoading(true)
        axios
            .get(API)
            .then(res => setData(res.data.users))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    let user = data?.map(el => (
        <div key={el.id} className="products__item">
            <div className="products__item__owner__box">
                <div className="products__item__avatar">
                    {el.firstName.slice(0, 1)}
                    {el.lastName.slice(0, 1)}
                </div>
                <p>{el.firstName} {el.lastName}</p>
            </div>
            <p className="products__item__end__date">{el.birthDate}</p>
            <p className="products__item__profits">$779.58</p>
            <p className="products__item__losses">$779.58</p>
            <p className="products__item__phone">{el.phone}</p>
        </div>
    ))

    return (
        <>
            {loading && <Loading />}
            <section className={mode ? "dark__products" : ""} id="products">
                <DashboardHeader title={"Overview"} />
                <div className="products">
                    <div className="products__top">
                        <h3>Owner</h3>
                        <h3>End date</h3>
                        <h3>Profits</h3>
                        <h3>Losses</h3>
                        <h3>Phone</h3>
                    </div>
                    <div className="products__wrapper">
                        {user}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products
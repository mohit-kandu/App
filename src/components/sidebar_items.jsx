import React from 'react'

export default function SidebarItems({ liObj, active, setActive }) {
    return (

        liObj.map((item, index) => {
            return <li key={index}
                id={`sidebar-item${index}`}
                className={`sidebar-items d-flex cursor-pointer ${`sidebar-item${index}` === active ? 'sidebar-active-item' : ''}`}
                onClick={(e) => setActive(e.target.id)}
            >
                <img style={{ pointerEvents: "none" }} src={item.img} alt="menu" />
                <span style={{ pointerEvents: "none" }}>{item.text}</span>
            </li>
        })

    )
}

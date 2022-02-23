import React, { useState } from 'react'
import "./sidebar.css"
import home from "../images/home.png"
import section1 from "../images/section1.png"
import section2 from "../images/section2.png"
import section3 from "../images/section3.png"
import section4 from "../images/section4.png"
import section5 from "../images/section5.png"
import section6 from "../images/section6.png"
import section7 from "../images/section7.png"
import section8 from "../images/section8.png"
import docs from "../images/docs.png"
import collapse_sidebar from "../images/collapse_sidebar.png"
import SidebarItems from "./sidebar_items"
import language from "../images/Language.png"
import theme_changer from "../images/theme_changer.png"
import another_btn from "../images/another_btn.png"

const liObj = [
    {
        img: home,
        text: "Home"
    },
    {
        img: section1,
        text: "Section 1"
    },
    {
        img: section2,
        text: "Section 2"

    },
    {
        img: section3,
        text: "Section 3"

    },
    {
        img: section4,
        text: "Section 4"

    },
    {
        img: section5,
        text: "Section 5"

    },
    {
        img: section6,
        text: "Section 6"

    },
    {
        img: section7,
        text: "Section 7"

    },
    {
        img: section8,
        text: "Section 8"

    },
    {
        img: docs,
        text: "Documentation"

    },
]

export default function Sidebar() {
    const [active, setActive] = useState('')

    return (
        <div className="sidebar">
            <div>
                <div className="sidebar-header">
                    <div className='d-flex align-items-center'>
                        <p className='cursor-pointer'>N</p>
                        <div>
                            <h1>Name</h1>
                        </div>

                    </div>
                    <div className='collapse-sidebar'>
                        <img className='cursor-pointer' src={collapse_sidebar} alt="sidebar_collapse_button" />
                    </div>
                </div>
                <ul className='sidebar-items-container'>
                    <SidebarItems
                        liObj={liObj}
                        active={active}
                        setActive={setActive}
                    />
                </ul>
            </div>
            <div>
                <div className="sidebar_footer">
                    <div className=''>
                        <p className='blue-bg'>N</p>
                        <p>$0.90</p>
                    </div>
                    <div className='buy-xyz'>
                        <p>Buy $XYZ</p>
                    </div>
                </div>
                <div className='d-flex gap-3 mt-4' style={{ width: "80%", marginInline: "auto" }}>
                    <div>
                        <img className='cursor-pointer' src={language} alt="language_button" />
                    </div>
                    <div className="bg_light_black">
                        <span className='cursor-pointer'>
                            <img src={theme_changer} alt="theme_changer" />
                        </span>
                        <span className='cursor-pointer'>
                            <img src={another_btn} alt="another_button" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

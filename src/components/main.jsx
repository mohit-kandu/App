import React from 'react'
import "./main.css"
import Mainbody from './mainbody'
import MainSidebar from './mainSidebar'

export default function Main() {
    return (
        <main className="main">
            <div className="main_body">
                <Mainbody />
            </div>
            <div className="main_sidebar">
                <MainSidebar />
            </div>
        </main>
    )
}

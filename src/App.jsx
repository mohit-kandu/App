import React from 'react';
import Sidebar from "./components/sidebar"
import Main from "./components/main"
import "./app.css"


export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <Main />
    </div>
  )
}

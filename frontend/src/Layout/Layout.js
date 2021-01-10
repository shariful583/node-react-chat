import React from 'react';
import Header from "../components/Header";
import "./layout.css";

export default function Layout({ children }) {
    return (
        <div className="main">
            <Header/>
            {children}
        </div>
    )
}

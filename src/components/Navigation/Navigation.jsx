import React from 'react';
import './Navigation.css';

export default function Navigation() {
  return (
    <nav>
        <ul className="navbar">
            <li className="navbar__item">
                <div className="navbar__item__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="navbar__item__svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokelineCap="round" strokelinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                </div>
                <a href=''>Inbox</a>
            </li>
            <li className="navbar__item">
                <div className="navbar__item__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="navbar__item__svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokelineCap="round" strokelinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </div>
                <span>Contacts</span>
            </li>
            <li className="navbar__item">
                <div className="navbar__item__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="navbar__item__svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokelineCap="round" strokelinejoin="round" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                    </svg>
                </div>
                Files
            </li>
            <li className="navbar__item">
                <div className="navbar__item__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="navbar__item__svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokelineCap="round" strokelinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                </div>
                Tasks
            </li>
            <li className="navbar__item">
                <div className="navbar__item__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="navbar__item__svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokelineCap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                Times
            </li>
        </ul>
    </nav>
  )
}

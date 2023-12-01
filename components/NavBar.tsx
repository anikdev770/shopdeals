// components/NavBar.tsx
import React from 'react';
import '../src/app/globals.css';
import { MyLogo } from './logo';


const NavBar = () => {
  return (
    //responsive nav bar
    <header className="header header-event-banner">
      <div className="wrapper">
        <div className="header-event">
          <div className="header-in">
            <div className="logo">
              <a href="/" title="Home">
                < MyLogo />
              </a>
            </div>
            <div className="search">
              <form
                action="/"
                method="get"
                autoComplete="off"
                className="deal-search-form search-cta"
              >
                <button type="submit" className="cta subnavsearchbtn js-search-submit">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>

                </button>
                <input
                  id="txtSearch"
                  name="query"
                  type="text"
                  value=""
                  placeholder="Search Cobone"
                  className="keyword js-search-keyword"
                  autoComplete="off"
                />
              </form>

            </div>
            <div className="topnav">
              <ul>
                <li className="topnavs">
                  <a href="" className="cta">
                    <span className="badge-notify js-notification-badge"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-2 h-2 svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                    </svg>

                    <span className="label">Special Offers</span>
                  </a>
                </li>
                <li className="sep"></li>
                <li className="topnavs">
                  <a href="" className="cta">
                    <span className="badge-notify js-notification-badge"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>


                    <span className="label">My Account</span>
                  </a>
                </li>
                <li className="sep"></li>
                <li className="topnavs">
                  <a href="" className="cta">
                    <span className="badge-notify js-notification-badge"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    <span className="label">My Account</span>
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};


export default NavBar;

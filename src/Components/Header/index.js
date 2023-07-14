import React,{useState} from 'react';

import { Link } from 'react-router-dom';




import "./index.css";
import {  NavLink } from "react-router-dom";
const HeaderComponent = ()=>{


    
      const [menuOpen, setMenuOpen] = useState(false);

      return (
        <nav>
          <Link to="/" className="title">
          SKVMovies
          </Link>
          <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={menuOpen ? "open" : ""}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/series">Tv series</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
            <li>
              <NavLink to="/search">Search</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
          </ul>
        </nav>
      );
}

export default HeaderComponent;




import React from 'react';
import { useState } from 'react';
import Vector13 from '../layout/header/Vector13.png'
import Docs from '../layout/header/Docs.png'
import image from '../layout/header/image.png'
import dropdown from '../layout/header/dropdown.png'
import notification from '../layout/header/notification.png'
import './navbar.scss'

interface Props {
  userName: string;
}

const Navbar: React.FC<Props> = ({userName}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="header">
      <div className="header-container">
        <div className="search-bar">
          <input
            type="search"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search for anything"
          />
          <div className="img"><img src={Vector13} alt="icon"/></div>
        </div>
        </div>

        <div className='notification'>
        <div className="notifications">
          <img src={Docs}/>
        </div>
        <div className="notifications">
          <img src={notification}/>
        </div>
        <div className="notifications">
          <img src={image} alt="User Image" />
          <span>{userName}</span>
          <img src ={dropdown}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
import React from 'react';
import './widget.scss'

interface UserListProps {
    users: string;
    icon: string;
    count: string;
  }
const Widget: React.FC<UserListProps> = ({ users, icon, count }) => {
    return (
        <div className='widget'>
            <div className='left'>
            <img src={icon} alt="icon" /><br/>
            <span>{users}</span>
           <h2>{count}</h2>
         
         
        </div>
           
        </div>
        

    )
}
export default Widget;
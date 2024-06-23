import React, { useState } from 'react'
import './users.scss';
import Table from '../../components/layout/table/Table'
import money from '../../components/layout/header/money.png'
import ico from '../../components/layout/header/ico.png'
import npusers from '../../components/layout/header/npusers.png'
import users from '../../components/layout/header/users.png'
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/layout/sidebar/Sidebar';
import Widget from '../../components/layout/Widgets/Widget'
import { IconBase } from 'react-icons';
interface UserListProps {
    users: string;
    icon: string;
    count: string;
  }
const Home:React.FC = () =>{
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const handleSelect = (item: string) => {
      setSelectedItem(item);
    };
    return (
        <div className='home'>
            <Sidebar onSelect={handleSelect}/>
        <div className='container'>
            <Navbar userName="Adeyemi"/>
            <h2 className='
            users'>Users</h2>
            <div className='widgets'>
                <Widget icon={users} users="USERS" count="2,453"/>
                <Widget icon={npusers} users=" ACTIVE USERS" count="2,453"/>
                <Widget icon={ico} users="USERS WITH LOANS" count="12,453"/>
                <Widget icon={money} users="USERS WITH SAVING" count="102,453"/>
                </div>
           <div className='table'>
           {selectedItem === 'users' && <Table />}
           
            </div>
        </div>
        </div>
    )
}

export default Home
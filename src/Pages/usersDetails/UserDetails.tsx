import Table from '../../components/layout/table/Table'
import money from '../../components/layout/header/money.png'
import ico from '../../components/layout/header/ico.png'
import npusers from '../../components/layout/header/npusers.png'
import users from '../../components/layout/header/users.png'
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/layout/sidebar/Sidebar';
import Widget from '../../components/layout/Widgets/Widget'
import btn from '../../components/layout/header/btn.png'
import Vector17 from '../../components/layout/header/Vector17.png'
import tier from '../../components/layout/header/tier.png'
import btns from '../../components/layout/header/btns.png'
import backbtn from '../../components/layout/header/backbtn.png'
import './user-details.scss'
import React, { useState } from 'react';
interface UserListProps {
    users: string;
    icon: string;
    count: string;
}
const UsersDetails = () => {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const handleSelect = (item: string) => {
      setSelectedItem(item);
    };
    return (
        <div className='home'>
            <Sidebar onSelect={handleSelect} />
            <div className='container'>
                <Navbar userName="Adeyemi" />
                <div className='back'>
                    <img src={backbtn} />
                </div>
                <div className='details'>
                    <h2 className='users'>Users Details</h2>
                    <div className='blacklist'>
                        <img src={btn} />
                        <img src={btns} />
                    </div>
                </div>
                <div className='atable'>
                <div className='table'>

                    <div className='tabl'>
                        <img src={Vector17} alt="icon" />
                
                    </div>

                    <div className='Grace'>
                        <h2>Grace Effiom</h2>
                        <span>LSRFf587g970</span>
                    </div>
                    <div className='tier'>
                        <img src={tier} alt="tier" />
                    </div>
                    <div className='amount'>
                        <h4>#200,000.00</h4>
                        <span>9912345678/providus Bank</span>
                    </div>
                    </div>

                    
                
                <div className='list'>
                <ul>
                        <li>General Details</li>
                        <li>Documents</li>
                        <li>Bank Details</li>
                        <li>Loans</li>
                        <li>Savings</li>
                        <li>App and System</li>
                    </ul>
             </div>
            </div>
            <div className='container'>
                <div className='personal'>
                    <div className='personalinfo'>
                    <h2>Personal Information</h2>
                    <div className='personalname'>
                     <div className='name'>
                        <div>
                    <label>FULL NAME</label>
                    <h3>Grace Effiom</h3>
                    </div>
                    <div>
                    <label>MARITAL STATUS</label>
                    <h3>single</h3>
                    </div>
                    </div>
                    <div className='name'>
                        <div>
                    <label>PHONE NUMBER</label>
                    <h3>070645467</h3>
                    </div>
                    <div>
                    <label>CHILDREN</label>
                    <h3>None</h3>
                    </div>
                    </div>
                    <div className='name'>
                    <div>
                    <label>EMAIL</label>
                    <h3>grace@gmail.com</h3>
                   </div>
                   <div>
                   <label>TYPE OF RESIDENCE</label>
                   <h3>Parent's Apartment</h3>
                   </div>
                    </div>
                    <div>
                    <label>BVN</label>
                    <h3>070645467</h3>
                    </div>
                    <div>
                    <label>GENDER</label>
                    <h3>Female</h3>
                    </div>
                    
                    </div>
                    </div>
                    <div className='personalinfo'>
                    <h2>Education and Employment</h2>
                    <div className='personalname'>
                     <div className='name'>
                        <div>
                    <label>LEVEL OF EDUCATION</label>
                    <h3>B.Sc</h3>
                    </div>
                    <div>
                    <label>OFICE EMAIL</label>
                    <h3>grace@lendsqr.com</h3>
                    </div>
                    </div>
                    <div className='name'>
                        <div>
                    <label>EMPLOYMENT STATUS</label>
                    <h3>Employed</h3>
                    </div>
                    <div>
                    <label>MONTHLY INCOME</label>
                    <h3>#200,000.00-#400,000.00</h3>
                    </div>
                    </div>
                    <div className='name'>
                    <div>
                    <label>SECTOR OF EMPLOYMENT</label>
                    <h3>Fintech</h3>
                   </div>
                   <div>
                   <label>LOAN REPAYMENT</label>
                   <h3>40,000</h3>
                   </div>
                    </div>
                    <div>
                    <label>DURATION OF EMPLOYMENT</label>
                    <h3>2 years</h3>
                    </div>
                    
                    </div>
                    </div>
                    <div className='personalinfo'>
                    <h2>Socials</h2>
                    <div className='personalnames'>
                        <div>
                    <label>TWITTER</label>
                    <h3>@grace_Effiom</h3>
                    
                    </div>
                   
                        <div>
                    <label>FACEBOOK</label>
                    <h3>Grace EFfiom</h3>
                    </div>
                    
                    
                    <div>
                    <label>INSTAGRAM</label>
                    <h3>@grace_Effiom</h3>
                   </div>
                    
                    
                    </div>
                    </div>
                    <div className='personalinfo'>
                    <h2>Guarantor</h2>
                    <div className='personalnames'>
                        <div>
                    <label>FULL NAME</label>
                    <h3>Debby Ogana</h3>
                    
                    </div>
                   
                        <div>
                    <label>PHONE NUMBER</label>
                    <h3>07060780922</h3>
                    </div>
                    
                    
                    <div>
                    <label>EMAIL ADDRESS</label>
                    <h3>debby@gmail.com</h3>
                   </div>

                   <div>
                    <label>RELATIONSHIP</label>
                    <h3>Sister</h3>
                   </div>
                    
                    
                    </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
        
       </div>
    
       

    )
}

export default UsersDetails
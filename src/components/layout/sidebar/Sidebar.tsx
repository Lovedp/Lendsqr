import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RoutesPaths from '../../../utils/routesPaths';
import './sidebar.scss';
import Lendsqr from '../header/Lendsqr.png';
import Union from '../header/Union.png';
import Vect from '../header/Vect.png';
import Friends from '../header/Friends.png';
import Homes from '../header/Homes.png';
import Np from '../header/Np.png';
import Group from '../header/Group.png';
import Group104 from '../header/Group104.png';
import Briefcase from '../header/Briefcase.png';
import Sack from '../header/sack.png';
import chart_bar from '../header/chart_bar.png';
import np_bank from '../header/np_bank.png';
import clipboard from '../header/clipboard.png';
import badge from '../header/badge.png';
import Vec from '../header/Vec.png';
import Vector18 from '../header/Vector18.png'
import Vector12 from '../header/Vector12.png';
import Vector7 from '../header/Vector7.png';
import Vector10 from '../header/Vector10.png';
import user_cog from '../header/user_cog.png';
import icon from '../header/icon.png';
import galaxy from '../header/galaxy.png';
import coins_solid from '../header/coins_solid.png';
import Vector from '../header/Vector.png';
import Vector11 from '../header/Vector11.png';
import footer from '../header/footer.png'
import Vector8 from '../header/Vector8.png';
import Handshake from '../header/Handshake.png';
import Borrowers from '../header/Borrowers.png';

interface SidebarProps {
  onSelect: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`} data-testid="sidebar">
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>
      <div className='top'>
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
        <img src={Union} alt="Company Logo" />
        <img src={Lendsqr} alt="Company Logo" />
      </div>
      
      <div className='center'>
        <ul>
          <li>
            <div className="switch-organization">
              <img src={Vector} alt="Logo 1" />
              <Link to="#">
                Switch Organization
              </Link>
              <img src={Np} alt="Logo 2" />
            </div>
          </li>
          <li>
            <div className='dashboards'>
              <img src={Homes} alt="Logo 3" />
              <Link to={RoutesPaths.dashboard}> Dashboard</Link>
            </div>
          </li>
          <li>
            <span>CUSTOMERS</span>
            <ul className="sub-menu">
              <li onClick={() => onSelect('users')}>
                <div className='users'>
                  <img src={Friends} alt="Logo 3" />
                  <Link to="" className="users">
                    Users
                  </Link>
                </div>
              </li>
              <li>
                <div className='guarantors'>
                  <img src={Vect} alt="Logo 4" />
                  <Link to="#" className="guarantors">
                    Guarantors
                  </Link>
                </div>
              </li>
              <li>
                <div className='loans'>
                  <img src={Sack} alt="Logo 4" />
                  <Link to="#" className="loans">
                    Loans
                  </Link>
                </div>
              </li>
              <li>
                <div className='decissions'>
                  <img src={Handshake} alt="Logo 5" />
                  <Link to="#" className="loans">
                    Decision Models
                  </Link>
                </div>
              </li>
              <li>
                <div className='loans'>
                  <img src={Borrowers} alt="Logo 4" />
                  <Link to="#" className="loans">
                    Savings
                  </Link>
                </div>
              </li>
              <li>
                <div className='loans'>
                  <img src={Group} alt="Logo 4" />
                  <Link to="#" className="loans">
                    Loans Request
                  </Link>
                </div>
              </li>
              <li>
                <div className='loans'>
                  <img src={Vector7} alt="Logo 4" />
                  <img src={Vector10} alt="Logo 4" />
                  <Link to="#" className="loans">
                    Whitelist
                  </Link>
                </div>
              </li>
              <li>
                <div className='karma'>
                  <img src={Vector8} alt="Logo 4" />
                  <img src={Vector11} alt="Logo 4" />
                  <Link to="#" className="loans">
                    Karma
                  </Link>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <span>BUSINESSES</span>
            <ul className="sub-menu">
              <li>
                <div className='users'>
                  <img src={Briefcase} alt="Logo 3" />
                  <Link to="#" className="users">
                    Organizations
                  </Link>
                </div>
              </li>
              <li>
                <div className='guarantors'>
                  <img src={Group104} alt="Logo 4" />
                  <Link to="#" className="guarantors">
                    Loan Products
                  </Link>
                </div>
              </li>
              <li>
                <div className='loans'>
                  <img src={np_bank} alt="Logo 4" />
                  <Link to="#" className="loans">
                    Saving Products
                  </Link>
                </div>
              </li>
              <li>
                <div className='decissions'>
                  <img src={coins_solid} alt="Logo 5" />
                  <Link to="#" className="loans">
                    Fees and Charges
                  </Link>
                </div>
              </li>
              <li>
                <div className='loans'>
                  <img src={icon} alt="Logo 4" />
                  <Link to="#" className="loans">
                    Transactions
                  </Link>
                </div>
              </li>
              <li>
                <div className='loans'>
                  <img src={galaxy} alt="Logo 4" />
                  <Link to="#" className="loans">
                    Service
                  </Link>
                </div>
              </li>
              <li>
                <div className='loans'>
                  <img src={user_cog} alt="Logo 4" />
                  <Link to="#" className="loans">
                    Service Account
                  </Link>
                </div>
              </li>
              <li>
                <div className='loans'>
                  <img src={Vector12} alt="Logo 4" />
                  <Link to="#" className="loans">
                    Settlements
                  </Link>
                </div>
              </li>
              <li>
                <div className='loans'>
                  <img src={chart_bar} alt="Logo 4" />
                  <Link to="#" className="loans">
                    Report
                  </Link>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <span>SETTINGS</span>
            <ul className="sub-menu">
              <li>
                <div className='loans'>
                  <img src={Vec} alt="Logo 4" />
                  <Link to="#" className="loans">
                    Preferences
                  </Link>
                </div>
              </li>
              <li>
                <div className='loans'>
                  <img src={badge} alt="Logo 4" />
                  <Link to="#" className="loans">
                    Fees and Pricing
                  </Link>
                </div>
              </li>
              <li>
                <div className='loans'>
                  <img src={clipboard} alt="Logo 4" />
                  <Link to="#" className="loans">
                    Audit Logs
                  </Link>
                </div>
              </li>
              <li>
                <div className='loans'>
                  <img src={Vector18} alt="Logo 4" />
                  <Link to="#" className="loans">
                    System Messages
                  </Link>
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <div className='footer'>
          <img src={footer} alt='footer'/>
        </div>
      </div>
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default Sidebar;

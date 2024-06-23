import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './table.scss';
import delet from '../header/delet.png';
import nps from '../header/nps.png';
import view from '../header/view.png';
import filter from './filter.png';
import Pagination from '../../paginations/Pagination';
import Vector14 from '../header/Vector14.png';
import data from '../../../../src/Pages/data.json';

interface User {
  id: string;
  organization: string;
  name: string;
  email: string;
  phone: string;
  dateregistered: string;
  status: string;
}

const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [showFilterForm, setShowFilterForm] = useState(false);
  const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const toggleFilterForm = () => {
    setShowFilterForm(!showFilterForm);
  };

  const toggleDropdown = (index: number) => {
    setDropdownIndex(dropdownIndex === index ? null : index);
  };

  const resetFilters = () => {
    // Reset filter logic here
  };

  const applyFilters = () => {
    // Apply filter logic here
  };

  return (
    <div className='table-container'>
      <table className='tab'>
        <thead>
          <tr>
            <th>ORGANISATION <img src={filter} alt="filter" onClick={toggleFilterForm} /></th>
            <th>USERNAME <img src={filter} alt="filter" onClick={toggleFilterForm} /></th>
            <th>EMAIL <img src={filter} alt="filter" /></th>
            <th>PHONE NUMBER <img src={filter} alt="filter" /></th>
            <th>DATE JOINED <img src={filter} alt="filter" /></th>
            <th>STATUS <img src={filter} alt="filter" /></th>
          </tr>
          {showFilterForm && (
            <tr>
              <td className="filter-form" colSpan={6}>
                <form>
                  <div>
                    <label>Organisation</label>
                    <input type="text" name="organization" />
                  </div>
                  <div>
                    <label>Username</label>
                    <input type="text" name="username" />
                  </div>
                  <div>
                    <label>Email</label>
                    <input type="text" name="email" />
                  </div>
                  <div>
                    <label>Phone</label>
                    <input type="text" name="phone" />
                  </div>
                  <div>
                    <label>Date Joined</label>
                    <input type="date" name="dateJoined" />
                  </div>
                  <div>
                    <label>Status</label>
                    <select name="status">
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                      <option value="pending">Pending</option>
                      <option value="banned">Blacklisted</option>
                    </select>
                  </div>
                  <div className="form-buttons">
                    <button type="button" onClick={resetFilters}>Reset</button>
                    <button type="button" onClick={applyFilters}>Filter</button>
                  </div>
                </form>
              </td>
            </tr>
          )}
        </thead>
        <tbody>
          {currentPosts.map((user, index) => (
            <tr key={user.id}>
              <td>{user.organization}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.dateregistered}</td>
              <td><span className={`status ${user.status}`}>{user.status}</span></td>
              <td><img src={Vector14} alt="action" onClick={() => toggleDropdown(index)} />
                {dropdownIndex === index && (
                  <div className="dropdown-menu">
                    <ul>
                      <li>
                        <Link to={`/user/${user.id}`}>
                          <img src={view} alt="View" />
                          View Details
                        </Link>
                      </li>
                      <li><Link to={`/user/${user.id}`}><img src={delet} alt="Blacklist" />Blacklist User </Link></li>
                      <li><img src={nps} alt="Activate" />Activate User</li>
                    </ul>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination postPerPage={postsPerPage} totalPosts={data.length} paginate={paginate} />
    </div>
  );
};

export default Table;

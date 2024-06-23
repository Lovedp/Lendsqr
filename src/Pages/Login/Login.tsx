import React, { useState } from 'react';
import './login.scss'
import Union from '../../components/layout/header/Union.png'
import Lendsqr from '../../components/layout/header/Lendsqr.png'
import Forgot from '../../components/layout/header/Forgot.png'
import Primary from '../../components/layout/header/Primary.png'
import pablo from '../../components/layout/header/pablo.svg'
import Enter from '../../components/layout/header/Enter.png'
import Welcome from '../../components/layout/header/Welcome.png'
interface LoginFormState {
  username: string;
  password: string;
  
}

const Login: React.FC = () => {

  return (
    
        <form >
            <div className='form'>
              
            <div className='image'>
              < div className='logo'>
              <img src={Union} alt="Company Logo" />
                <img src={Lendsqr} alt="Lendsqr"/>
              </div>
                 <div className='pablo'>
                 <img src={pablo}/>
                </div>
            </div>
            <div className='text'>
            <img src={Welcome}/>
            <img src={Enter}/>
            
            <input
              type="text"
              id="username"
              name="username"
              placeholder='Email'
            />
          
          
            <input
              type="password"
              placeholder='Password'
              
            />
            <a ><img src={Forgot}/></a>
          
         <img src={Primary}/>
          </div>
          </div>
        </form>
        )
        };
export default Login;
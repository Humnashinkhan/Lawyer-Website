import React, { useState } from 'react'
import './Home.css'
import{ useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Home = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [licenseNo, setLicenseNo] = useState('');
    
    const [isLogin, setIsLogin] = useState(false);
    const [isLawyer, setIsLawyer] = useState(false);
     const [registeredUsers, setRegisteredUsers] = useState([]);
     const navigate = useNavigate();

    const handleRegister = (event) => {
      event.preventDefault();

      if (!name || !email || !password || !confirmPassword || !phoneNumber) {
        alert('Please fill in all required fields.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }
    const userType = isLawyer ? 'lawyer' : 'client';
    const newUser = { name, email, password, userType };
    setRegisteredUsers([...registeredUsers, newUser]);
    setIsLogin(true);
  };
  const handleLogin = (event) => {
    event.preventDefault();
    const user = registeredUsers.find(user => user.email === email && user.password === password);

    if (user) {
        // Redirect based on user type
        if (user.userType === 'lawyer') {
            navigate('/LawyerDashboard');
        } else {
            navigate('/Clientdash');
        }
    } else {
        alert('Invalid credentials');
    }
    };



    
    
  return (
    <>
    <div className='Home'>
        <div className='home_section'>
            <h1>Create A DigiLaw Account</h1>
            <p>Maximize Productivity, Minimize Hassle </p>
            <div className="box">
            <div className="toggle-container">
            <button 
                                className={`toggle-btn ${!isLogin ? 'active' : ''}`}
                                onClick={() => setIsLogin(false)}
                            >
                                Register
                            </button>
                            <button 
                                className={`toggle-btn ${isLogin ? 'active' : ''}`}
                                onClick={() => setIsLogin(true)}
                            >
                                Login
                            </button>     
                        </div>
                <div className="form-container">
                   {!isLogin ? (
                  <div className="signup">
                    <form onSubmit={handleRegister}>
                    <div className="checkbox-group">
                          <label>
                                 <input 
                                     type="checkbox" 
                                     checked={isLawyer} 
                                     onChange={() => setIsLawyer(!isLawyer)} />
                                         I am a Lawyer
                                        </label>
                           <label>
                                     <input 
                                        type="checkbox" 
                                        checked={!isLawyer} 
                                        onChange={() => setIsLawyer(!isLawyer)}/>
                                            I am a Client
                                </label>
                        </div>
                    <div className="input-group">
                    <label>
                      Full Name<span className="required-symbol">*</span>
                      </label>
                    <input type="text" onChange={(event)=>setName(event.target.value)}
                         placeholder="Your Name" name="value" className="inp"/>

                    </div>
                    <div className="input-group">
                    <label>
                      Email<span className="required-symbol">*</span>
                      </label>
                        <input type="email"  onChange={(event) => setEmail(event.target.value)} placeholder="Your Email" name="" className="inp"></input>
                    </div>
                    <div className="input-group">
                     <label>
                      Set Password<span className="required-symbol">*</span>
                      </label>
                        <input type="password"   onChange={(event) => setPassword(event.target.value)} placeholder="Set Your Password" name="" className="inp"></input>
                    </div>
                    <div className="input-group">
                    <label>
                      Confirm Password<span className="required-symbol">*</span>
                      </label>
                        <input type="password"  onChange={(event) => setConfirmPassword(event.target.value)} placeholder="Confirm Password" name="" className="inp"></input>
                    </div>
                    {isLawyer && (
                      <div className="input-group">
                         <label>
                         License-No<span className="required-symbol">*</span>
                      </label>
                        <input type="number"onChange={(event) => setLicenseNo(event.target.value)} placeholder="Your license-No" name="" className="inp"></input>
                      </div>
                    )}

                    <div className="input-group">
                    <label>
                     Phone Number<span className="required-symbol">*</span>
                      </label>
                        <input type="number"onChange={(event) => setPhoneNumber(event.target.value)} placeholder="Number" name="" className="inp"></input>
                    </div>
                    <div className="input-group">
                        <input type="submit" name="" className="inp submit-inp"></input>
                    </div>
                    </form>
                    </div>
                    ) : (

                    <div className="login">
                    <form onSubmit={handleLogin}> 
                    <div className="input-group">
                        <span>E-mail</span>
                        <input type="email" onChange={(event) => setEmail(event.target.value)} placeholder="Your Email" name="" className="inp"></input>
                    </div>
                    <div className="input-group">
                        <span>Password</span>
                        <input type="password" onChange={(event) => setPassword(event.target.value)} placeholder="Enter Password" name="" className="inp"></input>
                    </div>
                    <div className="input-group">
                        <input type="submit" value="Login" name="" className="inp submit-inp"></input>
                    </div>
                    </form>
                    <div className="bottom-section">
                    <Link to='/#' className="forgot-password-link">Forget your Password?</Link>
                 </div>
              </div>
             )}

             </div>
            </div>
       
        </div>
        </div>

    </>
  )
}

export default Home
import React, { useState } from 'react'
import './Profile.css'
const Profile = () => {
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
      fullName: 'Humnashin Khan',
      email: 'humnashin9955@gmail.com',
      phoneNumber: '7261895853',
      licenseNumber: 'AB123456',
      address: 'Ak golden, Khap, Cherki, Gaya, Bihar, India'
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setProfile(prevProfile => ({
        ...prevProfile,
        [name]: value
      }));
    };
  
    const handleProfilePhotoChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setProfilePhoto(URL.createObjectURL(file));
      }
    };
  
    const handleEditToggle = () => {
      setIsEditing(!isEditing);
    };
  
    const handleProfilePhotoRemove = () => {
      setProfilePhoto(null);
    };
  
    return (
      <div className="profile-container">
        <h2>Personal details</h2>
        <div className="profile-photo-section">
          <img src={profilePhoto || 'default-profile.png'} alt="Profile" className="profile-photo" />
          <input type="file" accept="image/*" onChange={handleProfilePhotoChange} />
          {profilePhoto && <button className="Butn" onClick={handleProfilePhotoRemove}>Remove Photo</button>}
        </div>
        <div className="profile-details">
          {isEditing ? (
            <>
              <div className="profile-field">
                <label>Full Name</label>
                <input type="text" name="fullName" value={profile.fullName} onChange={handleInputChange} />
              </div>
              <div className="profile-field">
                <label>Email</label>
                <input type="email" name="email" value={profile.email} onChange={handleInputChange} />
              </div>
              <div className="profile-field">
                <label>Phone Number</label>
                <input type="text" name="phoneNumber" value={profile.phoneNumber} onChange={handleInputChange} />
              </div>
              <div className="profile-field">
                <label>License Number</label>
                <input type="text" name="licenseNumber" value={profile.licenseNumber} onChange={handleInputChange} />
              </div>
              <div className="profile-field">
                <label>Address</label>
                <input type="text" name="address" value={profile.address} onChange={handleInputChange} />
              </div>
              <button className="Butn" onClick={handleEditToggle}>Save</button>
            </>
          ) : (
            <>
              <div className="profile-field">
                <label>Full Name</label>
                <p>{profile.fullName}</p>
              </div>
              <div className="profile-field">
                <label>Email</label>
                <p>{profile.email}</p>
              </div>
              <div className="profile-field">
                <label>Phone Number</label>
                <p>{profile.phoneNumber}</p>
              </div>
              <div className="profile-field">
                <label>License Number</label>
                <p>{profile.licenseNumber}</p>
              </div>
              <div className="profile-field">
                <label>Address</label>
                <p>{profile.address}</p>
              </div>
              <button className="Butn" onClick={handleEditToggle}>Edit</button>
            </>
          )}
        </div>
      </div>
    );
  };
  
  export default Profile;
  

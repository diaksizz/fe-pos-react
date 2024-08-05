import React, {useState} from 'react';
import './profile.css';
import NavbarComponent from './NavbarComponent';
import SubNavbarComponent from './SubNavbarComponent';
import SidebarComponent from './SidebarComponent';
import ContentComponent from './ContentComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('edit-profile');
  const [isStoreSection, setIsStoreSection] = useState(false);

  // Fungsi untuk menangani perubahan tab yang dipilih
  const handleTabChange = (tabId, isStore = false) => {
    setActiveTab(tabId);
    setIsStoreSection(isStore);
  };

  return (
    <div>
      <NavbarComponent />
      <SubNavbarComponent />
      <div className="row mt-5 mx-4">
        <div className="col-md-3">
          <SidebarComponent activeTab={activeTab} handleTabChange={handleTabChange} />
        </div>
        <div className="col-md-9">
          <ContentComponent activeTab={activeTab} isStoreSection={isStoreSection} handleTabChange={handleTabChange}/>
        </div>
      </div>
    </div>
  );
};

export default Profile;
